import { describe, expect, it } from 'vitest';

import { UrlHrefEnum } from '../../enums/urls.js';
import { urlHref } from './urlHref.js';

describe('urlHref', () => {
  const url = new URL('https://example.com/path?foo=bar#hash');

  it('should return true for equals', () => {
    expect(urlHref(url, 'equals', url.href)).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlHref(url, 'not_equals', 'https://example.com/other')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlHref(url, 'starts_with', 'https://example.com')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlHref(url, 'ends_with', '#hash')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlHref(url, 'includes', 'foo=bar')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlHref(url, 'excludes', 'missing=value')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlHref(url, UrlHrefEnum.EQUALS, url.href)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlHref(url, 'invalid_operator', url.href)).toThrow('Unknown UrlHref operation: invalid_operator');
  });
});
