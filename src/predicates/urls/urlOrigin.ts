import { UrlOriginEnum, UrlOriginOper } from '../../enums/urls.js';

/**
 * Checks the origin component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The origin operation to perform (e.g. 'equals', 'starts_with').
 * @param target The string to compare against source.origin.
 * @returns True if the origin comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://api.example.com:8443/v1/users');
 * const targetA = 'https://api.example.com:8443';
 * const targetB = 'https://api.';
 *
 * urlOrigin(source, 'equals', targetA); // true
 * urlOrigin(source, 'starts_with', targetB); // true
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
export function urlOrigin(source: URL, oper: UrlOriginOper, target: string): boolean {
  const operators: Record<UrlOriginEnum, (a: URL, b: string) => boolean> = {
    [UrlOriginEnum.EQUALS]: (a, b) => a.origin === b,
    [UrlOriginEnum.NOT_EQUALS]: (a, b) => a.origin !== b,
    [UrlOriginEnum.STARTS_WITH]: (a, b) => a.origin.startsWith(b),
    [UrlOriginEnum.ENDS_WITH]: (a, b) => a.origin.endsWith(b),
    [UrlOriginEnum.INCLUDES]: (a, b) => a.origin.includes(b),
    [UrlOriginEnum.EXCLUDES]: (a, b) => !a.origin.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlOrigin operation: ${oper}`);
  return fn(source, target);
}
