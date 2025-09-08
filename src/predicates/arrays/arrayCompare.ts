import { ArrayCompareEnum, ArrayCompareOper } from './enums';

/**
 * Compares two arrays for strict equality or inequality based on the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array to compare.
 * @param oper The comparison operation to perform (EQUALS or NOT_EQUALS).
 * @param target The target array to compare against the source.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr1 = [1, 2, 3];
 * const arr2 = [1, 2, 3];
 * const arr3 = [1, 2, 4];
 *
 * arrayCompare(arr1, 'equals', arr2); // true
 * arrayCompare(arr1, 'not_equals', arr3); // true
 */
export function arrayCompare<T>(source: T[], oper: ArrayCompareOper, target: T[]): boolean {
  const operators: Record<ArrayCompareEnum, (a: T[], b: T[]) => boolean> = {
    [ArrayCompareEnum.EQUALS]: (a, b) => a.length === b.length && a.every((v, i) => v === b[i]),
    [ArrayCompareEnum.NOT_EQUALS]: (a, b) => a.length !== b.length || a.some((v, i) => v !== b[i]),
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayCompareEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayCompare operation: ${oper}`);
  return fn(source, target);
}
