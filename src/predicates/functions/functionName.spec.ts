import { describe, it, expect } from 'vitest';

import { functionName } from './functionName.js';

describe('functionName', () => {
  it('should return true for equals', () => {
    const fn = function foo(): void {};
    expect(functionName(fn, 'equals', 'foo')).toBe(true);
  });

  it('should return true for starts_with', () => {
    const fn = function barTest(): void {};
    expect(functionName(fn, 'starts_with', 'bar')).toBe(true);
  });

  it('should return true for ends_with', () => {
    const fn = function testEnd(): void {};
    expect(functionName(fn, 'ends_with', 'End')).toBe(true);
  });

  it('should return true for includes', () => {
    const fn = function mySpecialFunction(): void {};
    expect(functionName(fn, 'includes', 'Special')).toBe(true);
  });

  it('should return true for excludes', () => {
    const fn = function myFunction(): void {};
    expect(functionName(fn, 'excludes', 'NotInName')).toBe(true);
  });

  it('should return false for equals if not equal', () => {
    const fn = function baz(): void {};
    expect(functionName(fn, 'equals', 'foo')).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const fn = function foo(): void {};
    // @ts-expect-error
    expect(() => functionName(fn, 'invalid_operator', 'foo')).toThrow(
      'Unknown FunctionName operation: invalid_operator',
    );
  });
});
