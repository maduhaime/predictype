import { MapStateEnum, MapStateOper } from '../../enums/maps.js';

/**
 * Checks the state of a Map (empty or not) using the specified operation.
 *
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
 * Supported Operators
 * | Operator        | Description                        |
 * |-----------------|------------------------------------|
 * | IS_EMPTY        | Map is empty                        |
 * | IS_NOT_EMPTY    | Map is not empty                    |
 */
export function mapState<K, V>(source: Map<K, V>, oper: MapStateOper): boolean {
  const operators: Record<MapStateEnum, (a: Map<K, V>) => boolean> = {
    [MapStateEnum.IS_EMPTY]: (a) => a.size === 0,
    [MapStateEnum.IS_NOT_EMPTY]: (a) => a.size > 0,
  };

  const enumOper = typeof oper === 'string' ? (oper as MapStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown MapState operation: ${oper}`);
  return fn(source);
}
