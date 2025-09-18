import { NumberRangeEnum, NumberRangeOper } from '../../enums/numbers.js';

/**
 * Checks if a number is in or outside a range using the specified operation.
 *
 * @param source The number to check.
 * @param oper The range operation to perform (e.g. 'in_range', 'strict_in_range').
 * @param min The minimum value (inclusive or exclusive depending on operation).
 * @param max The maximum value (inclusive or exclusive depending on operation).
 * @returns True if the range check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const n = 5;
 *
 * numberRange(n, 'in_range', 1, 10); // true
 * numberRange(n, 'strict_in_range', 5, 10); // false
 *
 * @remarks
 * Supported Operators:
 * - **BETWEEN**: Inclusive: min <= x <= max
 * - **NOT_BETWEEN**: Inclusive: x < min or x > max
 * - **STRICT_BETWEEN**: Exclusive: min < x < max
 * - **STRICT_NOT_BETWEEN**: Exclusive: x <= min or x >= max
 */
export function numberRange(source: number, oper: NumberRangeOper, min: number, max: number): boolean {
  const enumOper = typeof oper === 'string' ? (oper as NumberRangeEnum) : oper;

  if (Number.isNaN(min) || Number.isNaN(max)) return false;

  const operators: Record<NumberRangeEnum, (v: number, min: number, max: number) => boolean> = {
    [NumberRangeEnum.BETWEEN]: (v, min, max) => v >= min && v <= max,
    [NumberRangeEnum.NOT_BETWEEN]: (v, min, max) => {
      if (Number.isNaN(v)) return true;
      return v < min || v > max;
    },
    [NumberRangeEnum.STRICT_BETWEEN]: (v, min, max) => v > min && v < max,
    [NumberRangeEnum.STRICT_NOT_BETWEEN]: (v, min, max) => {
      if (Number.isNaN(v)) return true;
      return v <= min || v >= max;
    },
  };

  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown NumberRange operation: ${oper}`);
  return fn(source, min, max);
}
