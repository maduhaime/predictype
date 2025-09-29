import { describe, it, expect } from 'vitest';

import { functionNamePattern } from './functionNamePattern.js';

describe('functionNamePattern', () => {
  it('should return true for matches', () => {
    const fn = function fooBar(): void {};
    const pattern = /^foo/;
    expect(functionNamePattern(fn, 'matches', pattern)).toBe(true);
  });

  it('should return false for matches if not matching', () => {
    const fn = function bar(): void {};
    const pattern = /^foo/;
    expect(functionNamePattern(fn, 'matches', pattern)).toBe(false);
  });

  it('should return true for not_matches', () => {
    const fn = function bar(): void {};
    const pattern = /^foo/;
    expect(functionNamePattern(fn, 'not_matches', pattern)).toBe(true);
  });

  it('should return false for not_matches if matching', () => {
    const fn = function fooBar(): void {};
    const pattern = /^foo/;
    expect(functionNamePattern(fn, 'not_matches', pattern)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const fn = function fooBar(): void {};
    const pattern = /^foo/;
    // @ts-expect-error
    expect(() => functionNamePattern(fn, 'invalid_operator', pattern)).toThrow(
      'Unknown FunctionNamePattern operation: invalid_operator',
    );
  });
});
