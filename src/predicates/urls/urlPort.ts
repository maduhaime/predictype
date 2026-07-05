import { UrlPortEnum, UrlPortOper } from '../../enums/urls.js';

/**
 * Checks the port component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The port operation to perform (e.g. 'equals', 'not_equals').
 * @param target The string to compare against source.port.
 * @returns True if the port comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://localhost:3000/health');
 * const targetA = '3000';
 * const targetB = '8080';
 *
 * urlPort(source, 'equals', targetA); // true
 * urlPort(source, 'not_equals', targetB); // true
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
export function urlPort(source: URL, oper: UrlPortOper, target: string): boolean {
  const operators: Record<UrlPortEnum, (a: URL, b: string) => boolean> = {
    [UrlPortEnum.EQUALS]: (a, b) => a.port === b,
    [UrlPortEnum.NOT_EQUALS]: (a, b) => a.port !== b,
    [UrlPortEnum.STARTS_WITH]: (a, b) => a.port.startsWith(b),
    [UrlPortEnum.ENDS_WITH]: (a, b) => a.port.endsWith(b),
    [UrlPortEnum.INCLUDES]: (a, b) => a.port.includes(b),
    [UrlPortEnum.EXCLUDES]: (a, b) => !a.port.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlPort operation: ${oper}`);
  return fn(source, target);
}
