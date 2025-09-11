import { SetStateEnum, SetStateOper } from '../../enums/sets';

/**
 * Checks the state of a set (empty or not) using the specified operation.
 *
 * @param source The set to check.
 * @param oper The state operation to perform (e.g. 'is_empty', 'is_not_empty').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = new Set();
 * const b = new Set([1]);
 *
 * setState(a, 'is_empty'); // true
 * setState(b, 'is_not_empty'); // true
 */
export function setState<T>(source: Set<T>, oper: SetStateOper): boolean {
  const operators: Record<SetStateEnum, (a: Set<T>) => boolean> = {
    [SetStateEnum.IS_EMPTY]: (a) => a.size === 0,
    [SetStateEnum.IS_NOT_EMPTY]: (a) => a.size > 0,
  };

  const enumOper = typeof oper === 'string' ? (oper as SetStateEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown SetState operation: ${oper}`);
  return fn(source);
}
