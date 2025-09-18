import { SymbolStateEnum, SymbolStateOper } from '../../enums/symbols.js';

/**
 * Checks the state of a symbol (global or local) using the specified operation.
 *
 * @param source The symbol to check.
 * @param oper The state operation to perform (e.g. 'is_global', 'is_local').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const globalSym = Symbol.for('foo');
 * const localSym = Symbol('bar');
 *
 * symbolState(globalSym, 'is_global'); // true
 * symbolState(localSym, 'is_local'); // true
 *
 * @remarks
 * Supported Operators:
 * - **IS_GLOBAL**: Symbol is global (Symbol.for)
 * - **IS_LOCAL**: Symbol is local (not Symbol.for)
 */
export function symbolState(source: symbol, oper: SymbolStateOper): boolean {
  const operators: Record<SymbolStateEnum, (a: symbol) => boolean> = {
    [SymbolStateEnum.IS_GLOBAL]: (a) => typeof Symbol.keyFor === 'function' && Symbol.keyFor(a) !== undefined,
    [SymbolStateEnum.IS_LOCAL]: (a) => typeof Symbol.keyFor === 'function' && Symbol.keyFor(a) === undefined,
  };

  const enumOper = typeof oper === 'string' ? (oper as SymbolStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SymbolState operation: ${oper}`);
  return fn(source);
}
