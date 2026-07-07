import { describe, expect, it } from 'vitest';

import { QueryStateEnum } from '../../enums/queries.js';
import { queryState } from './queryState.js';

describe('queryState', () => {
  const params = new URLSearchParams('foo=bar');
  const emptyParams = new URLSearchParams('');
  const url = new URL('https://example.com?foo=bar');

  it('should return true for is_empty', () => {
    expect(queryState(emptyParams, 'is_empty')).toBe(true);
  });

  it('should return true for is_not_empty', () => {
    expect(queryState(params, 'is_not_empty')).toBe(true);
  });

  it('should accept URLSearchParams as source', () => {
    const source = new URLSearchParams('alpha=one');
    expect(queryState(source, 'is_not_empty')).toBe(true);
  });

  it('should accept URL as source and use searchParams', () => {
    expect(queryState(url, 'is_not_empty')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(queryState(params, QueryStateEnum.IS_NOT_EMPTY)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => queryState(params, 'invalid_operator')).toThrow('Unknown QueryState operation: invalid_operator');
  });
});
