export type RangeSliderProps = {
  /** String value that labels the slider. */
  'aria-label'?: [string, string];

  /** Identifies the element that labels the slider. */
  'aria-labelledby'?: [string, string];

  /** Human readable text alternative for the value. */
  'aria-valuetext'?: [string, string];

  /** Additional CSS class for the container. */
  className?: string;

  /** Whether the slider is disabled. */
  disabled?: boolean;

  /** Handler that is called every time the value of the slider changes. */
  onInput?: (value: [number, number]) => void;

  /** Handler that is called when the value of the slider has settled. */
  onChange?: (value: [number, number]) => void;

  /** The greatest value in the range of permitted values. */
  max?: number;

  /** The lowest value in the range of permitted values. */
  min?: number;

  // Show marks (steps) and mark values (at min/max values).
  showMarks?: boolean;

  /** Specifies the value granularity. */
  step?: number;

  /** The current value */
  value: [number, number];
};

export type RegularSliderProps = {
  /** String value that labels the slider. */
  'aria-label'?: string;

  /** Identifies the element that labels the slider. */
  'aria-labelledby'?: string;

  /** Human readable text alternative for the value. */
  'aria-valuetext'?: string;

  /** Additional CSS class for the container. */
  className?: string;

  /** Whether the slider is disabled. */
  disabled?: boolean;

  /** Handler that is called every time the value of the slider changes. */
  onInput?: (value: number) => void;

  /** Handler that is called when the value of the slider has settled. */
  onChange?: (value: number) => void;

  // Show marks (steps) and mark values (at min/max values).
  showMarks?: boolean;

  /** The greatest value in the range of permitted values. */
  max?: number;

  /** The lowest value in the range of permitted values. */
  min?: number;

  /** Specifies the value granularity. */
  step?: number;

  /** The current value. */
  value: number;
};

export enum Handle {
  Lower = 0,
  Upper = 1,
}
