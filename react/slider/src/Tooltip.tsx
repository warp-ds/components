import type { RefObject } from 'react';

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
