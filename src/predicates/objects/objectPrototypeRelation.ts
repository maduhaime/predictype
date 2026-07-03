import { ObjectPrototypeRelationEnum, ObjectPrototypeRelationOper } from '../../enums/objects.js';

/**
 * Checks prototype relation between objects (contains_prototype, is_prototype_of).
 *
 * @param source The object to check.
 * @param oper The prototype relation operation to perform (e.g. 'contains_prototype', 'is_prototype_of').
 * @param proto The prototype to compare against.
 * @returns True if the relation check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const proto = { kind: 'base' };
 * const source = Object.create(proto);
 * const target = Object.create(source);
 *
 * objectPrototypeRelation(source, 'contains_prototype', proto); // true
 * objectPrototypeRelation(source, 'is_prototype_of', target); // true
 *
 * @remarks
 * Supported Operators:
 * - **contains_prototype**: object prototype is the given prototype
 * - **is_prototype_of**: object is prototype of the given value
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

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ObjectPrototypeRelation operation: ${oper}`);
  return fn(proto);
}
