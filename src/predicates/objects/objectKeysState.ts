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
 * @remarks
 * Supported Operators:
 * - **HAS_SYMBOL_KEYS**: Object has at least one symbol key
 * - **HAS_NUMERIC_KEYS**: Object has at least one numeric key
 * - **HAS_CAMELCASE_KEYS**: Object has at least one camelCase key
 * - **HAS_HOMOGENEOUS_KEYS**: All keys are of the same type
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

  const enumOper = typeof oper === 'string' ? (oper as ObjectKeysStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectKeysState operation: ${oper}`);
  return fn();
}
