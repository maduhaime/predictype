import { SetRelationEnum, SetRelationOper } from '../../enums/sets.js';

/**
 * Checks the relation between two sets (disjoint, intersects, subset, superset) using the specified operation.
 *
 * @param source The first set.
 * @param oper The relation operation to perform (e.g. 'disjoint', 'subset_of').
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
 * setRelation(a, 'subset_of', b); // true
 * setRelation(a, 'superset_of', b); // false
 *
 * @remarks
 * Supported Operators:
 * - **DISJOINT**: Sets have no elements in common
 * - **INTERSECTS**: Sets have at least one element in common
 * - **SUBSET_OF**: First set is a subset of second
 * - **SUPERSET_OF**: First set is a superset of second
 * - **STRICT_SUBSET_OF**: First set is a strict subset of second
 * - **STRICT_SUPERSET_OF**: First set is a strict superset of second
 */
export function setRelation<T>(source: Set<T>, oper: SetRelationOper, target: Set<T>): boolean {
  const operators: Record<SetRelationEnum, (a: Set<T>, b: Set<T>) => boolean> = {
    [SetRelationEnum.DISJOINT]: (a, b) => ![...a].some((v) => b.has(v)),
    [SetRelationEnum.INTERSECTS]: (a, b) => [...a].some((v) => b.has(v)),
    [SetRelationEnum.SUBSET_OF]: (a, b) => [...a].every((v) => b.has(v)),
    [SetRelationEnum.SUPERSET_OF]: (a, b) => [...b].every((v) => a.has(v)),
    [SetRelationEnum.STRICT_SUBSET_OF]: (a, b) => a.size < b.size && [...a].every((v) => b.has(v)),
    [SetRelationEnum.STRICT_SUPERSET_OF]: (a, b) => a.size > b.size && [...b].every((v) => a.has(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as SetRelationEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetRelation operation: ${oper}`);
  return fn(source, target);
}
