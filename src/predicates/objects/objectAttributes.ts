import { ObjectAttributesEnum, ObjectAttributesOper } from './enums';
/**
 * Checks object property attributes (writable, enumerable, configurable, accessor, data property) using the specified operation.
 *
 * @param obj The object to check.
 * @param oper The attribute operation to perform (e.g. 'is_writable', 'is_accessor').
 * @param key The property key to check.
 * @returns True if the attribute check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const obj = { foo: 42 };
 * const obj2 = {};
 * const sym = Symbol('bar');
 *
 * Object.defineProperty(obj2, sym, { value: 1, writable: false });
 *
 * objectAttributes(obj, 'is_writable', 'foo'); // true
 * objectAttributes(obj2, 'is_writable', sym); // false
 */
export function objectAttributes(obj: object, oper: ObjectAttributesOper, key: string | symbol): boolean {
  const desc = Object.getOwnPropertyDescriptor(obj, key);
  if (!desc) return false;

  const operators: Record<ObjectAttributesEnum, (d: PropertyDescriptor) => boolean> = {
    [ObjectAttributesEnum.IS_WRITABLE]: (d) => !!d.writable,
    [ObjectAttributesEnum.IS_ENUMERABLE]: (d) => !!d.enumerable,
    [ObjectAttributesEnum.IS_CONFIGURABLE]: (d) => !!d.configurable,
    [ObjectAttributesEnum.IS_ACCESSOR]: (d) => typeof d.get === 'function' || typeof d.set === 'function',
    [ObjectAttributesEnum.IS_DATA_PROPERTY]: (d) => 'value' in d,
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectAttributesEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectAttributes operation: ${oper}`);
  return fn(desc);
}
