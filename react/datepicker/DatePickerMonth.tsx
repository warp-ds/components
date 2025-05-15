import style from 'inline:./styles/w-datepicker-month.css';
import {
  type Locale,
  differenceInCalendarDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  format,
  getWeekOfMonth,
  isSameMonth,
  lastDayOfMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import React from 'react';

import IconChevronLeft16 from '@warp-ds/icons/react/chevron-left-16';
import IconChevronRight16 from '@warp-ds/icons/react/chevron-right-16';
import { Button } from '../button/Button.tsx';
import { DatePickerDay } from './DatePickerDay.js';
import type { DatePickerMonthProps } from './props.js';

export const DatePickerMonth = ({
  month,
  navigationDate,
  locale,
  monthFormat,
  weekDayFormat,
  isDayDisabled,
  selectedDate,
  phrases,
  navigationDayRef,
  dayAriaLabelFormat,
  onChange,
  nextMonth,
  prevMonth,
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
        <div className="w-datepicker__month-nav">
          <Button
            variant="utilityQuiet"
            size="small"
            className="w-datepicker__month__nav__button"
            aria-label={phrases.jumpToPrevMonth}
            onClick={prevMonth}
          >
            <IconChevronLeft16 />
          </Button>
          <div className="w-datepicker__month__nav__header">{format(month, monthFormat, { locale })}</div>
          <Button
            variant="utilityQuiet"
            size="small"
            className="w-datepicker__month__nav__button"
            aria-label={phrases.jumpToNextMonth}
            onClick={nextMonth}
          >
            <IconChevronRight16 />
          </Button>
        </div>

        <table
          className="w-datepicker__table"
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="grid"
          onFocus={() => setIsKeyboardNavigation(true)}
          onBlur={() => setIsKeyboardNavigation(false)}
        >
          <thead className="w-datepicker__weekdays" aria-hidden="true">
            <tr>
              {weeks[0].map((day) => (
                <th className="w-datepicker__weekday" key={day.toISOString()}>
                  {format(day, weekDayFormat, { locale })}
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
                    phrases={phrases}
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
