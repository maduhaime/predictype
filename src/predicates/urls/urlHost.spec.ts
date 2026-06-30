import { describe, expect, it } from 'vitest';

import { UrlHostEnum } from '../../enums/urls.js';
import { urlHost } from './urlHost.js';

describe('urlHost', () => {
  const url = new URL('https://example.com:8080/path?foo=bar#hash');

  it('should return true for equals', () => {
    expect(urlHost(url, 'equals', 'example.com:8080')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlHost(url, 'not_equals', 'example.com:3000')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlHost(url, 'starts_with', 'example.com')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlHost(url, 'ends_with', '8080')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlHost(url, 'includes', 'com:')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlHost(url, 'excludes', 'localhost')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlHost(url, UrlHostEnum.EQUALS, 'example.com:8080')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlHost(url, 'invalid_operator', 'example.com:8080')).toThrow(
      'Unknown UrlHost operation: invalid_operator',
    );
  });
});
