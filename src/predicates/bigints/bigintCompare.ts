import { BigIntCompareEnum, BigIntCompareOper } from './enums';

/**
 * Compares two bigint values using the specified operation.
 *
 * @param source The source bigint value.
 * @param oper The comparison operation to perform (e.g. 'equals', 'greater_than').
 * @param target The target bigint value to compare against the source.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = 10n;
 * const b = 5n;
 * const c = 20n;
 *
 * bigintCompare(a, 'equals', a); // true
 * bigintCompare(a, 'greater_than', b); // true
 * bigintCompare(a, 'less_than', c); // true
 */
export function bigintCompare(source: bigint, oper: BigIntCompareOper, target: bigint): boolean {
  const operators: Record<BigIntCompareEnum, (a: bigint, b: bigint) => boolean> = {
    [BigIntCompareEnum.EQUALS]: (a, b) => a === b,
    [BigIntCompareEnum.NOT_EQUALS]: (a, b) => a !== b,
    [BigIntCompareEnum.GREATER_THAN]: (a, b) => a > b,
    [BigIntCompareEnum.GREATER_THAN_OR_EQUALS]: (a, b) => a >= b,
    [BigIntCompareEnum.LESS_THAN]: (a, b) => a < b,
    [BigIntCompareEnum.LESS_THAN_OR_EQUALS]: (a, b) => a <= b,
  };
  const enumOper = typeof oper === 'string' ? (oper as BigIntCompareEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BigIntCompare operation: ${oper}`);
  return fn(source, target);
}
