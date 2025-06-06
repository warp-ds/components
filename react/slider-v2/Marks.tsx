export const getMarks = (min: number, max: number) => (
  <div className="w-slider__ticks">
    <div className="w-slider__min-value w-slider__ticks--left">
      {min}
    </div>
    <div className="w-slider__max-value w-slider__ticks--right">
      {max}
    </div>
  </div>
);
