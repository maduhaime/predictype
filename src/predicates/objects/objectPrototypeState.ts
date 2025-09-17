import { ObjectPrototypeStateEnum, ObjectPrototypeStateOper } from '../../enums/objects.js';

/**
 * Checks state-related properties of an object's prototype (e.g. prototype_is_null).
 *
 * @param source The object to check.
 * @param oper The prototype state operation to perform.
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @remarks
 * Supported Operators
 * | Operator              | Description                                 |
 * |-----------------------|---------------------------------------------|
 * | PROTOTYPE_IS_NULL     | Object's prototype is null                   |
 */
export function objectPrototypeState(source: object, oper: ObjectPrototypeStateOper): boolean {
  const operators: Record<ObjectPrototypeStateEnum, (o: object) => boolean> = {
    [ObjectPrototypeStateEnum.PROTOTYPE_IS_NULL]: (o) => Object.getPrototypeOf(o) === null,
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectPrototypeStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectPrototypeState operation: ${oper}`);
  return fn(source);
}
