import { BigIntStateEnum, BigIntStateOper } from '../../enums/bigints.js';

/**
 * Checks the state of a bigint value (zero, positive, negative, even, odd) using the specified operation.
 *
 * @param source The source bigint value.
 * @param oper The state operation to perform (e.g. 'is_zero', 'is_even').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const zero = 0n;
 * const even = 10n;
 * const negative = -5n;
 *
 * bigintState(zero, 'is_zero'); // true
 * bigintState(even, 'is_even'); // true
 * bigintState(negative, 'is_negative'); // true
 */
export function bigintState(source: bigint, oper: BigIntStateOper): boolean {
  const operators: Record<BigIntStateEnum, (a: bigint) => boolean> = {
    [BigIntStateEnum.IS_ZERO]: (a) => a === 0n,
    [BigIntStateEnum.IS_POSITIVE]: (a) => a > 0n,
    [BigIntStateEnum.IS_NEGATIVE]: (a) => a < 0n,
    [BigIntStateEnum.IS_EVEN]: (a) => a % 2n === 0n,
    [BigIntStateEnum.IS_ODD]: (a) => a % 2n !== 0n,
  };

  const enumOper = typeof oper === 'string' ? (oper as BigIntStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BigIntState operation: ${oper}`);
  return fn(source);
}
