import {
	type Dispatch,
	type KeyboardEvent,
	ReactElement,
	ReactNode,
	type RefObject,
	type SetStateAction,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

import classNames from "classnames";
import {
	addDays,
	addMonths,
	differenceInCalendarMonths,
	eachMonthOfInterval,
	endOfMonth,
	endOfWeek,
	isBefore,
	isWithinInterval,
	startOfMonth,
	startOfToday,
	startOfWeek,
	subDays,
	subMonths,
} from "date-fns";
import type { Locale } from "date-fns";
// @ts-ignore
import style from "inline:./styles/w-datepicker-calendar.css";
import type { DatePickerCalendarProps } from "./DatePickerCalendarProps.js";
import { DatePickerContext, IDLE } from "./DatePickerContext.js";
import { DatePickerMonth } from "./DatePickerMonth.js";
import { DatePickerNavigation } from "./DatePickerNavigation.js";

/**
 * DatePickerCalendar
 * Can be used standalone, or as part of a <DatePicker /> and an input field.
 */
export const DatePickerCalendar = ({
	className,
	numberOfMonths = 1,
	...props
}: DatePickerCalendarProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const {
		locale,
		startDate,
		bookedDates,
		state: datepickerState,
		navigationDayRef,
		phrases,
	} = useContext(DatePickerContext);

	const { navigationDate, setNavigationDate } = useNavigationDate({
		initialDate: startDate,
		calendarRef: ref,
		locale,
		navigationDayRef,
	});

	const months = useWindowingMonths(navigationDate, numberOfMonths);

	// We know we are rendered inline (not in a popover) if calendar component
	// is rendered while "idle"
	const isInlineCalendar = datepickerState === IDLE;

	return (
		<>
			<style href="DatePickerCalendar" precedence="medium">
				{style}
			</style>
			<div
				className={classNames(
					"w-datepicker__calendar",
					{
						"w-datepicker__calendar--booked": isInlineCalendar || bookedDates,
					},
					className,
				)}
				aria-roledescription={phrases.roleDescription}
				role={isInlineCalendar ? "region" : "dialog"}
				ref={ref}
				{...props}
			>
				<DatePickerNavigation
					phrases={phrases}
					nextMonth={() =>
						setNavigationDate(addMonths(months[months.length - 1], 1))
					}
					prevMonth={() => setNavigationDate(subMonths(months[0], 1))}
				/>
				{months.map((month) => (
					<DatePickerMonth
						key={month.toString()}
						month={month}
						navigationDate={navigationDate}
					/>
				))}
			</div>
		</>
	);
};

/**
 * Keyboard navigation for the calendar
 * Arrow keys for horizontal/vertical movement.
 * Home/End to move to start/end of week.
 * PageUp/PageDown to move to next/prev month.
 */

type useNavigationDateProps = {
	initialDate?: Date | null;
	calendarRef: RefObject<HTMLDivElement>;
	navigationDayRef: RefObject<HTMLDivElement>;
	locale: Locale;
};

function useNavigationDate({
	initialDate,
	calendarRef,
	navigationDayRef,
	locale,
}: useNavigationDateProps): {
	navigationDate: Date;
	setNavigationDate: Dispatch<SetStateAction<Date>>;
} {
	const [navigationDate, setNavigationDate] = useState(
		// Must use startOfToday() instead of just new Date() here,
		// otherwise todays date will be the only date in the calendar that doesn' start at 00:00:00
		initialDate ?? startOfToday(),
	);

	const shouldFocusNavigationDate = useRef(false);

	useEffect(() => {
		const keyHandler = (event: KeyboardEvent) => {
			let newDate: Date;
			// eslint-disable-next-line default-case
			switch (event.key) {
				case "ArrowUp":
					newDate = subDays(navigationDate, 7);
					break;
				case "ArrowLeft":
					newDate = subDays(navigationDate, 1);
					break;
				case "Home":
					newDate = startOfWeek(navigationDate, { locale });
					break;
				case "PageUp":
					newDate = subMonths(navigationDate, 1);
					break;
				case "ArrowDown":
					newDate = addDays(navigationDate, 7);
					break;
				case "ArrowRight":
					newDate = addDays(navigationDate, 1);
					break;
				case "End":
					newDate = endOfWeek(navigationDate, { locale });
					break;
				case "PageDown":
					newDate = addMonths(navigationDate, 1);
					break;
			}
			if (newDate) {
				// prevent scrolling
				event.preventDefault();
				setNavigationDate(newDate);
				shouldFocusNavigationDate.current = true;
			}
		};

		const calendarEl = calendarRef.current;

		calendarEl.addEventListener("keydown", keyHandler);

		return () => calendarEl.removeEventListener("keydown", keyHandler);
	}, [calendarRef, locale, navigationDate]);

	// Focus the navigation date whenever we changed it with our keyboard shortcuts
	useEffect(() => {
		if (shouldFocusNavigationDate.current) {
			navigationDayRef.current.focus();
		}
		shouldFocusNavigationDate.current = false;
	}, [navigationDayRef]);

	return { navigationDate, setNavigationDate };
}

//  TODO: Memoize? Recalculate on numberOfMonths change
function useWindowingMonths(
	navigationDate: Date,
	numberOfMonths: number,
): Date[] {
	const intervalRef = useRef({
		start: startOfMonth(navigationDate),
		end: addMonths(navigationDate, numberOfMonths - 1),
	});

	const interval = intervalRef.current;

	if (isWithinInterval(navigationDate, interval)) {
		return eachMonthOfInterval(interval);
	}

	let differenceInMonths = 0;
	if (isBefore(navigationDate, interval.start)) {
		differenceInMonths = differenceInCalendarMonths(
			interval.start,
			navigationDate,
		);
	} else {
		differenceInMonths = differenceInCalendarMonths(
			interval.end,
			navigationDate,
		);
	}

	intervalRef.current = {
		start: startOfMonth(subMonths(interval.start, differenceInMonths)),
		end: endOfMonth(subMonths(interval.end, differenceInMonths)),
	};

	return eachMonthOfInterval(intervalRef.current);
}
