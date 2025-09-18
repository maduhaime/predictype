import { ObjectKeyMembershipEnum, ObjectKeyMembershipOper } from '../../enums/objects.js';

/**
 * Checks if a key is (or is not) in a list of possible keys using the specified operation.
 *
 * @param source The object to check.
 * @param oper The membership operation to perform (e.g. 'key_in', 'key_not_in').
 * @param keys The array of possible keys.
 * @returns True if the membership check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized or keys is missing.
 *
 * @remarks
 * Supported Operators:
 * - **IN**: At least one key is present
 * - **NOT_IN**: No keys are present
 */
export function objectKeyMembership(source: object, oper: ObjectKeyMembershipOper, keys: (string | symbol)[]): boolean {
  const allKeys = [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)];
  const operators: Record<ObjectKeyMembershipEnum, (k: (string | symbol)[]) => boolean> = {
    [ObjectKeyMembershipEnum.IN]: (k) => allKeys.some((key) => k.includes(key)),
    [ObjectKeyMembershipEnum.NOT_IN]: (k) => allKeys.every((key) => !k.includes(key)),
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectKeyMembershipEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectKeyMembership operation: ${oper}`);
  return fn(keys);
}
