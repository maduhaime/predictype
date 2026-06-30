import { RegExpResultSizeEnum, RegExpResultSizeOper } from '../../enums/regexps.js';

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
 * Counts RegExp matches on a target string and compares the count against a threshold.
 *
 * @param pattern The RegExp pattern to apply.
 * @param oper The size operation to perform (e.g. 'size_equals', 'size_greater_than').
 * @param target The candidate string to validate.
 * @param count The numeric threshold to compare against.
 * @returns True if the count comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 */
export function regexpResultSize(pattern: RegExp, oper: RegExpResultSizeOper, target: string, count: number): boolean {
  const operators: Record<RegExpResultSizeEnum, (a: number, b: number) => boolean> = {
    [RegExpResultSizeEnum.SIZE_EQUALS]: (a, b) => a === b,
    [RegExpResultSizeEnum.SIZE_GREATER_THAN]: (a, b) => a > b,
    [RegExpResultSizeEnum.SIZE_GREATER_THAN_OR_EQUALS]: (a, b) => a >= b,
    [RegExpResultSizeEnum.SIZE_LESS_THAN]: (a, b) => a < b,
    [RegExpResultSizeEnum.SIZE_LESS_THAN_OR_EQUALS]: (a, b) => a <= b,
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown RegExpResultSize operation: ${oper}`);
  return fn(countMatches(pattern, target), count);
}
