export function roundPrecise(value: number, precision?: number) {
  if (!precision) {
    return Math.round(value);
  }

  const multiplier = 10 ** (precision || 0);

  return Math.round(value * multiplier) / multiplier;
}

export function roundIfNumber(value: string | number) {
  if (typeof value === 'number') {
    return roundPrecise(value);
  }
  return value;
}

export function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export function clampValues(values: number[], min: number, max: number) {
  return [clamp(values[0], min, max), clamp(values[1], min, max)];
}
