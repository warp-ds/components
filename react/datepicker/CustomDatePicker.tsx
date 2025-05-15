import style from 'inline:./styles/customDatePicker.css';
import { useEffect, useRef, useState, useId } from 'react';

import IconCalendar16 from '@warp-ds/icons/react/calendar-16';
import { nb } from 'date-fns/locale';
import { DatePickerCalendar } from './DatePickerCalendar.tsx';
import phrases from './defaultPhrases.ts';
import { fromISOToDate } from './utils.ts';
import { DatePickerProps } from './props.ts';
/**
 * A date-input that hides the native picker and shows a custom react-datepicker popover.
 *
 * props:
 *   value     - a string in "YYYY-MM-DD" format (controlled)
 *   onChange  - (newDate: Date) => void
 *   placeholder - string
 */
export function CustomDatePicker({
  value,
  onChange,
  label,
  isDayDisabled = () => false,
}: DatePickerProps) {
  // state
  const [internalValue, setInternalValue] = useState<string>(value);
  const [calendarOpen, setCalendarOpen] = useState(false);

  // refs
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const datepickerId = useId();

  // helpers
  const showCalendar = () => setCalendarOpen(true);
  const hideCalendar = () => setCalendarOpen(false);
  const toggleCalendar = (e: MouseEvent | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    calendarOpen ? hideCalendar() : showCalendar();
  };
  const commitChange = (newVal: string) => {
    onChange?.(newVal);
  };

  // close on outside click/tab/touch/focus
  useEffect(() => {
    const onBodyClick = (e: MouseEvent | FocusEvent) => {
      if (
        calendarOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        hideCalendar();
      }
    };
    document.addEventListener('click', onBodyClick);
    document.addEventListener('mousedown', onBodyClick);
    document.addEventListener('touchend', onBodyClick);
    document.addEventListener('focusin', onBodyClick);
    return () => {
      document.removeEventListener('click', onBodyClick);
      document.removeEventListener('mousedown', onBodyClick);
      document.removeEventListener('touchend', onBodyClick);
      document.removeEventListener('focusin', onBodyClick);
    };
  }, [calendarOpen]);

  // when user picks a date
  const handleSelect = (date: string) => {
    setInternalValue(date);
    setCalendarOpen(false);
    if (onChange) onChange(date);
  };

  // update selected if prop `value` changes
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  //console.log('CustomDatePicker', { value, internalValue });
  const displayFormat = 'P';
  const monthFormat = 'MMMM yyyy';
  const weekDayFormat = 'EEEEEE';
  const dayAriaLabelFormat = 'PPPP';
  const navigationDayRef = useRef<HTMLTableCellElement>(null);

  return (
    <div ref={wrapperRef}>
      <style href="CustomDatePickerCalendar" precedence="medium">
        {style}
      </style>
      <div className="cdp-wrapper">
        <label className="label" htmlFor={datepickerId}>
          {label}
        </label>
        <div className="cdp-input-wrapper">
          <input
            id={datepickerId}
            type="date"
            className="cdp-native-input"
            value={internalValue}
            onClick={showCalendar}
            ref={inputRef}
            onInput={(e) => {
              const v = (e.target as HTMLInputElement).value;
              //console.log('onInput', v);
              setInternalValue(v);
              //commitChange(v);
            }}
            onBlur={(e) => {
              const v = (e.target as HTMLInputElement).value;
              commitChange(v);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === ' ') return toggleCalendar(e);
              if (e.key === ',' || e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          />
          <button
            type="button"
            className="cdp-button"
            onClick={() => setCalendarOpen((calendarOpen) => !calendarOpen)}
            aria-label="Open calendar"
            ref={buttonRef}
          >
            <IconCalendar16 />
          </button>
        </div>
      </div>
      {calendarOpen && (
        <div className={'w-dropdown__popover w-dropdown__popover--open'} ref={popupRef}>
          <DatePickerCalendar
            id={datepickerId}
            key={fromISOToDate(value)?.toString()}
            selectedDate={fromISOToDate(value)}
            locale={nb}
            phrases={phrases}
            navigationDayRef={navigationDayRef}
            monthFormat={monthFormat}
            weekDayFormat={weekDayFormat}
            dayAriaLabelFormat={dayAriaLabelFormat}
            onChange={handleSelect}
            isDayDisabled={isDayDisabled}
            setOpen={setCalendarOpen}
          />
        </div>
      )}
    </div>
  );
}
