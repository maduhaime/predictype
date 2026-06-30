import { describe, it, expect } from 'vitest';

import { RegExpResultSizeEnum } from '../../enums/regexps.js';
import { regexpResultSize } from './regexpResultSize.js';

describe('regexpResultSize', () => {
  it('should return true for size_equals', () => {
    expect(regexpResultSize(/a/g, 'size_equals', 'banana', 3)).toBe(true);
  });

  it('should return true for size_greater_than', () => {
    expect(regexpResultSize(/a/g, 'size_greater_than', 'banana', 2)).toBe(true);
  });

  it('should return true for size_greater_than_or_equals', () => {
    expect(regexpResultSize(/a/g, 'size_greater_than_or_equals', 'banana', 3)).toBe(true);
  });

  it('should return true for size_less_than', () => {
    expect(regexpResultSize(/a/g, 'size_less_than', 'banana', 4)).toBe(true);
  });

  it('should return true for size_less_than_or_equals', () => {
    expect(regexpResultSize(/a/g, 'size_less_than_or_equals', 'banana', 3)).toBe(true);
  });

  it('should support non-global patterns by counting all matches', () => {
    expect(regexpResultSize(/a/, 'size_equals', 'banana', 3)).toBe(true);
  });

  it('should support zero-width matches without looping forever', () => {
    expect(regexpResultSize(/^/gm, 'size_equals', 'a\nb\n', 3)).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(regexpResultSize(/a/g, RegExpResultSizeEnum.SIZE_EQUALS, 'banana', 3)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => regexpResultSize(/a/g, 'invalid_operator', 'banana', 3)).toThrow(
      'Unknown RegExpResultSize operation: invalid_operator',
    );
  });
});
