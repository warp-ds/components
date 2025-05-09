export const getMarks = (min: number, max: number) => (
  <div className="w-slider__ticks">
    <div className="w-slider__tick w-slider__ticks--left" />
    <div className="w-slider__tick w-slider__ticks--right" />
    <div className="w-slider__label w-slider__ticks--left">{min}</div>
    <div className="w-slider__label w-slider__ticks--right">
      {max}
    </div>
  </div>
);
