import React from 'react';

export const useInnerWidth = (
  slider: React.RefObject<HTMLDivElement>,
  handle: React.RefObject<HTMLDivElement>,
): number => {
  const [width, setWidth] = React.useState(0);
  const [innerWidth, setInnerWidth] = React.useState(0);

  React.useEffect(() => {
    const element = slider.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, [slider]);

  React.useLayoutEffect(() => {
    setInnerWidth(width - (handle.current?.offsetWidth ?? 0));
  }, [width, handle]);

  return innerWidth;
};

export const getMarks = (min: number, max: number) => {
  const indices = [0, 1];
  const getDisplayValue = (k: number) => (max - min) * k + min;

  const markLines = () => indices.map((k) => <div key={k} className="w-slider__mark-line" />);

  const markValues = () =>
    indices.map((k) => {
      return <div key={k}>{getDisplayValue(k)}</div>;
    });

  return (
    <div className="w-slider__marks-contained">
      <div className="w-slider__marks">{markLines()}</div>
      <div className="w-slider__markvalues">{markValues()}</div>
    </div>
  );
};
