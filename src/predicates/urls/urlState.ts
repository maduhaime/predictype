import { UrlStateEnum, UrlStateOper } from '../../enums/urls.js';

function hasValue(value: string): boolean {
  return value !== '';
}

/**
 * Checks the state of a URL using the specified operation.
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
