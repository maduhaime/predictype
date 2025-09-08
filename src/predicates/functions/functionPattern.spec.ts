import { describe, it, expect } from 'vitest';
import { functionPattern } from './functionPattern';

describe('functionPattern', () => {
  it('should return true for name_matches', () => {
    const fn = function fooBar() {};
    const pattern = /^foo/;
    expect(functionPattern(fn, 'name_matches', pattern)).toBe(true);
  });

  it('should return false for name_matches if not matching', () => {
    const fn = function bar() {};
    const pattern = /^foo/;
    expect(functionPattern(fn, 'name_matches', pattern)).toBe(false);
  });
});
