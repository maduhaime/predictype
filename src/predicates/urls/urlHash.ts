import { UrlHashEnum, UrlHashOper } from '../../enums/urls.js';

/**
 * Checks the hash component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The hash operation to perform (e.g. 'equals', 'starts_with').
 * @param target The string to compare against source.hash.
 * @returns True if the hash comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://example.com/docs#install');
 * const targetA = '#install';
 * const targetB = '#guide';
 *
 * urlHash(source, 'equals', targetA); // true
 * urlHash(source, 'not_equals', targetB); // true
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
