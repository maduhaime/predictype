import { ObjectPrototypeRelationEnum, ObjectPrototypeRelationOper } from '../../enums/objects.js';

/**
 * Checks prototype relation between objects (contains_prototype, is_prototype_of).
 *
 * @param source The object to check.
 * @param oper The prototype operation to perform (e.g. 'is_prototype_of', 'prototype_is_null').
 * @param proto The prototype to compare against.
 * @returns True if the relation check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @remarks
 * Supported Operators:
 * - **CONTAINS_PROTOTYPE**: Object's prototype is the given prototype
 * - **IS_PROTOTYPE_OF**: Object is prototype of the given object
 */
export function objectPrototypeRelation(source: object, oper: ObjectPrototypeRelationOper, proto: any): boolean {
  const operators: Partial<Record<ObjectPrototypeRelationEnum, (p: any) => boolean>> = {
    [ObjectPrototypeRelationEnum.CONTAINS_PROTOTYPE]: (p) => Object.getPrototypeOf(source) === p,
    [ObjectPrototypeRelationEnum.IS_PROTOTYPE_OF]: (p) => {
      if (source == null || (typeof source !== 'object' && typeof source !== 'function')) return false;
      if (p == null || (typeof p !== 'object' && typeof p !== 'function')) return false;
      return Object.prototype.isPrototypeOf.call(source, p);
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectPrototypeRelationEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectPrototypeRelation operation: ${oper}`);
  return fn(proto);
}
