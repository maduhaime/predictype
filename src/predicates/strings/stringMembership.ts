import { StringMembershipEnum, StringMembershipOper } from '../../enums/strings.js';

/**
 * Checks if a string is (or is not) a member of a set of strings using the specified operation.
 *
 * @param source The string to check.
 * @param oper The membership operation to perform (e.g. 'in', 'not_in').
 * @param arr The array of strings to check membership against.
 * @returns True if the membership check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr = ['foo', 'bar'];
 * const value1 = 'foo';
 * const value2 = 'baz';
 *
 * stringMembership(value1, 'in', arr); // true
 * stringMembership(value2, 'not_in', arr); // true
 *
 * @remarks
 * Supported Operators
 * | Operator   | Description                        |
 * |------------|------------------------------------|
 * | IN         | String is in the array              |
 * | NOT_IN     | String is not in the array          |
 */
export function stringMembership(source: string, oper: StringMembershipOper, arr: string[]): boolean {
  const operators: Record<StringMembershipEnum, (a: string, b: string[]) => boolean> = {
    [StringMembershipEnum.IN]: (a, b) => b.includes(a),
    [StringMembershipEnum.NOT_IN]: (a, b) => !b.includes(a),
  };

  const enumOper = typeof oper === 'string' ? (oper as StringMembershipEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringMembership operation: ${oper}`);
  return fn(source, arr);
}
