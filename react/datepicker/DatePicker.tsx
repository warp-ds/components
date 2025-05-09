import style from 'inline:./styles/w-datepicker.css';
import React from 'react';

import { nb } from 'date-fns/locale';

import IconCalendar16 from '@warp-ds/icons/react/calendar-16';
import { format, isValid } from 'date-fns';
import { DatePickerCalendar } from './DatePickerCalendar.tsx';
import defaultPhrases from './defaultPhrases.ts';
import type { DatePickerProps } from './props.ts';
import { useOutsideClick } from './useOutsideClick.ts';

export const DatePicker = ({
  locale = nb,
  isDayDisabled = () => false,
  date,
  onChange,
  textFieldOnChange,
  placeholder,
  textFieldLabel,
  phrases = defaultPhrases,
  displayFormat = 'P',
  monthFormat = 'MMMM yyyy',
  weekDayFormat = 'EEEEEE',
  dayAriaLabelFormat = 'PPPP',
}: DatePickerProps) => {
  const datepickerId = React.useId();

  const [open, setOpen] = React.useState<boolean>(false);
  const [isManual, setIsManual] = React.useState<boolean>(false);
  const [manualValue, setManualValue] = React.useState<string>('');

  const navigationDayRef = React.useRef<HTMLTableCellElement>(null);
  const textFieldRef = React.useRef<HTMLInputElement>(null);
  const calendarRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick([textFieldRef, calendarRef], () => setOpen(false));

  const handleChange = React.useCallback(
    (day: Date) => {
      setIsManual(false);
      onChange(day);
    },
    [onChange],
  );

  const keyHandler = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        setOpen(false);
        break;
      case 'ArrowDown':
        setIsManual(false);
        setOpen(true);
        navigationDayRef.current?.focus();
        break;
      case 'Tab':
        setIsManual(false);
        setOpen(true);
        break;
      default:
        setIsManual(true);
        setOpen(true);
        break;
    }
  };

  // The change handler for the TextField when user types manually.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Switch to manual mode if not already.
    if (!isManual) setIsManual(true);
    const newValue = e.target.value;
    setManualValue(newValue);
    // Relay the event.
    textFieldOnChange?.(e);
  };

  const displayDate = isValid(date) ? format(date, displayFormat, { locale }) : '';

  React.useEffect(() => {
    if (isManual) {
      if (isValid(date)) {
        // close datepicker if date entered manually by user is valid
        setOpen(false);
      }
    }
  }, [date, isManual]);

  return (
    <div>
      <style href="DatePickerCalendar" precedence="medium">
        {style}
      </style>
      <div>
        <label
          htmlFor={datepickerId}
          className="antialiased block relative text-s font-bold pb-4 cursor-pointer s-text"
        >
          {textFieldLabel}
        </label>
        <div className="relative">
          <input
            {...(isManual
              ? { defaultValue: manualValue, onChange: handleInputChange }
              : { value: displayDate, onChange: handleInputChange })}
            className="block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current placeholder:s-text-placeholder border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected"
            placeholder={placeholder}
            onClick={() => setOpen(true)}
            onKeyDown={keyHandler}
            role="combobox"
            aria-haspopup="grid"
            aria-controls={datepickerId}
            aria-expanded={open}
            ref={textFieldRef}
            id={datepickerId}
            type="text"
          />
          <div className="w-suffix">
            <IconCalendar16 />
          </div>
        </div>
      </div>
      <div className={'w-dropdown__popover w-dropdown__popover--open'} ref={calendarRef}>
        {open && (
          <DatePickerCalendar
            id={datepickerId}
            key={date?.toDateString()}
            selectedDate={date}
            locale={locale}
            phrases={phrases}
            navigationDayRef={navigationDayRef}
            monthFormat={monthFormat}
            weekDayFormat={weekDayFormat}
            dayAriaLabelFormat={dayAriaLabelFormat}
            onChange={handleChange}
            isDayDisabled={isDayDisabled}
            isManual={isManual}
            setOpen={setOpen}
          />
        )}
      </div>
    </div>
  );
};
