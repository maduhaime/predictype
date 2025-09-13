import { MapValueEnum, MapValueOper } from '../../enums/maps.js';

/**
 * Checks if a Map contains (or lacks) a specific value using the specified operation.
 *
 * @param source The Map to check.
 * @param oper The value operation to perform (e.g. 'has_value', 'lacks_value').
 * @param value The value to check for.
 * @returns True if the value check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const m1 = new Map([[1, 'a'], [2, 'b']]);
 * const m2 = new Map([[1, 'a']]);
 * const valueA = 'a';
 * const valueB = 'b';
 *
 * mapValue(m1, 'has_value', valueA); // true
 * mapValue(m2, 'lacks_value', valueB); // true
 */
export function mapValue<K, V>(source: Map<K, V>, oper: MapValueOper, value: V): boolean {
  const operators: Record<MapValueEnum, (a: Map<K, V>, b: V) => boolean> = {
    [MapValueEnum.HAS_VALUE]: (a, b) => Array.from(a.values()).includes(b),
    [MapValueEnum.LACKS_VALUE]: (a, b) => !Array.from(a.values()).includes(b),
  };

  const enumOper = typeof oper === 'string' ? (oper as MapValueEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown MapValue operation: ${oper}`);
  return fn(source, value);
}
