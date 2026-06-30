import { describe, expect, it } from 'vitest';

import { UrlHashEnum } from '../../enums/urls.js';
import { urlHash } from './urlHash.js';

describe('urlHash', () => {
  const url = new URL('https://example.com/path?foo=bar#hash-value');

  it('should return true for equals', () => {
    expect(urlHash(url, 'equals', '#hash-value')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlHash(url, 'not_equals', '#other')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlHash(url, 'starts_with', '#hash')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlHash(url, 'ends_with', 'value')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlHash(url, 'includes', 'hash')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlHash(url, 'excludes', 'missing')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlHash(url, UrlHashEnum.INCLUDES, 'value')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlHash(url, 'invalid_operator', 'hash')).toThrow('Unknown UrlHash operation: invalid_operator');
  });
});
