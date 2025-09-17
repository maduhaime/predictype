import { ObjectInstanceRelationEnum, ObjectInstanceRelationOper } from '../../enums/objects.js';

/**
 * Checks instance or prototype relation between two values using the specified operation.
 *
 * @param source The value to check.
 * @param oper The relation operation to perform (e.g. 'instance_of', 'prototype_of').
 * @param target The target to compare against.
 * @returns True if the relation check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @remarks
 * Supported Operators
 * | Operator         | Description                                 |
 * |------------------|---------------------------------------------|
 * | INSTANCE_OF      | value instanceof target                     |
 * | PROTOTYPE_OF     | value is prototype of target                |
 */
export function objectInstanceRelation(source: any, oper: ObjectInstanceRelationOper, target: any): boolean {
  const operators: Record<ObjectInstanceRelationEnum, (v: any, t: any) => boolean> = {
    [ObjectInstanceRelationEnum.INSTANCE_OF]: (v, t) => typeof t === 'function' && v instanceof t,
    [ObjectInstanceRelationEnum.PROTOTYPE_OF]: (v, t) => {
      if (v == null || (typeof v !== 'object' && typeof v !== 'function')) return false;
      if (t == null || (typeof t !== 'object' && typeof t !== 'function')) return false;
      return Object.prototype.isPrototypeOf.call(v, t);
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectInstanceRelationEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectInstanceRelation operation: ${oper}`);
  return fn(source, target);
}
