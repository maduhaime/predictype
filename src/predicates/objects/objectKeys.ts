import { ObjectKeysEnum, ObjectKeysOper } from '../../enums/objects.js';

/**
 * Checks object keys for key-comparison operations (CONTAINS_, LACKS_, EQUALS_, etc.).
 *
 * @param source The object to check.
 * @param oper The key operation to perform (e.g. 'contains_all_keys', 'lacks_all_keys', 'equals_keys', ...).
 * @param keys The array of keys to check (string[] | symbol[]).
 * @returns True if the key check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized or keys is missing.
 *
 * @example
 * const source = { a: 1, b: 2, c: 3 };
 * const keysA = ['a', 'b'];
 * const keysB = ['a', 'b', 'c'];
 *
 * objectKeysCompare(source, 'contains_all_keys', keysA); // true
 * objectKeysCompare(source, 'equals_keys', keysB); // true
 * objectKeysCompare(source, 'lacks_all_keys', ['z']); // true
 *
 * @remarks
 * Supported Operators:
 * - **contains_all_keys**: object contains all given keys
 * - **contains_any_key**: object contains at least one given key
 * - **contains_only_keys**: object keys and given keys contain the same members
 * - **contains_symbol_keys**: object has at least one symbol key
 * - **equals_keys**: object keys equal given keys (order ignored)
 * - **lacks_all_keys**: object contains none of the given keys
 * - **only_keys**: every object key belongs to given keys
 * - **strict_equals_keys**: object keys equal given keys in same order
 */
export function objectKeysCompare(source: object, oper: ObjectKeysOper, keys: string[] | symbol[]): boolean {
  const allKeys = [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)];
  const operators: Record<ObjectKeysEnum, (k: (string | symbol)[]) => boolean> = {
    [ObjectKeysEnum.CONTAINS_ALL_KEYS]: (k) => k.every((key) => allKeys.includes(key)),
    [ObjectKeysEnum.CONTAINS_ANY_KEY]: (k) => k.some((key) => allKeys.includes(key)),
    // eslint-disable-next-line arrow-body-style
    [ObjectKeysEnum.CONTAINS_ONLY_KEYS]: (k) => {
      return allKeys.every((key) => k.includes(key)) && k.every((key) => allKeys.includes(key));
    },
    [ObjectKeysEnum.CONTAINS_SYMBOL_KEYS]: (_k) => Object.getOwnPropertySymbols(source).length > 0,
    [ObjectKeysEnum.EQUALS_KEYS]: (k) => k.length === allKeys.length && k.every((key) => allKeys.includes(key)),
    [ObjectKeysEnum.ONLY_KEYS]: (k) => allKeys.every((key) => k.includes(key)),
    [ObjectKeysEnum.LACKS_ALL_KEYS]: (k) => k.every((key) => !allKeys.includes(key)),
    [ObjectKeysEnum.STRICT_EQUALS_KEYS]: (k) => k.length === allKeys.length && k.every((key, i) => allKeys[i] === key),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ObjectKeys operation: ${oper}`);
  return fn(keys);
}
