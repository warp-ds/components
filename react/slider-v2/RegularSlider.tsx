import style from 'inline:./w-slider.css';
import { Attention } from '@warp-ds/react/components/attention';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { getMarks } from './Marks.tsx';
import { RegularSliderProps } from './props.ts';
import {
  clamp,
  nextValue,
  prevValue,
  ratioToValue,
  valueToRatio,
} from './utils.ts';

export const RegularSlider = ({
  className,
  disabled = false,
  onInput = () => {},
  onChange = () => {},
  max = 100,
  min = 0,
  step = 1,
  value,
  showMarks = true,
  ...props
}: RegularSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [showHandle, setShowHandle] = useState(false);

  // Local state for the ratio (from 0 to 1) of the slider thumb position.
  const [ratio, setRatio] = useState(valueToRatio(value, min, max));
  const [isDragging, setIsDragging] = useState(false);

  // A ref to keep track of the current value during dragging.
  const internalValue = useRef(value);

  // Update the ratio state when the external value prop changes.
  useEffect(() => {
    if (internalValue.current !== value) {
      internalValue.current = value;
      setRatio(valueToRatio(value, min, max));
    }
  }, [value, min, max]);

  // Called when a new value is committed.
  const handleChange = (newValue: number) => {
    if (newValue !== value) {
      onChange(newValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    let newValue: number;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'PageDown':
        newValue = prevValue(value, step);
        break;
      case 'ArrowUp':
      case 'ArrowRight':
      case 'PageUp':
        newValue = nextValue(value, step);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
    }

    if (newValue != null) {
      newValue = clamp(newValue, min, max);
      onInput(newValue);
      handleChange(newValue);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  // DRAG HANDLING

  const onStartDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    setIsDragging(true);
    setShowHandle(true);

    // Update position immediately.
    const newRatio = clamp((clientX - rect.left) / rect.width, 0, 1);
    setRatio(newRatio);
    const newVal = ratioToValue(newRatio, min, max, step);
    if (newVal !== internalValue.current) {
      internalValue.current = newVal;
      onInput(newVal);
    }

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
    let clientX: number;
    if ('touches' in e) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
      } else {
        return;
      }
    } else {
      clientX = e.clientX;
    }
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newRatio = clamp((clientX - rect.left) / rect.width, 0, 1);
    setRatio(newRatio);
    const newVal = ratioToValue(newRatio, min, max, step);
    if (newVal !== internalValue.current) {
      internalValue.current = newVal;
      onInput(newVal);
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
    const finalValue = internalValue.current;
    handleChange(finalValue);
    setIsDragging(false);
    // Focus the handle after dragging.
    handleRef.current?.focus();
    e.preventDefault();
  };

  return (
    <>
      <style href="w-slider" precedence="medium">
        {style}
      </style>
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
                width: `${ratio * 100}%`,
              }}
            />
          </div>
          <div
            aria-disabled={disabled}
            aria-label={props['aria-label']}
            aria-labelledby={props['aria-labelledby']}
            aria-valuemax={max}
            aria-valuemin={min}
            aria-valuenow={ratioToValue(ratio, min, max, step)}
            aria-valuetext={props['aria-valuetext']}
            className="w-slider__thumb"
            onKeyDown={handleKeyDown}
            onFocus={() => setShowHandle(true)}
            onBlur={() => setShowHandle(false)}
            role="slider"
            ref={handleRef}
            style={{
              left: `${ratio * 100}%`,
              transform: 'translateX(-50%)',
              cursor: 'inherit',
            }}
            tabIndex={disabled ? undefined : 0}
          />
        </div>
        <Attention
          tooltip
          placement="top"
          flip
          targetEl={handleRef}
          isShowing={showHandle}
        >
          <p id="tooltip-bubbletext">
            {ratioToValue(ratio, min, max, step)}
          </p>
        </Attention>
        {showMarks && getMarks(min, max)}
      </div>
    </>
  );
};
