import { MapKeyEnum, MapKeyOper } from '../../enums/maps.js';

/**
 * Checks if a Map contains (or lacks) a specific key using the specified operation.
 *
 * @param source The Map to check.
 * @param oper The key operation to perform (e.g. 'has_key', 'lacks_key').
 * @param key The key to check for.
 * @returns True if the key check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const m = new Map([[1, 'a']]);
 * const key1 = 1;
 * const key2 = 2;
 *
 * mapKey(m, 'has_key', key1); // true
 * mapKey(m, 'lacks_key', key2); // true
 *
 * @remarks
 * Supported Operators
 * | Operator        | Description                        |
 * |-----------------|------------------------------------|
 * | CONTAINS_KEY    | Map contains the key                |
 * | LACKS_KEY       | Map does not contain the key         |
 */
export function mapKey<K, V>(source: Map<K, V>, oper: MapKeyOper, key: K): boolean {
  const operators: Record<MapKeyEnum, (a: Map<K, V>, b: K) => boolean> = {
    [MapKeyEnum.CONTAINS_KEY]: (a, b) => a.has(b),
    [MapKeyEnum.LACKS_KEY]: (a, b) => !a.has(b),
  };

  const enumOper = typeof oper === 'string' ? (oper as MapKeyEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown MapKey operation: ${oper}`);
  return fn(source, key);
}
