import { describe, it, expect } from 'vitest';

import { setRelation } from './setRelation.js';

describe('setRelation', () => {
  it('should return true for disjoint', () => {
    const a = new Set([1, 2]);
    const c = new Set([4, 5]);
    expect(setRelation(a, 'disjoint', c)).toBe(true);
  });

  it('should return false for disjoint with intersecting sets', () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    expect(setRelation(a, 'disjoint', b)).toBe(false);
  });

  it('should return true for intersects', () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    expect(setRelation(a, 'intersects', b)).toBe(true);
  });

  it('should return false for intersects with disjoint sets', () => {
    const a = new Set([1, 2]);
    const c = new Set([4, 5]);
    expect(setRelation(a, 'intersects', c)).toBe(false);
  });

  it('should return true for subset_of', () => {
    const a = new Set([1, 2]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'subset_of', b)).toBe(true);
  });

  it('should return true for subset_of with equal sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'subset_of', b)).toBe(true);
  });

  it('should return false for subset_of when not subset', () => {
    const a = new Set([1, 2, 4]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'subset_of', b)).toBe(false);
  });

  it('should return true for superset_of', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2]);
    expect(setRelation(a, 'superset_of', b)).toBe(true);
  });

  it('should return true for superset_of with equal sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'superset_of', b)).toBe(true);
  });

  it('should return false for superset_of when not superset', () => {
    const a = new Set([1, 2]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'superset_of', b)).toBe(false);
  });

  it('should return true for strict_subset_of', () => {
    const a = new Set([1, 2]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'strict_subset_of', b)).toBe(true);
  });

  it('should return false for strict_subset_of with equal sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'strict_subset_of', b)).toBe(false);
  });

  it('should return true for strict_superset_of', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2]);
    expect(setRelation(a, 'strict_superset_of', b)).toBe(true);
  });

  it('should return false for strict_superset_of with equal sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(setRelation(a, 'strict_superset_of', b)).toBe(false);
  });

  it('should handle empty sets', () => {
    const empty = new Set();
    const nonempty = new Set([1, 2]);

    expect(setRelation(empty, 'subset_of', nonempty)).toBe(true);
    expect(setRelation(empty, 'strict_subset_of', nonempty)).toBe(true);
    expect(setRelation(nonempty, 'superset_of', empty)).toBe(true);
    expect(setRelation(nonempty, 'strict_superset_of', empty)).toBe(true);
    expect(setRelation(empty, 'disjoint', nonempty)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    // @ts-expect-error
    expect(() => setRelation(a, 'invalid_operator', b)).toThrow('Unknown SetRelation operation: invalid_operator');
  });
});
