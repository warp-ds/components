import type { Locale } from 'date-fns';
import type defaultPhrases from './utils/defaultPhrases.js';

export type DatePickerCalendarProps = {
  className?: string;
  style?: React.CSSProperties;
  numberOfMonths?: number; //The number of months to display in the calendar.
  locale: Locale; //A date-fns locale object. This enables internationalization in the datepicker such as date formatting and which day a week starts on.,
  selectedDate: Date | null; //The current selected date
  navigationDayRef: React.RefObject<HTMLTableCellElement>; //A ref to the currently focused day in the calendar,
  phrases: typeof defaultPhrases; //An object of translation strings used by the datepicker for accessibility,
  monthFormat: string; //A date-fns format string for the month.
  weekDayFormat: string; //A date-fns format string for the weekday.
  dayAriaLabelFormat: string; //A date-fns format string for a day. Used for screen readers together with `phrases`.
  isDayDisabled: (day: Date) => boolean;
  onChange: (date: Date, event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => void;
};
