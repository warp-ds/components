import React from 'react';

import { DatePicker } from './index.js';
import { isBefore, startOfDay } from 'date-fns';

const metadata = { title: 'Forms/DatePicker' };
export default metadata;

// Parse Norwegian format dd.mm.yyyy to Date object
const parseDate = (dateString: string): Date | null => {
  const [day, month, year] = dateString.split('.').map(Number);
  const parsedDate = new Date(year, month - 1, day);
  return !Number.isNaN(parsedDate.getTime()) ? parsedDate : null;
};

const DummyFields = ({ id }) => (
  <div style={{ paddingBottom: '16px', paddingTop: '16px' }}>
    <label htmlFor={id} className="antialiased block relative text-s font-bold pb-4 cursor-pointer s-text">
      {id}
    </label>
    <input
      id={id}
      type="text"
      className="block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current placeholder:s-text-placeholder border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected"
      placeholder={id}
    />
  </div>
);

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | null>(null);
  const [value, setValue] = React.useState('');

  const setTextFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const validFormatRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (validFormatRegex.test(event.target.value)) {
      const parsedDate = parseDate(event.target.value);
      if (parsedDate) {
        setDate(parsedDate);
      }
    }
    if (event.target.value === '') {
      setDate(null);
    }
  };

  const isDayDisabled = (day: Date) => {
    return isBefore(startOfDay(day), startOfDay(new Date()));
  };

  return (
    <>
      <DummyFields id="dummy-1" />
      <DatePicker
        placeholder="dd.mm.yyyy"
        textFieldLabel="Dato"
        date={date}
        onChange={setDate}
        textFieldOnChange={setTextFieldValue}
        isDayDisabled={isDayDisabled}
      />
      <DummyFields id="dummy-2" />
    </>
  );
}

function DisabledDaysExample() {
  const [date, setDate] = React.useState<Date | null>(null);
  const [value, setValue] = React.useState('');

  // Disable weekends
  const isDayDisabled = (day: Date) => {
    // check if the day is on a weekend
    // Sunday is 0, Saturday is 6
    return day.getDay() === 0 || day.getDay() === 6;
  };

  const setTextFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const validFormatRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (validFormatRegex.test(event.target.value)) {
      const parsedDate = parseDate(event.target.value);
      if (parsedDate) {
        setDate(parsedDate);
      }
    }
    if (event.target.value === '') {
      setDate(null);
    }
  };

  return (
    <DatePicker
      placeholder="dd/mm/yyyy"
      textFieldLabel="Date"
      date={date}
      onChange={setDate}
      textFieldOnChange={setTextFieldValue}
      isDayDisabled={isDayDisabled}
    />
  );
}

export const SingleDate = () => <DatePickerExample />;
export const DisabledDays = () => <DisabledDaysExample />;
