import { RangeValue } from './CoreSlider.tsx';

export type Base = {
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

export type CoreSliderProps = {
  max?: number;
  min?: number;
  value?: number | string;
  values?: (number | RangeValue)[];
  onChange?: any;
  onChangeAfter?: any;
  startEndValues?: (string | null)[];
  rangeValues?: RangeValue[];
} & Base;
