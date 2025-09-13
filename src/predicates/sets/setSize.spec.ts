import { describe, it, expect } from 'vitest';
import { setSize } from './setSize.js';

describe('setSize', () => {
  it('should return true for equals', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'equals', 3)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'greater_than', 2)).toBe(true);
  });

  it('should return true for greater_than_or_equals', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'greater_than_or_equals', 3)).toBe(true);
  });

  it('should return true for less_than', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'less_than', 4)).toBe(true);
  });

  it('should return true for less_than_or_equals', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'less_than_or_equals', 3)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = new Set([1, 2, 3]);
    // @ts-expect-error
    expect(() => setSize(a, 'invalid_operator', 3)).toThrow('Unknown SetSize operation: invalid_operator');
  });
});
