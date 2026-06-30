import { describe, it, expect } from 'vitest';

import { RegExpStateEnum } from '../../enums/regexps.js';
import { regexpState } from './regexpState.js';

describe('regexpState', () => {
  it('should return true for is_global', () => {
    expect(regexpState(/foo/g, 'is_global')).toBe(true);
  });

  it('should return true for is_ignore_case', () => {
    expect(regexpState(/foo/i, 'is_ignore_case')).toBe(true);
  });

  it('should return true for is_multiline', () => {
    expect(regexpState(/foo/m, 'is_multiline')).toBe(true);
  });

  it('should return true for is_dot_all', () => {
    expect(regexpState(/foo/s, 'is_dot_all')).toBe(true);
  });

  it('should return true for is_unicode', () => {
    expect(regexpState(/foo/u, 'is_unicode')).toBe(true);
  });

  it('should return true for is_sticky', () => {
    expect(regexpState(/foo/y, 'is_sticky')).toBe(true);
  });

  it('should return true for has_indices when supported', () => {
    let re: RegExp;

    try {
      re = new RegExp('foo', 'd');
    } catch {
      expect(regexpState(/foo/, 'has_indices')).toBe(false);
      return;
    }

    expect(regexpState(re, 'has_indices')).toBe(true);
  });

  it('should return true for is_empty_pattern', () => {
    expect(regexpState(new RegExp(''), 'is_empty_pattern')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(regexpState(/foo/g, RegExpStateEnum.IS_GLOBAL)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => regexpState(/foo/, 'invalid_operator')).toThrow('Unknown RegExpState operation: invalid_operator');
  });
});
