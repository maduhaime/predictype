import { describe, it, expect } from 'vitest';

import { RegExpResultRangeEnum } from '../../enums/regexps.js';
import { regexpResultRange } from './regexpResultRange.js';

describe('regexpResultRange', () => {
  it('should return true for between', () => {
    expect(regexpResultRange(/a/g, 'between', 'banana', 2, 3)).toBe(true);
  });

  it('should return true for not_between', () => {
    expect(regexpResultRange(/a/g, 'not_between', 'banana', 4, 5)).toBe(true);
  });

  it('should return true for strict_between', () => {
    expect(regexpResultRange(/a/g, 'strict_between', 'banana', 2, 4)).toBe(true);
  });

  it('should return true for strict_not_between', () => {
    expect(regexpResultRange(/a/g, 'strict_not_between', 'banana', 3, 4)).toBe(true);
  });

  it('should support non-global patterns by counting all matches', () => {
    expect(regexpResultRange(/a/, 'between', 'banana', 3, 3)).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(regexpResultRange(/a/g, RegExpResultRangeEnum.BETWEEN, 'banana', 2, 3)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => regexpResultRange(/a/g, 'invalid_operator', 'banana', 2, 3)).toThrow(
      'Unknown RegExpResultRange operation: invalid_operator',
    );
  });
});
