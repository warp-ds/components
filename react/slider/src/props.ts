export type SliderProps = {
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
  markers?: boolean;

  // Show tooltips on dragging.
  showTooltips?: boolean;

  // Align mark values in center or contained within the bounds of the component (justified).
  markAlignment?: 'center' | 'justified';

  // Choose whether to contain tooltips to within bounds.
  containTooltips?: boolean;
};
