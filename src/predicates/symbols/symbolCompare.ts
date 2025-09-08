import { SymbolCompareEnum, SymbolCompareOper } from './enums';

/**
 * Compares two symbols for equality or inequality using the specified operation.
 *
 * @param source The first symbol to compare.
 * @param oper The comparison operation to perform (e.g. 'equals', 'not_equals').
 * @param target The second symbol to compare.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = Symbol('foo');
 * const b = Symbol('foo');
 *
 * symbolCompare(a, 'equals', a); // true
 * symbolCompare(a, 'not_equals', b); // true
 */
export function symbolCompare(source: symbol, oper: SymbolCompareOper, target: symbol): boolean {
  const operators: Record<SymbolCompareEnum, (a: symbol, b: symbol) => boolean> = {
    [SymbolCompareEnum.EQUALS]: (a, b) => a === b,
    [SymbolCompareEnum.NOT_EQUALS]: (a, b) => a !== b,
  };

  const enumOper = typeof oper === 'string' ? (oper as SymbolCompareEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SymbolCompare operation: ${oper}`);
  return fn(source, target);
}
