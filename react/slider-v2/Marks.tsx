
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
