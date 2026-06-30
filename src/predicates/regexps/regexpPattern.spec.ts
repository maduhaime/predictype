import { describe, it, expect } from 'vitest';

import { RegExpPatternEnum } from '../../enums/regexps.js';
import { regexpPattern } from './regexpPattern.js';

describe('regexpPattern', () => {
  it('should return true for equals', () => {
    expect(regexpPattern(/abc/, 'equals', 'abc')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(regexpPattern(/abcdef/, 'starts_with', 'abc')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(regexpPattern(/abcdef/, 'ends_with', 'def')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(regexpPattern(/abcdef/, 'includes', 'bcd')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(regexpPattern(/abcdef/, 'excludes', 'xyz')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(regexpPattern(/abc/, RegExpPatternEnum.EQUALS, 'abc')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => regexpPattern(/abc/, 'invalid_operator', 'abc')).toThrow(
      'Unknown RegExpPattern operation: invalid_operator',
    );
  });
});
