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
 * const zero = BigInt(0);
 * const even = BigInt(10);
 * const negative = BigInt(-5);
 *
 * bigintState(zero, 'is_zero'); // true
 * bigintState(even, 'is_even'); // true
 * bigintState(negative, 'is_negative'); // true
 *
 * @remarks
 * Supported Operators:
 * - **IS_ZERO**: value === 0n
 * - **IS_POSITIVE**: value > 0n
 * - **IS_NEGATIVE**: value < 0n
 * - **IS_EVEN**: value % 2n === 0n
 * - **IS_ODD**: value % 2n !== 0n
 */
export function bigintState(source: bigint, oper: BigIntStateOper): boolean {
  const operators: Record<BigIntStateEnum, (a: bigint) => boolean> = {
    [BigIntStateEnum.IS_ZERO]: (a) => a === BigInt(0),
    [BigIntStateEnum.IS_POSITIVE]: (a) => a > BigInt(0),
    [BigIntStateEnum.IS_NEGATIVE]: (a) => a < BigInt(0),
    [BigIntStateEnum.IS_EVEN]: (a) => a % BigInt(2) === BigInt(0),
    [BigIntStateEnum.IS_ODD]: (a) => a % BigInt(2) !== BigInt(0),
  };

  const enumOper = typeof oper === 'string' ? (oper as BigIntStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BigIntState operation: ${oper}`);
  return fn(source);
}
