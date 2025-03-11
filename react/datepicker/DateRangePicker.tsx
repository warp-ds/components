import type React from 'react';
import { useCallback, useRef, useId } from 'react';

import { addDays, subDays } from 'date-fns';
import { nb } from 'date-fns/locale';
import { useEffectReducer } from 'use-effect-reducer';

import { DatePickerContext, IDLE, INTERACTING_END_DATE, INTERACTING_START_DATE } from './DatePickerContext.js';
import type { DatePickerState, Event } from './DatePickerContextProps.js';
import type { DateRangePickerProps, DaySelectProps, ReducerProps } from './DateRangePickerProps.js';
import defaultPhrases from './utils/defaultPhrases.js';
import * as utils from './utils/helpers.js';

/**
 * DateRangePicker
 */
export const DateRangePicker = ({
  children,
  startDate = null,
  endDate = null,
  locale = nb,
  bookedDates,
  isDayDisabled = () => false,
  onChange = () => {},
  phrases = defaultPhrases,
  minimumNights = 1,
  displayFormat = 'P',
  monthFormat = 'MMMM yyyy',
  weekDayFormat = 'EEEEEE',
  dayAriaLabelFormat = 'PPPP',
}: DateRangePickerProps) => {
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);
  const popoverRef = useRef(null);
  const navigationDayRef = useRef<HTMLTableCellElement>(null);

  const [state, dispatch] = useEffectReducer(
    useDatePickerReducer({
      startDate,
      bookedDates,
      endDate,
      startInputRef,
      onChange,
      endInputRef,
      navigationDayRef,
      minimumNights,
    }),
    IDLE,
  );

  const datepickerId = useId();

  const handleClear = useCallback(() => {
    if (state === INTERACTING_START_DATE) {
      onChange({ startDate: null, endDate });
    } else if (state === INTERACTING_END_DATE) {
      onChange({ startDate, endDate: null });
    }
  }, [onChange, startDate, endDate, state]);

  const handleChange = useCallback(
    (day: Date, event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => {
      if (event.type === 'keydown') {
        dispatch({ type: 'SELECT_WITH_KEYBOARD', day });
      } else {
        dispatch({ type: 'SELECT_WITH_CLICK', day });
      }
    },
    [dispatch],
  );

  // Bake in disabling of days that doesn't meet the minimum nights requirement.
  const isDayDisabledWithMinimumNights = useCallback(
    (day: Date) => {
      if (startDate && !endDate) {
        const firstAllowedEndDate = startDate && addDays(startDate, minimumNights);

        // Disable all days that are between the start and first allowed end date.
        if (utils.isAfterDay(day, startDate) && utils.isBeforeDay(day, firstAllowedEndDate)) {
          return true;
        }
      }
      return isDayDisabled(day);
    },
    [startDate, endDate, isDayDisabled, minimumNights],
  );

  return (
    <DatePickerContext.Provider
      value={{
        datepickerId,
        dispatch,
        startInputRef,
        endInputRef,
        popoverRef,
        navigationDayRef,
        isDayDisabled: isDayDisabledWithMinimumNights,
        bookedDates,
        isDateRange: true,
        state,
        locale,
        startDate,
        endDate,
        phrases,
        displayFormat,
        weekDayFormat,
        monthFormat,
        dayAriaLabelFormat,
        onClear: handleClear,
        onChange: handleChange,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

function useDatePickerReducer({
  bookedDates,
  onChange,
  startDate,
  endDate,
  startInputRef,
  endInputRef,
  navigationDayRef,
  minimumNights,
}: ReducerProps) {
  const lastEventRef = useRef<Event>();

  return function reducer(state: DatePickerState, event: Event, effect: any): DatePickerState {
    const lastEventType = lastEventRef.current?.type;
    lastEventRef.current = event;

    switch (event.type) {
      case 'FOCUS':
        // Don't reopen the popover when we refocus the input field after closing the popover with the keyboard
        if (lastEventType === 'ESCAPE' || lastEventType === 'SELECT_WITH_KEYBOARD') {
          return state;
        }

        // we prefer comparing with end input, so interacting with the start is the "default"
        return event.input.current === endInputRef.current ? INTERACTING_END_DATE : INTERACTING_START_DATE;

      case 'BLUR':
        return IDLE;

      // When Escape is used to close the popover, the user likely uses a screen reader, so move focus back to the inpu
      case 'ESCAPE':
        if (state === INTERACTING_START_DATE) {
          effect(() => startInputRef.current?.focus());
        } else if (state === INTERACTING_END_DATE) {
          effect(() => endInputRef.current?.focus());
        }
        return IDLE;

      case 'SELECT_WITH_CLICK':
      case 'SELECT_WITH_KEYBOARD':
        return onDaySelect({
          bookedDates,
          startDate,
          endDate,
          onChange,
          day: event.day,
          state,
          effect,
          endInputRef,
          startInputRef,
          event,
          minimumNights,
        });

      // Move focus to the navigatable day
      case 'NAVIGATE_FROM_INPUT': {
        // need to do this in a set timeout to work correctly
        effect(() => setTimeout(() => navigationDayRef.current?.focus()));

        // we prefer comparing with end input, so interacting with the start is the "default"
        return event.input.current === endInputRef.current ? INTERACTING_END_DATE : INTERACTING_START_DATE;
      }
    }
  };
}

function onDaySelect({
  startDate,
  endDate,
  state,
  day,
  onChange,
  endInputRef,
  startInputRef,
  effect,
  event,
  minimumNights,
}: DaySelectProps): DatePickerState {
  if (state === INTERACTING_START_DATE) {
    const lastAllowedStartDate = endDate && subDays(endDate, minimumNights);

    const isStartDateAfterEndDate =
      utils.isBeforeDay(lastAllowedStartDate, day) || utils.isAfterDay(startDate, endDate);

    startDate = day;

    if (isStartDateAfterEndDate) {
      endDate = null;
    }

    effect(() => {
      onChange({ startDate, endDate });
      endInputRef.current?.focus();
    });

    return INTERACTING_END_DATE;
  } else if (state === INTERACTING_END_DATE) {
    const firstAllowedEndDate = startDate && addDays(startDate, minimumNights);

    if (!startDate) {
      endDate = day;
      effect(() => onChange({ startDate, endDate }));
      effect(() => startInputRef.current?.focus());
      return INTERACTING_START_DATE;
    } else if (utils.isInclusivelyAfterDay(day, firstAllowedEndDate)) {
      endDate = day;

      effect(() => onChange({ startDate, endDate }));
      // If we selected the date using a keyboard we move focus back to the input when closing it
      if (event.type === 'SELECT_WITH_KEYBOARD') {
        effect(() => {
          endInputRef.current?.focus();
        });
      }
    } else {
      startDate = day;
      endDate = null;

      effect(() => onChange({ startDate, endDate }));
      effect(() => endInputRef.current?.focus());
      return INTERACTING_END_DATE;
    }
  }

  return IDLE;
}
