import { describe, it, expect } from 'vitest';
import { functionArity } from './functionArity';

describe('functionArity', () => {
  it('should return true for equals', () => {
    const fn = (_a: any, _b: any) => {};
    expect(functionArity(fn, 'equals', 2)).toBe(true);
  });

  it('should return true for not_equals', () => {
    const fn = (_a: any) => {};
    expect(functionArity(fn, 'not_equals', 2)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const fn = (_a: any, _b: any, _c: any) => {};
    expect(functionArity(fn, 'greater_than', 2)).toBe(true);
  });

  it('should return true for greater_or_equal', () => {
    const fn = (_a: any, _b: any) => {};
    expect(functionArity(fn, 'greater_or_equal', 2)).toBe(true);
    const fn2 = (_a: any, _b: any, _c: any) => {};
    expect(functionArity(fn2, 'greater_or_equal', 2)).toBe(true);
  });

  it('should return true for less_than', () => {
    const fn = (_a: any) => {};
    expect(functionArity(fn, 'less_than', 2)).toBe(true);
  });

  it('should return true for less_or_equal', () => {
    const fn = (_a: any) => {};
    expect(functionArity(fn, 'less_or_equal', 2)).toBe(true);
    const fn2 = (_a: any, _b: any) => {};
    expect(functionArity(fn2, 'less_or_equal', 2)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const fn = (_a: any) => {};
    // @ts-expect-error
    expect(() => functionArity(fn, 'invalid_operator', 2)).toThrow('Unknown FunctionArity operation: invalid_operator');
  });
});
