import { describe, expect, it } from 'vitest';

import { UrlPortEnum } from '../../enums/urls.js';
import { urlPort } from './urlPort.js';

describe('urlPort', () => {
  const url = new URL('https://example.com:8080/path?foo=bar#hash');

  it('should return true for equals', () => {
    expect(urlPort(url, 'equals', '8080')).toBe(true);
  });

  it('should return true for not_equals', () => {
    expect(urlPort(url, 'not_equals', '3000')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(urlPort(url, 'starts_with', '80')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(urlPort(url, 'ends_with', '80')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(urlPort(url, 'includes', '08')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(urlPort(url, 'excludes', '99')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(urlPort(url, UrlPortEnum.EQUALS, '8080')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => urlPort(url, 'invalid_operator', '8080')).toThrow('Unknown UrlPort operation: invalid_operator');
  });
});
