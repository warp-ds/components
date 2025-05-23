import { TextField } from '@warp-ds/react/components/textfield';
import { useState } from 'react';
import { Slider } from '../src/Slider.tsx';

const metadata = { title: 'Forms/Slider' };
export default metadata;

export const Regular = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularWithInput = () => {
  const [value, setValue] = useState(500);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={1} max={1000} />
      <div style={{ width: '50%', marginBottom: '10px' }}>
        <TextField value={value.toString()} onChange={(e) => setValue(+e.target.value)} />
      </div>
      <button onClick={() => setValue(500)}>Reset</button>
    </div>
  );
};

export const RegularStep1000 = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} step={1000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularWithLargerKeyboardStepFactor = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} keyboardStepFactor={0.1} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularWithContainedMarks = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularWithoutMarks = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} showMarks={false} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularOnChangeAfter = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChangeAfter={(value) => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularWithTooltips = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularSmallerSize = () => {
  const [value, setValue] = useState(20000);

  return (
    <div style={{ width: '350px' }}>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularOtherRange = () => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={-20} max={50} showTooltips />
      <button onClick={() => setValue(5)}>Reset</button>
    </div>
  );
};

export const RegularLargeRange = () => {
  const [value, setValue] = useState(16846250);

  return (
    <div>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={125374}
        max={84383641}
        step={500000}
        containMarks
        showTooltips
      />
      <button onClick={() => setValue(16846250)}>Reset</button>
    </div>
  );
};

export const RegularWithStartEndValues = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={10000}
        max={60000}
        startEndValues={['Less than 10 000', 'Over 60 000']}
        showTooltips
        containMarks
      />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const RegularWithSingleStartEndValue = () => {
  const [value, setValue] = useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={10000}
        max={60000}
        startEndValues={[null, 'Over 60 000']}
        showTooltips
        containMarks
      />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>
  );
};

export const WithRangeValues = () => {
  const range = [
    { label: '12:00' },
    { label: '12:30' },
    { label: '13:00' },
    { label: '13:30' },
    { label: '14:00' },
    { label: '14:30' },
    { label: '15:00' },
  ];

  const [value, setValue] = useState({ label: '12:30' });

  return (
    <div>
      <output>{value.label}</output>
      <Slider onChange={(value) => setValue(value)} rangeValues={range} value={value} showTooltips containMarks />
      <button onClick={() => setValue({ label: '12:30' })}>Reset</button>
    </div>
  );
};
