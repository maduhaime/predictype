import { describe, it, expect } from 'vitest';
import { setSize } from './setSize';

describe('setSize', () => {
  it('should return true for size_equals', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'size_equals', 3)).toBe(true);
  });
  it('should return true for size_greater_than', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'size_greater_than', 2)).toBe(true);
  });
  it('should return true for size_greater_than_or_equals', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'size_greater_than_or_equals', 3)).toBe(true);
  });
  it('should return true for size_less_than', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'size_less_than', 4)).toBe(true);
  });
  it('should return true for size_less_than_or_equals', () => {
    const a = new Set([1, 2, 3]);
    expect(setSize(a, 'size_less_than_or_equals', 3)).toBe(true);
  });
});
