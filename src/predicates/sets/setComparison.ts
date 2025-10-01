import { SetComparisonEnum, SetComparisonOper } from '../../enums/sets.js';

/**
 * Compares two sets for equality or inequality using the specified operation.
 *
 * @param source The first set to compare.
 * @param oper The comparison operation to perform (e.g. 'equals', 'not_equals').
 * @param target The second set to compare.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = new Set([1, 2, 3]);
 * const b = new Set([1, 2, 3]);
 * const c = new Set([4, 5]);
 *
 * setComparison(a, 'equals', b); // true
 * setComparison(a, 'not_equals', c); // true
 *
 * @remarks
 * Supported Operators:
 * - **EQUALS**: Sets are equal
 * - **NOT_EQUALS**: Sets are not equal
 * - **SAME_ELEMENTS**: Sets contain the same elements (alias for EQUALS)
 */
export function setComparison<T>(source: Set<T>, oper: SetComparisonOper, target: Set<T>): boolean {
  const operators: Record<SetComparisonEnum, (a: Set<T>, b: Set<T>) => boolean> = {
    [SetComparisonEnum.EQUALS]: (a, b) => a.size === b.size && [...a].every((v) => b.has(v)),
    [SetComparisonEnum.NOT_EQUALS]: (a, b) => !(a.size === b.size && [...a].every((v) => b.has(v))),
    [SetComparisonEnum.SAME_ELEMENTS]: (a, b) => a.size === b.size && [...a].every((v) => b.has(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as SetComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetComparison operation: ${oper}`);
  return fn(source, target);
}
