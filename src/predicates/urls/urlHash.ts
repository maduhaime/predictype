import { UrlHashEnum, UrlHashOper } from '../../enums/urls.js';

/**
 * Checks the hash string of a URL using the specified operation.
 */
export function urlHash(source: URL, oper: UrlHashOper, target: string): boolean {
  const operators: Record<UrlHashEnum, (a: URL, b: string) => boolean> = {
    [UrlHashEnum.EQUALS]: (a, b) => a.hash === b,
    [UrlHashEnum.NOT_EQUALS]: (a, b) => a.hash !== b,
    [UrlHashEnum.STARTS_WITH]: (a, b) => a.hash.startsWith(b),
    [UrlHashEnum.ENDS_WITH]: (a, b) => a.hash.endsWith(b),
    [UrlHashEnum.INCLUDES]: (a, b) => a.hash.includes(b),
    [UrlHashEnum.EXCLUDES]: (a, b) => !a.hash.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlHash operation: ${oper}`);
  return fn(source, target);
}
