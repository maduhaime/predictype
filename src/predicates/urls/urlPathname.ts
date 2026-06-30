import { UrlPathnameEnum, UrlPathnameOper } from '../../enums/urls.js';

/**
 * Checks the pathname string of a URL using the specified operation.
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
