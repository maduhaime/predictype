import { describe, expect, it } from 'vitest';

import { UrlSearchEnum } from '../../enums/urls.js';
import { urlSearch } from './urlSearch.js';

describe('urlSearch', () => {
  const url = new URL('https://example.com/path?foo=bar&zap=zip#hash');

  it('should return true for equals', () => {
    expect(urlSearch(url, 'equals', '?foo=bar&zap=zip')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlSearch(url, 'not_equals', '?foo=bar')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlSearch(url, 'starts_with', '?foo')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlSearch(url, 'ends_with', 'zap=zip')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlSearch(url, 'includes', 'foo=bar')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlSearch(url, 'excludes', 'missing=value')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlSearch(url, UrlSearchEnum.INCLUDES, 'zap=zip')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlSearch(url, 'invalid_operator', 'foo=bar')).toThrow(
      'Unknown UrlSearch operation: invalid_operator',
    );
  });
});
