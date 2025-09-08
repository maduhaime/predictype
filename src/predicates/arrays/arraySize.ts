import { ArraySizeEnum, ArraySizeOper } from './enums';

/**
 * Checks the size of an array against a target value, using the specified operation.
 *
 * @param source The source array.
 * @param oper The size operation to perform (e.g. 'equals', 'greater_than').
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
 * arraySize(arr, 'equals', len1); // true
 * arraySize(arr, 'greater_than', len2); // true
 */
export function arraySize(source: any[], oper: ArraySizeOper, target: number): boolean {
  const operators: Record<ArraySizeEnum, (arr: any[], val: number) => boolean> = {
    [ArraySizeEnum.EQUALS]: (arr, val) => arr.length === val,
    [ArraySizeEnum.GREATER_THAN_OR_EQUALS]: (arr, val) => arr.length >= val,
    [ArraySizeEnum.GREATER_THAN]: (arr, val) => arr.length > val,
    [ArraySizeEnum.LESS_THAN_OR_EQUALS]: (arr, val) => arr.length <= val,
    [ArraySizeEnum.LESS_THAN]: (arr, val) => arr.length < val,
  };

  const enumOper = typeof oper === 'string' ? (oper as ArraySizeOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArraySize operation: ${oper}`);
  return fn(source, target);
}
