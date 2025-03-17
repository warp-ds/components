import type { RangeValue } from './Slider.tsx';

type Base = {
  // Specifies the value granularity.
  step?: number;

  // Whether the slider is disabled.
  disabled?: boolean;

  // String value that labels the slider.
  'aria-label'?: string;

  // Identifies the element that labels the slider.
  'aria-labelledby'?: string;

  // Human readable text alternative for the value.
  'aria-valuetext'?: string;

  // Select the amount of movement per keyboard step (fraction from 0 to 1).
  keyboardStepFactor?: number;

  // Show markers (steps) and marker values (at min/max values).
  showMarkers?: boolean;

  // Show tooltips on dragging.
  showTooltips?: boolean;

  // Contain markers within the bounds of the component (justified along left/right edges).
  containMarkers?: boolean;

  // Contain tooltips to within the viewport.
  containTooltips?: boolean;
};

export type Slider = {
  max?: number;
  min?: number;
  value: number;
  onChange?: (value: number) => void;
  onChangeAfter?: (value: number) => void;
} & Base;

export type SliderStartEndValues = {
  max?: number;
  min?: number;
  value: number | string;
  onChange?: (value: number | string) => void;
  onChangeAfter?: (value: number | string) => void;
  // Optional start/end values to use in addition to the given range.
  startEndValues?: (string | null)[];
} & Base;

export type SliderRangeValues = {
  rangeValues: RangeValue[];
  value: RangeValue;
  onChange?: (value: RangeValue) => void;
  onChangeAfter?: (value: RangeValue) => void;
} & Base;

export type RangeSlider = {
  max?: number;
  min?: number;
  values: number[];
  onChange?: (values: number[]) => void;
  onChangeAfter?: (values: number[]) => void;
} & Base;

export type RangeSliderStartEndValues = {
  max?: number;
  min?: number;
  values: (number | string)[];
  onChange?: (values: (number | string)[]) => void;
  onChangeAfter?: (values: (number | string)[]) => void;
  startEndValues?: (string | null)[];
} & Base;

export type RangeSliderRangeValues = {
  rangeValues: RangeValue[];
  values: RangeValue[];
  onChange?: (values: RangeValue[]) => void;
  onChangeAfter?: (values: RangeValue[]) => void;
} & Base;

export type Props = {
  max?: number;
  min?: number;
  rangeValues?: RangeValue[];
  value?: number | RangeValue;
  values?: (number | string)[] | RangeValue[];
  onChange?: any;
  onChangeAfter?: any;
  startEndValues?: (string | null)[];
} & Base;
