import { ArraySizeEnum, ArraySizeOper } from '../../enums/arrays.js';

/**
 * Checks the size of an array against a target value, using the specified operation.
 *
 * @param source The source array.
 * @param oper The size operation to perform (e.g. 'length_equals', 'length_greater_than').
 * @param target The target size to compare against the array's length.
 * @returns True if the size check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr = [1, 2, 3];
 * const len1 = 3;
 * const len2 = 2;
 *
 * arraySize(arr, 'length_equals', len1); // true
 * arraySize(arr, 'length_greater_than', len2); // true
 *
 * @remarks
 * Supported Operators:
 * - **SIZE_EQUALS**: arr.length === target
 * - **SIZE_GREATER_THAN**: arr.length > target
 * - **SIZE_GREATER_THAN_OR_EQUALS**: arr.length >= target
 * - **SIZE_LESS_THAN**: arr.length < target
 * - **SIZE_LESS_THAN_OR_EQUALS**: arr.length <= target
 */
export function arraySize(source: any[], oper: ArraySizeOper, target: number): boolean {
  const operators: Record<ArraySizeEnum, (arr: any[], val: number) => boolean> = {
    [ArraySizeEnum.SIZE_EQUALS]: (arr, val) => arr.length === val,
    [ArraySizeEnum.SIZE_GREATER_THAN_OR_EQUALS]: (arr, val) => arr.length >= val,
    [ArraySizeEnum.SIZE_GREATER_THAN]: (arr, val) => arr.length > val,
    [ArraySizeEnum.SIZE_LESS_THAN_OR_EQUALS]: (arr, val) => arr.length <= val,
    [ArraySizeEnum.SIZE_LESS_THAN]: (arr, val) => arr.length < val,
  };

  const enumOper = typeof oper === 'string' ? (oper as ArraySizeOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArraySize operation: ${oper}`);
  return fn(source, target);
}
