import { ArrayMembershipEnum, ArrayMembershipOper } from '../../enums/arrays';

/**
 * Checks membership conditions for all or some elements in an array, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The membership operation to perform (e.g. 'every_equals', 'includes').
 * @param target The value to check for membership.
 * @returns True if the membership check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr1 = [1, 1, 1];
 * const arr2 = [1, 2, 3];
 * const value1 = 1;
 * const value2 = 2;
 *
 * arrayMembership(arr1, 'every_equals', value1); // true
 * arrayMembership(arr2, 'includes', value2); // true
 */
export function arrayMembership<T>(source: T[], oper: ArrayMembershipOper, target: T): boolean {
  const operators: Record<ArrayMembershipEnum, (arr: T[], val: T) => boolean> = {
    [ArrayMembershipEnum.EVERY_EQUALS]: (arr, val) => arr.every((v) => v === val),
    [ArrayMembershipEnum.EXCLUDES]: (arr, val) => !arr.includes(val),
    [ArrayMembershipEnum.INCLUDES]: (arr, val) => arr.includes(val),
    [ArrayMembershipEnum.SOME_EQUALS]: (arr, val) => arr.some((v) => v === val),
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayMembershipEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayMembership operation: ${oper}`);
  return fn(source, target);
}
