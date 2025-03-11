import type { Locale } from 'date-fns';

import type { BookedDate, DatePickerState, Event } from './DatePickerContextProps.js';
import type { Phrases } from './utils/defaultPhrases.js';

export type BookedDates = {
  bookingId: number;
  startDate: string;
  endDate: string;
};
export interface DaySelectProps {
  bookedDates?: BookedDate[];
  startDate: Date | null;
  endDate: Date | null;
  state: DatePickerState;
  day: Date;
  onChange: onChange;
  startInputRef: React.RefObject<HTMLInputElement>;
  endInputRef: React.RefObject<HTMLInputElement>;
  effect: any;
  event: Event;
  minimumNights: number;
}

export type BookedTypes = 'START_BOOKED' | 'END_BOOKED' | 'FULL_BOOKED' | false;

export type onChange = ({ startDate, endDate }: { startDate: Date | null; endDate: Date | null }) => void;

export type DateRangePickerProps = {
  children: React.ReactNode;
  /**
   * The current selected start date.
   */
  startDate?: Date | null;
  /**
   * The current selected end date.
   */
  endDate?: Date | null;

  /**
   * Called with the day of an entry in the calendar to determine if the day is disabled.
   *
   * @default noop
   */
  isDayDisabled?: (day: Date) => boolean;

  bookedDates?: BookedDates[];

  /**
   * The minimum number of nights between the start and end dates. Can be set to 0 if the start and end date can be the same day.
   */
  minimumNights?: number;

  /**
   * A date-fns locale object. This enables internationalization in the datepicker such as date formatting and which day a week starts on.
   *
   * @see https://date-fns.org/
   * @default Norwegian locale
   *
   */
  locale?: Locale;

  /**
   * Called with the selected dates when the user makes a selection from the calendar or makes a change to the input.
   *
   * @default noop
   */
  onChange?: (dates: { startDate: Date | null; endDate: Date | null }) => void;

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

export type ReducerProps = {
  bookedDates?: BookedDate[];
  navigationDayRef: React.RefObject<HTMLTableCellElement>;
  startInputRef: React.RefObject<HTMLInputElement>;
  endInputRef: React.RefObject<HTMLInputElement>;
  startDate: Date | null;
  endDate: Date | null;
  onChange: onChange;
  minimumNights: number;
};
