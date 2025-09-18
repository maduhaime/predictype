import { BigIntRangeEnum, BigIntRangeOper } from '../../enums/bigints.js';

/**
 * Checks if a bigint value falls within or outside a specified range using the given operation.
 *
 * @param source The source bigint value.
 * @param oper The range operation to perform (e.g. 'between', 'not_between').
 * @param min The minimum value of the range (inclusive).
 * @param max The maximum value of the range (inclusive).
 * @returns True if the range check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const value1 = BigInt(5);
 * const value2 = BigInt(15);
 * const min = BigInt(1);
 * const max = BigInt(10);
 *
 * bigintRange(value1, 'between', min, max); // true
 * bigintRange(value2, 'not_between', min, max); // true
 *
 * @remarks
 * Supported Operators:
 * - **BETWEEN**: min <= value <= max
 * - **NOT_BETWEEN**: value < min or value > max
 * - **STRICT_BETWEEN**: min < value < max
 * - **STRICT_NOT_BETWEEN**: value <= min or value >= max
 */
export function bigintRange(source: bigint, oper: BigIntRangeOper, min: bigint, max: bigint): boolean {
  const operators: Record<BigIntRangeEnum, (a: bigint, min: bigint, max: bigint) => boolean> = {
    [BigIntRangeEnum.BETWEEN]: (a, min, max) => a >= min && a <= max,
    [BigIntRangeEnum.NOT_BETWEEN]: (a, min, max) => a < min || a > max,
    [BigIntRangeEnum.STRICT_BETWEEN]: (a, min, max) => a > min && a < max,
    [BigIntRangeEnum.STRICT_NOT_BETWEEN]: (a, min, max) => a <= min || a >= max,
  };

  const enumOper = typeof oper === 'string' ? (oper as BigIntRangeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BigIntRange operation: ${oper}`);
  return fn(source, min, max);
}
