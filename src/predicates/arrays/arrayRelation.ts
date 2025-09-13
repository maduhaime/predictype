import { ArrayRelationEnum, ArrayRelationOper } from '../../enums/arrays.js';

/**
 * Checks if the source array is a subset or superset of the target array, using the specified operation.
 *
 * @template T Type of the array elements.
 * @param source The source array.
 * @param oper The relation operation to perform (e.g. 'is_subset_of', 'is_superset_of').
 * @param target The target array to check against the source.
 * @returns True if the relation check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const arr1 = [1, 2];
 * const arr2 = [1, 2, 3];
 * const arr3 = [2, 3];
 *
 * arrayRelation(arr1, 'is_subset_of', arr2); // true
 * arrayRelation(arr2, 'is_superset_of', arr3); // true
 */
export function arrayRelation<T>(source: T[], oper: ArrayRelationOper, target: T[]): boolean {
  const operators: Record<ArrayRelationEnum, (a: T[], b: T[]) => boolean> = {
    [ArrayRelationEnum.IS_SUBSET_OF]: (a, b) => a.every((v) => b.includes(v)),
    [ArrayRelationEnum.IS_SUPERSET_OF]: (a, b) => b.every((v) => a.includes(v)),
  };

  const enumOper = typeof oper === 'string' ? (oper as ArrayRelationOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ArrayRelation operation: ${oper}`);
  return fn(source, target);
}
