import { UrlHrefEnum, UrlHrefOper } from '../../enums/urls.js';

/**
 * Checks the href component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The href operation to perform (e.g. 'equals', 'includes').
 * @param target The string to compare against source.href.
 * @returns True if the href comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://docs.example.com:443/path?q=1#intro');
 * const targetA = 'https://docs.example.com/path?q=1#intro';
 * const targetB = 'docs.example.com';
 *
 * urlHref(source, 'equals', targetA); // true
 * urlHref(source, 'includes', targetB); // true
 *
 * @remarks
 * Supported Operators:
 * - **equals**: href is exactly target
 * - **not_equals**: href differs from target
 * - **starts_with**: href starts with target
 * - **ends_with**: href ends with target
 * - **includes**: href contains target
 * - **excludes**: href does not contain target
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
