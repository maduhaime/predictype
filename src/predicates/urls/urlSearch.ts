import { UrlSearchEnum, UrlSearchOper } from '../../enums/urls.js';

/**
 * Checks the search string of a URL using the specified operation.
 */
export function urlSearch(source: URL, oper: UrlSearchOper, target: string): boolean {
  const operators: Record<UrlSearchEnum, (a: URL, b: string) => boolean> = {
    [UrlSearchEnum.EQUALS]: (a, b) => a.search === b,
    [UrlSearchEnum.NOT_EQUALS]: (a, b) => a.search !== b,
    [UrlSearchEnum.STARTS_WITH]: (a, b) => a.search.startsWith(b),
    [UrlSearchEnum.ENDS_WITH]: (a, b) => a.search.endsWith(b),
    [UrlSearchEnum.INCLUDES]: (a, b) => a.search.includes(b),
    [UrlSearchEnum.EXCLUDES]: (a, b) => !a.search.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlSearch operation: ${oper}`);
  return fn(source, target);
}
