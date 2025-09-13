import { MapSizeEnum, MapSizeOper } from '../../enums/maps.js';

/**
 * Checks the size of a Map using the specified operation.
 *
 * @param source The Map to check.
 * @param oper The size operation to perform (e.g. 'equals', 'greater_than').
 * @param size The size to compare against.
 * @returns True if the size check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const m1 = new Map([[1, 'a'], [2, 'b']]);
 * const m2 = new Map([[1, 'a']]);
 * const size2 = 2;
 * const size0 = 0;
 *
 * mapSize(m1, 'equals', size2); // true
 * mapSize(m2, 'greater_than', size0); // true
 */
export function mapSize<K, V>(source: Map<K, V>, oper: MapSizeOper, size: number): boolean {
  const operators: Record<MapSizeEnum, (a: Map<K, V>, b: number) => boolean> = {
    [MapSizeEnum.EQUALS]: (a, b) => a.size === b,
    [MapSizeEnum.GREATER_THAN]: (a, b) => a.size > b,
    [MapSizeEnum.GREATER_THAN_OR_EQUALS]: (a, b) => a.size >= b,
    [MapSizeEnum.LESS_THAN]: (a, b) => a.size < b,
    [MapSizeEnum.LESS_THAN_OR_EQUALS]: (a, b) => a.size <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as MapSizeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown MapSize operation: ${oper}`);
  return fn(source, size);
}
