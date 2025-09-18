import { SymbolComparisonEnum, SymbolComparisonOper } from '../../enums/symbols.js';

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
 * symbolComparison(a, 'equals', a); // true
 * symbolComparison(a, 'not_equals', b); // true
 *
 * @remarks
 * Supported Operators:
 * - **EQUALS**: Symbols are equal
 * - **NOT_EQUALS**: Symbols are not equal
 */
export function symbolComparison(source: symbol, oper: SymbolComparisonOper, target: symbol): boolean {
  const operators: Record<SymbolComparisonEnum, (a: symbol, b: symbol) => boolean> = {
    [SymbolComparisonEnum.EQUALS]: (a, b) => a === b,
    [SymbolComparisonEnum.NOT_EQUALS]: (a, b) => a !== b,
  };

  const enumOper = typeof oper === 'string' ? (oper as SymbolComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SymbolComparison operation: ${oper}`);
  return fn(source, target);
}
