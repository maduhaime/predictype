import { describe, it, expect } from 'vitest';
import { setRelation } from './setRelation.js';

describe('setRelation', () => {
  it('should return true for disjoint', () => {
    const a = new Set([1, 2]);
    const c = new Set([4, 5]);
    expect(setRelation(a, 'disjoint', c)).toBe(true);
  });

  it('should return true for intersects', () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    expect(setRelation(a, 'intersects', b)).toBe(true);
  });

  it('should return true for is_subset_of', () => {
    const a = new Set([1, 2]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'is_subset_of', b)).toBe(true);
  });

  it('should return true for is_superset_of', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2]);
    expect(setRelation(a, 'is_superset_of', b)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    // @ts-expect-error
    expect(() => setRelation(a, 'invalid_operator', b)).toThrow('Unknown SetRelation operation: invalid_operator');
  });
});
