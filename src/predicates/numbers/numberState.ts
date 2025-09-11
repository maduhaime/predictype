import { NumberStateEnum, NumberStateOper } from '../../enums/numbers';

/**
 * Checks the state of a number (integer, float, finite, positive, negative, zero) using the specified operation.
 *
 * @param value The number to check.
 * @param oper The state operation to perform (e.g. 'is_integer', 'is_float').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const n = 5;
 *
 * numberState(n, 'is_integer'); // true
 * numberState(3.14, 'is_float'); // true
 * numberState(0, 'is_zero'); // true
 */
export function numberState(value: number, oper: NumberStateOper): boolean {
  const operators: Record<NumberStateEnum, (v: number) => boolean> = {
    [NumberStateEnum.IS_INTEGER]: (v) => Number.isInteger(v),
    [NumberStateEnum.IS_FLOAT]: (v) => Number.isFinite(v) && !Number.isInteger(v),
    [NumberStateEnum.IS_FINITE]: (v) => Number.isFinite(v),
    [NumberStateEnum.IS_POSITIVE]: (v) => v > 0,
    [NumberStateEnum.IS_NEGATIVE]: (v) => v < 0,
    [NumberStateEnum.IS_ZERO]: (v) => v === 0,
  };

  const enumOper = typeof oper === 'string' ? (oper as NumberStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown NumberState operation: ${oper}`);
  return fn(value);
}
