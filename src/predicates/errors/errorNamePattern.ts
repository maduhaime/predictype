import { ErrorNamePatternEnum, ErrorNamePatternOper } from '../../enums/errors.js';

/**
 * Evaluates an error name against a pattern operation (matches or not matches a RegExp) using the specified
 * operation.
 *
 * @param source The Error whose name will be tested.
 * @param oper The pattern operation to perform (e.g. 'matches', 'not_matches').
 * @param pattern The RegExp to test against.
 * @returns True if the operation matches, false otherwise.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const err = new TypeError('boom');
 *
 * errorNamePattern(err, 'matches', /Type/); // true
 * errorNamePattern(err, 'not_matches', /Range/); // true
 *
 * @remarks
 * Supported Operators:
 * - **MATCHES**: Error name matches the RegExp pattern
 * - **NOT_MATCHES**: Error name does not match the pattern
 */
export function errorNamePattern(source: Error, oper: ErrorNamePatternOper, pattern: RegExp): boolean {
  const operators: Record<ErrorNamePatternEnum, (a: Error, b: RegExp) => boolean> = {
    [ErrorNamePatternEnum.MATCHES]: (a, b) => b.test(a.name),
    [ErrorNamePatternEnum.NOT_MATCHES]: (a, b) => !b.test(a.name),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ErrorNamePattern operation: ${oper}`);
  return fn(source, pattern);
}
