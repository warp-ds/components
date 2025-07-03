import style from 'inline:./styles/w-datepicker-month.css';
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  format,
  getWeekOfMonth,
  isSameMonth,
  type Locale,
  lastDayOfMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import React from 'react';

import { DatePickerDay } from './DatePickerDay.js';
import type { DatePickerMonthProps } from './props.js';

export const DatePickerMonth = ({
  month,
  navigationDate,
  locale,
  weekDayFormat,
  isDayDisabled,
  selectedDate,
  navigationDayRef,
  dayAriaLabelFormat,
  onChange,
  setIsKeyboardNavigation,
}: DatePickerMonthProps) => {
  const weeks = React.useMemo(() => getWeeks(month, locale), [month, locale]);

  // Inserts the navigation date into the date matrix
  if (isSameMonth(navigationDate, month)) {
    const weekOfMonth = getWeekOfMonth(navigationDate, { locale }) - 1;

    // we need to get the day of the week to index into the correct day after we've gotten the week
    // getDay() however isn't locale aware. This is a good replacement
    const day = differenceInCalendarDays(navigationDate, startOfWeek(navigationDate, { locale }));

    weeks[weekOfMonth][day] = navigationDate;
  }

  return (
    <>
      <style href="DatePickerMonth" precedence="medium">
        {style}
      </style>
      <div className="w-datepicker__month">
        <table
          className="w-datepicker__table"
          role="grid"
          onFocus={() => setIsKeyboardNavigation(true)}
          onBlur={() => setIsKeyboardNavigation(false)}
        >
          <thead className="w-datepicker__weekdays" aria-hidden="true">
            <tr>
              {weeks[0].map((day) => (
                <th className="w-datepicker__weekday" key={day.toISOString()}>
                  {format(day, weekDayFormat, { locale: locale })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week) => (
              <tr key={week[0].toString()}>
                {week.map((day) => (
                  <DatePickerDay
                    key={day.toISOString()}
                    day={day}
                    month={month}
                    navigationDate={navigationDate}
                    locale={locale}
                    isDayDisabled={isDayDisabled}
                    selectedDate={selectedDate}
                    navigationDayRef={navigationDayRef}
                    dayAriaLabelFormat={dayAriaLabelFormat}
                    onChange={onChange}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

function getWeeks(month: Date, locale?: Locale): Date[][] {
  const weekStarts = eachWeekOfInterval(
    {
      start: startOfMonth(month),
      end: lastDayOfMonth(month),
    },
    { locale },
  );

  const weekIntervals = weekStarts.map((weekStart) => ({
    start: weekStart,
    end: endOfWeek(weekStart, { locale }),
  }));

  return weekIntervals.map((week) => eachDayOfInterval(week));
}
