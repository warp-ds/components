import React from 'react';

import { DatePicker } from './index.js';

const metadata = { title: 'Forms/DatePicker' };
export default metadata;

// Parse Norwegian format dd.mm.yyyy to Date object
const parseDate = (dateString: string): Date | null => {
  const [day, month, year] = dateString.split('.').map(Number);
  const parsedDate = new Date(year, month - 1, day);
  return !Number.isNaN(parsedDate.getTime()) ? parsedDate : null;
};

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
  };

  return (
    <DatePicker
      placeholder="dd.mm.yyyy"
      textFieldLabel="Date"
      date={date}
      onChange={setDate}
      textFieldOnChange={setTextFieldValue}
    />
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
  };

  return (
    <DatePicker
      placeholder="dd.mm.yyyy"
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
