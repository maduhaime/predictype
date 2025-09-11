import { describe, it, expect } from 'vitest';
import { functionArity } from './functionArity';

describe('functionArity', () => {
  it('should return true for equals', () => {
    const fn = (_a: any, _b: any) => {};
    expect(functionArity(fn, 'equals', 2)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const fn = (_a: any, _b: any, _c: any) => {};
    expect(functionArity(fn, 'greater_than', 2)).toBe(true);
  });

  it('should return true for less_than', () => {
    const fn = (_a: any) => {};
    expect(functionArity(fn, 'less_than', 2)).toBe(true);
  });

  it('should return true for not_equals', () => {
    const fn = (_a: any) => {};
    expect(functionArity(fn, 'not_equals', 2)).toBe(true);
  });
});
