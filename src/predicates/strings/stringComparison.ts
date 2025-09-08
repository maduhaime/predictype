import { StringComparisonEnum, StringComparisonOper } from './enums';

/**
 * Compares two strings using the specified operation.
 *
 * @param source The first string.
 * @param oper The comparison operation to perform (e.g. 'equals', 'greater_than').
 * @param target The second string.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = 'foo';
 * const b = 'bar';
 *
 * stringComparison(a, 'greater_than', b); // true
 * stringComparison(a, 'equals', a); // true
 */
export function stringComparison(source: string, oper: StringComparisonOper, target: string): boolean {
  const operators: Record<StringComparisonEnum, (a: string, b: string) => boolean> = {
    [StringComparisonEnum.EQUALS]: (a, b) => a === b,
    [StringComparisonEnum.NOT_EQUALS]: (a, b) => a !== b,
    [StringComparisonEnum.GREATER_THAN]: (a, b) => a > b,
    [StringComparisonEnum.LESS_THAN]: (a, b) => a < b,
  };

  const enumOper = typeof oper === 'string' ? (oper as StringComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringComparison operation: ${oper}`);
  return fn(source, target);
}
