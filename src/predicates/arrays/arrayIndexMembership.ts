import { ArrayIndexMembershipEnum, ArrayIndexMembershipOper } from '../../enums/arrays.js';

/**
 * Checks if the value at a specific index in an array is (or is not) included in a target array, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The membership operation to perform (e.g. 'value_at_index_in').
 * @param index The index in the array to check.
 * @param target The array of values to check for inclusion/exclusion.
 * @returns True if the membership check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr = [10, 20, 30];
 * const idx1 = 1;
 * const idx2 = 2;
 * const values = [10, 20];
 *
 * arrayIndexMembership(arr, 'value_at_index_in', idx1, values); // true
 * arrayIndexMembership(arr, 'value_at_index_not_in', idx2, values); // true
 */
export function arrayIndexMembership<T>(
  source: T[],
  oper: ArrayIndexMembershipOper,
  index: number,
  target: T[]
): boolean {
  const operators: Record<ArrayIndexMembershipEnum, (arr: T[], idx: number, val: T[]) => boolean> = {
    [ArrayIndexMembershipEnum.VALUE_AT_INDEX_IN]: (arr, i, val) => Array.isArray(val) && val.includes(arr[i]),
    [ArrayIndexMembershipEnum.VALUE_AT_INDEX_NOT_IN]: (arr, i, val) => Array.isArray(val) && !val.includes(arr[i]),
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayIndexMembershipOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayIndexMembership operation: ${oper}`);
  return fn(source, index, target);
}
