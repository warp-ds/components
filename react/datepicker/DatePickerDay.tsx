import { type KeyboardEvent, type MouseEvent, useContext } from "react";

import style from "inline:./styles/w-datepicker-day.css";
import {
	format,
	getDate,
	isSameDay,
	isSameMonth,
	isToday,
	isWithinInterval,
} from "date-fns";

import { DatePickerContext } from "./DatePickerContext.js";
import type { DatePickerContextProps } from "./DatePickerContextProps.js";
import type { DatePickerDayProps } from "./DatePickerDayProps.js";

export const DatePickerDay = ({
	month,
	day,
	navigationDate,
}: DatePickerDayProps) => {
	const {
		locale,
		isDayDisabled,
		isDateRange,
		startDate,
		endDate,
		phrases,
		navigationDayRef,
		dayAriaLabelFormat,
		onChange,
	} = useContext(DatePickerContext);

	const isDisabled = isDayDisabled(day);

	const isSelected = isStartOrEndDate(day, startDate, endDate);

	const handleSelect = (event: MouseEvent | KeyboardEvent) => {
		if (isDisabled) return;

		// For key events we want to select on Enter and Space
		if ("key" in event) {
			if (event.key === "Enter" || event.key === " ") {
				// Prevents whitespace from being added to the input field
				event.preventDefault();
				onChange(day, event);
			}
		} else {
			onChange(day, event);
		}
	};

	const ariaLabel = dayAriaLabel({
		day,
		startDate,
		endDate,
		phrases,
		locale,
		isDateRange,
		dayAriaLabelFormat,
		isSelected,
		isDisabled,
	});

	const dayInRange =
		isDateRange && isDayInSelectionRange(day, startDate, endDate);

	const isNavigationDate = day === navigationDate;

	// Render empty cell if the day is outside of the month
	if (!isSameMonth(month, day)) return <td />;

	return (
		<>
			<style href="DatePickerDay" precedence="medium">
				{style}
			</style>
			<td
				aria-current={isToday(day) ? "date" : undefined}
				aria-disabled={isDisabled}
				aria-label={ariaLabel}
				aria-selected={isSelected}
				className={`w-datepicker__day
        ${dayInRange ? "w-datepicker__day--in-range" : ""}
        ${isSelected ? "w-datepicker__day--selected" : ""}
        ${isDisabled ? "w-datepicker__day--disabled" : ""}
        ${isToday(day) ? "w-datepicker__day--today" : ""}
        ${isNavigationDate ? "w-datepicker__day--navigation" : ""}
        ${isDateRange && day?.toDateString() === startDate?.toDateString() && endDate ? "w-datepicker__day--start" : ""}
        ${isDateRange && day?.toDateString() === endDate?.toDateString() && startDate ? "w-datepicker__day--end" : ""}
      `}
				onClick={handleSelect}
				onKeyDown={handleSelect}
				ref={isNavigationDate ? navigationDayRef : undefined}
				tabIndex={isNavigationDate ? 0 : -1}
			>
				<div>{getDate(day)}</div>
			</td>
		</>
	);
};

function dayAriaLabel({
	day,
	startDate,
	endDate,
	phrases,
	locale,
	isDateRange,
	dayAriaLabelFormat,
	isDisabled,
	isSelected,
}: Pick<
	DatePickerContextProps,
	| "dayAriaLabelFormat"
	| "isDateRange"
	| "locale"
	| "phrases"
	| "endDate"
	| "startDate"
> &
	Pick<DatePickerDayProps, "day"> & {
		isSelected: boolean;
		isDisabled: boolean;
	}): string {
	if (isDateRange) {
		if (startDate && isSameDay(startDate, day)) {
			return phrases.dateIsSelectedAsStartDate(
				format(day, dayAriaLabelFormat, { locale }),
			);
		}

		if (endDate && isSameDay(endDate, day)) {
			return phrases.dateIsSelectedAsEndDate(
				format(day, dayAriaLabelFormat, { locale }),
			);
		}
	}

	if (isSelected) {
		return phrases.dateIsSelected(format(day, dayAriaLabelFormat, { locale }));
	}

	if (isDisabled) {
		return phrases.dateIsUnavailable(
			format(day, dayAriaLabelFormat, { locale }),
		);
	}

	return format(day, dayAriaLabelFormat, { locale });
}

function isStartOrEndDate(
	day: Date,
	startDate: Date | null,
	endDate: Date | null,
) {
	return (
		(startDate != null && isSameDay(day, startDate)) ||
		(endDate != null && isSameDay(day, endDate))
	);
}

/**
 * Checks if the day is between the start and end day
 */
function isDayInSelectionRange(
	day: Date,
	startDate: Date | null,
	endDate: Date | null,
): boolean {
	return (
		startDate != null &&
		endDate != null &&
		!isSameDay(day, startDate) &&
		!isSameDay(day, endDate) &&
		isWithinInterval(day, { start: startDate, end: endDate })
	);
}

export function getDatesBetween(startDate: Date, endDate: Date) {
	const dates: Date[] = [];

	// Strip hours minutes seconds etc.
	let currentDate = new Date(
		startDate.getFullYear(),
		startDate.getMonth(),
		startDate.getDate(),
	);

	while (currentDate <= endDate) {
		if (
			currentDate.toDateString() !== startDate.toDateString() &&
			currentDate.toDateString() !== endDate.toDateString()
		) {
			dates.push(currentDate);
		}

		currentDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate() + 1, // Will increase month if over range
		);
	}

	return dates;
}
