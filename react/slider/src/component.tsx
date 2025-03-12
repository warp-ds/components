import { type RefObject, useCallback, useEffect, useRef, useState } from 'react';

import type { SliderProps } from './props.js';
import { clamp, clampValues, round, roundIfNumber } from './math.js';
import style from 'inline:./style.css';

const thumbWidth = 28;

type ObjectRangeValue = { label: string; [key: string]: any };

type RangeValue = string | ObjectRangeValue;

/*
Slider / range slider component.

This is a slider component that allows for either one or two thumbs (in the second case, known as a Range Slider),
with support for multiple input formats and a number of options.

The inputs can either be a min/max, or an array of specific values that define the range (here known as RangeValues).

## Implementation
The component is implemented using native input type="range" elements. These are used to render the sliders, and additional elements
are used for the active track, tooltips and markers / marker values.

For a single (non-range) slider, only one of the input elements is accessible. The internal data representation is the same, but only the second (upper)
value in the array is used.

## Performance
Since this component features draggable interactive elements, using a library like React, special attention has been paid to performance.

Many of the technical design / architecture choices of the component are focused on providing optimal rendering performance, leading to some unusual code.
In a lot of places, refs are used and style/properties/attributes are set directly, instead of setting them declaratively.

A cancelling timeout is used on value change, to provide smoother updates (and not overload rendering).

In short: any time you wonder: "why is this code written like this?" the answer is likely for performance.

During testing, 20x cpu slowdown has typically been used to gauge interaction performance.

## Interfaces / function overloading
Currently, function overloading is used to provide a range of specific interfaces, where onChange return types (and other props)
always match the given input format used, while also limiting the specific combinations of inputs that are allowed.
*/

// Default slider.
export function Slider(
  props: {
    max?: number;
    min?: number;
    value: number;
    onChange?: (value: number) => void;
    onChangeAfter?: (value: number) => void;
  } & SliderProps,
);
// With custom start/end values.
export function Slider(
  props: {
    max?: number;
    min?: number;
    value: number | string;
    onChange?: (value: number | string) => void;
    onChangeAfter?: (value: number | string) => void;
    // Optional start/end values to use in addition to the given range.
    startEndValues?: (string | null)[];
  } & SliderProps,
);
// With specific range values.
export function Slider(
  props: {
    rangeValues: RangeValue[];
    value: RangeValue;
    onChange?: (value: RangeValue) => void;
    onChangeAfter?: (value: RangeValue) => void;
  } & SliderProps,
);

// Range slider.
export function Slider(
  props: {
    max?: number;
    min?: number;
    values: number[];
    onChange?: (values: number[]) => void;
    onChangeAfter?: (values: number[]) => void;
  } & SliderProps,
);
// With custom start/end values.
export function Slider(
  props: {
    max?: number;
    min?: number;
    values: (number | string)[];
    onChange?: (values: (number | string)[]) => void;
    onChangeAfter?: (values: (number | string)[]) => void;
    startEndValues?: (string | null)[];
  } & SliderProps,
);
// With specific range values.
export function Slider(
  props: {
    rangeValues: RangeValue[];
    values: RangeValue[];
    onChange?: (values: RangeValue[]) => void;
    onChangeAfter?: (values: RangeValue[]) => void;
  } & SliderProps,
);

