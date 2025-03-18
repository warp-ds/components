import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { clamp, clampValues, roundPrecise, roundIfNumber } from './math.ts';
import { getTooltipCSS, Tooltip, TooltipArrow } from './Tooltip.tsx';
import style from 'inline:./style.css';
import { CoreSliderProps } from './props.ts';

export const thumbWidth = 28;

type ObjectRangeValue = { label: string; [key: string]: any };
export type RangeValue = string | ObjectRangeValue;
export type Ref = RefObject<HTMLElement>;

/*
Slider / range slider component.

This is a slider component that allows for either one or two thumbs (in the second case, known as a Range Slider),
with support for multiple input formats and a number of options.

The inputs can either be a min/max, or an array of specific values that define the range (here known as RangeValues).

## Implementation
The component is implemented using native input type="range" elements. These are used to render the sliders, and additional elements
are used for the active track, tooltips and marks.

For a single (non-range) slider, only one of the input elements is accessible. The internal data representation is the same, but only the second (upper)
value in the array is used.

## Performance
Since this component features draggable interactive elements, using a library like React, special attention has been paid to performance.

Many of the technical design / architecture choices of the component are focused on providing optimal rendering performance, leading to some unusual code.
In a lot of places, refs are used and style/properties/attributes are set directly, instead of setting them declaratively.

A cancelling timeout is used on value change, to provide smoother updates (and not overload rendering).

In short: any time you wonder: "why is this code written like this?" the answer is likely for performance.

During testing, 20x cpu slowdown has typically been used to gauge interaction performance.

## Core component
This core component is exposed through two interfaces:
 - Slider (standard slider)
 - Range slider (two values)

These are the user-facing functions, while this core function isn't exposed publicly.
*/
export function CoreSlider({
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
  containTooltips = true,
  showMarks = true,
  containMarks = false,
  startEndValues,
}: CoreSliderProps) {
  // Determine type.
  const type = values ? 'range' : 'standard';
  const isRange = type === 'range';

  if (rangeValues) {
    min = 0;
    max = rangeValues.length - 1;
  }

  if (startEndValues?.[0]) min = min - step;
  if (startEndValues?.[1]) max = max + step;

  // For a given range value (that appears in the rangevalue array), get the index.
  const getRangeValueIndex = useCallback((value: any) => {
    if (rangeValues) {
      return (rangeValues as any[]).findIndex((v) => (v.label ? v.label === value.label : v === value));
    }

    return 0;
  }, []);

  // Get initial values. Like getValueArray, but converts range values to index values as well.
  const getInitialValues = useCallback(() => {
    if (rangeValues) {
      return values ? [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])] : [min, getRangeValueIndex(value)];
    } else {
      return values ? getAdjustedValueArray(values as number[], step) : [min, getAdjustedValue(value as number, step)];
    }
  }, []);

  // Get values in array form, using either the value or values prop.
  const getValueArray = () =>
    values ? getAdjustedValueArray(values as number[], step) : [min, getAdjustedValue(value as number, step)];

  // Current slider values.
  // In the rangeValues case, this represents the index (or indices) of the current values.
  const [currentValues, setCurrentValues] = useState<number[]>(() => getInitialValues());
  const [isMoving, setIsMoving] = useState(false);

  // Element refs.
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<HTMLDivElement>(null);

  // Input refs.
  const input0 = useRef<HTMLElement>(null);
  const input1 = useRef<HTMLElement>(null);

  // Tooltip refs.
  const tooltip0 = useRef<HTMLDivElement>(null);
  const tooltip1 = useRef<HTMLDivElement>(null);
  const tooltipArrow0 = useRef<SVGSVGElement>(null);
  const tooltipArrow1 = useRef<SVGSVGElement>(null);

  const timeoutId = useRef<number>(0);

  // Active state of the input elements.
  const [input0Active, setInput0Active] = useState(false);
  const [input1Active, setInput1Active] = useState(false);

  const showTooltip0 = showTooltips && (isMoving || input0Active) && !input1Active;
  const showTooltip1 = showTooltips && (isMoving || input1Active) && !input0Active;

  const updateStyles = (values: number[], index = -1) => {
    setStyle(values);

    if (showTooltips) {
      setTooltipStyles(values, index);
    }
  };

  // Update styles on resize.
  useEffect(() => {
    const onResize = () => {
      updateStyles(currentValues);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [currentValues]);

  // Get the numerical value/values. Converts input values that are either numerical or startEndValues to numerical values.
  const getAsFullValues = useCallback((value: any, values: any) => {
    const toNumerical = (value: number | string) => {
      const index = startEndValues.findIndex((v) => v === value);

      if (index !== -1) return index === 0 ? min : max;

      return value;
    };

    if (value && startEndValues) {
      value = toNumerical(value);
    } else if (values && startEndValues) {
      values = [toNumerical(values[0]), toNumerical(values[1])];
    }

    return { value, values };
  }, []);

  // Update state (and properties, style) on prop change.
  useEffect(() => {
    // Validation.
    if (typeof value === 'number' || values?.every((v) => typeof v === 'number')) {
      validate(value as number, values as number[], min, max);
    }

    // Update values if the slider isn't currently selected.
    if (!(input0Active || input1Active)) {
      // If start/end values, convert to numerical value.
      if (!rangeValues && startEndValues) {
        const vals = getAsFullValues(value, values);

        value = vals.value;
        values = vals.values;
      }

      // If range values, lookup value index.
      if (rangeValues) {
        if (isRange) {
          values = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
        } else {
          value = getRangeValueIndex(value as number);
        }
      }

      const valueArray = getValueArray();

      setCurrentValues(valueArray);

      updateStyles(valueArray);

      updateInputValues({ values: values as number[], value: value as number }, isRange, input0, input1);
    }
  }, [values, value]);

  // Call onchangeafter.
  // Run on isMoving and on currentValues to run on dragging and on click.
  useEffect(() => {
    if (onChangeAfter && !isMoving) {
      onChangeAfter(getOnChangeReturnValue(currentValues));
    }
  }, [isMoving, currentValues]);

  // Set value attributes.
  useEffect(() => {
    if (input0.current) input0.current.setAttribute('value', currentValues[0].toString());
    if (input1.current) input1.current.setAttribute('value', currentValues[1].toString());
  }, [currentValues]);

  const moveSlider = useCallback(
    (direction: 'left' | 'right', i: number) => {
      const multiplier = { left: -1, right: 1 };

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
      const getDistance = (values: number[]) => {
        const valueDiff = values[1] - values[0];

        const width = wrapperRef.current?.clientWidth || 0;

        const pxPerVal = (width - thumbWidth) / (max - min);

        const pxDistance = valueDiff * pxPerVal;

        return pxDistance;
      };

      // If distance is less than thumbwidth, reset to next closest step.
      if (getDistance(values) < thumbWidth) {
        const valPerPx = (max - min) / ((wrapperRef.current?.clientWidth || 0) - thumbWidth);

        // Get px size as value, and offset with that amount.
        if (i === 0) {
          values[0] = getAdjustedFloorValue(values[1] - valPerPx * thumbWidth, step);
        } else {
          values[1] = getAdjustedCeilValue(values[0] + valPerPx * thumbWidth, step);
        }
      }

      updateInputValues({ values, value: values[1] }, isRange, input0, input1);
    }

    // Run update and onchange async.
    timeoutId.current = setTimeout(() => {
      values = clampValues(values, min, max);

      setCurrentValues(values);

      if (onChange) {
        onChange(getOnChangeReturnValue(values));
      }
    }, 0.01);

    updateStyles(values, i);
  }, []);

  // Get full, adjusted onChange value (including startEndValues, etc.)
  const getOnChangeReturnValue = useCallback((values: number[]) => {
    if (!rangeValues) {
      const fullValues = getWithStartEndValues(values, startEndValues, min, max);

      return isRange ? [roundIfNumber(fullValues[0]), roundIfNumber(fullValues[1])] : roundIfNumber(fullValues[1]);
    }
    // For range values, do a lookup to get the range value items.
    else {
      return isRange ? [rangeValues[values[0]], rangeValues[values[1]]] : rangeValues[values[1]];
    }
  }, []);

  // Input element onChange handler.
  const onInputChange = useCallback(
    (e: any, index: number) => {
      setIsMoving(true);

      const values = getAsValueArray(+e.target.value, index, isRange, currentValues, min, max, step);

      setNewValues(values, index);
    },
    [currentValues],
  );

  const onInputComplete = () => setIsMoving(false);

  // Get the range value item text at the given index.
  const getRangeValueItem = useCallback((index: number) => {
    const element = rangeValues[index];

    return typeof element === 'string' ? element : element.label;
  }, []);

  // Get full value as a display value.
  const getFullValue = useCallback(
    (index: number) => {
      // Default case: use numerical value
      if (!rangeValues) {
        const returnValues = getWithStartEndValues(currentValues, startEndValues, min, max);

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
  const setTooltipStyles = useCallback((values: number[], i = -1) => {
    const setStyles = (index: number) => {
      const css = getTooltipCSS(
        values,
        getWithStartEndValues(values, startEndValues, min, max),
        wrapperRef,
        isRange,
        max,
        min,
        index,
        widthRef,
        containTooltips,
      );

      // Apply styles.
      [tooltip0, tooltip1, tooltipArrow0, tooltipArrow1].forEach((ref, i) => Object.assign(ref.current.style, css[i]));
    };

    // Set the style for the elements.
    if (i === -1) {
      [0, 1].forEach((n) => setStyles(n));
    } else {
      setStyles(i);
    }
  }, []);

  // Set active state, in order to show tooltips for the current active element.
  const setActiveState = useCallback(() => {
    // On mobile, don't set the active state here since it sets it to true on wrapper click.
    if (!isTouchDevice()) {
      setInput0Active(document.activeElement === input0.current);
      setInput1Active(document.activeElement === input1.current);
    }
  }, []);

  // Get input element. Index corresponds to the slider thumb index (0 for the 1st one, 1 for the 2nd one).
  const inputElement = useCallback(
    (index: number, ref: RefObject<any>) => {
      if (!disabled) {
        return (
          <input
            className="w-slider__input"
            ref={ref}
            type="range"
            step={step}
            min={min}
            max={max}
            onKeyDown={(e) => onKeyDown(e, index)}
            onKeyUp={() => setIsMoving(false)}
            onChange={(e) => onInputChange(e, index)}
            onTouchStart={(e) => {
              index === 0 ? setInput0Active(true) : setInput1Active(true);

              isTouchDevice() && (e.target as HTMLElement).focus();
            }}
            onTouchEnd={() => (index === 0 ? setInput0Active(false) : setInput1Active(false))}
            {...ariaData({ ariaLabel, ariaLabelledBy, ariaValueText })}
          />
        );
      } else {
        return (
          <input
            className="w-slider__input"
            type="range"
            disabled={true}
            value={currentValues[index]}
            min={min}
            max={max}
          />
        );
      }
    },
    [currentValues],
  );

  // Get marks and mark values.
  // Displays values either centered below the line, or justified to fit in the component.
  const getMarks = useCallback(() => {
    const markLines = () => [...Array(2).keys()].map((k) => <div key={k} className="w-slider__mark-line" />);

    const markValues = () =>
      [...Array(2).keys()].map((k) => {
        const displayValue = startEndValues?.[k] ? startEndValues[k] : (max - min) * k + min;

        return <div key={k}>{rangeValues ? getRangeValueItem(displayValue as number) : displayValue}</div>;
      });

    const marks = () =>
      [...Array(2).keys()].map((k) => {
        const displayValue = startEndValues?.[k] ? startEndValues[k] : (max - min) * k + min;

        return (
          <div key={k} className="w-slider__mark">
            <div className="w-slider__mark-line" />
            <div className="w-slider__mark-value">
              {rangeValues ? getRangeValueItem(displayValue as number) : displayValue}
            </div>
          </div>
        );
      });

    if (containMarks) {
      return (
        <div>
          <div className="w-slider__steps">{markLines()}</div>
          <div className="w-slider__markvalues">{markValues()}</div>
        </div>
      );
    } else {
      return <div className="w-slider__steps">{marks()}</div>;
    }
  }, []);

  // Render the range input and tool tips.
  // For a range slider, render two sets of elements: one for the lower and one for the upper value.
  // For a standard (non-range) slider, only render the second (top) value elements.
  return (
    <div className="w-slider">
      <style href="RangeSlider" precedence="medium">
        {style}
      </style>
      <div
        className={`w-slider__wrapper ${disabled ? 'w-slider__wrapper-disabled' : ''}`}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="w-slider__tooltips">
          <Tooltip display={showTooltip0 && isRange} ref={tooltip0}>
            {getFullValue(0)}
          </Tooltip>
          <Tooltip display={showTooltip1} ref={tooltip1}>
            {getFullValue(1)}
          </Tooltip>
          <TooltipArrow display={showTooltip0 && isRange} ref={tooltipArrow0} />
          <TooltipArrow display={showTooltip1} ref={tooltipArrow1} />
        </div>
        <div className="w-slider__active-track" ref={trackRef} />
        <div
          className="w-slider__input-wrapper"
          ref={wrapperRef}
          onMouseDown={onWrapperClick}
          onTouchStart={onWrapperClick}
          onKeyUp={onInputComplete}
          onMouseUp={onInputComplete}
          onTouchEnd={onInputComplete}
          onMouseOut={onInputComplete}
          onBlur={setActiveState}
          onFocus={setActiveState}
        >
          {isRange && inputElement(0, input0)}
          {inputElement(1, input1)}
        </div>
        {showMarks && getMarks()}
      </div>
      <div className="w-slider__width-check" ref={widthRef} />
    </div>
  );
}

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
      ref0.current.value = values[0];
    }
    if (ref1.current) {
      ref1.current.value = values[1];
    }
  } else {
    if (ref1.current) {
      ref1.current.value = value;
    }
  }
}

