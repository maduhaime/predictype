import { FunctionPatternEnum, FunctionPatternOper } from '../../enums/functions';

/**
 * Checks if the function name matches a given regular expression pattern using the specified operation.
 *
 * @param source The function to check.
 * @param oper The pattern operation to perform (e.g. 'matches').
 * @param pattern The regular expression to test against the function name.
 * @returns True if the pattern check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const fn = function fooBar() {};
 * const pattern = /^foo/;
 *
 * functionPattern(fn, 'matches', pattern); // true
 */
export function functionPattern(source: Function, oper: FunctionPatternOper, pattern: RegExp): boolean {
  const operators: Record<FunctionPatternEnum, (a: Function, b: RegExp) => boolean> = {
    [FunctionPatternEnum.NAME_MATCHES]: (a, b) => b.test(a.name),
    [FunctionPatternEnum.NAME_NOT_MATCHES]: (a, b) => !b.test(a.name),
  };

  const enumOper = typeof oper === 'string' ? (oper as FunctionPatternEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown FunctionPattern operation: ${oper}`);
  return fn(source, pattern);
}
