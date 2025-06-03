import style from 'inline:./w-slider.css';
import { Attention } from '@warp-ds/react/components/attention';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { getMarks } from './Marks.tsx';
import { Handle, type RangeSliderProps } from './props.ts';
import {
  clamp,
  nextValue,
  prevValue,
  ratioToValue,
  valueToRatio,
} from './utils.ts';

export const RangeSlider = ({
  className,
  disabled = false,
  value: values,
  onInput = () => {},
  onChange = () => {},
  max = 100,
  min = 0,
  step = 1,
  showMarks = true,
  ...props
}: RangeSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleLowerRef = useRef<HTMLDivElement>(null);
  const handleUpperRef = useRef<HTMLDivElement>(null);
  const [showLowerHandle, setShowLowerHandle] = useState(false);
  const [showUpperHandle, setShowUpperHandle] = useState(false);

  // Local state for the “ratio” positions (0 to 1) of each handle
  const [ratios, setRatios] = useState({
    lower: valueToRatio(values[Handle.Lower], min, max),
    upper: valueToRatio(values[Handle.Upper], min, max),
  });

  // A ref to keep track of the current values during dragging.
  const internalValue = useRef([...values]);
  // A flag to indicate if a drag is in progress.
  const [isDragging, setIsDragging] = useState(false);
  // Ref to store drag-related state (which handle and slider bounding rect)
  const draggingRef = useRef<{
    handle: Handle;
    sliderRect: DOMRect;
  } | null>(null);

  // Update internal state if prop values change.
  useEffect(() => {
    setRatios({
      lower: valueToRatio(values[Handle.Lower], min, max),
      upper: valueToRatio(values[Handle.Upper], min, max),
    });
    internalValue.current = [...values];
  }, [values, min, max]);

  // When a new value is committed (via key press or drag end)
  const handleChange = (value: number, handle: Handle) => {
    if (values[handle] !== value) {
      const newValues = values.slice() as [number, number];
      newValues[handle] = value;
      onChange(newValues);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    handle: Handle = Handle.Lower
  ) => {
    if (disabled) return;

    const oldValue = values[handle];
    let newValue: number;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'PageDown':
        newValue = prevValue(oldValue, step);
        break;
      case 'ArrowUp':
      case 'ArrowRight':
      case 'PageUp':
        newValue = nextValue(oldValue, step);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
    }

    if (newValue != null) {
      newValue = clamp(
        newValue,
        handle === Handle.Lower ? min : values[Handle.Lower],
        handle === Handle.Upper ? max : values[Handle.Upper]
      );
      const newValues = values.slice() as [number, number];
      newValues[handle] = newValue;
      onInput(newValues);
      handleChange(newValue, handle);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  // DRAG HANDLING

  const onStartDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;

    if (handleLowerRef.current === e.target) {
      setShowLowerHandle(true);
    } else if (handleUpperRef.current === e.target) {
      setShowUpperHandle(true);
    }

    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);

    // Determine which handle to drag
    let dragHandle: Handle;
    if (values[Handle.Lower] === max) {
      dragHandle = Handle.Lower;
    } else if (values[Handle.Upper] === min) {
      dragHandle = Handle.Upper;
    } else {
      const lowerDiff = Math.abs(ratios.lower - ratio);
      const upperDiff = Math.abs(ratios.upper + 0.0001 - ratio);
      dragHandle =
        lowerDiff < upperDiff ? Handle.Lower : Handle.Upper;
    }
    draggingRef.current = { handle: dragHandle, sliderRect: rect };
    setIsDragging(true);

    // Add event listeners on document for dragging
    if ('touches' in e) {
      document.addEventListener('touchmove', onDrag, {
        passive: false,
      });
      document.addEventListener('touchend', onEndDrag);
    } else {
      document.addEventListener('mousemove', onDrag);
      document.addEventListener('mouseup', onEndDrag);
    }
    e.preventDefault();
  };

  const onDrag = (e: MouseEvent | TouchEvent) => {
    let clientX = 0;
    if ('touches' in e) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
      } else {
        return;
      }
    } else {
      clientX = e.clientX;
    }

    const dragState = draggingRef.current;
    if (!dragState) return;

    const { handle, sliderRect } = dragState;

    // 1. Calculate raw ratio from pointer position
    let ratio = clamp((clientX - sliderRect.left) / sliderRect.width, 0, 1);

    // 2. Dynamically measure thumb width
    const thumbEl = handle === Handle.Lower ? handleLowerRef.current : handleUpperRef.current;
    const thumbWidth = thumbEl?.offsetWidth ?? 28; // fallback
    const minRatioGap = thumbWidth / sliderRect.width;

    // 3. Apply collision clamping based on other thumb’s ratio
    if (handle === Handle.Lower) {
      const upperRatio = valueToRatio(internalValue.current[Handle.Upper], min, max);
      ratio = clamp(ratio, 0, upperRatio - minRatioGap);
    } else {
      const lowerRatio = valueToRatio(internalValue.current[Handle.Lower], min, max);
      ratio = clamp(ratio, lowerRatio + minRatioGap, 1);
    }

    // 4. Convert ratio to value and update
    const dragValue = ratioToValue(ratio, min, max, step);
    // Optional snap when thumbs visually collide
    const otherHandle = handle === Handle.Lower ? Handle.Upper : Handle.Lower;
    const otherValue = internalValue.current[otherHandle];
    const valueGap = Math.abs(dragValue - otherValue);

  // Snap thumbs if values are close enough
  if (valueGap <= step) {
    internalValue.current[Handle.Lower] = dragValue;
    internalValue.current[Handle.Upper] = dragValue;
    setRatios({
      lower: valueToRatio(dragValue, min, max),
      upper: valueToRatio(dragValue, min, max),
    });
    onInput([dragValue, dragValue]);
    handleChange(dragValue, Handle.Lower);
    handleChange(dragValue, Handle.Upper);
    return; // done
  }

    if (dragValue !== internalValue.current[handle]) {
      internalValue.current[handle] = dragValue;
      onInput([...internalValue.current] as [number, number]);
      setRatios((prev) =>
        handle === Handle.Lower
          ? { ...prev, lower: ratio }
          : { ...prev, upper: ratio }
      );
    }

    e.preventDefault();
  };

  const onEndDrag = (e: MouseEvent | TouchEvent) => {
    if ('touches' in e) {
      document.removeEventListener('touchmove', onDrag);
      document.removeEventListener('touchend', onEndDrag);
    } else {
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', onEndDrag);
    }
    setShowLowerHandle(false);
    setShowUpperHandle(false);
    const dragState = draggingRef.current;
    if (dragState) {
      const { handle } = dragState;
      const finalValue = internalValue.current[handle];
      handleChange(finalValue, handle);
    }
    setIsDragging(false);
    draggingRef.current = null;
    e.preventDefault();
  };

  return (
    <>
      <style href="w-slider" precedence="medium">
        {style}
      </style>
      <fieldset>
        <legend className="w-slider__label">Some title</legend>
        <div
          onMouseDown={onStartDrag}
          onTouchStart={onStartDrag}
          data-body-scroll-lock-ignore
          className={classNames(
            'w-slider',
            { 'w-slider--is-disabled': disabled },
            className
          )}
          style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
          ref={sliderRef}
        >
          <div className="w-slider__wrap">
            <div className="w-slider__track">
              <div
                className="w-slider__track-active"
                style={{
                  left: `${ratios.lower * 100}%`,
                  width: `${(ratios.upper - ratios.lower) * 100}%`,
                }}
              />
            </div>

            <div
              aria-disabled={disabled}
              aria-label={props['aria-label']?.[Handle.Lower]}
              aria-labelledby={props['aria-labelledby']?.[Handle.Lower]}
              aria-valuemax={values[Handle.Upper]}
              aria-valuemin={min}
              aria-valuenow={ratioToValue(ratios.lower, min, max, step)}
              aria-valuetext={props['aria-valuetext']?.[Handle.Lower]}
              className="w-slider__thumb"
              onKeyDown={handleKeyDown}
              onFocus={() => setShowLowerHandle(true)}
              onBlur={() => setShowLowerHandle(false)}
              role="slider"
              ref={handleLowerRef}
              style={{
                left: `${ratios.lower * 100}%`,
                transform: 'translateX(-50%)',
                cursor: 'inherit',
              }}
              tabIndex={disabled ? undefined : 0}
            />
            <Attention
              tooltip
              placement="top"
              flip
              targetEl={handleLowerRef}
              isShowing={showLowerHandle}
            >
              <p id="tooltip-bubbletext">
                {ratioToValue(ratios.lower, min, max, step)}
              </p>
            </Attention>
            <div
              aria-disabled={disabled}
              aria-label={props['aria-label']?.[Handle.Upper]}
              aria-labelledby={props['aria-labelledby']?.[Handle.Upper]}
              aria-valuemax={max}
              aria-valuemin={values[Handle.Lower]}
              aria-valuenow={ratioToValue(ratios.upper, min, max, step)}
              aria-valuetext={props['aria-valuetext']?.[Handle.Upper]}
              className="w-slider__thumb"
              onKeyDown={(event) => handleKeyDown(event, Handle.Upper)}
              onFocus={() => setShowUpperHandle(true)}
              onBlur={() => setShowUpperHandle(false)}
              role="slider"
              ref={handleUpperRef}
              style={{
                left: `${ratios.upper * 100}%`,
                transform: 'translateX(-50%)',
                cursor: 'inherit',
              }}
              tabIndex={disabled ? undefined : 0}
            />
            <Attention
              tooltip
              placement="top"
              flip
              targetEl={handleUpperRef}
              isShowing={showUpperHandle}
            >
              <p id="tooltip-bubbletext">
                {ratioToValue(ratios.upper, min, max, step)}
              </p>
            </Attention>
          </div>
        </div>
        {showMarks && getMarks(min, max)}
      </fieldset>

    </>
  );
};
