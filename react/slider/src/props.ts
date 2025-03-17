import { RangeValue } from './core/CoreSlider.tsx';
import { Base } from './core/props.ts';

export type SliderProps = {
  max?: number;
  min?: number;
  value: number | string;
  startEndValues?: (string | null)[];
  rangeValues?: RangeValue[];
  onChange?: ((value: number) => void) | ((value: RangeValue) => void);
  onChangeAfter?: ((value: number) => void) | ((value: RangeValue) => void);
} & Base;
