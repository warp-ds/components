import {
	type ChangeEvent,
	type KeyboardEvent,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react";

import type { Locale } from "date-fns";
import { format, isValid, parse } from "date-fns";

import { DatePickerContext, IDLE } from "./DatePickerContext.js";
import type { DatePickerInputProps } from "./DatePickerInputProps.js";
import { useLayoutEffect } from "./utils/useLayoutEffect.js";
import { wrapEvent } from "./utils/warpEvent.ts";

/**
 * DatePickerInput
 * Rembember to set `dateField` if used with `DateRangePicker`.
 */
export const DatePickerInput = (props: DatePickerInputProps) => {
	const {
		as: Comp = "input",
		dateField,
		onBlur,
		onChange,
		onFocus,
		onKeyDown,
		value: controlledValue,
		...rest
	} = props;

	const {
		datepickerId,
		dispatch,
		isDayDisabled,
		state: datepickerState,
		startInputRef,
		endInputRef,
		startDate,
		endDate,
		locale,
		displayFormat,
		onClear,
		onChange: onDateChange,
	} = useContext(DatePickerContext);

	// TODO: Add warning if dateField isn't supplied and we're rendering a date range picker
	const isStartDate = dateField !== "endDate";

	const selectedDate = isStartDate ? startDate : endDate;

	const ref = isStartDate ? startInputRef : endInputRef;

	// We use this flag to track whether we want to synchronize the input's value with the selected date.
	// This is necessary because when we manually edit the input field and the value is not parsable as a date,
	// the selected date should be cleared, but we would still like to retain invalid date value in the input field
	// because it could be that the invalid date value is just temporary, we're working towards a valid one
	const skipInputValueSync = useRef(false);

	const valueParser = useValueParser(displayFormat, locale);

	// We need to partially control the input, because we want to support editing the input field to select dates.
	// If the input field is controlled, we never show this inputValue, but we will still try to parse any changes
	// into dates
	const [inputValue, setInputValue] = useState("");
	// we're okay with the empty string init because of the useLayoutEffect which syncs the selectedDate
	useLayoutEffect(() => {
		if (selectedDate) {
			setInputValue(format(selectedDate, displayFormat, { locale }));
		} else if (!skipInputValueSync.current) {
			setInputValue("");
		}
		skipInputValueSync.current = false;
	}, [selectedDate, displayFormat, locale]);

	function handleFocus() {
		dispatch({
			type: "FOCUS",
			input: isStartDate ? startInputRef : endInputRef,
		});
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		setInputValue(value);
		const maybeDate = valueParser(value);
		if (selectedDate !== maybeDate) {
			if (maybeDate == null) {
				skipInputValueSync.current = true;
				onClear();
			} else if (!isDayDisabled(maybeDate)) {
				onDateChange(maybeDate, event);
			}
		}
	}

	function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Escape" || e.key === "Esc") {
			dispatch({ type: "ESCAPE" });
		} else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			// prevent scrolling
			e.preventDefault();
			dispatch({
				type: "NAVIGATE_FROM_INPUT",
				input: isStartDate ? startInputRef : endInputRef,
			});
		}
	}

	return (
		<Comp
		// @ts-ignore
			{...rest}
			aria-haspopup="grid"
			aria-controls={datepickerState !== IDLE ? datepickerId : undefined}
			autoComplete="off"
			//onBlur={wrapEvent(onBlur, handleBlur)}
			onChange={wrapEvent(onChange, handleChange)}
			onFocus={wrapEvent(onFocus, handleFocus)}
			onKeyDown={wrapEvent(onKeyDown, handleKeyDown)}
			value={controlledValue ?? inputValue}
			ref={ref}
		/>
	);
};

/**
 * The parse function from date-fns requires a reference date to pull values from when parsing.
 * We don't really want that, as it is too easy to create wack dates just by removing a single character from the input.
 *
 * So what we do is that we format a date in the given locale to get it's length, then we use the length to compare the strings
 * before we use the date parser. This is based on the assumption that the date format length is stable, eg '31/12/2020', not '31st of December 20202'
 *
 */
function useValueParser(
	displayFormat: string,
	locale: Locale,
): (dateString: string) => Date | null {
	// Figure out the length of the string
	const dateStringLength = useMemo(() => {
		return format(new Date(), displayFormat, { locale }).length;
	}, [displayFormat, locale]);

	const parser = (dateString: string): Date | null => {
		try {
			if (dateString.length !== dateStringLength) return null;

			const maybeDate = parse(dateString, displayFormat, new Date(), {
				locale,
			});

			return isValid(maybeDate) ? maybeDate : null;
		} catch {
			return null;
		}
	};

	return parser;
}
