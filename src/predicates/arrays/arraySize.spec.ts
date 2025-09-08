import { describe, it, expect } from 'vitest';
import { arraySize } from './arraySize';

describe('arraySize', () => {
  it('should return true for equals', () => {
    const arr = [1, 2, 3];
    const len = 3;

    expect(arraySize(arr, 'equals', len)).toBe(true);
  });

  it('should return false for equals if not equal', () => {
    const arr = [1, 2, 3];
    const len = 2;

    expect(arraySize(arr, 'equals', len)).toBe(false);
  });

  it('should return true for greater_than', () => {
    const arr = [1, 2, 3];
    const len = 2;

    expect(arraySize(arr, 'greater_than', len)).toBe(true);
  });

  it('should return true for less_than', () => {
    const arr = [1, 2, 3];
    const len = 4;

    expect(arraySize(arr, 'less_than', len)).toBe(true);
  });
});
