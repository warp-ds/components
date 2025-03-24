// @ts-ignore
import style from 'inline:./styles/w-datepicker-day.css';
import { type Locale, format, getDate, isSameDay, isSameMonth, isToday } from 'date-fns';
import type { KeyboardEvent, MouseEvent } from 'react';

import type defaultPhrases from './defaultPhrases.ts';
import type { DatePickerDayProps } from './props.js';

export const DatePickerDay = ({
  month,
  day,
  navigationDate,
  locale,
  isDayDisabled,
  selectedDate,
  phrases,
  navigationDayRef,
  dayAriaLabelFormat,
  onChange,
}: DatePickerDayProps) => {
  const isDisabled = isDayDisabled(day);

  const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;

  const handleSelect = (event: MouseEvent | KeyboardEvent) => {
    if (isDisabled) return;

    // For key events we want to select on Enter and Space
    if ('key' in event) {
      if (event.key === 'Enter' || event.key === ' ') {
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
    phrases,
    locale,
    dayAriaLabelFormat,
    isSelected,
    isDisabled,
  });

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
        aria-label={ariaLabel}
        aria-selected={isSelected}
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

function dayAriaLabel({
  day,
  phrases,
  locale,
  dayAriaLabelFormat,
  isDisabled,
  isSelected,
}: {
  day: Date;
  phrases: typeof defaultPhrases;
  locale: Locale;
  dayAriaLabelFormat: string;
  isSelected: boolean;
  isDisabled: boolean;
}): string {
  if (isSelected) {
    return phrases.dateIsSelected(format(day, dayAriaLabelFormat, { locale }));
  }

  if (isDisabled) {
    return phrases.dateIsUnavailable(format(day, dayAriaLabelFormat, { locale }));
  }

  return format(day, dayAriaLabelFormat, { locale });
}
