import { describe, it, expect } from 'vitest';
import { arrayCompare } from './arrayCompare';

type DummyType = number;

describe('arrayCompare', () => {
  it('should return true for equal arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(arrayCompare<DummyType>(arr1, 'equals', arr2)).toBe(true);
  });

  it('should return false for different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];

    expect(arrayCompare<DummyType>(arr1, 'equals', arr2)).toBe(false);
  });

  it('should return true for not_equals with different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];

    expect(arrayCompare<DummyType>(arr1, 'not_equals', arr2)).toBe(true);
  });
});
