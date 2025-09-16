import { ArrayStateEnum, ArrayStateOper } from '../../enums/arrays.js';

/**
 * Checks if an array is empty or not, using the specified operation.
 *
 * @param source The source array.
 * @param oper The state operation to perform (e.g. 'is_empty', 'is_not_empty').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr1 = [];
 * const arr2 = [1, 2, 3];
 *
 * arrayState(arr1, 'is_empty'); // true
 * arrayState(arr2, 'is_not_empty'); // true
 *
 * @remarks
 * Supported Operators
 * | Operator        | Description                        |
 * |-----------------|------------------------------------|
 * | IS_EMPTY        | arr.length === 0                    |
 * | IS_NOT_EMPTY    | arr.length > 0                      |
 */
export function arrayState(source: any[], oper: ArrayStateOper): boolean {
  const operators: Record<ArrayStateEnum, (arr: any[]) => boolean> = {
    [ArrayStateEnum.IS_EMPTY]: (arr) => arr.length === 0,
    [ArrayStateEnum.IS_NOT_EMPTY]: (arr) => arr.length > 0,
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayStateOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayState operation: ${oper}`);
  return fn(source);
}
