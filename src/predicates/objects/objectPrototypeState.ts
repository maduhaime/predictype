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
 * @example
 * const sourceA = Object.create(null);
 * const sourceB = { id: 1 };
 *
 * objectPrototypeState(sourceA, 'prototype_is_null'); // true
 * objectPrototypeState(sourceB, 'prototype_is_null'); // false
 *
 * @remarks
 * Supported Operators:
 * - **prototype_is_null**: Object prototype is null
 */
export function objectPrototypeState(source: object, oper: ObjectPrototypeStateOper): boolean {
  const operators: Record<ObjectPrototypeStateEnum, (o: object) => boolean> = {
    [ObjectPrototypeStateEnum.PROTOTYPE_IS_NULL]: (o) => Object.getPrototypeOf(o) === null,
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ObjectPrototypeState operation: ${oper}`);
  return fn(source);
}
