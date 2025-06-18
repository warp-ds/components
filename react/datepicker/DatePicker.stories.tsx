import { isBefore, startOfDay } from 'date-fns';
import React from 'react';
import { DatePicker } from './index.ts';

const metadata = { title: 'Forms/DatePicker' };
export default metadata;

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

function CustomDatePickerExample() {
  const [value, setValue] = React.useState<string>('');

  const isDayDisabled = (day: Date) => {
    return isBefore(startOfDay(day), startOfDay(new Date()));
  };

  return (
    <>
      <DummyFields id="dummy-1" />
      <DatePicker
        value={value}
        label="Dato"
        //date={date}
        onChange={setValue}
        //textFieldOnChange={setTextFieldValue}
        isDayDisabled={isDayDisabled}
      />
      <DummyFields id="dummy-2" />
    </>
  );
}

export const DatePickerExample = () => <CustomDatePickerExample />;
