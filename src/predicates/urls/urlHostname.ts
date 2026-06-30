import { UrlHostnameEnum, UrlHostnameOper } from '../../enums/urls.js';

/**
 * Checks the hostname string of a URL using the specified operation.
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
