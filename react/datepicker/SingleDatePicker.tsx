import React from 'react';

import { nb } from 'date-fns/locale';

import { Affix } from '@warp-ds/react';
import { TextField } from '@warp-ds/react/components/textfield';
import { format, isValid } from 'date-fns';
import { DatePickerCalendar } from './DatePickerCalendar.tsx';
import { DatePickerPopover } from './DatePickerPopover.tsx';
import defaultPhrases from './defaultPhrases.ts';
import type { SingleDatePickerProps } from './props.ts';

export const SingleDatePicker = ({
  locale = nb,
  isDayDisabled = () => false,
  date,
  onChange,
  phrases = defaultPhrases,
  displayFormat = 'P',
  monthFormat = 'MMMM yyyy',
  weekDayFormat = 'EEEEEE',
  dayAriaLabelFormat = 'PPPP',
}: SingleDatePickerProps) => {
  const datepickerId = React.useId();
  const navigationDayRef = React.useRef<HTMLTableCellElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const textFieldRef = React.useRef(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });

  const handleClear = React.useCallback(() => {
    onChange(null);
  }, [onChange]);

  const handleChange = React.useCallback(
    (day: Date) => {
      onChange(day);
    },
    [onChange],
  );

  const displayDate = isValid(date) ? format(date, displayFormat, { locale }) : '';
  const displayClearDate = isValid(date);

  return (
    <div id={datepickerId} ref={containerRef}>
      {/* @ts-ignore */}
      <TextField defaultValue={displayDate} label="Date" onClick={() => setOpen(!open)} ref={textFieldRef}>
        {displayClearDate && <Affix suffix clear aria-label="Clear text" onClick={handleClear} />}
      </TextField>
      <DatePickerPopover open={open} targetEl={textFieldRef.current}>
        <DatePickerCalendar
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
      </DatePickerPopover>
    </div>
  );
};
