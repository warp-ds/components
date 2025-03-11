export function round(value: number, precision?: number) {
  if (!precision) {
    return Math.round(value);
  }

  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export function roundIfNumber(val: string | number) {
  if (typeof val === 'number') {
    return round(val);
  } else {
    return val;
  }
}

export function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export function clampValues(values: number[], min: number, max: number) {
  return [clamp(values[0], min, max), clamp(values[1], min, max)];
}
