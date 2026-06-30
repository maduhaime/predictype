import { ErrorMessagePatternEnum, ErrorMessagePatternOper } from '../../enums/errors.js';

/**
 * Evaluates an error message against a pattern operation (matches or not matches a RegExp) using the specified
 * operation.
 *
 * @param source The Error whose message will be tested.
 * @param oper The pattern operation to perform (e.g. 'matches', 'not_matches').
 * @param pattern The RegExp to test against.
 * @returns True if the operation matches, false otherwise.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const err = new Error('Network timeout');
 *
 * errorMessagePattern(err, 'matches', /timeout$/); // true
 * errorMessagePattern(err, 'not_matches', /syntax/i); // true
 *
 * @remarks
 * Supported Operators:
 * - **MATCHES**: Error message matches the RegExp pattern
 * - **NOT_MATCHES**: Error message does not match the pattern
 */
export function errorMessagePattern(source: Error, oper: ErrorMessagePatternOper, pattern: RegExp): boolean {
  const operators: Record<ErrorMessagePatternEnum, (a: Error, b: RegExp) => boolean> = {
    [ErrorMessagePatternEnum.MATCHES]: (a, b) => b.test(a.message),
    [ErrorMessagePatternEnum.NOT_MATCHES]: (a, b) => !b.test(a.message),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ErrorMessagePattern operation: ${oper}`);
  return fn(source, pattern);
}
