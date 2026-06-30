import { UrlHrefEnum, UrlHrefOper } from '../../enums/urls.js';

/**
 * Checks the href string of a URL using the specified operation.
 */
export function urlHref(source: URL, oper: UrlHrefOper, target: string): boolean {
  const operators: Record<UrlHrefEnum, (a: URL, b: string) => boolean> = {
    [UrlHrefEnum.EQUALS]: (a, b) => a.href === b,
    [UrlHrefEnum.NOT_EQUALS]: (a, b) => a.href !== b,
    [UrlHrefEnum.STARTS_WITH]: (a, b) => a.href.startsWith(b),
    [UrlHrefEnum.ENDS_WITH]: (a, b) => a.href.endsWith(b),
    [UrlHrefEnum.INCLUDES]: (a, b) => a.href.includes(b),
    [UrlHrefEnum.EXCLUDES]: (a, b) => !a.href.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlHref operation: ${oper}`);
  return fn(source, target);
}
