import { SetIntersectionEnum, SetIntersectionOper } from '../../enums/sets.js';

/**
 * Checks intersection properties between two sets using the specified operation.
 *
 * @param source The first set.
 * @param oper The intersection operation to perform (e.g. 'disjoint', 'intersects').
 * @param target The second set.
 * @returns True if the intersection check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = new Set([1, 2]);
 * const b = new Set([2, 3]);
 * const c = new Set([4, 5]);
 *
 * setIntersection(a, 'intersects', b); // true
 * setIntersection(a, 'disjoint', c); // true
 *
 * @remarks
 * Supported Operators:
 * - **DISJOINT**: Sets have no elements in common
 * - **INTERSECTS**: Sets have at least one element in common
 */
export function setIntersection<T>(source: Set<T>, oper: SetIntersectionOper, target: Set<T>): boolean {
  const operators: Record<SetIntersectionEnum, (a: Set<T>, b: Set<T>) => boolean> = {
    [SetIntersectionEnum.DISJOINT]: (a, b) => ![...a].some((v) => b.has(v)),
    [SetIntersectionEnum.INTERSECTS]: (a, b) => [...a].some((v) => b.has(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as SetIntersectionEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetIntersection operation: ${oper}`);
  return fn(source, target);
}
