import { ObjectKeysStateEnum, ObjectKeysStateOper } from '../../enums/objects.js';

/**
 * Checks state-related properties of an object's keys (e.g. has_symbol_keys, has_numeric_keys).
 *
 * @param obj The object to check.
 * @param oper The state operation to perform (ObjectKeysStateOper).
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const sourceA = { userName: 'Ada', 42: 'x' };
 * const sourceB = { a: 1, b: 2 };
 *
 * objectKeysState(sourceA, 'has_camelcase_keys'); // true
 * objectKeysState(sourceA, 'has_numeric_keys'); // true
 * objectKeysState(sourceB, 'has_homogeneous_keys'); // true
 *
 * @remarks
 * Supported Operators:
 * - **has_symbol_keys**: object has at least one symbol key
 * - **has_numeric_keys**: object has at least one numeric key
 * - **has_camelcase_keys**: object has at least one camelCase key
 * - **has_homogeneous_keys**: all keys are of the same type
 */
export function objectKeysState(obj: object, oper: ObjectKeysStateOper): boolean {
  const allKeys = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)];
  const operators: Record<ObjectKeysStateEnum, () => boolean> = {
    [ObjectKeysStateEnum.HAS_SYMBOL_KEYS]: () => Object.getOwnPropertySymbols(obj).length > 0,
    [ObjectKeysStateEnum.HAS_NUMERIC_KEYS]: () => allKeys.some((key) => typeof key === 'string' && /^\d+$/.test(key)),
    [ObjectKeysStateEnum.HAS_CAMELCASE_KEYS]: () =>
      allKeys.some((key) => typeof key === 'string' && /[a-z][A-Z]/.test(key)),
    [ObjectKeysStateEnum.HAS_HOMOGENEOUS_KEYS]: () => {
      if (allKeys.length === 0) return true;
      const firstType = typeof allKeys[0];
      return allKeys.every((key) => typeof key === firstType);
    },
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ObjectKeysState operation: ${oper}`);
  return fn();
}
