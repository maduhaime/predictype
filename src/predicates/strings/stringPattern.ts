import { StringPatternEnum, StringPatternOper } from '../../enums/strings.js';

/**
 * Evaluates a string against a pattern operation (matches or not matches a RegExp) using the specified operation.
 *
 * @param source The string to test.
 * @param oper The pattern operation to perform (e.g. 'matches', 'not_matches').
 * @param pattern The RegExp to test against.
 * @returns True if the operation matches, false otherwise.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const str = 'foobar';
 * const pattern1 = /^foo/;
 * const pattern2 = /baz/;
 *
 * stringPattern(str, 'matches', pattern1); // true
 * stringPattern(str, 'not_matches', pattern2); // true
 */
export function stringPattern(source: string, oper: StringPatternOper, pattern: RegExp): boolean {
  const operators: Record<StringPatternEnum, (a: string, b: RegExp) => boolean> = {
    [StringPatternEnum.MATCHES]: (a, b) => b.test(a),
    [StringPatternEnum.NOT_MATCHES]: (a, b) => !b.test(a),
  };

  const enumOper = typeof oper === 'string' ? (oper as StringPatternEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringPattern operation: ${oper}`);
  return fn(source, pattern);
}
