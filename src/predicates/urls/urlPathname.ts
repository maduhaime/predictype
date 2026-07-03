import { UrlPathnameEnum, UrlPathnameOper } from '../../enums/urls.js';

/**
 * Checks the pathname component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The pathname operation to perform (e.g. 'starts_with', 'includes').
 * @param target The string to compare against source.pathname.
 * @returns True if the pathname comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://example.com/products/books/42');
 * const targetA = '/products';
 * const targetB = '/42';
 *
 * urlPathname(source, 'starts_with', targetA); // true
 * urlPathname(source, 'ends_with', targetB); // true
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
export function urlPathname(source: URL, oper: UrlPathnameOper, target: string): boolean {
  const operators: Record<UrlPathnameEnum, (a: URL, b: string) => boolean> = {
    [UrlPathnameEnum.EQUALS]: (a, b) => a.pathname === b,
    [UrlPathnameEnum.NOT_EQUALS]: (a, b) => a.pathname !== b,
    [UrlPathnameEnum.STARTS_WITH]: (a, b) => a.pathname.startsWith(b),
    [UrlPathnameEnum.ENDS_WITH]: (a, b) => a.pathname.endsWith(b),
    [UrlPathnameEnum.INCLUDES]: (a, b) => a.pathname.includes(b),
    [UrlPathnameEnum.EXCLUDES]: (a, b) => !a.pathname.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlPathname operation: ${oper}`);
  return fn(source, target);
}
