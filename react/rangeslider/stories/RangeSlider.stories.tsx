import { useState } from 'react';
import { RangeSlider } from '../src/RangeSlider.tsx';
import { TextField } from '@warp-ds/react/components/textfield';

const metadata = { title: 'Forms/RangeSlider' };
export default metadata;

export const Regular = () => {
  const [values, setValues] = useState([20000, 40000]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider onChange={(values) => setValues(values)} values={values} min={10000} max={60000} />
      <button onClick={() => setValues([20000, 40000])}>Reset</button>
    </div>
  );
};

export const RegularWithInputs = () => {
  const [values, setValues] = useState([100, 900]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider onChange={(values) => setValues(values)} values={values} min={1} max={1000} />
      <div
        style={{
          width: '100%',
          marginBottom: '10px',
          display: 'grid',
          gridAutoFlow: 'column',
          gap: '25px',
        }}
      >
        <TextField value={values[0].toString()} onChange={(e) => setValues([+e.target.value, values[1]])} />
        <TextField value={values[1].toString()} onChange={(e) => setValues([values[0], +e.target.value])} />
      </div>
      <button onClick={() => setValues([100, 900])}>Reset</button>
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

  const [values, setValues] = useState([{ label: '12:30' }, { label: '14:30' }]);

  return (
    <div>
      <output>
        {values[0].label} - {values[1].label}
      </output>
      <RangeSlider
        rangeValues={range}
        onChange={(values) => setValues(values)}
        values={values}
        showTooltips
        containMarks
      />
      <button onClick={() => setValues([{ label: '12:30' }, { label: '14:30' }])}>Reset</button>
    </div>
  );
};
