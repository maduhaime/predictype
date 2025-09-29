import { describe, it, expect } from 'vitest';

import { arraySize } from './arraySize.js';

describe('arraySize', () => {
  it('should return true for size_equals', () => {
    const arr = [1, 2, 3];
    expect(arraySize(arr, 'size_equals', 3)).toBe(true);
  });

  it('should return false for size_equals if not equal', () => {
    const arr = [1, 2, 3];
    expect(arraySize(arr, 'size_equals', 2)).toBe(false);
  });

  it('should return true for size_greater_than_or_equals', () => {
    const arr = [1, 2, 3];
    expect(arraySize(arr, 'size_greater_than_or_equals', 3)).toBe(true);
    expect(arraySize(arr, 'size_greater_than_or_equals', 2)).toBe(true);
  });

  it('should return true for size_greater_than', () => {
    const arr = [1, 2, 3];
    expect(arraySize(arr, 'size_greater_than', 2)).toBe(true);
  });

  it('should return true for size_less_than_or_equals', () => {
    const arr = [1, 2, 3];
    expect(arraySize(arr, 'size_less_than_or_equals', 3)).toBe(true);
    expect(arraySize(arr, 'size_less_than_or_equals', 4)).toBe(true);
  });

  it('should return true for size_less_than', () => {
    const arr = [1, 2, 3];
    expect(arraySize(arr, 'size_less_than', 4)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const arr = [1, 2, 3];
    // @ts-expect-error
    expect(() => arraySize(arr, 'invalid_operator', 3)).toThrow('Unknown ArraySize operation: invalid_operator');
  });
});
