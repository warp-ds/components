import { RangeValue } from '../../slider/src/core/CoreSlider.tsx';
import { Base } from '../../slider/src/core/props.ts';

export type RangeSliderProps = {
  max?: number;
  min?: number;
  values: number[] | RangeValue[];
  startEndValues?: (string | null)[];
  rangeValues?: RangeValue[];
  onChange?: ((values: number[]) => void) | ((values: RangeValue[]) => void);
  onChangeAfter?: ((values: number[]) => void) | ((values: RangeValue[]) => void);
} & Base;
