import { ObjectKeysEnum, ObjectKeysOper } from '../../enums/objects.js';

/**
 * Checks object keys for key-comparison operations (CONTAINS_, LACKS_, EQUALS_, etc.).
 *
 * @param obj The object to check.
 * @param oper The key operation to perform (e.g. 'contains_all_keys', 'lacks_all_keys', 'equals_keys', ...).
 * @param keys The array of keys to check (string[] | symbol[]).
 * @returns True if the key check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized or keys is missing.
 *
 * @remarks
 * Supported Operators
 * | Operator                | Description                                 |
 * |-------------------------|---------------------------------------------|
 * | CONTAINS_ALL_KEYS       | Object contains all the given keys           |
 * | CONTAINS_ANY_KEY        | Object contains at least one of the keys     |
 * | CONTAINS_ONLY_KEYS      | Object contains only the given keys          |
 * | CONTAINS_SYMBOL_KEYS    | Object contains at least one symbol key      |
 * | EQUALS_KEYS             | Object keys equal the given keys             |
 * | LACKS_ALL_KEYS          | Object lacks all the given keys              |
 * | ONLY_KEYS               | All object keys are in the given set         |
 * | STRICT_EQUALS_KEYS      | Object keys strictly equal the given keys    |
 */
export function objectKeysCompare(obj: object, oper: ObjectKeysOper, keys: string[] | symbol[]): boolean {
  const allKeys = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)];
  const operators: Record<ObjectKeysEnum, (k: (string | symbol)[]) => boolean> = {
    [ObjectKeysEnum.CONTAINS_ALL_KEYS]: (k) => k.every((key) => allKeys.includes(key)),
    [ObjectKeysEnum.CONTAINS_ANY_KEY]: (k) => k.some((key) => allKeys.includes(key)),
    [ObjectKeysEnum.CONTAINS_ONLY_KEYS]: (k) => {
      return allKeys.every((key) => k.includes(key)) && k.every((key) => allKeys.includes(key));
    },
    [ObjectKeysEnum.CONTAINS_SYMBOL_KEYS]: (_k) => Object.getOwnPropertySymbols(obj).length > 0,
    [ObjectKeysEnum.EQUALS_KEYS]: (k) => k.length === allKeys.length && k.every((key) => allKeys.includes(key)),
    [ObjectKeysEnum.ONLY_KEYS]: (k) => allKeys.every((key) => k.includes(key)),
    [ObjectKeysEnum.LACKS_ALL_KEYS]: (k) => k.every((key) => !allKeys.includes(key)),
    [ObjectKeysEnum.STRICT_EQUALS_KEYS]: (k) => k.length === allKeys.length && k.every((key, i) => allKeys[i] === key),
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectKeysEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectKeys operation: ${oper}`);
  return fn(keys);
}
