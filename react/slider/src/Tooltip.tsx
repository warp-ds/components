import type { RefObject } from 'react';
import { thumbWidth, type Ref } from './Slider.tsx';

// Tooltip component that shows a given value above the slider thumb.
export const Tooltip = ({
  display,
  top,
  children,
  ref,
}: { display: boolean; top: boolean; children: any; ref: RefObject<HTMLDivElement> }) => {
  return (
    <div
      className="w-slider__tooltip"
      style={{ visibility: display ? 'visible' : 'hidden', zIndex: top ? 10 : 1 }}
      ref={ref}
    >
      {children}
    </div>
  );
};

// Tooltip arrow, with settable visibility and order (z-index).
export const TooltipArrow = ({
  display,
  top,
  ref,
}: { display: boolean; top: boolean; ref: RefObject<SVGSVGElement> }) => {
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

// Get full tooltip CSS, to set the position of the tooltips along the slider.
// This calculates both tooltip box and arrow positions. This is done by calculating the offset from the left,
// adjusting for input type="range" offset, and adjusting for tooltip box position if containTooltips is used.
export const getTooltipCSS = (
  values: number[],
  fullValues: (number | string)[],
  wrapperRef: Ref,
  isRange: boolean,
  max: number,
  min: number,
  i: number,
  widthref: Ref,
  containTooltips: boolean,
) => {
  const width = wrapperRef.current?.clientWidth || 0;

  const left0 = ((values[0] - min) / (max - min)) * width;
  const left1 = ((values[1] - min) / (max - min)) * width;

  const [offset0, offset1] = getTooltipOffsets(values, max, min);

  const wrapperRect = wrapperRef.current?.getBoundingClientRect();
  const left = wrapperRect.left;

  // Get distance from left to tooltip center.
  const l0 = left0 + offset0 + left;
  const l1 = left1 + offset1 + left;

  const tooltipBox0 = {
    left: l0 + 'px',
    transform: 'translateY(-39px) translateX(-50%)',
  };

  const tooltipBox1 = {
    left: l1 + 'px',
    transform: 'translateY(-39px) translateX(-50%)',
  };

  // If containTooltips is true, the tooltip boxes only move up to the start/end limits of the view.
  if (containTooltips) {
    const viewportWidth = document.body.clientWidth;

    // The following code used in order to estimate (calculate) the width of the tooltip box, with the given value,
    // before it's rendered.
    //
    // This is needed so that an exact position can be determined, without first rendering and then adjusting the
    // tooltip, which would cause some flickering/stuttering.
    //
    // To do this, the value is rendered in the hidden width-check div, the width is then measured, and that value
    // is used to calculate tooltip position (before it's rendered).
    const wOffset = 0.5 * (getEstimatedWidth(fullValues[i], widthref) + thumbWidth);

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
      if (l0 + wOffset > viewportWidth - margin) Object.assign(tooltipBox0, getStyle('right'));
      if (l0 - wOffset < margin) Object.assign(tooltipBox0, getStyle('left'));
    }

    if (l1 + wOffset > viewportWidth - margin) Object.assign(tooltipBox1, getStyle('right'));
    if (l1 - wOffset < margin) Object.assign(tooltipBox1, getStyle('left'));
  }

  return [
    // Tooltip boxes.
    tooltipBox0,
    tooltipBox1,
    // Tooltip arrows.
    {
      left: l0 + 'px',
      transform: 'translateY(-7.2px) translateX(-50%)',
    },
    {
      left: l1 + 'px',
      transform: 'translateY(-7.2px) translateX(-50%)',
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
const getEstimatedWidth = (value: number | string, widthRef: Ref) => {
  const div = widthRef.current;

  if (div) {
    div.innerText = value.toString();

    return div.clientWidth;
  }
};
