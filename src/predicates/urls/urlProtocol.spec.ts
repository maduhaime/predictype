import { describe, expect, it } from 'vitest';

import { UrlProtocolEnum } from '../../enums/urls.js';
import { urlProtocol } from './urlProtocol.js';

describe('urlProtocol', () => {
  const url = new URL('https://example.com/path?foo=bar#hash');

  it('should return true for equals', () => {
    expect(urlProtocol(url, 'equals', 'https:')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlProtocol(url, 'not_equals', 'http:')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlProtocol(url, 'starts_with', 'ht')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlProtocol(url, 'ends_with', ':')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlProtocol(url, 'includes', 'ttps')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlProtocol(url, 'excludes', 'ftp')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlProtocol(url, UrlProtocolEnum.EQUALS, 'https:')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlProtocol(url, 'invalid_operator', 'https:')).toThrow(
      'Unknown UrlProtocol operation: invalid_operator',
    );
  });
});
