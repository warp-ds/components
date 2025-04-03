import { scaleQuantize } from 'd3-scale';
import { useState } from 'react';
import { RangeSlider, RegularSlider } from './index.ts';
import { TextField } from '@warp-ds/react/components/textfield';

export default {
  title: 'Forms/Slider-v2',
};

export const Regular = () => {
  const [value, setValue] = useState(0);
  const [output, setOutput] = useState(value);
  return (
    <div>
      <output>{output}</output>
      <RegularSlider
        onChange={(value) => setValue(value)}
        onInput={setOutput}
        min={0}
        max={100}
        step={10}
        value={value}
      />
      <div
        style={{
          width: '50%',
          marginBottom: '10px',
          marginTop: '30px',
        }}
      >
        <TextField label="value" value={value.toString()} onChange={(e) => setValue(+e.target.value)} />
      </div>
    </div>
  );
};

export const DisabledRegular = () => {
  const [value, setValue] = useState(0);
  const [output, setOutput] = useState(value);
  return (
    <div>
      <output>{output}</output>
      <RegularSlider
        disabled
        onChange={(value) => setValue(value)}
        onInput={setOutput}
        min={0}
        max={100}
        step={10}
        value={value}
      />
      <div
        style={{
          width: '50%',
          marginBottom: '10px',
          marginTop: '30px',
        }}
      >
        <TextField label="value" disabled value={value.toString()} onChange={(e) => setValue(+e.target.value)} />
      </div>
    </div>
  );
};

export const RegularScaled = () => {
  const radiusScale = scaleQuantize().range([
    250, 500, 750, 1000, 1500, 2000, 3000, 4000, 5000, 7000, 10000, 15000, 20000, 30000, 60000, 100000, 150000, 200000,
    250000, 300000,
  ]);
  const [value, setValue] = useState(250);
  const [output, setOutput] = useState(value);
  return (
    <div>
      <output>
        {output >= 2000 ? Math.floor(output / 1000) : output} {output >= 2000 ? 'km' : 'm'}
      </output>
      <RegularSlider
        aria-label="Radius"
        onChange={(value) => setValue(value)}
        onInput={setOutput}
        min={250}
        max={300000}
        scale={radiusScale}
        value={value}
      />
      <div
        style={{
          width: '50%',
          marginBottom: '10px',
          marginTop: '30px',
        }}
      >
        <TextField label="value" value={value.toString()} onChange={(e) => setValue(+e.target.value)} />
      </div>
    </div>
  );
};

export const Ranged = () => {
  const [value, setValue] = useState<[number, number]>([1000000, 10000000]);
  const [output, setOutput] = useState(value);
  return (
    <div>
      <output>
        {output[0]} - {output[1]} kr
      </output>
      <RangeSlider onChange={setValue} onInput={setOutput} min={1000000} max={10000000} step={50000} value={value} />
      <div
        style={{
          width: '100%',
          marginBottom: '10px',
          display: 'grid',
          gridAutoFlow: 'column',
          gap: '25px',
          marginTop: '30px',
        }}
      >
        <TextField label="Min" value={value[0].toString()} onChange={(e) => setValue([+e.target.value, value[1]])} />
        <TextField label="Max" value={value[1].toString()} onChange={(e) => setValue([value[0], +e.target.value])} />
      </div>
    </div>
  );
};

export const RangedSimple = () => {
  const [value, setValue] = useState<[number, number]>([0, 100]);
  const [output, setOutput] = useState(value);
  return (
    <div>
      <output>
        {output[0]} - {output[1]} kr
      </output>
      <RangeSlider
        onChange={setValue}
        onInput={setOutput}
        min={0}
        max={100}
        step={5}
        value={value}
        aria-label={['Fra kr', 'Til kr']}
        aria-valuetext={[`${value[0]} kr`, `${value[1]} kr`]}
      />
      <div
        style={{
          width: '100%',
          marginBottom: '10px',
          display: 'grid',
          gridAutoFlow: 'column',
          gap: '25px',
          marginTop: '30px',
        }}
      >
        <TextField label="Min" value={value[0].toString()} onChange={(e) => setValue([+e.target.value, value[1]])} />
        <TextField label="Max" value={value[1].toString()} onChange={(e) => setValue([value[0], +e.target.value])} />
      </div>
    </div>
  );
};

export const DisabledRanged = () => {
  const [value, setValue] = useState<[number, number]>([1000000, 10000000]);
  const [output, setOutput] = useState(value);
  return (
    <div>
      <output>
        {output[0]} - {output[1]} kr
      </output>
      <RangeSlider
        disabled
        onChange={setValue}
        onInput={setOutput}
        min={1000000}
        max={10000000}
        step={50000}
        value={value}
      />
      <div
        style={{
          width: '100%',
          marginBottom: '10px',
          display: 'grid',
          gridAutoFlow: 'column',
          gap: '25px',
          marginTop: '30px',
        }}
      >
        <TextField label="Min" disabled value={value[0].toString()} onChange={(e) => setValue([+e.target.value, value[1]])} />
        <TextField label="Max" disabled value={value[1].toString()} onChange={(e) => setValue([value[0], +e.target.value])} />
      </div>
    </div>
  );
};
