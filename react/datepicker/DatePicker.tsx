import style from 'inline:./styles/w-datepicker.css';
import React from 'react';

import { nb } from 'date-fns/locale';

import { Attention } from '@warp-ds/react/components/attention';
import { TextField } from '@warp-ds/react/components/textfield';
import IconCalendar16 from '@warp-ds/icons/react/calendar-16';
import { format, isValid } from 'date-fns';
import { DatePickerCalendar } from './DatePickerCalendar.tsx';
import defaultPhrases from './defaultPhrases.ts';
import type { DatePickerProps } from './props.ts';

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

  return (
    <div>
      <style href="DatePickerCalendar" precedence="medium">
        {style}
      </style>
      {/* @ts-ignore */}
      <TextField
        // When not in manual mode, control the input using displayDate.
        // When in manual mode, let the input be uncontrolled.
        {...(isManual
          ? { defaultValue: manualValue, onChange: handleInputChange }
          : { value: displayDate, onChange: handleInputChange })}
        label={textFieldLabel}
        placeholder={placeholder}
        onKeyDown={keyHandler}
        // biome-ignore lint/a11y/useSemanticElements: <explanation>
        role="combobox"
        aria-haspopup="grid"
        aria-controls={datepickerId}
        aria-expanded={open}
        ref={textFieldRef}
      >
        <button prefix="true" type="button" onClick={() => setOpen(!open)} className="w-prefix">
          <IconCalendar16 />
        </button>
      </TextField>
      <Attention
        popover
        placement="bottom"
        noArrow={true}
        flip={true}
        crossAxis={true}
        isShowing={open}
        targetEl={textFieldRef}
      >
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
        />
      </Attention>
    </div>
  );
};
