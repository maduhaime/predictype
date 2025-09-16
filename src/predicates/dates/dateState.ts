import { DateStateEnum, DateStateOper } from '../../enums/dates.js';

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
 * Checks the state of a date (valid or invalid) in UTC using the specified operation.
 *
 * @param value The date to check.
 * @param oper The state operation to perform (e.g. 'is_valid', 'is_invalid').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const validDate = new Date('2025-01-01');
 * const invalidDate = new Date('invalid');
 *
 * dateState(validDate, 'is_valid'); // true
 * dateState(invalidDate, 'is_invalid'); // true
 *
 * @remarks
 * Supported Operators
 * | Operator     | Description                |
 * |--------------|----------------------------|
 * | IS_VALID     | Is the date valid?         |
 * | IS_INVALID   | Is the date invalid?       |
 */
export function dateState(value: Date, oper: DateStateOper): boolean {
  const d = toUTCDate(value);
  const operators: Record<DateStateEnum, (d: Date) => boolean> = {
    [DateStateEnum.IS_VALID]: (d) => !isNaN(d.getTime()),
    [DateStateEnum.IS_INVALID]: (d) => isNaN(d.getTime()),
  };

  const enumOper = typeof oper === 'string' ? (oper as DateStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown DateState operation: ${oper}`);
  return fn(d);
}