export function Slider({
  min = 0,
  max = 100,
  rangeValues,
  step = 1,
  value,
  values,
  disabled,
  onChange,
  onChangeAfter,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-valuetext': ariaValueText,
  keyboardStepFactor = 0.04,
  showTooltips = false,
  containTooltips = false,
  markers = false,
  markAlignment = 'center',
  startEndValues,
}: {
  max?: number;
  min?: number;
  rangeValues?: RangeValue[];
  value?: number | RangeValue;
  values?: (number | string)[] | RangeValue[];
  onChange?: any;
  onChangeAfter?: any;
  startEndValues?: (string | null)[];
} & SliderProps) {
  // Determine type.
  const type = values ? 'range' : 'standard';
  const isRange = type === 'range';

  if (rangeValues) {
    min = 0;
    max = rangeValues.length - 1;
  }

  const originalMin = min;
  const originalMax = max;

  if (startEndValues?.[0]) {
    min = min - step;
  }

  if (startEndValues?.[1]) {
    max = max + step;
  }

  // For a given range value (that appears in the rangevalue array), get the index.
  const getRangeValueIndex = useCallback((value: number | RangeValue) => {
    if (rangeValues) {
      if (typeof value === 'string') {
        return rangeValues?.findIndex((v) => v === value);
      } else {
        return rangeValues?.findIndex((v) => (v as ObjectRangeValue).label === (value as ObjectRangeValue).label);
      }
    } else {
      return 0;
    }
  }, []);

  // Get initial values. Like getValueArray, but converts range values to index values as well.
  const getInitialValues = useCallback(() => {
    let initialValues: number[] = [];
    if (rangeValues) {
      if (isRange && values) {
        initialValues = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
      } else if (value) {
        initialValues = [min, getRangeValueIndex(value)];
      }
    } else {
      initialValues = values
        ? getAdjustedValueArray(values as number[], step)
        : [min, getAdjustedValue(value as number, step)];

      if (values && !initialValues.every((v) => !Number.isNaN(v))) {
        return [min, max];
      }
    }
    return initialValues;
  }, []);

  // Get values in array form, using either the value or values prop.
  const getValueArray = () =>
    values ? getAdjustedValueArray(values as number[], step) : [min, getAdjustedValue(value as number, step)];

  // Current slider values.
  // In the rangeValues case, this represents the index (or indices) of the current values.
  const [currentValues, setCurrentValues] = useState<number[]>(() => getInitialValues());

  const [isMoving, setIsMoving] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Input refs.
  const input0 = useRef<HTMLElement>(null);
  const input1 = useRef<HTMLElement>(null);

  // Tooltip refs.
  const tooltip0 = useRef<HTMLElement>(null);
  const tooltip1 = useRef<HTMLElement>(null);
  const tooltipArrow0 = useRef<HTMLElement>(null);
  const tooltipArrow1 = useRef<HTMLElement>(null);

  const widthRef = useRef<any>(null);

  const timeoutId = useRef<any>(0);

  // Active state of the input elements.
  const [input0Active, setInput0Active] = useState(false);
  const [input1Active, setInput1Active] = useState(false);

  const renderToolTip0 = showTooltips && (isMoving || input0Active) && !input1Active;
  const renderToolTip1 = showTooltips && (isMoving || input1Active) && !input0Active;

  // Set active input element state (by checking focus state using the focusin/focusout events).
  useEffect(() => {
    const focusChange = () => {
      setInput0Active(document.activeElement === input0.current);
      setInput1Active(document.activeElement === input1.current);
    };

    document.addEventListener('focusin', focusChange);
    document.addEventListener('focusout', focusChange);

    return () => {
      document.removeEventListener('focusin', focusChange);
      document.removeEventListener('focusout', focusChange);
    };
  }, []);

  // Get the numerical value/values. Converts input values that are either numerical or startEndValues to numerical values.
  const getAsFullValue = useCallback((value: any, values: any) => {
    if (value && startEndValues) {
      const i = startEndValues.findIndex((v) => v === value);

      if (i !== -1) {
        value = i === 0 ? min : max;
      }
    } else if (values && startEndValues) {
      let value0 = values[0];
      let value1 = values[1];

      const i0 = startEndValues.findIndex((v) => v === values[0]);
      const i1 = startEndValues.findIndex((v) => v === values[1]);

      if (i0 !== -1) {
        value0 = i0 === 0 ? min : max;
      }

      if (i1 !== -1) {
        value1 = i1 === 0 ? min : max;
      }

      values = [value0, value1];
    }

    return { value, values };
  }, []);

  // Update current values on prop change.
  useEffect(() => {
    // Validation.
    if ((value && typeof value === 'number') || (values && typeof values[0] === 'number')) {
      validate(value as number, values as number[], min, max);
    }

    // If start/end values, convert to numerical value.
    if (!rangeValues && startEndValues) {
      const vals = getAsFullValue(value, values);

      value = vals.value;
      values = vals.values;
    }

    // Update values if the slider isn't currently selected.
    if (!(input0Active || input1Active)) {
      // If range values, lookup value index.
      if (rangeValues) {
        if (isRange && values) {
          values = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
        } else {
          value = getRangeValueIndex(value as number);
        }
      }

      const valueArray = getValueArray();

      setCurrentValues(valueArray);

      setStyle(valueArray);

      if (showTooltips) {
        setStyleTooltips(valueArray);
      }

      updateInputValues({ values: values as number[], value: value as number }, isRange, input0, input1);
    }
  }, [values, value]);

  // Init values.
  useEffect(() => {
    let val = value;
    let vals = values;

    if (rangeValues) {
      if (isRange && values) {
        vals = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
      } else {
        val = getRangeValueIndex(value as number);
      }
    }

    if (startEndValues) {
      const fullValues = getAsFullValue(value, values);

      val = fullValues.value;
      vals = fullValues.values;
    }

    updateInputValues({ values: vals as number[], value: val as number }, isRange, input0, input1);
  }, [input0.current, input1.current]);

  // Call onchangeafter.
  useEffect(() => {
    if (onChangeAfter && !isMoving) {
      onChangeAfter(getOnChangeReturnValue(currentValues));
    }
  }, [isMoving]);

  // Set value attributes.
  useEffect(() => {
    if (input0.current) input0.current.setAttribute('value', currentValues[0].toString());
    if (input1.current) input1.current.setAttribute('value', currentValues[1].toString());
  }, [currentValues]);

  const moveSlider = useCallback(
    (direction: 'left' | 'right', i: number) => {
      const multiplier = {
        left: -1,
        right: 1,
      };

      const d = max * keyboardStepFactor;

      const value = currentValues[i] + multiplier[direction] * d;

      const values = getAsValueArray(value, i, isRange, currentValues, min, max, step, true);

      updateInputValues({ values, value }, isRange, input0, input1);

      setNewValues(values, i);
    },
    [currentValues],
  );

  const onKeyDown = useCallback(
    (e: any, i: number) => {
      if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }

      if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
        setIsMoving(true);
        if (e.key === 'ArrowLeft') {
          moveSlider('left', i);
        }
        if (e.key === 'ArrowRight') {
          moveSlider('right', i);
        }
      }
    },
    [moveSlider],
  );

  // Handle range click.
  // Ensures the range endpoints are moved according to where in the range the user clicked.
  const onWrapperClick = useCallback(
    (e: any) => {
      // Clicking on the input thumb triggers the event for the input element.
      // Here, only handle click for clicking on the range, outside the thumb.
      if (!disabled && e.target.nodeName !== 'INPUT') {
        const x = e.touches ? getX(e) : e.nativeEvent.offsetX;

        const width = (wrapperRef.current as HTMLDivElement).clientWidth;

        const v = getAdjustedValue((x / width) * (max - min) + min, step);

        const midPoint = (currentValues[0] + currentValues[1]) / 2;

        // Update values.
        const index = v > getAdjustedValue(midPoint, step) ? 1 : 0;

        const values = getAsValueArray(v, index, isRange, currentValues, min, max, step);

        setNewValues(values, index);

        updateInputValues({ values, value: values[1] }, isRange, input0, input1);
      }
    },
    [values, value, currentValues],
  );

  // Set slider values.
  // Runs onchange/setvalues asynchronously, with a cancelling timeout, to optimize performance.
  const setNewValues = useCallback((values: number[], i: number) => {
    // Clear any previous timeout.
    clearTimeout(timeoutId.current);

    // Stop slider values from overlapping.
    if (isRange) {
      // Get distance between the two points in pxs.
      const getDistance = (values) => {
        const d = values[1] - values[0];

        const width = wrapperRef.current?.clientWidth || 500;

        const pxPerVal = width / (max - min);

        const pxDistance = d * pxPerVal;

        return pxDistance;
      };

      // If distance is less than thumbwidth, reset to next closest step.
      if (getDistance(values) < thumbWidth) {
        let colliding = true;

        while (colliding) {
          if (i === 0) {
            values[0] = values[0] - step;
          } else {
            values[1] = values[1] + step;
          }

          if (getDistance(values) >= thumbWidth) {
            colliding = false;
          }
        }
      }

      updateInputValues({ values, value: values[1] }, isRange, input0, input1);
    }

    // Run update and onchange async.
    timeoutId.current = setTimeout(() => {
      values = clampValues(values, min, max);

      setCurrentValues(values);

      if (showTooltips) {
        setStyleTooltips(values, i);
      }

      if (onChange) {
        const returnValue = getOnChangeReturnValue(values);

        onChange(returnValue);
      }
    }, 0.01);

    setStyle(values);
  }, []);

  // Get full, adjusted onChange value (including startEndValues, etc.)
  const getOnChangeReturnValue = (values: number[]) => {
    let returnValue: (number | RangeValue)[] | number | RangeValue;

    // When using a numerical range, use startEndValues in the return as well.
    if (!rangeValues) {
      const fullValues = getWithStartEndValues(values, startEndValues, originalMin, originalMax);

      returnValue = isRange
        ? [roundIfNumber(fullValues[0]), roundIfNumber(fullValues[1])]
        : roundIfNumber(fullValues[1]);
    }
    // For range values, do a lookup to get the range value items.
    else {
      returnValue = isRange ? [rangeValues[values[0]], rangeValues[values[1]]] : rangeValues[values[1]];
    }

    return returnValue;
  };

  const onInputChange = useCallback(
    (e: any, index: number) => {
      setIsMoving(true);

      const values = getAsValueArray(+e.target.value, index, isRange, currentValues, min, max, step);

      setNewValues(values, index);
    },
    [currentValues],
  );

  const onInputComplete = () => setIsMoving(false);

  // Get input element. Index corresponds to the slider thumb index (0 for the 1st one, 1 for the 2nd one).
  const inputElement = useCallback(
    (index: number, ref: RefObject<any>) => {
      if (!disabled) {
        return (
          <input
            ref={ref}
            type="range"
            step={step}
            min={min}
            max={max}
            onKeyDown={(e) => onKeyDown(e, index)}
            onKeyUp={() => setIsMoving(false)}
            onChange={(e) => onInputChange(e, index)}
            {...ariaData({ ariaLabel, ariaLabelledBy, ariaValueText })}
          />
        );
      } else {
        return <input type="range" disabled={true} value={currentValues[index]} min={min} max={max} />;
      }
    },
    [currentValues],
  );

  // Get div containing vertical lines (markers) and marker values.
  // Displays values either centered below the line, or justified to fit in the component.
  const getMarkerDiv = useCallback(() => {
    const getMarkerLines = () => Array.from(Array(2).keys()).map((k) => <div key={k} className="marker-line" />);

    const getMarkerValues = () =>
      Array.from(Array(2).keys()).map((k, i) => {
        let displayValue: string | number = '';

        displayValue = startEndValues?.[i] ? startEndValues[i] : (max - min) * k + min;

        return <div key={k}>{rangeValues ? getRangeValueItem(displayValue as number) : displayValue}</div>;
      });

    if (markAlignment === 'center') {
      return <div className="steps">{getMarkers()}</div>;
    } else {
      return (
        <div>
          <div className="steps">{getMarkerLines()}</div>
          <div className="markervalues">{getMarkerValues()}</div>
        </div>
      );
    }
  }, []);

  // Get the range value item text at the given index.
  const getRangeValueItem = useCallback((index: number) => {
    if (rangeValues) {
      const element = rangeValues[index];

      return typeof element === 'string' ? element : element.label;
    } else {
      return '';
    }
  }, []);

  // Get slider markers (steps), showing step values below the slider.
  // Used for center-aligned display values.
  const getMarkers = useCallback(
    () =>
      Array.from(Array(2).keys()).map((k, i) => {
        let displayValue: string | number = '';

        displayValue = startEndValues?.[i] ? startEndValues[i] : (max - min) * k + min;

        return (
          <div key={k} className="marker">
            <div className="marker-line" />
            <div className="marker-value">{rangeValues ? getRangeValueItem(displayValue as number) : displayValue}</div>
          </div>
        );
      }),
    [],
  );

  // Get full value as a display value.
  const getFullValue = useCallback(
    (index: number) => {
      // Default case: use numerical value
      if (!rangeValues) {
        const returnValues = getWithStartEndValues(currentValues, startEndValues, originalMin, originalMax);

        return returnValues[index];
      }
      // Range values: lookup value.
      else {
        const i = currentValues[index];

        return typeof rangeValues[i] === 'string' ? rangeValues[i] : rangeValues[i]?.label;
      }
    },
    [currentValues],
  );

  // Set track ref width.
  const setStyle = useCallback((values: number[]) => {
    if (trackRef.current) trackRef.current.style.cssText = getTrackStyle(values, wrapperRef, isRange, max, min);
  }, []);

  // Set tooltip positions.
  const setStyleTooltips = useCallback((values: number[], i = -1) => {
    // Get tooltip and arrow refs.
    const t0 = tooltip0.current;
    const t1 = tooltip1.current;
    const a0 = tooltipArrow0.current;
    const a1 = tooltipArrow1.current;

    const setStyles = (index: number) => {
      const css = getTooltipCSS(values, wrapperRef, isRange, max, min, index, widthRef, containTooltips);

      // Apply styles.
      [t0, t1, a0, a1].forEach((element, i) => Object.assign(element.style, css[i]));
    };

    // Set the style for the elements.
    if (i === -1) {
      // Initial style.
      if (t0 && t1 && a0 && a1) {
        for (const n of [0, 1]) {
          setStyles(n);
        }
      }
    } else {
      // On movement.
      if (t0 && t1 && a0 && a1) {
        setStyles(i);
      }
    }
  }, []);

  // Render the range input and tool tips.
  // For a range slider, render two sets of elements: one for the lower and one for the upper value.
  // For a standard (non-range) slider, only render the second (top) value elements.
  return (
    <>
      <style href="RangeSlider" precedence="medium">
        {style}
      </style>
      <div className={`wrapper ${disabled ? 'wrapper-disabled' : ''}`} onContextMenu={(e) => e.preventDefault()}>
        <div className="tooltips">
          <ToolTip display={renderToolTip0 && isRange} top={input0Active} ref={tooltip0}>
            {getFullValue(0)}
          </ToolTip>
          <ToolTip display={renderToolTip1} top={input1Active} ref={tooltip1}>
            {getFullValue(1)}
          </ToolTip>
          <ToolTipArrow display={renderToolTip0 && isRange} top={input0Active} ref={tooltipArrow0} />
          <ToolTipArrow display={renderToolTip1} top={input0Active} ref={tooltipArrow1} />
        </div>
        <div className="active-track" ref={trackRef} />
        <div
          className="input-wrapper"
          ref={wrapperRef}
          onMouseDown={onWrapperClick}
          onTouchStart={onWrapperClick}
          onKeyUp={onInputComplete}
          onMouseUp={onInputComplete}
          onTouchEnd={onInputComplete}
          onMouseOut={onInputComplete}
          onBlur={() => {
            /* todo */
          }}
        >
          {isRange && inputElement(0, input0)}
          {inputElement(1, input1)}
          {markers && getMarkerDiv()}
        </div>
      </div>
      <div className="width-check" ref={widthRef} />
    </>
  );
}

