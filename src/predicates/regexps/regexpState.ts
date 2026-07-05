import { RegExpStateEnum, RegExpStateOper } from '../../enums/regexps.js';

type RegExpWithIndices = RegExp & { hasIndices?: boolean };

/**
 * Checks the state of a RegExp (flags and pattern shape) using the specified operation.
 *
 * @param source The RegExp to check.
 * @param oper The state operation to perform (e.g. 'is_global', 'has_indices').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const sourceA = /foo/gi;
 * const sourceB = new RegExp('');
 *
 * regexpState(sourceA, 'is_global'); // true
 * regexpState(sourceA, 'is_ignore_case'); // true
 * regexpState(sourceB, 'is_empty_pattern'); // true
 *
 * @remarks
 * Supported Operators:
 * - **is_global**
 * - **is_ignore_case**
 * - **is_multiline**
 * - **is_dot_all**
 * - **is_unicode**
 * - **is_sticky**
 * - **has_indices**
 * - **is_empty_pattern**
 */
export function regexpState(source: RegExp, oper: RegExpStateOper): boolean {
  const operators: Record<RegExpStateEnum, (a: RegExp) => boolean> = {
    [RegExpStateEnum.IS_GLOBAL]: (a) => a.global,
    [RegExpStateEnum.IS_IGNORE_CASE]: (a) => a.ignoreCase,
    [RegExpStateEnum.IS_MULTILINE]: (a) => a.multiline,
    [RegExpStateEnum.IS_DOT_ALL]: (a) => a.dotAll,
    [RegExpStateEnum.IS_UNICODE]: (a) => a.unicode,
    [RegExpStateEnum.IS_STICKY]: (a) => a.sticky,
    [RegExpStateEnum.HAS_INDICES]: (a) => (a as RegExpWithIndices).hasIndices === true,
    [RegExpStateEnum.IS_EMPTY_PATTERN]: (a) => a.source === '' || a.source === '(?:)',
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown RegExpState operation: ${oper}`);
  return fn(source);
}
