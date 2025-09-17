import { MapSizeEnum, MapSizeOper } from '../../enums/maps.js';

/**
 * Checks the size of a Map using the specified operation.
 *
 * @param source The Map to check.
 * @param oper The size operation to perform (e.g. 'size_equals', 'size_greater_than').
 * @param target The size to compare against.
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
 * mapSize(m1, 'size_equals', size2); // true
 * mapSize(m2, 'size_greater_than', size0); // true
 *
 * @remarks
 * Supported Operators
 * | Operator                        | Description                        |
 * |-------------------------------|-------------------------------------|
 * | SIZE_EQUALS                    | Map size equals the given value     |
 * | SIZE_GREATER_THAN              | Map size is greater than value      |
 * | SIZE_GREATER_THAN_OR_EQUALS    | Map size is greater or equal        |
 * | SIZE_LESS_THAN                 | Map size is less than value         |
 * | SIZE_LESS_THAN_OR_EQUALS       | Map size is less or equal           |
 */
export function mapSize<K, V>(source: Map<K, V>, oper: MapSizeOper, target: number): boolean {
  const operators: Record<MapSizeEnum, (a: Map<K, V>, b: number) => boolean> = {
    [MapSizeEnum.SIZE_EQUALS]: (a, b) => a.size === b,
    [MapSizeEnum.SIZE_GREATER_THAN]: (a, b) => a.size > b,
    [MapSizeEnum.SIZE_GREATER_THAN_OR_EQUALS]: (a, b) => a.size >= b,
    [MapSizeEnum.SIZE_LESS_THAN]: (a, b) => a.size < b,
    [MapSizeEnum.SIZE_LESS_THAN_OR_EQUALS]: (a, b) => a.size <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as MapSizeOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown MapSize operation: ${oper}`);
  return fn(source, target);
}
