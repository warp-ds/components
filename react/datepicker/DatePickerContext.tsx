import { createContext, createRef } from 'react';

import { nb } from 'date-fns/locale';

import type { DatePickerContextProps } from './DatePickerContextProps.js';
import defaultPhrases from './utils/defaultPhrases.js';

export const IDLE = 'IDLE';
export const INTERACTING_START_DATE = 'INTERACTING_START_DATE';
export const INTERACTING_END_DATE = 'INTERACTING_END_DATE';

export const DatePickerContext = createContext<DatePickerContextProps>({
  datepickerId: '',
  locale: nb,
  state: IDLE,
  dispatch: () => {},
  isDayDisabled: () => false,
  bookedDates: [],
  isDateRange: false,
  startInputRef: createRef(),
  endInputRef: createRef(),
  popoverRef: createRef(),
  navigationDayRef: createRef(),
  phrases: defaultPhrases,
  displayFormat: 'P',
  monthFormat: 'MMMM yyyy',
  weekDayFormat: 'EEEEEE',
  dayAriaLabelFormat: 'PPPP',
  startDate: null,
  endDate: null,
  onClear: () => {},
  onChange: () => {},
});
