import { SetMembershipEnum, SetMembershipOper } from '../../enums/sets.js';

/**
 * Checks membership conditions for elements in a set using the specified operation.
 *
 * @param source The set to check.
 * @param oper The membership operation to perform (e.g. 'contains', 'excludes').
 * @param target The value to check for membership.
 * @returns True if the membership check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const s = new Set([1, 2, 3]);
 *
 * setMembership(s, 'contains', 2); // true
 * setMembership(s, 'excludes', 4); // true
 *
 * @remarks
 * Supported Operators:
 * - **INCLUDES**: Set contains the value
 * - **EXCLUDES**: Set does not contain the value
 */
export function setMembership<T>(source: Set<T>, oper: SetMembershipOper, target: T): boolean {
  const operators: Record<SetMembershipEnum, (s: Set<T>, val: T) => boolean> = {
    [SetMembershipEnum.INCLUDES]: (s, val) => s.has(val),
    [SetMembershipEnum.EXCLUDES]: (s, val) => !s.has(val),
  };

  const enumOper = typeof oper === 'string' ? (oper as SetMembershipEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetMembership operation: ${oper}`);
  return fn(source, target);
}
