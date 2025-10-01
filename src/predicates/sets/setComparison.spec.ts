import { describe, it, expect } from 'vitest';

import { setComparison } from './setComparison.js';

describe('setComparison', () => {
  it('should return true for equals', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(setComparison(a, 'equals', b)).toBe(true);
  });

  it('should return false for equals with different sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 4]);
    expect(setComparison(a, 'equals', b)).toBe(false);
  });

  it('should return true for not_equals', () => {
    const a = new Set([1, 2, 3]);
    const c = new Set([4, 5]);
    expect(setComparison(a, 'not_equals', c)).toBe(true);
  });

  it('should return false for not_equals with same sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(setComparison(a, 'not_equals', b)).toBe(false);
  });

  it('should return true for same_elements', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 1, 2]); // Different order, same elements
    expect(setComparison(a, 'same_elements', b)).toBe(true);
  });

  it('should return false for same_elements with different sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 4]);
    expect(setComparison(a, 'same_elements', b)).toBe(false);
  });

  it('should handle empty sets', () => {
    const a = new Set();
    const b = new Set();
    expect(setComparison(a, 'equals', b)).toBe(true);
    expect(setComparison(a, 'same_elements', b)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    // @ts-expect-error
    expect(() => setComparison(a, 'invalid_operator', b)).toThrow('Unknown SetComparison operation: invalid_operator');
  });
});
