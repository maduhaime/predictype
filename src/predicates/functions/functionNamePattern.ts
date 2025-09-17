import { FunctionNamePatternEnum, FunctionNamePatternOper } from '../../enums/functions.js';

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
 *
 * @remarks
 * Supported Operators
 * | Operator      | Description                                 |
 * |---------------|---------------------------------------------|
 * | MATCHES       | Function name matches the RegExp pattern     |
 * | NOT_MATCHES   | Function name does not match the pattern     |
 */
export function functionNamePattern(source: Function, oper: FunctionNamePatternOper, pattern: RegExp): boolean {
  const operators: Record<FunctionNamePatternEnum, (a: Function, b: RegExp) => boolean> = {
    [FunctionNamePatternEnum.MATCHES]: (a, b) => b.test(a.name),
    [FunctionNamePatternEnum.NOT_MATCHES]: (a, b) => !b.test(a.name),
  };

  const enumOper = typeof oper === 'string' ? (oper as FunctionNamePatternOper) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown FunctionNamePattern operation: ${oper}`);
  return fn(source, pattern);
}
