import { RegExpResultRangeEnum, RegExpResultRangeOper } from '../../enums/regexps.js';

function cloneGlobalPattern(pattern: RegExp): RegExp {
  return new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`);
}

function countMatches(pattern: RegExp, target: string): number {
  const regex = cloneGlobalPattern(pattern);
  let count = 0;

  while (true) {
    const match = regex.exec(target);

    if (!match) break;
    count += 1;

    // Avoid infinite loops on zero-width matches.
    if (match[0] === '') regex.lastIndex += 1;
  }

  return count;
}

/**
 * Counts RegExp matches on a target string and validates whether the count is within a range.
 *
 * @param pattern The RegExp pattern to apply.
 * @param oper The range operation to perform (e.g. 'between', 'strict_between').
 * @param target The candidate string to validate.
 * @param min The lower bound of the range.
 * @param max The upper bound of the range.
 * @returns True if the range comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const pattern = /item/g;
 * const target = 'item,item,item';
 * const minA = 2;
 * const maxA = 4;
 * const minB = 3;
 * const maxB = 5;
 *
 * regexpResultRange(pattern, 'between', target, minA, maxA); // true
 * regexpResultRange(pattern, 'strict_between', target, minB, maxB); // false
 *
 * @remarks
 * Supported Operators:
 * - **between**
 * - **not_between**
 * - **strict_between**
 * - **strict_not_between**
 */
export function regexpResultRange(
  pattern: RegExp,
  oper: RegExpResultRangeOper,
  target: string,
  min: number,
  max: number,
): boolean {
  const operators: Record<RegExpResultRangeEnum, (a: number, b: number, c: number) => boolean> = {
    [RegExpResultRangeEnum.BETWEEN]: (a, b, c) => a >= b && a <= c,
    [RegExpResultRangeEnum.NOT_BETWEEN]: (a, b, c) => a < b || a > c,
    [RegExpResultRangeEnum.STRICT_BETWEEN]: (a, b, c) => a > b && a < c,
    [RegExpResultRangeEnum.STRICT_NOT_BETWEEN]: (a, b, c) => a <= b || a >= c,
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown RegExpResultRange operation: ${oper}`);
  return fn(countMatches(pattern, target), min, max);
}