/**
 * Get full tooltip CSS, to set its position along the slider track.
 */
const getTooltipCSS = (
  currentValues: number[],
  wrapperRef: RefObject<HTMLElement>,
  isRange: boolean,
  max: number,
  min: number,
  i: number,
  widthref: RefObject<HTMLElement>,
  containTooltips: boolean,
) => {
  const width = wrapperRef.current?.clientWidth || 500;

  const left0 = ((currentValues[0] - min) / (max - min)) * width;
  const left1 = ((currentValues[1] - min) / (max - min)) * width;
  const [offset0, offset1] = getToolTipOffsets(currentValues, max, min);

  let l0 = left0 + offset0 + 0.37 * thumbWidth;
  let l1 = left1 + offset1 + 0.37 * thumbWidth;

  let r0 = false;
  let r1 = false;

  const lt0 = l0;
  const lt1 = l1;

  let tx0 = 'translateX(-50%)';
  let tx1 = 'translateX(-50%)';

  const ttx0 = tx0;
  const ttx1 = tx1;

  // If containTooltips is true, the tooltip boxes only move up to the start/end limits.
  if (containTooltips) {
    const boundingRect = (wrapperRef.current as HTMLDivElement).getBoundingClientRect();

    const left = boundingRect.left;
    const right = boundingRect.right;

    // The following code is needed in order to estimate (calculate) the width of the tooltip box, with
    // the given value, before it's rendered.
    //
    // This is needed so that an exact position can be determined, without first rendering and then adjusting the tooltip, which could cause some
    // flickering/stuttering.
    //
    // To do this, the value is rendered in the hidden width-check div, the width is then measured, and that value is used to calculate
    // tooltip size and alignment.
    const w = getEstimatedWidth(currentValues[i], widthref);

    const hw = w * 0.5;

    const th = thumbWidth * 0.5;

    if (isRange) {
      if (l0 + hw + th > right) {
        r0 = true;
        tx0 = '';
      }

      if (l0 - hw - th < left) {
        l0 = left;
        tx0 = '';
      }
    }

    if (l1 + hw + th > right) {
      tx1 = '';
      r1 = true;
    }

    if (l1 - hw - th < left) {
      l1 = left;
      tx1 = '';
    }

    return [
      {
        left: r0 ? '' : l0 + 'px',
        transform: `translateY(-39px) ${tx0}`,
      },
      {
        left: r1 ? '' : l1 + 'px',
        transform: `translateY(-39px) ${tx1}`,
      },
      {
        left: lt0 + 'px',
        transform: `translateY(-7.2px) ${ttx0}`,
      },
      {
        left: lt1 + 'px',
        transform: `translateY(-7.2px) ${ttx1}`,
      },
    ];
  } else {
    return [
      {
        left: l0 + 'px',
        transform: `translateY(-39px) ${tx0}`,
      },
      {
        left: l1 + 'px',
        transform: `translateY(-39px) ${tx1}`,
      },
      {
        left: lt0 + 'px',
        transform: `translateY(-7.2px) ${ttx0}`,
      },
      {
        left: lt1 + 'px',
        transform: `translateY(-7.2px) ${ttx1}`,
      },
    ];
  }
};

