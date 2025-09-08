import { ArraySequenceEnum, ArraySequenceOper } from './enums';

/**
 * Checks if the source array contains, starts with, or ends with a given subsequence, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The sequence operation to perform (e.g. 'contains_subsequence', 'starts_with', 'ends_with').
 * @param target The target subsequence array to check against the source.
 * @returns True if the sequence check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr1 = [1, 2, 3, 4];
 * const arr2 = [2, 3];
 * const arr3 = [1, 2, 3];
 * const arr4 = [1, 2];
 *
 * arraySequence(arr1, 'contains_subsequence', arr2); // true
 * arraySequence(arr3, 'starts_with', arr4); // true
 */
export function arraySequence<T>(source: T[], oper: ArraySequenceOper, target: T[]): boolean {
  const operators: Record<ArraySequenceEnum, (a: T[], b: T[]) => boolean> = {
    [ArraySequenceEnum.CONTAINS_SUBSEQUENCE]: (a, b) => {
      for (let i = 0; i <= a.length - b.length; i++) {
        if (b.every((v, j) => v === a[i + j])) return true;
      }
      return false;
    },
    [ArraySequenceEnum.ENDS_WITH]: (a, b) => {
      return a.length >= b.length && a.slice(a.length - b.length).every((v, i) => v === b[i]);
    },
    [ArraySequenceEnum.STARTS_WITH]: (a, b) => {
      return a.length >= b.length && a.slice(0, b.length).every((v, i) => v === b[i]);
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as ArraySequenceOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArraySequence operation: ${oper}`);
  return fn(source, target);
}
