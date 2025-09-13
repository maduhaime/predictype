import { StringSubstringEnum, StringSubstringOper } from '../../enums/strings.js';

/**
 * Checks if a string contains, excludes, starts with, or ends with a substring using the specified operation.
 *
 * @param source The string to check.
 * @param oper The substring operation to perform (e.g. 'includes', 'starts_with').
 * @param target The substring to check for.
 * @returns True if the substring check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const str = 'foobar';
 *
 * stringSubstring(str, 'includes', sub); // true
 * stringSubstring(str, 'starts_with', sub); // true
 */
export function stringSubstring(source: string, oper: StringSubstringOper, target: string): boolean {
  const operators: Record<StringSubstringEnum, (a: string, b: string) => boolean> = {
    [StringSubstringEnum.INCLUDES]: (a, b) => a.includes(b),
    [StringSubstringEnum.EXCLUDES]: (a, b) => !a.includes(b),
    [StringSubstringEnum.STARTS_WITH]: (a, b) => a.startsWith(b),
    [StringSubstringEnum.ENDS_WITH]: (a, b) => a.endsWith(b),
  };

  const enumOper = typeof oper === 'string' ? (oper as StringSubstringEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringSubstring operation: ${oper}`);
  return fn(source, target);
}
