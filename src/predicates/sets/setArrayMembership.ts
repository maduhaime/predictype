import { SetArrayMembershipEnum, SetArrayMembershipOper } from '../../enums/sets.js';

/**
 * Checks membership conditions for multiple elements in a set using the specified operation.
 *
 * @param source The set to check.
 * @param oper The membership operation to perform (e.g. 'contains_all', 'contains_any').
 * @param target The array of values to check for membership.
 * @returns True if the membership check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const s = new Set([1, 2, 3]);
 * const values = [2, 4];
 *
 * setArrayMembership(s, 'contains_any', values); // true (contains 2)
 * setArrayMembership(s, 'contains_all', values); // false (missing 4)
 * setArrayMembership(s, 'excludes_all', [5, 6]); // true (excludes both)
 *
 * @remarks
 * Supported Operators:
 * - **CONTAINS_ALL**: Set contains all the given values
 * - **CONTAINS_ANY**: Set contains at least one of the given values
 * - **EXCLUDES_ALL**: Set does not contain any of the given values
 */
export function setArrayMembership<T>(source: Set<T>, oper: SetArrayMembershipOper, target: T[]): boolean {
  const operators: Record<SetArrayMembershipEnum, (s: Set<T>, val: T[]) => boolean> = {
    [SetArrayMembershipEnum.CONTAINS_ALL]: (s, val) => val.every((v) => s.has(v)),
    [SetArrayMembershipEnum.CONTAINS_ANY]: (s, val) => val.some((v) => s.has(v)),
    [SetArrayMembershipEnum.EXCLUDES_ALL]: (s, val) => val.every((v) => !s.has(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as SetArrayMembershipEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetArrayMembership operation: ${oper}`);
  return fn(source, target);
}
