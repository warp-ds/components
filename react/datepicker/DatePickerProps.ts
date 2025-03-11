import type { Locale } from 'date-fns';

import type { Phrases } from './utils/defaultPhrases.js';

export type DatePickerProps = {
  children: React.ReactNode;

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
