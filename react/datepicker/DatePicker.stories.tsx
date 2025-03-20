import React from 'react';

import { SingleDatePicker } from './index.js';

const metadata = { title: 'Forms/DatePicker' };
export default metadata;

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | null>(null);

  return <SingleDatePicker date={date} onChange={setDate} />;
}

function DisabledDaysExample() {
  const [date, setDate] = React.useState<Date | null>(null);

  // Probably don't define this inside your component's render function.

  // Disable weekends
  const isDayDisabled = (day: Date) => {
    // check if the day is on a weekend
    // Sunday is 0, Saturday is 6
    return day.getDay() === 0 || day.getDay() === 6;
  };

  return <SingleDatePicker date={date} onChange={setDate} isDayDisabled={isDayDisabled} />;
}

export const SingleDate = () => <DatePickerExample />;
export const DisabledDays = () => <DisabledDaysExample />;
