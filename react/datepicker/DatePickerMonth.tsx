import { useContext, useMemo } from 'react';
// @ts-ignore
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

import { DatePickerContext } from './DatePickerContext.js';
import { DatePickerDay } from './DatePickerDay.js';
import type { DatePickerMonthProps } from './DatePickerMonthProps.js';

export const DatePickerMonth = ({ month, navigationDate }: DatePickerMonthProps) => {
  const { locale, monthFormat, weekDayFormat } = useContext(DatePickerContext);

  const weeks = useMemo(() => getWeeks(month, locale), [month, locale]);

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
        <div className="w-datepicker__month__nav">
          {/* move prev month button here and give it .w-datepicker__month__nav__button as a class*/}
          <div className="w-datepicker__month__nav__header">{format(month, monthFormat, { locale })}</div>
          {/* move next month button here and give it .w-datepicker__month__nav__button as a class*/}
        </div>

        <table className="w-datepicker__table">
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
                  <DatePickerDay key={day.toISOString()} day={day} month={month} navigationDate={navigationDate} />
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
