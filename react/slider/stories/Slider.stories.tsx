import { useState } from 'react';
import { Slider } from '../src/Slider.tsx';

const metadata = { title: 'Forms/Slider' };
export default metadata;

export const Regular = () => {
  const [value, setValue] = useState(20000);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Regular1 = () => {
  const [value, setValue] = useState(10000);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Regular2 = () => {
  const [value, setValue] = useState(20000);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={10000}
        max={60000}
        showTooltips
        showMarkers
        step={100}
      />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Regular3 = () => {
  const [value, setValue] = useState(20000);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={10000}
        max={60000}
        showTooltips
        showMarkers
        step={100}
      />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Regular4 = () => {
  const [value, setValue] = useState(3);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={0} max={6} showTooltips showMarkers />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>
  );
};

export const Regular5 = () => {
  const [value, setValue] = useState(3);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={1} max={8} showTooltips showMarkers />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>
  );
};

export const Regular6 = () => {
  const [value, setValue] = useState(3);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={2}
        max={10}
        showTooltips
        showMarkers
        containMarkers
        startEndValues={['Less than 2', 'gt 10']}
      />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>
  );
};

export const Regular7 = () => {
  const [value, setValue] = useState(3);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={2}
        max={10}
        showTooltips
        showMarkers
        startEndValues={[null, 'gt 10']}
      />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>
  );
};

export const RegularRangeValues = () => {
  const [value, setValue] = useState('yes');

  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} rangeValues={range} showTooltips showMarkers />
      <button onClick={() => setValue('yes')}>Reset</button>
    </div>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(625_000);
  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{value}</output>
      <Slider onChange={(val) => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>
  );
};

export const ChangeAfter = () => {
  const [value, setValue] = useState(625_000);
  const [valueAfter, setValueAfter] = useState(value);

  return (
    <div style={{ maxWidth: '500px' }}>
      <output>{valueAfter}</output>
      <Slider
        onChange={(val) => setValue(val)}
        onChangeAfter={(val) => setValueAfter(val)}
        value={value}
        min={1000}
        max={10_000_000}
        step={1000}
      />
    </div>
  );
};
