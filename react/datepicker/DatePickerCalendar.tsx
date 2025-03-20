// @ts-ignore
import style from 'inline:./styles/w-datepicker-calendar.css';
import classNames from 'classnames';
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
} from 'date-fns';
import React from 'react';
import type { DatePickerCalendarProps } from './DatePickerCalendarProps.js';
import { DatePickerMonth } from './DatePickerMonth.js';
import { DatePickerNavigation } from './DatePickerNavigation.js';

/**
 * DatePickerCalendar
 * Can be used standalone, or as part of a <DatePicker /> and an input field.
 */
export const DatePickerCalendar = ({
  className,
  numberOfMonths = 1,
  locale,
  selectedDate,
  navigationDayRef,
  phrases,
  monthFormat,
  weekDayFormat,
  dayAriaLabelFormat,
  isDayDisabled,
  onChange,
  ...props
}: DatePickerCalendarProps) => {
  const [navigationDate, setNavigationDate] = React.useState(
    // Must use startOfToday() instead of just new Date() here,
    // otherwise todays date will be the only date in the calendar that doesn' start at 00:00:00
    selectedDate ?? startOfToday(),
  );

  const months = useWindowingMonths(navigationDate, numberOfMonths);

  /**
   * Keyboard navigation for the calendar
   * Arrow keys for horizontal/vertical movement.
   * Home/End to move to start/end of week.
   * PageUp/PageDown to move to next/prev month.
   */
  const keyHandler = (event: React.KeyboardEvent) => {
    let newDate: Date;
    // eslint-disable-next-line default-case
    switch (event.key) {
      case 'ArrowUp':
        newDate = subDays(navigationDate, 7);
        break;
      case 'ArrowLeft':
        newDate = subDays(navigationDate, 1);
        break;
      case 'Home':
        newDate = startOfWeek(navigationDate, { locale });
        break;
      case 'PageUp':
        newDate = subMonths(navigationDate, 1);
        break;
      case 'ArrowDown':
        newDate = addDays(navigationDate, 7);
        break;
      case 'ArrowRight':
        newDate = addDays(navigationDate, 1);
        break;
      case 'End':
        newDate = endOfWeek(navigationDate, { locale });
        break;
      case 'PageDown':
        newDate = addMonths(navigationDate, 1);
        break;
    }

    if (newDate) {
      // prevent scrolling
      event.preventDefault();
      setNavigationDate(newDate);
    }
  };

  React.useLayoutEffect(() => {
    if (navigationDayRef.current) {
      navigationDayRef.current.focus();
    }
  }, [navigationDayRef.current, navigationDate]);

  return (
    <>
      <style href="DatePickerCalendar" precedence="medium">
        {style}
      </style>
      <div
        className={classNames('w-datepicker__calendar', className)}
        aria-roledescription={phrases.roleDescription}
        onKeyDown={keyHandler}
        {...props}
      >
        <DatePickerNavigation
          phrases={phrases}
          nextMonth={() => setNavigationDate(addMonths(months[months.length - 1], 1))}
          prevMonth={() => setNavigationDate(subMonths(months[0], 1))}
        />
        {months.map((month) => (
          <DatePickerMonth
            key={month.toString()}
            month={month}
            navigationDate={navigationDate}
            locale={locale}
            monthFormat={monthFormat}
            weekDayFormat={weekDayFormat}
            isDayDisabled={isDayDisabled}
            selectedDate={selectedDate}
            phrases={phrases}
            navigationDayRef={navigationDayRef}
            dayAriaLabelFormat={dayAriaLabelFormat}
            onChange={onChange}
          />
        ))}
      </div>
    </>
  );
};

//  TODO: Memoize? Recalculate on numberOfMonths change
function useWindowingMonths(navigationDate: Date, numberOfMonths: number): Date[] {
  const intervalRef = React.useRef({
    start: startOfMonth(navigationDate),
    end: addMonths(navigationDate, numberOfMonths - 1),
  });

  const interval = intervalRef.current;

  if (isWithinInterval(navigationDate, interval)) {
    return eachMonthOfInterval(interval);
  }

  let differenceInMonths = 0;
  if (isBefore(navigationDate, interval.start)) {
    differenceInMonths = differenceInCalendarMonths(interval.start, navigationDate);
  } else {
    differenceInMonths = differenceInCalendarMonths(interval.end, navigationDate);
  }

  intervalRef.current = {
    start: startOfMonth(subMonths(interval.start, differenceInMonths)),
    end: endOfMonth(subMonths(interval.end, differenceInMonths)),
  };

  return eachMonthOfInterval(intervalRef.current);
}
