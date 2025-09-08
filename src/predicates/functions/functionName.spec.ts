import { describe, it, expect } from 'vitest';
import { functionName } from './functionName';

describe('functionName', () => {
  it('should return true for equals', () => {
    const fn = function foo() {};
    expect(functionName(fn, 'equals', 'foo')).toBe(true);
  });

  it('should return true for starts_with', () => {
    const fn = function barTest() {};
    expect(functionName(fn, 'starts_with', 'bar')).toBe(true);
  });

  it('should return false for equals if not equal', () => {
    const fn = function baz() {};
    expect(functionName(fn, 'equals', 'foo')).toBe(false);
  });
});
