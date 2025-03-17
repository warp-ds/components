import * as React from 'react';
import { RangeSlider } from '../src/RangeSlider.tsx';

const metadata = { title: 'Forms/RangeSlider' };
export default metadata;

export const Range = () => {
  const [values, setValues] = React.useState([1000, 5008970]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={1000}
        max={10_000_000}
        step={1000}
        showTooltips
        showMarkers
        containMarkers
      />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>
  );
};

export const Range2 = () => {
  const [values, setValues] = React.useState([100, 1500]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={100}
        max={1500}
        step={10}
        showTooltips
        showMarkers
      />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>
  );
};

export const Range3 = () => {
  const [values, setValues] = React.useState([-100, 100]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={-150}
        max={150}
        step={1}
        showTooltips
        showMarkers
      />
      <button onClick={() => setValues([-100, 100])}>Reset</button>
    </div>
  );
};

export const Range4 = () => {
  const [values, setValues] = React.useState([1000, 9000]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={0}
        max={10000}
        step={100}
        showTooltips
        showMarkers
      />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>
  );
};

export const Range5 = () => {
  const [values, setValues] = React.useState([10, 1000]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={(nums) => setValues(nums)} min={0} max={4000} showTooltips showMarkers />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>
  );
};

export const Range6 = () => {
  const [values, setValues] = React.useState([0, 10000]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={0}
        max={10000}
        showTooltips
        showMarkers
        step={100}
      />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>
  );
};

export const Range7 = () => {
  const [values, setValues] = React.useState([1, 15]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={0}
        max={20}
        step={1}
        showTooltips
        showMarkers
      />
      <button onClick={() => setValues([1, 15])}>Reset</button>
    </div>
  );
};

export const Range8 = () => {
  const [values, setValues] = React.useState([1000, 5000]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={1000}
        max={5000}
        startEndValues={['Less than 1000', 'Over 5000']}
        step={100}
        showTooltips
        showMarkers
        containMarkers
      />
      <button onClick={() => setValues([1000, 5000])}>Reset</button>
    </div>
  );
};

export const Range9 = () => {
  const [values, setValues] = React.useState<string[]>(['Less than 1000', 'Over 5000']);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={1000}
        max={5000}
        startEndValues={['Less than 1000', 'Over 5000']}
        step={100}
        showTooltips
        showMarkers
        containMarkers
      />
      <button onClick={() => setValues(['Less than 1000', 'Over 5000'])}>Reset</button>
    </div>
  );
};

export const Range10changeafter = () => {
  const [values, setValues] = React.useState(['Less than 1000', 'Over 5000']);
  const [values2, setValues2] = React.useState(['Less than 1000', 'Over 5000']);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <br />
      <output>
        {values2[0]} - {values2[1]}
      </output>
      <RangeSlider
        values={values}
        onChange={(nums) => setValues(nums)}
        onChangeAfter={(nums) => setValues2(nums)}
        min={1000}
        max={5000}
        startEndValues={['Less than 1000', 'Over 5000']}
        step={100}
        showTooltips
        showMarkers
        containMarkers
      />
      {/* biome-ignore lint/style/noCommaOperator: <explanation> */}
      <button onClick={() => (setValues(['Less than 1000', 'Over 5000']), setValues2(['Less than 1000', 'Over 5000']))}>
        Reset
      </button>
    </div>
  );
};

export const DualRangeValues = () => {
  const [values, setValues] = React.useState(['yes', '1']);

  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        onChange={(values) => setValues(values)}
        values={values}
        rangeValues={range}
        showTooltips
        showMarkers
      />
      <button onClick={() => setValues(['yes', '1'])}>Reset</button>
    </div>
  );
};

export const DualRangeValues2 = () => {
  const [values, setValues] = React.useState(['06:30', '08:30']);

  const range = ['06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00'];

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider
        onChange={(values) => setValues(values)}
        values={values}
        rangeValues={range}
        showTooltips
        showMarkers
      />
      <button onClick={() => setValues(['06:30', '08:30'])}>Reset</button>
    </div>
  );
};

export const DualRangeValues3 = () => {
  const [values, setValues] = React.useState([
    {
      label: '01/01',
    },
    {
      label: '06/01',
    },
  ]);

  const range = [
    {
      label: '01/01',
    },
    {
      label: '02/01',
    },
    {
      label: '03/01',
    },
    {
      label: '04/01',
    },
    {
      label: '05/01',
    },
    {
      label: '06/01',
    },
  ];

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>
        {values[0].label} - {values[1].label}
      </output>
      <RangeSlider
        onChange={(vals) => setValues(vals as typeof values)}
        values={values}
        rangeValues={range}
        showTooltips
        showMarkers
      />
      <button
        onClick={() =>
          setValues([
            {
              label: '01/01',
            },
            {
              label: '06/01',
            },
          ])
        }
      >
        Reset
      </button>
    </div>
  );
};
