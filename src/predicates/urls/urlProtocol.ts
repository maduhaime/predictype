import { UrlProtocolEnum, UrlProtocolOper } from '../../enums/urls.js';

/**
 * Checks the protocol component of a URL against a string operation.
 *
 * @param source The URL to inspect.
 * @param oper The protocol operation to perform (e.g. 'equals', 'includes').
 * @param target The string to compare against source.protocol.
 * @returns True if the protocol comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://example.com/docs');
 * const targetA = 'https:';
 * const targetB = 'http';
 *
 * urlProtocol(source, 'equals', targetA); // true
 * urlProtocol(source, 'includes', targetB); // true
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
export function urlProtocol(source: URL, oper: UrlProtocolOper, target: string): boolean {
  const operators: Record<UrlProtocolEnum, (a: URL, b: string) => boolean> = {
    [UrlProtocolEnum.EQUALS]: (a, b) => a.protocol === b,
    [UrlProtocolEnum.NOT_EQUALS]: (a, b) => a.protocol !== b,
    [UrlProtocolEnum.STARTS_WITH]: (a, b) => a.protocol.startsWith(b),
    [UrlProtocolEnum.ENDS_WITH]: (a, b) => a.protocol.endsWith(b),
    [UrlProtocolEnum.INCLUDES]: (a, b) => a.protocol.includes(b),
    [UrlProtocolEnum.EXCLUDES]: (a, b) => !a.protocol.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlProtocol operation: ${oper}`);
  return fn(source, target);
}
