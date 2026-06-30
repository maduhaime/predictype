import { describe, expect, it } from 'vitest';

import { UrlOriginEnum } from '../../enums/urls.js';
import { urlOrigin } from './urlOrigin.js';

describe('urlOrigin', () => {
  const url = new URL('https://example.com/path?foo=bar#hash');

  it('should return true for equals', () => {
    expect(urlOrigin(url, 'equals', 'https://example.com')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlOrigin(url, 'not_equals', 'http://example.com')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlOrigin(url, 'starts_with', 'https://')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlOrigin(url, 'ends_with', 'example.com')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlOrigin(url, 'includes', 'example')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlOrigin(url, 'excludes', 'localhost')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlOrigin(url, UrlOriginEnum.EQUALS, 'https://example.com')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlOrigin(url, 'invalid_operator', 'https://example.com')).toThrow(
      'Unknown UrlOrigin operation: invalid_operator',
    );
  });
});
