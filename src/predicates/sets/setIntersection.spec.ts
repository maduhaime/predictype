import { describe, it, expect } from 'vitest';

import { setIntersection } from './setIntersection.js';

describe('setIntersection', () => {
  it('should return true for disjoint sets', () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 4]);
    expect(setIntersection(a, 'disjoint', b)).toBe(true);
  });

  it('should return false for disjoint with intersecting sets', () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    expect(setIntersection(a, 'disjoint', b)).toBe(false);
  });

  it('should return true for intersects with common elements', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 4, 5]);
    expect(setIntersection(a, 'intersects', b)).toBe(true);
  });

  it('should return false for intersects with disjoint sets', () => {
    const a = new Set([1, 2]);
    const b = new Set([3, 4]);
    expect(setIntersection(a, 'intersects', b)).toBe(false);
  });

  it('should handle empty sets', () => {
    const empty = new Set();
    const nonempty = new Set([1, 2]);

    expect(setIntersection(empty, 'disjoint', nonempty)).toBe(true);
    expect(setIntersection(empty, 'intersects', nonempty)).toBe(false);
    expect(setIntersection(empty, 'disjoint', empty)).toBe(true);
    expect(setIntersection(empty, 'intersects', empty)).toBe(false);
  });

  it('should handle identical sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);

    expect(setIntersection(a, 'intersects', b)).toBe(true);
    expect(setIntersection(a, 'disjoint', b)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const a = new Set([1, 2]);
    const b = new Set([2, 3]);
    // @ts-expect-error
    expect(() => setIntersection(a, 'unknown_operation', b)).toThrow(
      'Unknown SetIntersection operation: unknown_operation',
    );
  });
});
