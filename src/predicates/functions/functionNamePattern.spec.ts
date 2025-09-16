import { describe, it, expect } from 'vitest';
import { functionPattern } from './functionNamePattern.js';

describe('functionPattern', () => {
  it('should return true for matches', () => {
    const fn = function fooBar() {};
    const pattern = /^foo/;
    expect(functionPattern(fn, 'matches', pattern)).toBe(true);
  });

  it('should return false for matches if not matching', () => {
    const fn = function bar() {};
    const pattern = /^foo/;
    expect(functionPattern(fn, 'matches', pattern)).toBe(false);
  });

  it('should return true for not_matches', () => {
    const fn = function bar() {};
    const pattern = /^foo/;
    expect(functionPattern(fn, 'not_matches', pattern)).toBe(true);
  });

  it('should return false for not_matches if matching', () => {
    const fn = function fooBar() {};
    const pattern = /^foo/;
    expect(functionPattern(fn, 'not_matches', pattern)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const fn = function fooBar() {};
    const pattern = /^foo/;
    // @ts-expect-error
    expect(() => functionPattern(fn, 'invalid_operator', pattern)).toThrow(
      'Unknown FunctionNamePattern operation: invalid_operator'
    );
  });
});
