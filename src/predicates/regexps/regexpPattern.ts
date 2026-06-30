import { RegExpPatternEnum, RegExpPatternOper } from '../../enums/regexps.js';

/**
 * Checks the pattern string of a RegExp using the specified operation.
 *
 * @param pattern The RegExp pattern to check.
 * @param oper The pattern operation to perform (e.g. 'equals', 'includes').
 * @param target The string to compare against the RegExp pattern source.
 * @returns True if the pattern check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 */
export function regexpPattern(pattern: RegExp, oper: RegExpPatternOper, target: string): boolean {
  const operators: Record<RegExpPatternEnum, (a: RegExp, b: string) => boolean> = {
    [RegExpPatternEnum.EQUALS]: (a, b) => a.source === b,
    [RegExpPatternEnum.STARTS_WITH]: (a, b) => a.source.startsWith(b),
    [RegExpPatternEnum.ENDS_WITH]: (a, b) => a.source.endsWith(b),
    [RegExpPatternEnum.INCLUDES]: (a, b) => a.source.includes(b),
    [RegExpPatternEnum.EXCLUDES]: (a, b) => !a.source.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown RegExpPattern operation: ${oper}`);
  return fn(pattern, target);
}
