import { UrlHostnameEnum, UrlHostnameOper } from '../../enums/urls.js';

/**
 * Checks the hostname component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The hostname operation to perform (e.g. 'equals', 'excludes').
 * @param target The string to compare against source.hostname.
 * @returns True if the hostname comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://blog.example.com/posts');
 * const targetA = 'blog.example.com';
 * const targetB = 'internal';
 *
 * urlHostname(source, 'equals', targetA); // true
 * urlHostname(source, 'excludes', targetB); // true
 *
 * @remarks
 * Supported Operators:
 * - **equals**
 * - **not_equals**
 * - **starts_with**
 * - **ends_with**
 * - **includes**
 * - **excludes**
 */
export function urlHostname(source: URL, oper: UrlHostnameOper, target: string): boolean {
  const operators: Record<UrlHostnameEnum, (a: URL, b: string) => boolean> = {
    [UrlHostnameEnum.EQUALS]: (a, b) => a.hostname === b,
    [UrlHostnameEnum.NOT_EQUALS]: (a, b) => a.hostname !== b,
    [UrlHostnameEnum.STARTS_WITH]: (a, b) => a.hostname.startsWith(b),
    [UrlHostnameEnum.ENDS_WITH]: (a, b) => a.hostname.endsWith(b),
    [UrlHostnameEnum.INCLUDES]: (a, b) => a.hostname.includes(b),
    [UrlHostnameEnum.EXCLUDES]: (a, b) => !a.hostname.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlHostname operation: ${oper}`);
  return fn(source, target);
}