// Determine (estimate) the width of the tooltip box with the given value, using the width-check element.
const getEstimatedWidth = (val: number, widthRef: RefObject<HTMLElement>): any => {
  const r = widthRef.current;

  if (r) {
    r.innerText = val.toString();

    return r.clientWidth;
  }
};

// Get tooltip offsets, needed to center the tooltip over the thumb (which doesn't follow the active track exactly; see default input type="range" behavior.)
const getToolTipOffsets = (values: number[], max: number, min: number) => {
  const tooltipOffset1 = -((values[0] - min) / (max - min) - 0.5) * thumbWidth;
  const tooltipOffset2 = -((values[1] - min) / (max - min) - 0.5) * thumbWidth;

  return [tooltipOffset1, tooltipOffset2];
};

// Aria label data for the slider.
// https://www.digitala11y.com/slider-role/.
// https://www.w3.org/WAI/ARIA/apg/practices/range-related-properties/.
function ariaData({ ariaLabel, ariaLabelledBy, ariaValueText }: Record<string, string | undefined>) {
  return {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-valuetext': ariaValueText,
  };
}

// Validate the inputs.
function validate(value: number | undefined, values: number[] | undefined, min: number, max: number) {
  if ((value && value < min) || (values && values[0] < min)) {
    console.warn('Value too low.');
  }
  if ((value && value > max) || (values && values[1] > max)) {
    console.warn('Value too high.');
  }
}

