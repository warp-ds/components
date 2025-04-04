import { RefObject } from 'react';
import { type Ref, thumbWidth } from './CoreSlider.tsx';

// Tooltip component that shows a given value above the slider thumb.
export const Tooltip = ({
  display,
  children,
  ref,
}: { display: boolean; children: any; ref: RefObject<HTMLDivElement> }) => {
  return (
    <div className="w-slider__tooltip" style={{ visibility: display ? 'visible' : 'hidden' }} ref={ref}>
      {children}
    </div>
  );
};

// Tooltip arrow, with settable visibility.
export const TooltipArrow = ({ display, ref }: { display: boolean; ref: RefObject<SVGSVGElement> }) => {
  return (
    <svg
      style={{ visibility: display ? 'visible' : 'hidden' }}
      ref={ref}
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5858 8.58579L6.34315 4.34315C4.84285 2.84286 2.80802 2 0.686291 2H23.3137C21.192 2 19.1571 2.84285 17.6569 4.34314L13.4142 8.58579C12.6332 9.36684 11.3668 9.36684 10.5858 8.58579Z"
        fill="#1B1B1F"
      />
      <line y1="1.48" x2="24" y2="1.48" stroke="#1B1B1F" strokeWidth="1.2" />
    </svg>
  );
};

// Get full tooltip CSS, to set the position of the tooltips along the slider.
// This calculates both tooltip box and arrow positions. This is done by calculating the offset from the left,
// adjusting for input type="range" offset, and adjusting for tooltip box position if containTooltips is used.
export const getTooltipCSS = (
  values: number[],
  displayValues: (number | string)[],
  wrapperRef: Ref,
  isRange: boolean,
  max: number,
  min: number,
  i: number,
  widthref: Ref,
  containTooltips: boolean,
) => {
  const width = wrapperRef.current?.clientWidth || 0;

  const wrapperRect = wrapperRef.current?.getBoundingClientRect();
  const wrapperLeft = wrapperRect.left;

  const [offset0, offset1] = getTooltipOffsets(values, max, min);

  // Distance from component (wrapper) start.
  const left0 = ((values[0] - min) / (max - min)) * width;
  const left1 = ((values[1] - min) / (max - min)) * width;

  // Get distance from left to tooltip center.
  const leftOffset0 = left0 + offset0 + wrapperLeft;
  const leftOffset1 = left1 + offset1 + wrapperLeft;

  const tooltipBox0 = {
    left: leftOffset0 + 'px',
    transform: 'translateY(-39px) translateX(-50%)',
  };

  const tooltipBox1 = {
    left: leftOffset1 + 'px',
    transform: 'translateY(-39px) translateX(-50%)',
  };

  // If containTooltips is true, the tooltip boxes only move up to the start/end limits of the view.
  if (containTooltips) {
    const viewportWidth = document.body.clientWidth;

    // The following code is used in order to estimate (calculate) the width of the tooltip box, with the given value,
    // before it's rendered.
    //
    // This is needed so that an exact position can be determined, without first rendering and then adjusting the
    // tooltip, which would cause some flickering/stuttering.
    //
    // To do this, the value is rendered in the hidden width-check div, the width is then measured, and that value
    // is used to calculate tooltip position (before it's rendered).
    const widthOffset = 0.5 * (getEstimatedWidth(displayValues[i] || values[i], widthref) + thumbWidth);

    // Margin from edges for the tooltip box.
    const margin = 5;

    const getStyle = (justify: 'left' | 'right') => {
      return {
        left: justify === 'left' ? margin + 'px' : '',
        right: justify === 'right' ? margin + 'px' : '',
        transform: 'translateY(-39px)',
      };
    };

    if (isRange) {
      if (leftOffset0 + widthOffset > viewportWidth - margin) Object.assign(tooltipBox0, getStyle('right'));
      if (leftOffset0 - widthOffset < margin) Object.assign(tooltipBox0, getStyle('left'));
    }

    if (leftOffset1 + widthOffset > viewportWidth - margin) Object.assign(tooltipBox1, getStyle('right'));
    if (leftOffset1 - widthOffset < margin) Object.assign(tooltipBox1, getStyle('left'));
  }

  return [
    // Tooltip boxes.
    tooltipBox0,
    tooltipBox1,
    // Tooltip arrows.
    {
      left: leftOffset0 + 'px',
      transform: 'translateY(-9px) translateX(-50%)',
    },
    {
      left: leftOffset1 + 'px',
      transform: 'translateY(-9px) translateX(-50%)',
    },
  ];
};

// Get tooltip offsets, needed to center the tooltip over the thumb (which doesn't follow the active track exactly; see default input type="range" behavior.)
const getTooltipOffsets = (values: number[], max: number, min: number) => {
  const tooltipOffset0 = ((values[0] - min) / (max - min)) * thumbWidth;
  const tooltipOffset1 = ((values[1] - min) / (max - min)) * thumbWidth;

  return [0.5 * thumbWidth - tooltipOffset0, 0.5 * thumbWidth - tooltipOffset1];
};

// Determine (estimate) the width of the tooltip box with the given value, using the width-check element.
const getEstimatedWidth = (value: any, widthRef: Ref) => {
  const div = widthRef.current;

  if (div) {
    div.innerText = value;

    return div.clientWidth;
  }
};
