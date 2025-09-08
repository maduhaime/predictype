import { SetCompareEnum, SetCompareOper } from './enums';

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
 * setCompare(a, 'equals', b); // true
 * setCompare(a, 'not_equals', c); // true
 */
export function setCompare<T>(source: Set<T>, oper: SetCompareOper, target: Set<T>): boolean {
  const operators: Record<SetCompareEnum, (a: Set<T>, b: Set<T>) => boolean> = {
    [SetCompareEnum.EQUALS]: (a, b) => a.size === b.size && [...a].every((v) => b.has(v)),
    [SetCompareEnum.NOT_EQUALS]: (a, b) => !(a.size === b.size && [...a].every((v) => b.has(v))),
  };

  const enumOper = typeof oper === 'string' ? (oper as SetCompareEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown SetCompare operation: ${oper}`);
  return fn(source, target);
}
