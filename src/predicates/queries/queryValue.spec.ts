import { describe, expect, it } from 'vitest';

import { QueryValueEnum } from '../../enums/queries.js';
import { queryValue } from './queryValue.js';

describe('queryValue', () => {
  const params = new URLSearchParams('foo=bar&foo=baz&zap=zip');
  const url = new URL('https://example.com?foo=bar&foo=baz&zap=zip');

  it('should return true for contains_value', () => {
    expect(queryValue(params, 'contains_value', 'baz')).toBe(true);
  });

  it('should return true for lacks_value', () => {
    expect(queryValue(params, 'lacks_value', 'missing')).toBe(true);
  });

  it('should accept URLSearchParams as source', () => {
    const source = new URLSearchParams('alpha=one&beta=two');
    expect(queryValue(source, 'contains_value', 'two')).toBe(true);
  });

  it('should accept URL as source and use searchParams', () => {
    expect(queryValue(url, 'contains_value', 'baz')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(queryValue(params, QueryValueEnum.CONTAINS_VALUE, 'zip')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => queryValue(params, 'invalid_operator', 'bar')).toThrow(
      'Unknown QueryValue operation: invalid_operator',
    );
  });
});
