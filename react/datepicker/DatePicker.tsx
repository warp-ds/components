import type React from "react";
import {
	type RefObject,
	useCallback,
	useEffect,
	useReducer,
	useRef,
	useId,
} from "react";

import { nb } from "date-fns/locale";

import {
	DatePickerContext,
	IDLE,
	INTERACTING_START_DATE,
} from "./DatePickerContext.js";
import type { DatePickerState, Event } from "./DatePickerContextProps.js";
import type { DatePickerProps } from "./DatePickerProps.js";
import defaultPhrases from "./utils/defaultPhrases.js";

export const DatePicker = ({
	children,
	date = null,
	locale = nb,
	isDayDisabled = () => false,
	onChange,
	phrases = defaultPhrases,
	displayFormat = "P",
	monthFormat = "MMMM yyyy",
	weekDayFormat = "EEEEEE",
	dayAriaLabelFormat = "PPPP",
}: DatePickerProps) => {
	const datepickerId = useId();
	const navigationDayRef = useRef<HTMLTableCellElement>(null);
	const startInputRef = useRef<HTMLInputElement>(null);
	const endInputRef = useRef();
	const popoverRef = useRef();

	const [{ state, lastEventType }, dispatch] = useReducer(datePickerReducer, {
		state: "IDLE",
	});

	useFocusManagement(lastEventType, startInputRef, navigationDayRef);

	const handleClear = useCallback(() => {
		onChange(null);
	}, [onChange]);

	const handleChange = useCallback(
		(
			day: Date,
			event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent,
		) => {
			onChange(day);
			if (event.type === "keydown") {
				dispatch({ type: "SELECT_WITH_KEYBOARD", day });
			} else {
				dispatch({ type: "SELECT_WITH_CLICK", day });
			}
		},
		[onChange, dispatch],
	);

	return (
		<DatePickerContext.Provider
			value={{
				datepickerId,
				dispatch,
				startInputRef,
				endInputRef,
				popoverRef,
				navigationDayRef,
				isDayDisabled,
				isDateRange: false,
				state: state,
				locale,
				startDate: date,
				endDate: null,
				phrases,
				displayFormat,
				weekDayFormat,
				monthFormat,
				dayAriaLabelFormat,
				onClear: handleClear,
				onChange: handleChange,
			}}
		>
			{children}
		</DatePickerContext.Provider>
	);
};

type ReducerState = { state: DatePickerState; lastEventType?: Event };

function datePickerReducer(
	reducerState: ReducerState,
	event: Event,
): ReducerState {
	const lastEventType = reducerState.lastEventType?.type;

	let stateTransition: DatePickerState;

	switch (event.type) {
		case "FOCUS":
			// Don't reopen the popover when we refocus the input field after closing the popover because of a keyboard interaction
			if (
				lastEventType === "ESCAPE" ||
				lastEventType === "SELECT_WITH_KEYBOARD"
			) {
				stateTransition = reducerState.state;
			} else {
				stateTransition = INTERACTING_START_DATE;
			}
			break;

		// Close the popover
		case "BLUR":
		case "ESCAPE":
		case "SELECT_WITH_CLICK":
		case "SELECT_WITH_KEYBOARD":
			stateTransition = IDLE;
			break;

		// Make sure we're interacting
		case "NAVIGATE_FROM_INPUT": {
			stateTransition = INTERACTING_START_DATE;
			break;
		}
	}
	return {
		state: stateTransition,
		lastEventType: event,
	};
}

/**
 * Focus handling for the datepicker.
 *
 * When the popover closes we should move focus back to the input.
 * Note that we don't do this when click the date using a mouse.
 * This is because if we want to open the popover again, we have to click
 * outside of the input, then click it again for it receive focus and show the popover
 *
 * We also move focus to the focusable date when moving from the input.
 */
function useFocusManagement(
	lastEvent: Event | undefined,
	inputRef: RefObject<HTMLInputElement>,
	navigationDayRef: RefObject<HTMLTableCellElement>,
) {
	const lastEventType = lastEvent?.type;

	useEffect(() => {
		if (
			lastEventType === "ESCAPE" ||
			lastEventType === "SELECT_WITH_KEYBOARD"
		) {
			inputRef.current?.focus();
		}
	}, [lastEventType, inputRef]);

	useEffect(() => {
		if (lastEventType === "NAVIGATE_FROM_INPUT") {
			// need to do this in a setTimeout to be sure that the popover is open and the ref is set
			setTimeout(() => {
				navigationDayRef.current?.focus();
			});
		}
	}, [lastEventType, navigationDayRef]);
}
