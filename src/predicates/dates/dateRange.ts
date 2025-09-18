import { DateRangeEnum, DateRangeOper } from '../../enums/dates.js';

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
 * @param source The date to check.
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
 *
 * @remarks
 * Supported Operators:
 * - **BETWEEN**: Inclusive: min <= date <= max
 * - **NOT_BETWEEN**: Inclusive: date < min or date > max
 * - **STRICT_BETWEEN**: Exclusive: min < date < max
 * - **STRICT_NOT_BETWEEN**: Exclusive: date <= min or date >= max
 */
export function dateRange(source: Date, oper: DateRangeOper, min: Date, max: Date): boolean {
  const d = toUTCDate(source);
  const dMin = toUTCDate(min);
  const dMax = toUTCDate(max);
  const operators: Record<DateRangeEnum, (d: Date, min: Date, max: Date) => boolean> = {
    [DateRangeEnum.BETWEEN]: (d, min, max) => d.getTime() >= min.getTime() && d.getTime() <= max.getTime(),
    [DateRangeEnum.NOT_BETWEEN]: (d, min, max) => d.getTime() < min.getTime() || d.getTime() > max.getTime(),
    [DateRangeEnum.STRICT_BETWEEN]: (d, min, max) => d.getTime() > min.getTime() && d.getTime() < max.getTime(),
    [DateRangeEnum.STRICT_NOT_BETWEEN]: (d, min, max) => d.getTime() <= min.getTime() || d.getTime() >= max.getTime(),
  };
  const enumOper = typeof oper === 'string' ? (oper as DateRangeEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown DateRange operation: ${oper}`);
  return fn(d, dMin, dMax);
}
