import style from 'inline:./styles/w-datepicker-day.css';
import { format, formatISO, getDate, isSameDay, isSameMonth, isToday } from 'date-fns';
import type { KeyboardEvent, MouseEvent } from 'react';

import type { DatePickerDayProps } from './props.js';

export const DatePickerDay = ({
  month,
  day,
  navigationDate,
  locale,
  isDayDisabled,
  selectedDate,
  navigationDayRef,
  dayAriaLabelFormat,
  onChange,
}: DatePickerDayProps) => {
  const isDisabled = isDayDisabled(day);

  const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;

  const handleSelect = (event: MouseEvent | KeyboardEvent) => {
    if (isDisabled) return;
    const isoDate = formatISO(day, { representation: 'date' });
    //console.log('handleSelect', isoDate);

    // For key events we want to select on Enter and Space
    if ('key' in event) {
      if (event.key === 'Enter' || event.key === ' ') {
        // Prevents whitespace from being added to the input field
        event.preventDefault();
        onChange(isoDate, event);
      }
    } else {
      onChange(isoDate, event);
    }
  };

  const isNavigationDate = day === navigationDate;

  // Render empty cell if the day is outside of the month
  if (!isSameMonth(month, day)) return <td />;

  return (
    <>
      <style href="DatePickerDay" precedence="medium">
        {style}
      </style>
      <td
        aria-current={isToday(day) ? 'date' : undefined}
        aria-disabled={isDisabled}
        aria-label={format(day, dayAriaLabelFormat, { locale: locale })}
        aria-selected={isSelected}
        role="gridcell"
        className={`w-datepicker__day
        ${isSelected ? 'w-datepicker__day--selected' : ''}
        ${isDisabled ? 'w-datepicker__day--disabled' : ''}
        ${isToday(day) ? 'w-datepicker__day--today' : ''}
        ${isNavigationDate ? 'w-datepicker__day--navigation' : ''}
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
