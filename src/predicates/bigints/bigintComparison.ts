import { BigIntComparisonEnum, BigIntComparisonOper } from './enums';

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
 * bigintComparison(a, 'equals', a); // true
 * bigintComparison(a, 'greater_than', b); // true
 * bigintComparison(a, 'less_than', c); // true
 */
export function bigintComparison(source: bigint, oper: BigIntComparisonOper, target: bigint): boolean {
  const operators: Record<BigIntComparisonEnum, (a: bigint, b: bigint) => boolean> = {
    [BigIntComparisonEnum.EQUALS]: (a, b) => a === b,
    [BigIntComparisonEnum.NOT_EQUALS]: (a, b) => a !== b,
    [BigIntComparisonEnum.GREATER_THAN]: (a, b) => a > b,
    [BigIntComparisonEnum.GREATER_THAN_OR_EQUALS]: (a, b) => a >= b,
    [BigIntComparisonEnum.LESS_THAN]: (a, b) => a < b,
    [BigIntComparisonEnum.LESS_THAN_OR_EQUALS]: (a, b) => a <= b,
  };
  const enumOper = typeof oper === 'string' ? (oper as BigIntComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BigIntComparison operation: ${oper}`);
  return fn(source, target);
}
