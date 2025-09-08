import { describe, it, expect } from 'vitest';
import { functionName } from './functionName';

describe('functionName', () => {
  it('should return true for name_equals', () => {
    const fn = function foo() {};
    expect(functionName(fn, 'name_equals', 'foo')).toBe(true);
  });

  it('should return true for name_starts_with', () => {
    const fn = function barTest() {};
    expect(functionName(fn, 'name_starts_with', 'bar')).toBe(true);
  });

  it('should return false for name_equals if not equal', () => {
    const fn = function baz() {};
    expect(functionName(fn, 'name_equals', 'foo')).toBe(false);
  });
});
