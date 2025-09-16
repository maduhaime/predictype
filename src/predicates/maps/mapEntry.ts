import { MapEntryEnum, MapEntryOper } from '../../enums/maps.js';

/**
 * Checks if a Map contains (or lacks) a specific entry (key-value pair) using the specified operation.
 *
 * @param source The Map to check.
 * @param oper The entry operation to perform (e.g. 'has_entry', 'lacks_entry').
 * @param entry The [key, value] pair to check for.
 * @returns True if the entry check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const m = new Map([[1, 'a']]);
 * const entry1 = [1, 'a'];
 * const entry2 = [2, 'b'];
 *
 * mapEntry(m, 'has_entry', entry1); // true
 * mapEntry(m, 'lacks_entry', entry2); // true
 *
 * @remarks
 * Supported Operators
 * | Operator         | Description                                 |
 * |------------------|---------------------------------------------|
 * | CONTAINS_ENTRY   | Map contains the [key, value] entry         |
 * | LACKS_ENTRY      | Map does not contain the [key, value] entry |
 */
export function mapEntry<K, V>(source: Map<K, V>, oper: MapEntryOper, entry: [K, V]): boolean {
  const operators: Record<MapEntryEnum, (a: Map<K, V>, b: [K, V]) => boolean> = {
    [MapEntryEnum.CONTAINS_ENTRY]: (a, b) => a.has(b[0]) && a.get(b[0]) === b[1],
    [MapEntryEnum.LACKS_ENTRY]: (a, b) => !a.has(b[0]) || a.get(b[0]) !== b[1],
  };

  const enumOper = typeof oper === 'string' ? (oper as MapEntryEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown MapEntry operation: ${oper}`);
  return fn(source, entry);
}
