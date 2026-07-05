import { MapStateEnum, MapStateOper } from '../../enums/maps.js';

/**
 * Checks the state of a Map (empty or not) using the specified operation.
 *
 * @template K Type of the Map keys.
 * @template V Type of the Map values.
 * @param source The Map to check.
 * @param oper The state operation to perform (e.g. 'is_empty', 'is_not_empty').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const m1 = new Map();
 * const m2 = new Map([[1, 'a']]);
 *
 * mapState(m1, 'is_empty'); // true
 * mapState(m2, 'is_not_empty'); // true
 *
 * @remarks
 * Supported Operators:
 * - **is_empty**: map size is 0
 * - **is_not_empty**: map size is greater than 0
 */
export function mapState<K, V>(source: Map<K, V>, oper: MapStateOper): boolean {
  const operators: Record<MapStateEnum, (a: Map<K, V>) => boolean> = {
    [MapStateEnum.IS_EMPTY]: (a) => a.size === 0,
    [MapStateEnum.IS_NOT_EMPTY]: (a) => a.size > 0,
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown MapState operation: ${oper}`);
  return fn(source);
}
