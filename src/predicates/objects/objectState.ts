import { ObjectStateEnum, ObjectStateOper } from '../../enums/objects.js';

/**
 * Checks state-related properties of an object (is_empty, is_not_empty, is_plain, is_frozen, is_sealed).
 *
 * @param source The object to check.
 * @param oper The state operation to perform.
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * objectState({}, 'is_empty'); // true
 * objectState({ a: 1 }, 'is_not_empty'); // true
 * objectState(Object.freeze({}), 'is_frozen'); // true
 */
export function objectState(source: object, oper: ObjectStateOper): boolean {
  const operators: Record<ObjectStateEnum, (o: object) => boolean> = {
    [ObjectStateEnum.HAS_ARRAY_PROP]: (o) => Object.values(o).some((v) => Array.isArray(v)),
    [ObjectStateEnum.HAS_CAMELCASE_KEYS]: (o) => Object.keys(o).some((k) => /^[a-z]+([A-Z][a-z0-9]*)+$/.test(k)),
    [ObjectStateEnum.HAS_FUNCTION_PROP]: (o) => Object.values(o).some((v) => typeof v === 'function'),
    [ObjectStateEnum.HAS_NESTED_OBJECT]: (o) => {
      return Object.values(o).some((v) => typeof v === 'object' && v !== null && !Array.isArray(v));
    },
    [ObjectStateEnum.HAS_NO_KEYS]: (o) => Object.keys(o).length === 0,
    [ObjectStateEnum.HAS_NO_UNDEFINED]: (o) => !Object.values(o).includes(undefined),
    [ObjectStateEnum.HAS_NULL_PROTO]: (o) => Object.getPrototypeOf(o) === null,
    [ObjectStateEnum.HAS_NUMERIC_KEYS]: (o) => Object.keys(o).some((k) => /^\d+$/.test(k)),
    [ObjectStateEnum.HAS_SYMBOL_KEYS]: (o) => Object.getOwnPropertySymbols(o).length > 0,
    [ObjectStateEnum.HAS_SYMBOLS]: (o) => Object.getOwnPropertySymbols(o).length > 0,
    [ObjectStateEnum.INHERITS_OBJECT]: (o) => {
      const proto = Object.getPrototypeOf(o);
      return proto && proto !== Object.prototype && proto !== null;
    },
    [ObjectStateEnum.IS_CLONEABLE]: (o) => {
      if (Object.values(o).some((v) => typeof v === 'function')) return false;
      try {
        JSON.parse(JSON.stringify(o));
        return true;
      } catch {
        return false;
      }
    },
    [ObjectStateEnum.IS_EMPTY]: (o) => Object.keys(o).length === 0 && Object.getOwnPropertySymbols(o).length === 0,
    [ObjectStateEnum.IS_NOT_EMPTY]: (o) => Object.keys(o).length > 0 || Object.getOwnPropertySymbols(o).length > 0,
    [ObjectStateEnum.IS_EXTENSIBLE]: (o) => Object.isExtensible(o),
    [ObjectStateEnum.IS_FROZEN]: (o) => Object.isFrozen(o),
    [ObjectStateEnum.IS_HOMOGENEOUS]: (o) => {
      const vals = Object.values(o);
      if (vals.length === 0) return true;
      const t = typeof vals[0];
      return vals.every((v) => typeof v === t);
    },
    [ObjectStateEnum.IS_ITERABLE]: (o) => typeof (o as any)[Symbol.iterator] === 'function',
    [ObjectStateEnum.IS_JSON_SERIALIZABLE]: (o) => {
      if (Object.values(o).some((v) => typeof v === 'function')) return false;
      try {
        JSON.stringify(o);
        return true;
      } catch {
        return false;
      }
    },
    [ObjectStateEnum.IS_PLAIN]: (o) => {
      return Object.getPrototypeOf(o) === Object.prototype || Object.getPrototypeOf(o) === null;
    },
    [ObjectStateEnum.IS_SEALED]: (o) => Object.isSealed(o),
    [ObjectStateEnum.IS_TYPED_OBJECT]: (o) => {
      const proto = Object.getPrototypeOf(o);
      return proto && [Map.prototype, Set.prototype, Date.prototype].includes(proto);
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectState operation: ${oper}`);
  return fn(source);
}
