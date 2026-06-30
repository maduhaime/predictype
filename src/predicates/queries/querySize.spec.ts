import { describe, expect, it } from 'vitest';

import { QuerySizeEnum } from '../../enums/queries.js';
import { querySize } from './querySize.js';

describe('querySize', () => {
  const params = new URLSearchParams('foo=bar&foo=baz&zap=zip');

  it('should return true for size_equals', () => {
    expect(querySize(params, 'size_equals', 3)).toBe(true);
  });

  it('should return true for size_greater_than', () => {
    expect(querySize(params, 'size_greater_than', 2)).toBe(true);
  });

  it('should return true for size_greater_than_or_equals', () => {
    expect(querySize(params, 'size_greater_than_or_equals', 3)).toBe(true);
  });

  it('should return true for size_less_than', () => {
    expect(querySize(params, 'size_less_than', 4)).toBe(true);
  });

  it('should return true for size_less_than_or_equals', () => {
    expect(querySize(params, 'size_less_than_or_equals', 3)).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(querySize(params, QuerySizeEnum.SIZE_EQUALS, 3)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => querySize(params, 'invalid_operator', 3)).toThrow('Unknown QuerySize operation: invalid_operator');
  });
});