// Set the values for the slider input elements.
function updateInputValues(
  { value, values }: { value?: number; values?: number[] },
  isRange: boolean,
  ref0: RefObject<any>,
  ref1: RefObject<any>,
) {
  if (isRange) {
    if (ref0.current) {
      ref0.current.value = (values as number[])[0];
    }
    if (ref1.current) {
      ref1.current.value = (values as number[])[1];
    }
  } else {
    if (ref1.current) {
      ref1.current.value = value;
    }
  }
}

// Use the given value to get full value array.
// Returns the value as an adjusted value (rounded, etc.).
const getAsValueArray = (
  value: number,
  index: number,
  isRange: boolean,
  currentValues: number[],
  min: number,
  max: number,
  step: number,
  clamp = false,
) => {
  let values: number[];

  value = Math.round(value);

  if (isRange) {
    if (index === 1) {
      values = [currentValues[0], value];
    } else {
      values = [value, currentValues[1]];
    }
  } else {
    values = [min, value];
  }

  if (clamp) {
    return clampValues(getAdjustedValueArray(values, step), min, max);
  } else {
    return getAdjustedValueArray(values, step);
  }
};

// Get active track style (to set track width).
const getTrackStyle = (
  currentValues: number[],
  wrapperRef: RefObject<HTMLElement>,
  isRange: boolean,
  max: number,
  min: number,
) => {
  let widthFraction = (currentValues[1] - currentValues[0]) / (max - min);

  const width = wrapperRef.current?.clientWidth || 500;

  // Warn if values are incorrect.
  if (widthFraction < 0 || widthFraction > 1) {
    console.warn('Values outside of range.');
    widthFraction = clamp(widthFraction, 0, 1);
  }

  const left = isRange ? ((currentValues[0] - min) / (max - min)) * width : 0;

  return `
    width: ${widthFraction * 100 + '%'};
    margin-left: ${left + 'px'};`;
};

