import { UrlHostEnum, UrlHostOper } from '../../enums/urls.js';

/**
 * Checks the host string of a URL using the specified operation.
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
