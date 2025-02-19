import React, { useCallback } from 'react';

import { Button } from "@warp-ds/react/components/button";
import { TextField } from '@warp-ds/react/components/textfield';
import { DateRangePicker, DatePicker, DatePickerInput, DatePickerPopover, DatePickerCalendar } from './index.js';

const metadata = { title: 'Forms/DatePicker' };
export default metadata;

function DateRangeExample() {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const onChange = useCallback(({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }, []);

  return (
    <DateRangePicker startDate={startDate} endDate={endDate} onChange={onChange}>
      <div className="flex w-full space-x-8">
        <DatePickerInput dateField="startDate" as={TextField} label="From" />
        <DatePickerInput dateField="endDate" as={TextField} label="To" />
      </div>
      <DatePickerPopover>
        <DatePickerCalendar />
      </DatePickerPopover>
    </DateRangePicker>
  );
}

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DatePicker date={date} onChange={setDate}>
      <DatePickerInput as={TextField} label="Date" />
      <DatePickerPopover>
        <DatePickerCalendar />
        <Button className="p-4 m-16 mt-0 px-8 rounded" onClick={() => setDate(null)} disabled={date == null}>
          Clear
        </Button>
      </DatePickerPopover>
    </DatePicker>
  );
}

function DatePickerInlineExample() {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DatePicker date={date} onChange={setDate}>
        <DatePickerCalendar />
    </DatePicker>
  );
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

  return (
    <DatePicker date={date} isDayDisabled={isDayDisabled} onChange={setDate}>
      <DatePickerInput as={TextField} label="Date" />
      <DatePickerPopover>
        <DatePickerCalendar />
      </DatePickerPopover>
    </DatePicker>
  );
}

export const DateRange = () => <DateRangeExample />;
export const SingleDate = () => <DatePickerExample />;
export const DisabledDays = () => <DisabledDaysExample />;
export const Inline = () => <DatePickerInlineExample />;
