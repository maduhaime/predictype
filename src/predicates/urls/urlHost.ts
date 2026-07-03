import { UrlHostEnum, UrlHostOper } from '../../enums/urls.js';

/**
 * Checks the host component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The host operation to perform (e.g. 'equals', 'ends_with').
 * @param target The string to compare against source.host.
 * @returns True if the host comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://portal.example.com:8080/dashboard');
 * const targetA = 'portal.example.com:8080';
 * const targetB = ':8080';
 *
 * urlHost(source, 'equals', targetA); // true
 * urlHost(source, 'ends_with', targetB); // true
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
export function urlHost(source: URL, oper: UrlHostOper, target: string): boolean {
  const operators: Record<UrlHostEnum, (a: URL, b: string) => boolean> = {
    [UrlHostEnum.EQUALS]: (a, b) => a.host === b,
    [UrlHostEnum.NOT_EQUALS]: (a, b) => a.host !== b,
    [UrlHostEnum.STARTS_WITH]: (a, b) => a.host.startsWith(b),
    [UrlHostEnum.ENDS_WITH]: (a, b) => a.host.endsWith(b),
    [UrlHostEnum.INCLUDES]: (a, b) => a.host.includes(b),
    [UrlHostEnum.EXCLUDES]: (a, b) => !a.host.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlHost operation: ${oper}`);
  return fn(source, target);
}
