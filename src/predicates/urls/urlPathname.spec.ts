import { describe, expect, it } from 'vitest';

import { UrlPathnameEnum } from '../../enums/urls.js';
import { urlPathname } from './urlPathname.js';

describe('urlPathname', () => {
  const url = new URL('https://example.com:8080/path/name?foo=bar#hash');

  it('should return true for equals', () => {
    expect(urlPathname(url, 'equals', '/path/name')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlPathname(url, 'not_equals', '/other')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlPathname(url, 'starts_with', '/path')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlPathname(url, 'ends_with', '/name')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlPathname(url, 'includes', 'ath/na')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlPathname(url, 'excludes', 'missing')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlPathname(url, UrlPathnameEnum.EQUALS, '/path/name')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlPathname(url, 'invalid_operator', '/path/name')).toThrow(
      'Unknown UrlPathname operation: invalid_operator',
    );
  });
});
