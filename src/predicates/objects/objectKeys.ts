import { ObjectKeysEnum, ObjectKeysOper } from '../../enums/objects.js';

/**
 * Checks object keys according to the specified operation.
 *
 * @param obj The object to check.
 * @param oper The key operation to perform (e.g. 'has_all_keys', 'has_no_keys').
 * @param keys The key(s) to check (string | string[] | symbol[]).
 * @returns True if the key check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const obj = { foo: 1, bar: 2 };
 * const obj2 = { [sym]: 3 };
 * const sym = Symbol('baz');
 *
 * objectKeys(obj, 'has_all_keys', ['foo', 'bar']); // true
 * objectKeys(obj, 'has_no_keys'); // false
 * objectKeys(obj2, 'has_symbol_keys'); // true
 */
export function objectKeys(obj: object, oper: ObjectKeysOper, keys?: string | string[] | symbol[]): boolean {
  const allKeys = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)];
  const asArray = (k: any) => (Array.isArray(k) ? k : [k]);
  const operators: Record<ObjectKeysEnum, (k?: any) => boolean> = {
    [ObjectKeysEnum.HAS_ALL_KEYS]: (k) => asArray(k).every((key: any) => allKeys.includes(key)),
    [ObjectKeysEnum.HAS_ANY_KEY]: (k) => asArray(k).some((key: any) => allKeys.includes(key)),
    [ObjectKeysEnum.HAS_EXACT_KEYS]: (k) => {
      const arr = asArray(k);
      return arr.length === allKeys.length && arr.every((key: any) => allKeys.includes(key));
    },
    [ObjectKeysEnum.HAS_NO_KEYS]: () => allKeys.length === 0,
    [ObjectKeysEnum.HAS_ONLY_KEYS]: (k) => {
      const arr = asArray(k);
      return allKeys.every((key) => arr.includes(key)) && arr.every((key) => allKeys.includes(key));
    },
    [ObjectKeysEnum.HAS_SYMBOL_KEYS]: () => Object.getOwnPropertySymbols(obj).length > 0,
    [ObjectKeysEnum.HAS_ANY_PROPERTY]: () => allKeys.length > 0,
    [ObjectKeysEnum.MATCHES_KEYS]: (k) => {
      const arr = asArray(k);
      return (
        arr.length === allKeys.length &&
        arr.every((key: any) => allKeys.includes(key)) &&
        allKeys.every((key: any) => arr.includes(key))
      );
    },
    [ObjectKeysEnum.ONLY_KEYS]: (k) => {
      const arr = asArray(k);
      return allKeys.every((key) => arr.includes(key));
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectKeysEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectKeys operation: ${oper}`);
  return fn(keys);
}
