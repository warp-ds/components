import React from 'react';
import { scaleQuantize } from 'd3-scale';
import { RangeSlider } from './index.ts';

const metadata = { title: 'Forms/Slider' };
export default metadata;

export const Wrapper = () => {
  const [value, setValue] = React.useState<[number, number]>([1000000, 10000000]);
  const [output, setOutput] = React.useState(value);
  return (
    <div style={{ paddingTop: '0px' }}>
      <output>
        {output[0]} - {output[1]} kr
      </output>
      <RangeSlider onChange={setValue} onInput={setOutput} min={1000000} max={10000000} step={50000} value={value} />
    </div>
  );
};