// Get a full value array, using the given value (combining it with an existing value for the other index).
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

  if (isRange) {
    values = index === 1 ? [currentValues[0], value] : [value, currentValues[1]];
  } else {
    values = [min, value];
  }

  if (clamp) {
    return clampValues(getAdjustedValueArray(values, step), min, max);
  } else {
    return getAdjustedValueArray(values, step);
  }
};

// Get value adjusted with step amount.
const getAdjustedValue = (value: number, step: number) => {
  if (step > 1) {
    return roundPrecise(value / step) * step;
  } else {
    return roundPrecise(value);
  }
};

// Adjust array values.
const getAdjustedValueArray = (values: number[], step: number) => {
  return [getAdjustedValue(values[0], step), getAdjustedValue(values[1], step)];
};

const getAdjustedCeilValue = (value: number, step: number) => Math.ceil(value / step) * step;

const getAdjustedFloorValue = (value: number, step: number) => Math.floor(value / step) * step;

// Get active track style (to set track width).
const getTrackStyle = (currentValues: number[], wrapperRef: Ref, isRange: boolean, max: number, min: number) => {
  let widthFraction = (currentValues[1] - currentValues[0]) / (max - min);

  const width = wrapperRef.current?.clientWidth || 0;

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

// Get the x coordinate for the event target (using getBoundingClientRect).
const getX = (event: any) => {
  const clientRect = event.target.getBoundingClientRect();
  const xCoordinate = event.touches[0].clientX - clientRect.left;

  return roundPrecise(xCoordinate);
};

// Convert the input values to full values (including start/end values).
const getWithStartEndValues = (values: number[], startEndValues: string[], min: number, max: number) => {
  const returnValues: (number | string | null)[] = [...values];

  if (startEndValues) {
    if (startEndValues[0] && values[0] === min) {
      returnValues[0] = startEndValues[0];
    }

    if (startEndValues[1] && values[0] === max) {
      returnValues[0] = startEndValues[1];
    }

    if (startEndValues[0] && values[1] === min) {
      returnValues[1] = startEndValues[0];
    }

    if (startEndValues[1] && values[1] === max) {
      returnValues[1] = startEndValues[1];
    }
  }

  return returnValues;
};

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
