import type { Locale } from 'date-fns';

import type { Phrases } from './defaultPhrases.ts';

export type DatePickerProps = {
  /**
   * The current selected date.
   */
  date?: Date | null;
  /**
   * Called with the day of an entry in the calendar to determine if the day is disabled.
   *
   * @default noop
   */
  isDayDisabled?: (day: Date) => boolean;
  /**
   * A date-fns locale object. This enables internationalization in the datepicker such as date formatting and which day a week starts on.
   *
   * @see https://date-fns.org/
   * @default Norwegian locale
   *
   */
  locale?: Locale;
  /**
   * Called with the date when the user makes a selection from the calendar or a changes the input.
   *
   */
  onChange(day: Date | null): void;
  /**
   * An object of translation strings used by the datepicker for accessibility.
   */
  phrases?: Phrases;
  /**
   * A date-fns format string for the input.
   *
   * @see https://date-fns.org/
   */
  displayFormat?: string;
  /**
   * A date-fns format string for the month.
   *
   * @see https://date-fns.org/
   */
  monthFormat?: string;
  /**
   * A date-fns format string for the weekday.
   *
   * @see https://date-fns.org/
   */
  weekDayFormat?: string;
  /**
   * A date-fns format string for a day. Used for screen readers together with `phrases`.
   *
   * @see https://date-fns.org/
   */
  dayAriaLabelFormat?: string;
};

export interface DatePickerNavigationProps {
  phrases: Phrases;
  nextMonth: () => void;
  prevMonth: () => void;
}

export type DatePickerMonthProps = {
  month: Date;
  navigationDate: Date;
  locale: Locale;
  monthFormat: string;
  weekDayFormat: string;
  isDayDisabled: (day: Date) => boolean;
  selectedDate: Date | null;
  phrases: Phrases;
  navigationDayRef: React.RefObject<HTMLTableCellElement>;
  dayAriaLabelFormat: string;
  onChange: (date: Date, event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => void;
};

export type DatePickerDayProps = {
  day: Date;
  month: Date;
  navigationDate: Date;
  locale: Locale;
  isDayDisabled: (day: Date) => boolean;
  selectedDate: Date | null;
  phrases: Phrases;
  navigationDayRef: React.RefObject<HTMLTableCellElement>;
  dayAriaLabelFormat: string;
  onChange: (date: Date, event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => void;
};

export type DatePickerCalendarProps = {
  className?: string;
  style?: React.CSSProperties;
  numberOfMonths?: number; //The number of months to display in the calendar.
  locale: Locale; //A date-fns locale object. This enables internationalization in the datepicker such as date formatting and which day a week starts on.,
  selectedDate: Date | null; //The current selected date
  navigationDayRef: React.RefObject<HTMLTableCellElement>; //A ref to the currently focused day in the calendar,
  phrases: Phrases; //An object of translation strings used by the datepicker for accessibility,
  monthFormat: string; //A date-fns format string for the month.
  weekDayFormat: string; //A date-fns format string for the weekday.
  dayAriaLabelFormat: string; //A date-fns format string for a day. Used for screen readers together with `phrases`.
  isDayDisabled: (day: Date) => boolean;
  onChange: (date: Date, event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => void;
};
