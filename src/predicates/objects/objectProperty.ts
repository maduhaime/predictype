import { ObjectPropertyEnum, ObjectPropertyOper } from '../../enums/objects.js';

/**
 * Checks if an object has or lacks a property (own or inherited) using the specified operation.
 *
 * @param source The object to check.
 * @param oper The property operation to perform (e.g. 'contains_property', 'lacks_own_property').
 * @param key The property key to check.
 * @returns True if the property check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @remarks
 * Supported Operators
 * | Operator                | Description                                 |
 * |-------------------------|---------------------------------------------|
 * | CONTAINS_PROPERTY       | Object has the property (own or inherited)   |
 * | LACKS_PROPERTY          | Object lacks the property (own or inherited) |
 * | CONTAINS_OWN_PROPERTY   | Object has the property as own property      |
 * | LACKS_OWN_PROPERTY      | Object lacks the property as own property    |
 */
export function objectProperty(source: object, oper: ObjectPropertyOper, key: string | symbol): boolean {
  const operators: Record<ObjectPropertyEnum, (k: string | symbol) => boolean> = {
    [ObjectPropertyEnum.CONTAINS_PROPERTY]: (k) => k in source,
    [ObjectPropertyEnum.LACKS_PROPERTY]: (k) => !(k in source),
    [ObjectPropertyEnum.CONTAINS_OWN_PROPERTY]: (k) => Object.prototype.hasOwnProperty.call(source, k),
    [ObjectPropertyEnum.LACKS_OWN_PROPERTY]: (k) => !Object.prototype.hasOwnProperty.call(source, k),
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectPropertyEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectProperty operation: ${oper}`);
  return fn(key);
}