// Toolip component that shows a given value above the slider thumb.
const ToolTip = ({
  display,
  top,
  children,
  ref,
}: { display: boolean; top: boolean; children: any; ref: RefObject<any> }) => {
  return (
    <div className="tooltip" style={{ visibility: display ? 'visible' : 'hidden', zIndex: top ? 10 : 1 }} ref={ref}>
      {children}
    </div>
  );
};

// Tooltip arrow, with settable visibility and order (z-index).
const ToolTipArrow = ({ display, top, ref }: { display: boolean; top: boolean; ref: RefObject<any> }) => {
  return (
    <svg
      style={{ visibility: display ? 'visible' : 'hidden', zIndex: top ? 10 : 1 }}
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <path
        d="M10.5858 6.58579L6.34315 2.34315C4.84285 0.842855 2.80802 0 0.686291 0H23.3137C21.192 0 19.1571 0.842852 17.6569 2.34314L13.4142 6.58579C12.6332 7.36684 11.3668 7.36684 10.5858 6.58579Z"
        fill="#1B1B1F"
      />
    </svg>
  );
};

// Get the x coordinate for the event target (using getBoundingClientRect).
const getX = (event: any) => {
  const e = event.target.getBoundingClientRect();
  const xCoordinate = event.touches[0].clientX - e.left;

  return round(xCoordinate);
};

// Get value adjusted with step amount.
const getAdjustedValue = (value: number, step: number) => {
  if (!(typeof step === 'string') && step > 1) {
    return round(value / step) * step;
  } else {
    return round(value);
  }
};

// Adjust array values.
const getAdjustedValueArray = (values: number[], step: number) => {
  return [getAdjustedValue(values[0], step), getAdjustedValue(values[1], step)];
};

// Convert the input values to full values (including start/end values).
const getWithStartEndValues = (
  values: number[],
  startEndValues: string[],
  originalMin: number,
  originalMax: number,
) => {
  const returnValues: (number | string | null)[] = [...values];

  if (startEndValues) {
    if (startEndValues[0] && values[0] < originalMin) {
      returnValues[0] = startEndValues[0];
    }

    if (startEndValues[0] && values[0] > originalMax) {
      returnValues[0] = startEndValues[1];
    }

    if (startEndValues[1] && values[1] > originalMax) {
      returnValues[1] = startEndValues[1];
    }

    if (startEndValues[1] && values[1] < originalMin) {
      returnValues[1] = startEndValues[0];
    }
  }

  return returnValues;
};
