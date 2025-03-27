import style from 'inline:./w-slider.css';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { Attention } from '@warp-ds/react/components/attention';
import classNames from 'classnames';
import React from 'react';
import { RegularSliderProps } from './props.ts';
import { getMarks, useInnerWidth } from './useInnerWidth.tsx';
import { clamp, nextValue, prevValue, ratioToValue, valueToRatio } from './utils.ts';

const RegularSlider = ({
  className,
  disabled = false,
  onInput = () => {},
  onChange = () => {},
  max = 100,
  min = 0,
  scale,
  step = 1,
  value,
  showMarks = true,
  ...props
}: RegularSliderProps) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const handleRef = React.useRef<HTMLDivElement>(null);
  const innerWidth = useInnerWidth(sliderRef, handleRef);
  const [showHandle, setShowHandle] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(value);
  /* Ref that is continually updated with the latest value as the slider is dragged */
  const internvalValue = React.useRef(value);
  /* If we are currently dragging the slider */
  const [isDragging, setIsDragging] = React.useState(false);

  // the value here should already be clamped
  const handleChange = (newValue: number) => {
    if (newValue !== value) {
      onChange(newValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    setShowHandle(true);
    let newValue: number;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'PageDown':
        newValue = prevValue(value, step, scale);
        break;

      case 'ArrowUp':
      case 'ArrowRight':
      case 'PageUp':
        newValue = nextValue(value, step, scale);
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
      setCurrentValue(newValue);
      handleChange(newValue);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const [spring, api] = useSpring<{ ratio: number }>(() => ({
    ratio: valueToRatio(value, min, max, scale),
    immediate: true,
  }));

  // Update the ratio only if the value has changed.
  React.useEffect(() => {
    if (internvalValue.current !== value) {
      internvalValue.current = value;
      api.start({
        ratio: valueToRatio(value, min, max, scale),
      });
    }
  }, [value, api, min, max, scale]);

  const bind = useDrag(
    ({
      xy,
      first,
      last,
      memo = {
        rect: sliderRef.current?.getBoundingClientRect(),
      },
    }) => {
      const ratio = clamp((xy[0] - memo.rect.left) / memo.rect.width, 0, 1);

      // Calculate the drag value.
      const dragValue = ratioToValue(ratio, min, max, step, scale);

      if (dragValue !== internvalValue.current) {
        internvalValue.current = dragValue;
        onInput(dragValue);
        setCurrentValue(dragValue);
      }

      api.start({
        ratio,
        immediate: true,
      });

      if (first) {
        setIsDragging(true);
        setShowHandle(true);
      } else if (last) {
        setIsDragging(false);
        setShowHandle(false);
        handleChange(dragValue);
        // Focus the handle.
        handleRef.current?.focus();
      }

      return memo;
    },
    { axis: 'x', enabled: !disabled },
  );

  return (
    <>
      <style href="w-slider" precedence="medium">
        {style}
      </style>
      <div
        {...bind()}
        data-body-scroll-lock-ignore
        className={classNames('w-slider', { 'w-slider--is-disabled': disabled }, className)}
        style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
        ref={sliderRef}
      >
        <div className="w-slider__track" />
        <animated.div
          // @ts-ignore
          className="w-slider__track-active"
          style={{
            left: 0,
            right: spring.ratio.to((ratio) => `${(1 - ratio) * 100}%`),
          }}
        />
        <animated.div
          aria-disabled={disabled}
          aria-label={props['aria-label']}
          aria-labelledby={props['aria-labelledby']}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={spring.ratio.to((ratio) => ratioToValue(ratio, min, max, step, scale))}
          aria-valuetext={props['aria-valuetext']}
          // @ts-ignore
          className="w-slider__thumb"
          onKeyDown={handleKeyDown}
          onBlur={() => setShowHandle(false)}
          role="slider"
          ref={handleRef}
          style={{
            transform: spring.ratio.to((ratio) => `translate3d(${ratio * innerWidth}px,0,0)`),
            cursor: 'inherit',
          }}
          tabIndex={disabled ? undefined : 0}
        />
        <Attention tooltip placement="top" flip targetEl={handleRef} isShowing={showHandle}>
          <p id="tooltip-bubbletext">{currentValue}</p>
        </Attention>
        {showMarks && getMarks(min, max)}
      </div>
    </>
  );
};

export default RegularSlider;
