import { ArrayIndexComparisonEnum, ArrayIndexComparisonOper } from '../../enums/arrays.js';

/**
 * Compares the value at a specific index in an array with a target value, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The comparison operation to perform (e.g. 'at_index_equals').
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
 * arrayIndexComparison(arr, 'at_index_equals', idx1, val1); // true
 * arrayIndexComparison(arr, 'at_index_greater_than', idx2, val2); // true
 *
 * @remarks
 * Supported Operators:
 * - **AT_INDEX_EQUALS**: arr[index] === value
 * - **AT_INDEX_NOT_EQUALS**: arr[index] !== value
 * - **AT_INDEX_GREATER_THAN**: arr[index] > value
 * - **AT_INDEX_GREATER_THAN_OR_EQUALS**: arr[index] >= value
 * - **AT_INDEX_LESS_THAN**: arr[index] < value
 * - **AT_INDEX_LESS_THAN_OR_EQUALS**: arr[index] <= value
 */
export function arrayIndexComparison<T>(
  source: T[],
  oper: ArrayIndexComparisonOper,
  index: number,
  target: T
): boolean {
  const operators: Record<ArrayIndexComparisonEnum, (arr: T[], idx: number, val: T) => boolean> = {
    [ArrayIndexComparisonEnum.AT_INDEX_EQUALS]: (arr, i, val) => arr[i] === val,
    [ArrayIndexComparisonEnum.AT_INDEX_GREATER_THAN_OR_EQUALS]: (arr, i, val) => arr[i] >= val,
    [ArrayIndexComparisonEnum.AT_INDEX_GREATER_THAN]: (arr, i, val) => arr[i] > val,
    [ArrayIndexComparisonEnum.AT_INDEX_LESS_THAN_OR_EQUALS]: (arr, i, val) => arr[i] <= val,
    [ArrayIndexComparisonEnum.AT_INDEX_LESS_THAN]: (arr, i, val) => arr[i] < val,
    [ArrayIndexComparisonEnum.AT_INDEX_NOT_EQUALS]: (arr, i, val) => arr[i] !== val,
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayIndexComparisonOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayIndex operation: ${oper}`);
  return fn(source, index, target);
}
