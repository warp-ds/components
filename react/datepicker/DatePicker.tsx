import style from 'inline:./styles/w-datepicker.css';
import IconCalendar16 from '@warp-ds/icons/react/calendar-16';
import { useEffect, useId, useRef, useState } from 'react';
import { Button } from '../button/index.ts';
import { DatePickerCalendar } from './DatePickerCalendar.tsx';
import phrases from './defaultPhrases.ts';
import { DatePickerProps } from './props.ts';
import { fromISOToDate } from './utils.ts';

export function DatePicker({ value, onChange, locale, label, isDayDisabled = () => false }: DatePickerProps) {
  // state
  const [internalValue, setInternalValue] = useState<string>(value);
  const [calendarOpen, setCalendarOpen] = useState(false);

  // refs
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigationDayRef = useRef<HTMLTableCellElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
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
  // hack for iOS date input
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isIOS = /iP(hone|od|ad)/.test(ua);
  const inputType = isIOS ? 'text' : 'date';

  // close on outside click/tab/touch/focus
  useEffect(() => {
    const onBodyClick = (e: MouseEvent | FocusEvent) => {
      if (
        calendarOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        //console.log('click outside', e.target);
        hideCalendar();
      }
    };
    document.addEventListener('mousedown', onBodyClick);
    document.addEventListener('touchend', onBodyClick);
    document.addEventListener('focusin', onBodyClick);
    return () => {
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
  const monthFormat = 'MMMM yyyy';
  const weekDayFormat = 'EEEEEE';
  const dayAriaLabelFormat = 'PPPP';

  return (
    <div ref={wrapperRef}>
      <style href="CustomDatePickerCalendar" precedence="medium">
        {style}
      </style>
      <div className="w-datepicker-wrapper">
        <label className="w-datepicker-input-label" htmlFor={datepickerId}>
          {label}
        </label>
        <div className="w-datepicker-input-wrapper">
          <input
            id={datepickerId}
            type={inputType}
            className="w-datepicker-input"
            value={internalValue}
            onClick={(e) => {
              e.preventDefault();
              showCalendar();
            }}
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
          <Button
            variant="utilityQuiet"
            hasIconOnly
            className="w-datepicker-button"
            onClick={() => setCalendarOpen((calendarOpen) => !calendarOpen)}
            aria-label="Open calendar"
            ref={buttonRef}
          >
            <IconCalendar16 />
          </Button>
        </div>
      </div>
      {calendarOpen && (
        <div className={'w-dropdown__popover w-dropdown__popover--open'} ref={popoverRef}>
          <DatePickerCalendar
            id={datepickerId}
            key={fromISOToDate(value)?.toString()}
            selectedDate={fromISOToDate(value)}
            locale={locale}
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
