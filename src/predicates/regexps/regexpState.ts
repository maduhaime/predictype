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
