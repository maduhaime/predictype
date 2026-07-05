import { UrlStateEnum, UrlStateOper } from '../../enums/urls.js';

function hasValue(value: string): boolean {
  return value !== '';
}

/**
 * Checks state flags of a URL (presence and protocol checks).
 *
 * @param source The URL to inspect.
 * @param oper The state operation to perform (e.g. 'has_hash', 'is_https').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URL('https://user:pass@example.com:8443/docs?q=1#intro');
 *
 * urlState(source, 'has_hash'); // true
 * urlState(source, 'has_search'); // true
 * urlState(source, 'has_port'); // true
 * urlState(source, 'is_https'); // true
 *
 * @remarks
 * Supported Operators:
 * - **has_hash**
 * - **has_search**
 * - **has_port**
 * - **has_username**
 * - **has_password**
 * - **is_http**
 * - **is_https**
 * - **is_ws**
 * - **is_wss**
 */
export function urlState(source: URL, oper: UrlStateOper): boolean {
  const operators: Record<UrlStateEnum, (a: URL) => boolean> = {
    [UrlStateEnum.HAS_HASH]: (a) => hasValue(a.hash),
    [UrlStateEnum.HAS_SEARCH]: (a) => hasValue(a.search),
    [UrlStateEnum.HAS_PORT]: (a) => hasValue(a.port),
    [UrlStateEnum.HAS_USERNAME]: (a) => hasValue(a.username),
    [UrlStateEnum.HAS_PASSWORD]: (a) => hasValue(a.password),
    [UrlStateEnum.IS_HTTP]: (a) => a.protocol === 'http:',
    [UrlStateEnum.IS_HTTPS]: (a) => a.protocol === 'https:',
    [UrlStateEnum.IS_WS]: (a) => a.protocol === 'ws:',
    [UrlStateEnum.IS_WSS]: (a) => a.protocol === 'wss:',
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlState operation: ${oper}`);
  return fn(source);
}
