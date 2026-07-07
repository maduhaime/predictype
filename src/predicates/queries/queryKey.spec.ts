import { describe, expect, it } from 'vitest';

import { QueryKeyEnum } from '../../enums/queries.js';
import { queryKey } from './queryKey.js';

describe('queryKey', () => {
  const params = new URLSearchParams('foo=bar&foo=baz&zap=zip');
  const url = new URL('https://example.com?foo=bar&foo=baz&zap=zip');

  it('should return true for contains_key', () => {
    expect(queryKey(params, 'contains_key', 'foo')).toBe(true);
  });

  it('should return true for lacks_key', () => {
    expect(queryKey(params, 'lacks_key', 'missing')).toBe(true);
  });

  it('should accept URLSearchParams as source', () => {
    const source = new URLSearchParams('alpha=one&beta=two');
    expect(queryKey(source, 'contains_key', 'alpha')).toBe(true);
  });

  it('should accept URL as source and use searchParams', () => {
    expect(queryKey(url, 'contains_key', 'foo')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(queryKey(params, QueryKeyEnum.CONTAINS_KEY, 'zap')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => queryKey(params, 'invalid_operator', 'foo')).toThrow('Unknown QueryKey operation: invalid_operator');
  });
});
