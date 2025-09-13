import { describe, it, expect } from 'vitest';
import { arrayIntersection } from './arrayIntersection.js';

type DummyType = number;

describe('arrayIntersection', () => {
  it('should return true for disjoint arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(arrayIntersection<DummyType>(arr1, 'disjoint', arr2)).toBe(true);
  });

  it('should return true for intersecting arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    expect(arrayIntersection<DummyType>(arr1, 'intersects', arr2)).toBe(true);
  });

  it('should return false for disjoint when arrays intersect', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    expect(arrayIntersection<DummyType>(arr1, 'disjoint', arr2)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    // @ts-expect-error
    expect(() => arrayIntersection(arr1, 'invalid_operator', arr2)).toThrow(
      'Unknown ArrayIntersection operation: invalid_operator'
    );
  });
});
