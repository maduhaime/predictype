import { RegExpResultEnum, RegExpResultOper } from '../../enums/regexps.js';

function clonePattern(pattern: RegExp): RegExp {
  // Clone to avoid mutating lastIndex on global/sticky patterns.
  return new RegExp(pattern.source, pattern.flags);
}

/**
 * Evaluates a RegExp against a target string and validates the result using the specified operation.
 *
 * @param pattern The RegExp pattern to apply.
 * @param oper The result operation to perform (e.g. 'tests', 'matches').
 * @param target The candidate string to validate.
 * @returns True if the result operation is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 */
export function regexpResult(pattern: RegExp, oper: RegExpResultOper, target: string): boolean {
  const operators: Record<RegExpResultEnum, (a: RegExp, b: string) => boolean> = {
    [RegExpResultEnum.TESTS]: (a, b) => clonePattern(a).test(b),
    [RegExpResultEnum.NOT_TESTS]: (a, b) => !clonePattern(a).test(b),
    [RegExpResultEnum.MATCHES]: (a, b) => b.match(clonePattern(a)) !== null,
    [RegExpResultEnum.NOT_MATCHES]: (a, b) => b.match(clonePattern(a)) === null,
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown RegExpResult operation: ${oper}`);
  return fn(pattern, target);
}
