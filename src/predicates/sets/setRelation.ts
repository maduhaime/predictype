import { SetRelationEnum, SetRelationOper } from './enums';

/**
 * Checks the relation between two sets (disjoint, intersects, subset, superset) using the specified operation.
 *
 * @param source The first set.
 * @param oper The relation operation to perform (e.g. 'disjoint', 'is_subset_of').
 * @param target The second set.
 * @returns True if the relation check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = new Set([1, 2]);
 * const b = new Set([2, 3]);
 * const c = new Set([4, 5]);
 *
 * setRelation(a, 'intersects', b); // true
 * setRelation(a, 'disjoint', c); // true
 */
export function setRelation<T>(source: Set<T>, oper: SetRelationOper, target: Set<T>): boolean {
  const operators: Record<SetRelationEnum, (a: Set<T>, b: Set<T>) => boolean> = {
    [SetRelationEnum.DISJOINT]: (a, b) => ![...a].some((v) => b.has(v)),
    [SetRelationEnum.INTERSECTS]: (a, b) => [...a].some((v) => b.has(v)),
    [SetRelationEnum.IS_SUBSET_OF]: (a, b) => [...a].every((v) => b.has(v)),
    [SetRelationEnum.IS_SUPERSET_OF]: (a, b) => [...b].every((v) => a.has(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as SetRelationEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown SetRelation operation: ${oper}`);
  return fn(source, target);
}
