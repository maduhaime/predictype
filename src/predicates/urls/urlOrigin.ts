import { UrlOriginEnum, UrlOriginOper } from '../../enums/urls.js';

/**
 * Checks the origin string of a URL using the specified operation.
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
