import { describe, it, expect } from 'vitest';
import { arraySize } from './arraySize';

describe('arraySize', () => {
  it('should return true for length_equals', () => {
    const arr = [1, 2, 3];
    const len = 3;

    expect(arraySize(arr, 'length_equals', len)).toBe(true);
  });

  it('should return false for length_equals if not equal', () => {
    const arr = [1, 2, 3];
    const len = 2;

    expect(arraySize(arr, 'length_equals', len)).toBe(false);
  });

  it('should return true for length_greater_than', () => {
    const arr = [1, 2, 3];
    const len = 2;

    expect(arraySize(arr, 'length_greater_than', len)).toBe(true);
  });

  it('should return true for length_less_than', () => {
    const arr = [1, 2, 3];
    const len = 4;

    expect(arraySize(arr, 'length_less_than', len)).toBe(true);
  });
});
