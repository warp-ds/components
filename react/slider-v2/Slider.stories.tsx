import { TextField } from '@warp-ds/react/components/textfield';
import { useState } from 'react';
import { RangeSlider, RegularSlider } from './index.ts';

export default {
  title: 'Forms/Slider-v2',
};

export const Regular = () => {
  const [value, setValue] = useState(0);
  const [output, setOutput] = useState(value);
  return (
    <div style={{ width: '320px' }}>
      <RegularSlider
        onChange={(value) => setValue(value)}
        onInput={setOutput}
        min={0}
        max={100}
        step={10}
        value={value}
        showMarks={true}
      />
      <div className="w-slider__input">
        <TextField
          label="value"
          value={value.toString()}
          onChange={(e) => setValue(+e.target.value)}
        />
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
      <div className="w-slider__input">
        <TextField
          label="value"
          disabled
          value={value.toString()}
          onChange={(e) => setValue(+e.target.value)}
        />
      </div>
    </div>
  );
};

export const Ranged = () => {
  const [value, setValue] = useState<[number, number]>([
    1000000, 10000000,
  ]);
  const [output, setOutput] = useState(value);
  const [errorMax, setErrorMax] = useState(false);
  const [errorMin, setErrorMin] = useState(false);

  const onBlurMax = () => {
    if (value[1] < value[0]) {
      setErrorMax(true);
    } else {
      setErrorMax(false);
    }
  };
  const onBlurMin = () => {
    if (value[0] > value[1]) {
      setErrorMin(true);
    } else {
      setErrorMin(false);
    }
  };

  return (
    <div>
      <output>
        {output[0]} - {output[1]} kr
      </output>
      <RangeSlider
        onChange={setValue}
        onInput={setOutput}
        min={1000000}
        max={10000000}
        step={50000}
        value={value}
      />
      <div className="w-slider__input">
        <TextField
          label="Min"
          value={value[0].toString()}
          type="number"
          invalid={errorMin}
          helpText={errorMin ? 'Min cannot be greater than max' : ''}
          onBlur={onBlurMin}
          onChange={(e) => setValue([+e.target.value, value[1]])}
        />
        <TextField
          label="Max"
          value={value[1].toString()}
          type="number"
          invalid={errorMax}
          helpText={errorMax ? 'Max cannot be lower than min' : ''}
          onBlur={onBlurMax}
          onChange={(e) => setValue([value[0], +e.target.value])}
        />
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
      <div className="w-slider__input">
        <TextField
          label="Min"
          value={value[0].toString()}
          onChange={(e) => setValue([+e.target.value, value[1]])}
        />
        <TextField
          label="Max"
          value={value[1].toString()}
          onChange={(e) => setValue([value[0], +e.target.value])}
        />
      </div>
    </div>
  );
};

export const DisabledRanged = () => {
  const [value, setValue] = useState<[number, number]>([
    1000000, 10000000,
  ]);
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
      <div className="w-slider__input">
        <TextField
          label="Min"
          disabled
          value={value[0].toString()}
          onChange={(e) => setValue([+e.target.value, value[1]])}
        />
        <TextField
          label="Max"
          disabled
          value={value[1].toString()}
          onChange={(e) => setValue([value[0], +e.target.value])}
        />
      </div>
    </div>
  );
};
