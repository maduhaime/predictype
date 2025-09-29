import { describe, it, expect } from 'vitest';

import { arrayRelation } from './arrayRelation.js';

describe('arrayRelation', () => {
  it('should return true for subset_of (including equality)', () => {
    expect(arrayRelation([1, 2], 'subset_of', [1, 2, 3])).toBe(true);
    expect(arrayRelation([1, 2], 'subset_of', [1, 2])).toBe(true);
  });

  it('should return true for superset_of (including equality)', () => {
    expect(arrayRelation([1, 2, 3], 'superset_of', [2, 3])).toBe(true);
    expect(arrayRelation([1, 2], 'superset_of', [1, 2])).toBe(true);
  });

  it('should return false for subset_of if not all elements are in target', () => {
    expect(arrayRelation([1, 4], 'subset_of', [1, 2, 3])).toBe(false);
  });

  it('should return true for strict_subset_of (no equality)', () => {
    expect(arrayRelation([1, 2], 'strict_subset_of', [1, 2, 3])).toBe(true);
    expect(arrayRelation([1, 2], 'strict_subset_of', [1, 2])).toBe(false);
    expect(arrayRelation([1, 2, 3], 'strict_subset_of', [1, 2])).toBe(false);
  });

  it('should return true for strict_superset_of (no equality)', () => {
    expect(arrayRelation([1, 2, 3], 'strict_superset_of', [2, 3])).toBe(true);
    expect(arrayRelation([1, 2], 'strict_superset_of', [1, 2])).toBe(false);
    expect(arrayRelation([1, 2], 'strict_superset_of', [1, 2, 3])).toBe(false);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => arrayRelation([1, 2], 'invalid_operator', [1, 2, 3])).toThrow(
      'Unknown ArrayRelation operation: invalid_operator',
    );
  });
});
