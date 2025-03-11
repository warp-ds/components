import type { Phrases } from './utils/defaultPhrases.js';

export interface DatePickerNavigationProps {
  phrases: Phrases;
  nextMonth: () => void;
  prevMonth: () => void;
}
