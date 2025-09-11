import { ArrayIntersectionEnum, ArrayIntersectionOper } from '../../enums/arrays';

/**
 * Checks if two arrays are disjoint or intersect, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The intersection operation to perform (e.g. 'disjoint', 'intersects').
 * @param target The target array to check against the source.
 * @returns True if the intersection check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr1 = [1, 2, 3];
 * const arr2 = [4, 5, 6];
 * const arr3 = [2, 4, 6];
 *
 * arrayIntersection(arr1, 'disjoint', arr2); // true
 * arrayIntersection(arr1, 'intersects', arr3); // true
 */
export function arrayIntersection<T>(source: T[], oper: ArrayIntersectionOper, target: T[]): boolean {
  const operators: Record<ArrayIntersectionEnum, (a: T[], b: T[]) => boolean> = {
    [ArrayIntersectionEnum.DISJOINT]: (a, b) => !a.some((v) => b.includes(v)),
    [ArrayIntersectionEnum.INTERSECTS]: (a, b) => a.some((v) => b.includes(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayIntersectionOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayIntersection operation: ${oper}`);
  return fn(source, target);
}
