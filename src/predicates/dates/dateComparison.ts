import { DateComparisonEnum, DateComparisonOper } from '../../enums/dates.js';

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
 * Compares two dates in UTC using the specified comparison operation.
 *
 * @param source The first date to compare.
 * @param oper The comparison operation to perform (e.g. 'after', 'before', 'equals').
 * @param target The second date to compare against.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const d1 = new Date('2025-01-01');
 * const d2 = new Date('2025-01-02');
 * dateComparison(d1, 'before', d2); // true
 * dateComparison(d1, 'equals', d1); // true
 *
 * @remarks
 * Supported Operators:
 * - **AFTER**: Is the first date after the second?
 * - **AFTER_OR_EQUAL**: After or equal to the second date?
 * - **BEFORE**: Is the first date before the second?
 * - **BEFORE_OR_EQUAL**: Before or equal to the second date?
 * - **EQUALS**: Are the dates equal?
 * - **NOT_EQUALS**: Are the dates not equal?
 * - **SAME_DAY**: Are the dates on the same day?
 * - **SAME_MONTH**: Are the dates in the same month?
 * - **SAME_YEAR**: Are the dates in the same year?
 */
export function dateComparison(source: Date, oper: DateComparisonOper, target: Date): boolean {
  const d1 = toUTCDate(source);
  const d2 = toUTCDate(target);
  const operators: Record<DateComparisonEnum, (a: Date, b: Date) => boolean> = {
    [DateComparisonEnum.AFTER]: (a, b) => a.getTime() > b.getTime(),
    [DateComparisonEnum.AFTER_OR_EQUAL]: (a, b) => a.getTime() >= b.getTime(),
    [DateComparisonEnum.BEFORE]: (a, b) => a.getTime() < b.getTime(),
    [DateComparisonEnum.BEFORE_OR_EQUAL]: (a, b) => a.getTime() <= b.getTime(),
    [DateComparisonEnum.EQUALS]: (a, b) => a.getTime() === b.getTime(),
    [DateComparisonEnum.NOT_EQUALS]: (a, b) => a.getTime() !== b.getTime(),
    [DateComparisonEnum.SAME_DAY]: (a, b) =>
      a.getUTCFullYear() === b.getUTCFullYear() &&
      a.getUTCMonth() === b.getUTCMonth() &&
      a.getUTCDate() === b.getUTCDate(),
    [DateComparisonEnum.SAME_MONTH]: (a, b) =>
      a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth(),
    [DateComparisonEnum.SAME_YEAR]: (a, b) => a.getUTCFullYear() === b.getUTCFullYear(),
  };

  const enumOper = typeof oper === 'string' ? (oper as DateComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown DateComparison operation: ${oper}`);
  return fn(d1, d2);
}
