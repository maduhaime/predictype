import { ArrayComparisonEnum, ArrayComparisonOper } from '../../enums/arrays.js';

/**
 * Compares two arrays using a variety of comparison operations.
 *
 * @template T Type of the array elements.
 * @param source The source array to compare.
 * @param oper The comparison operation to perform (EQUALS, NOT_EQUALS, SAME_MEMBERS, SET_EQUALS, SET_NOT_EQUALS).
 * @param target The target array to compare against the source.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * arrayComparison([1, 2, 3], 'equals', [1, 2, 3]); // true
 * arrayComparison([1, 2, 3], 'equals', [3, 2, 1]); // false
 * arrayComparison([1, 2, 3], 'not_equals', [1, 2, 4]); // true
 * arrayComparison([1, 2, 2], 'same_members', [2, 1, 2]); // true
 * arrayComparison([1, 2, 2], 'same_members', [2, 1]); // false
 * arrayComparison([1, 2, 2], 'set_equals', [2, 1]); // true
 * arrayComparison([1, 2, 2], 'set_equals', [2, 1, 3]); // false
 * arrayComparison([1, 2, 2], 'set_not_equals', [2, 1, 3]); // true
 * arrayComparison([1, 2, 2], 'set_not_equals', [2, 1]); // false
 *
 * @remarks
 * Supported operators:
 * - EQUALS: Strict equality (same order, same values)
 * - NOT_EQUALS: Strict inequality (different order or values)
 * - SAME_MEMBERS: Multiset equality (same values and counts, order ignored)
 * - SET_EQUALS: Set equality (same unique values, order/dupes ignored)
 * - SET_NOT_EQUALS: Set inequality (different unique values)
 */

export function arrayComparison<T>(source: T[], oper: ArrayComparisonOper, target: T[]): boolean {
  const operators: Record<ArrayComparisonEnum, (a: T[], b: T[]) => boolean> = {
    [ArrayComparisonEnum.EQUALS]: (a, b) => a.length === b.length && a.every((v, i) => v === b[i]),
    [ArrayComparisonEnum.NOT_EQUALS]: (a, b) => a.length !== b.length || a.some((v, i) => v !== b[i]),
    [ArrayComparisonEnum.SAME_MEMBERS]: (a, b) => {
      if (a.length !== b.length) return false;
      const count = (arr: T[]) =>
        arr.reduce((acc, val) => {
          acc.set(val, (acc.get(val) ?? 0) + 1);
          return acc;
        }, new Map<T, number>());
      const aCount = count(a);
      const bCount = count(b);
      if (aCount.size !== bCount.size) return false;
      for (const [val, n] of aCount) {
        if (bCount.get(val) !== n) return false;
      }
      return true;
    },
    [ArrayComparisonEnum.SET_EQUALS]: (a, b) => {
      const setA = new Set(a);
      const setB = new Set(b);
      if (setA.size !== setB.size) return false;
      for (const val of setA) {
        if (!setB.has(val)) return false;
      }
      return true;
    },
    [ArrayComparisonEnum.SET_NOT_EQUALS]: (a, b) => {
      const setA = new Set(a);
      const setB = new Set(b);
      if (setA.size !== setB.size) return true;
      for (const val of setA) {
        if (!setB.has(val)) return true;
      }
      return false;
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayComparison operation: ${oper}`);
  return fn(source, target);
}
