import { UrlProtocolEnum, UrlProtocolOper } from '../../enums/urls.js';

/**
 * Checks the protocol string of a URL using the specified operation.
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
