import { describe, expect, it } from 'vitest';

import { UrlStateEnum } from '../../enums/urls.js';
import { urlState } from './urlState.js';

describe('urlState', () => {
  const httpsUrl = new URL('https://user:pass@example.com:8080/path?foo=bar#hash');
  const wsUrl = new URL('ws://example.com/socket');

  it('should return true for has_hash', () => {
    expect(urlState(httpsUrl, 'has_hash')).toBe(true);
  });

  it('should return true for has_search', () => {
    expect(urlState(httpsUrl, 'has_search')).toBe(true);
  });

  it('should return true for has_port', () => {
    expect(urlState(httpsUrl, 'has_port')).toBe(true);
  });

  it('should return true for has_username', () => {
    expect(urlState(httpsUrl, 'has_username')).toBe(true);
  });

  it('should return true for has_password', () => {
    expect(urlState(httpsUrl, 'has_password')).toBe(true);
  });

  it('should return true for is_https', () => {
    expect(urlState(httpsUrl, 'is_https')).toBe(true);
  });

  it('should return true for is_http', () => {
    expect(urlState(new URL('http://example.com'), 'is_http')).toBe(true);
  });

  it('should return true for is_ws', () => {
    expect(urlState(wsUrl, 'is_ws')).toBe(true);
  });

  it('should return true for is_wss', () => {
    expect(urlState(new URL('wss://example.com/socket'), 'is_wss')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlState(httpsUrl, UrlStateEnum.IS_HTTPS)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlState(httpsUrl, 'invalid_operator')).toThrow('Unknown UrlState operation: invalid_operator');
  });
});
