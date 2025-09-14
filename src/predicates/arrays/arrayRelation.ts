import { ArrayRelationEnum, ArrayRelationOper } from '../../enums/arrays.js';

/**
 * Checks if the source array is a subset, strict subset, superset, or strict superset of the target array, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The relation operation to perform ('is_subset_of', 'is_superset_of', 'strict_subset', 'strict_superset').
 * @param target The target array to check against the source.
 * @returns True if the relation check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example <caption>Subset and Superset</caption>
 * arrayRelation([1, 2], 'is_subset_of', [1, 2, 3]); // true
 * arrayRelation([1, 2], 'is_subset_of', [1, 2]); // true (equality allowed)
 * arrayRelation([1, 2, 3], 'is_superset_of', [2, 3]); // true
 * arrayRelation([1, 2], 'is_superset_of', [1, 2]); // true (equality allowed)
 *
 * @example <caption>Strict Subset and Strict Superset</caption>
 * arrayRelation([1, 2], 'strict_subset', [1, 2, 3]); // true
 * arrayRelation([1, 2], 'strict_subset', [1, 2]); // false (equality not allowed)
 * arrayRelation([1, 2, 3], 'strict_superset', [2, 3]); // true
 * arrayRelation([1, 2], 'strict_superset', [1, 2]); // false (equality not allowed)
 */
export function arrayRelation<T>(source: T[], oper: ArrayRelationOper, target: T[]): boolean {
  const operators: Record<ArrayRelationEnum, (a: T[], b: T[]) => boolean> = {
    [ArrayRelationEnum.IS_SUBSET_OF]: (a, b) => a.every((v) => b.includes(v)),
    [ArrayRelationEnum.IS_SUPERSET_OF]: (a, b) => b.every((v) => a.includes(v)),
    [ArrayRelationEnum.STRICT_SUBSET]: (a, b) => a.length < b.length && a.every((v) => b.includes(v)),
    [ArrayRelationEnum.STRICT_SUPERSET]: (a, b) => a.length > b.length && b.every((v) => a.includes(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayRelationOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayRelation operation: ${oper}`);
  return fn(source, target);
}
