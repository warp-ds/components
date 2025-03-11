import { isBefore, isSameDay } from 'date-fns';

export function isBeforeDay(date?: Date | null, dateToCompare?: Date | null): boolean {
  if (date == null || dateToCompare == null) return false;
  return isBefore(date, dateToCompare) && !isSameDay(date, dateToCompare);
}

export function isAfterDay(date?: Date | null, dateToCompare?: Date | null): boolean {
  if (date == null || dateToCompare == null) return false;
  return !isBefore(date, dateToCompare) && !isSameDay(date, dateToCompare);
}

export function isInclusivelyAfterDay(date?: Date | null, dateToCompare?: Date | null): boolean {
  if (date == null || dateToCompare == null) return false;
  return !isBeforeDay(date, dateToCompare);
}
