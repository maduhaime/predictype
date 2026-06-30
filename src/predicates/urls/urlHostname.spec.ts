import { describe, expect, it } from 'vitest';

import { UrlHostnameEnum } from '../../enums/urls.js';
import { urlHostname } from './urlHostname.js';

describe('urlHostname', () => {
  const url = new URL('https://example.com:8080/path?foo=bar#hash');

  it('should return true for equals', () => {
    expect(urlHostname(url, 'equals', 'example.com')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlHostname(url, 'not_equals', 'localhost')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlHostname(url, 'starts_with', 'example')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlHostname(url, 'ends_with', '.com')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlHostname(url, 'includes', 'ample')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlHostname(url, 'excludes', 'internal')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlHostname(url, UrlHostnameEnum.EQUALS, 'example.com')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlHostname(url, 'invalid_operator', 'example.com')).toThrow(
      'Unknown UrlHostname operation: invalid_operator',
    );
  });
});
