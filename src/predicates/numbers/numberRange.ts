import { NumberRangeEnum, NumberRangeOper } from './enums';
/**
 * Checks if a number is in or outside a range using the specified operation.
 *
 * @param value The number to check.
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
 */
export function numberRange(value: number, oper: NumberRangeOper, min: number, max: number): boolean {
  const operators: Record<NumberRangeEnum, (v: number, min: number, max: number) => boolean> = {
    [NumberRangeEnum.IN_RANGE]: (v, min, max) => v >= min && v <= max,
    [NumberRangeEnum.OUT_RANGE]: (v, min, max) => v < min || v > max,
    [NumberRangeEnum.STRICT_IN_RANGE]: (v, min, max) => v > min && v < max,
    [NumberRangeEnum.STRICT_OUT_RANGE]: (v, min, max) => v <= min || v >= max,
  };
  const enumOper = typeof oper === 'string' ? (oper as NumberRangeEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown NumberRange operation: ${oper}`);
  return fn(value, min, max);
}
