import type { Locale } from 'date-fns';
import type defaultPhrases from './utils/defaultPhrases.ts';

export type DatePickerDayProps = {
  day: Date;
  month: Date;
  navigationDate: Date;
  locale: Locale;
  isDayDisabled: (day: Date) => boolean;
  selectedDate: Date | null;
  phrases: typeof defaultPhrases;
  navigationDayRef: React.RefObject<HTMLTableCellElement>;
  dayAriaLabelFormat: string;
  onChange: (date: Date, event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => void;
};
