import { ArrayComparisonEnum, ArrayComparisonOper } from '../../enums/arrays';

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
 * arrayComparison(arr1, 'equals', arr2); // true
 * arrayComparison(arr1, 'not_equals', arr3); // true
 */
export function arrayComparison<T>(source: T[], oper: ArrayComparisonOper, target: T[]): boolean {
  const operators: Record<ArrayComparisonEnum, (a: T[], b: T[]) => boolean> = {
    [ArrayComparisonEnum.EQUALS]: (a, b) => a.length === b.length && a.every((v, i) => v === b[i]),
    [ArrayComparisonEnum.NOT_EQUALS]: (a, b) => a.length !== b.length || a.some((v, i) => v !== b[i]),
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayComparison operation: ${oper}`);
  return fn(source, target);
}
