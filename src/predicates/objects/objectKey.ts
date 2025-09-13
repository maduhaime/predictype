import { ObjectKeyEnum, ObjectKeyOper } from '../../enums/objects.js';

/**
 * Checks if an object has or lacks a specific key (string or symbol) using the specified operation.
 *
 * @param obj The object to check.
 * @param oper The key operation to perform (e.g. 'has_key', 'lacks_key').
 * @param key The key to check.
 * @returns True if the key check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const obj = { foo: 1 };
 * const obj2 = {};
 * const sym = Symbol('baz');
 * Object.defineProperty(obj2, sym, { value: 2 });
 *
 * objectKey(obj, 'has_key', 'foo'); // true
 * objectKey(obj, 'lacks_key', 'bar'); // true
 * objectKey(obj2, 'has_key', sym); // true
 */
export function objectKey(obj: object, oper: ObjectKeyOper, key: string | symbol): boolean {
  const operators: Record<ObjectKeyEnum, (k: string | symbol) => boolean> = {
    [ObjectKeyEnum.HAS_KEY]: (k) => Object.prototype.hasOwnProperty.call(obj, k),
    [ObjectKeyEnum.LACKS_KEY]: (k) => !Object.prototype.hasOwnProperty.call(obj, k),
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectKeyEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectKey operation: ${oper}`);
  return fn(key);
}
