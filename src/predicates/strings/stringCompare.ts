import { StringCompareEnum, StringCompareOper } from './enums';

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
 * stringCompare(a, 'greater_than', b); // true
 * stringCompare(a, 'equals', a); // true
 */
export function stringCompare(source: string, oper: StringCompareOper, target: string): boolean {
  const operators: Record<StringCompareEnum, (a: string, b: string) => boolean> = {
    [StringCompareEnum.EQUALS]: (a, b) => a === b,
    [StringCompareEnum.NOT_EQUALS]: (a, b) => a !== b,
    [StringCompareEnum.GREATER_THAN]: (a, b) => a > b,
    [StringCompareEnum.LESS_THAN]: (a, b) => a < b,
  };

  const enumOper = typeof oper === 'string' ? (oper as StringCompareEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringCompare operation: ${oper}`);
  return fn(source, target);
}
