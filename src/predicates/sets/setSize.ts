import { SetSizeEnum, SetSizeOper } from '../../enums/sets.js';

/**
 * Checks the size of a set using the specified operation.
 *
 * @param source The set to check.
 * @param oper The size operation to perform (e.g. 'equals', 'greater_than').
 * @param target The size to compare against.
 * @returns True if the size check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = new Set([1, 2, 3]);
 *
 * setSize(a, 'equals', 3); // true
 * setSize(a, 'greater_than', 2); // true
 */
export function setSize<T>(source: Set<T>, oper: SetSizeOper, target: number): boolean {
  const operators: Record<SetSizeEnum, (a: Set<T>, b: number) => boolean> = {
    [SetSizeEnum.EQUALS]: (a, b) => a.size === b,
    [SetSizeEnum.GREATER_THAN]: (a, b) => a.size > b,
    [SetSizeEnum.GREATER_THAN_OR_EQUALS]: (a, b) => a.size >= b,
    [SetSizeEnum.LESS_THAN]: (a, b) => a.size < b,
    [SetSizeEnum.LESS_THAN_OR_EQUALS]: (a, b) => a.size <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as SetSizeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetSize operation: ${oper}`);
  return fn(source, target);
}
