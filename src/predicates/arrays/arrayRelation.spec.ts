import { describe, it, expect } from 'vitest';
import { arrayRelation } from './arrayRelation.js';

type DummyType = number;

describe('arrayRelation', () => {
  it('should return true for is_subset_of', () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2, 3];
    expect(arrayRelation<DummyType>(arr1, 'is_subset_of', arr2)).toBe(true);
  });

  it('should return true for is_superset_of', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3];
    expect(arrayRelation<DummyType>(arr1, 'is_superset_of', arr2)).toBe(true);
  });

  it('should return false for is_subset_of if not all elements are in target', () => {
    const arr1 = [1, 4];
    const arr2 = [1, 2, 3];
    expect(arrayRelation<DummyType>(arr1, 'is_subset_of', arr2)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2, 3];
    // @ts-expect-error
    expect(() => arrayRelation(arr1, 'invalid_operator', arr2)).toThrow(
      'Unknown ArrayRelation operation: invalid_operator'
    );
  });
});
