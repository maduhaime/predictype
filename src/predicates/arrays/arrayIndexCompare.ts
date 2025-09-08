import { ArrayIndexCompareEnum, ArrayIndexCompareOper } from './enums';

/**
 * Compares the value at a specific index in an array with a target value, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The comparison operation to perform (e.g. 'value_at_index_equals').
 * @param index The index in the array to compare.
 * @param target The value to compare against the value at the given index.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr = [10, 20, 30];
 * const idx1 = 1;
 * const idx2 = 2;
 * const val1 = 20;
 * const val2 = 25;
 *
 * arrayIndexCompare(arr, 'value_at_index_equals', idx1, val1); // true
 * arrayIndexCompare(arr, 'value_at_index_greater_than', idx2, val2); // true
 */
export function arrayIndexCompare<T>(source: T[], oper: ArrayIndexCompareOper, index: number, target: T): boolean {
  const operators: Record<ArrayIndexCompareEnum, (arr: T[], idx: number, val: T) => boolean> = {
    [ArrayIndexCompareEnum.VALUE_AT_INDEX_EQUALS]: (arr, i, val) => arr[i] === val,
    [ArrayIndexCompareEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS]: (arr, i, val) => arr[i] >= val,
    [ArrayIndexCompareEnum.VALUE_AT_INDEX_GREATER_THAN]: (arr, i, val) => arr[i] > val,
    [ArrayIndexCompareEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS]: (arr, i, val) => arr[i] <= val,
    [ArrayIndexCompareEnum.VALUE_AT_INDEX_LESS_THAN]: (arr, i, val) => arr[i] < val,
    [ArrayIndexCompareEnum.VALUE_AT_INDEX_NOT_EQUALS]: (arr, i, val) => arr[i] !== val,
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayIndexCompareOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayIndex operation: ${oper}`);
  return fn(source, index, target);
}
