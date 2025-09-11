import { DateRangeEnum, DateRangeOper } from '../../enums/dates';
/**
 * Normalize a date to UTC (removes time, keeps only Y/M/D in UTC).
 *
 * @param date The date to normalize.
 * @returns The normalized UTC date (Y/M/D only).
 */
function toUTCDate(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

/**
 * Checks if a date is in or outside a UTC date range using the specified operation.
 *
 * @param value The date to check.
 * @param oper The range operation to perform (e.g. 'in_range', 'strict_in_range').
 * @param min The minimum date (inclusive or exclusive depending on operation).
 * @param max The maximum date (inclusive or exclusive depending on operation).
 * @returns True if the range check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const date = new Date('2025-01-10');
 * const start = new Date('2025-01-01');
 * const end = new Date('2025-01-31');
 *
 * dateRange(date, 'in_range', start, end); // true
 */
export function dateRange(value: Date, oper: DateRangeOper, min: Date, max: Date): boolean {
  const d = toUTCDate(value);
  const dMin = toUTCDate(min);
  const dMax = toUTCDate(max);
  const operators: Record<DateRangeEnum, (d: Date, min: Date, max: Date) => boolean> = {
    [DateRangeEnum.IN_RANGE]: (d, min, max) => d.getTime() >= min.getTime() && d.getTime() <= max.getTime(),
    [DateRangeEnum.OUT_RANGE]: (d, min, max) => d.getTime() < min.getTime() || d.getTime() > max.getTime(),
    [DateRangeEnum.STRICT_IN_RANGE]: (d, min, max) => d.getTime() > min.getTime() && d.getTime() < max.getTime(),
    [DateRangeEnum.STRICT_OUT_RANGE]: (d, min, max) => d.getTime() <= min.getTime() || d.getTime() >= max.getTime(),
  };
  const enumOper = typeof oper === 'string' ? (oper as DateRangeEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown DateRange operation: ${oper}`);
  return fn(d, dMin, dMax);
}
// ...existing code...
