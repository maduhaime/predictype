import { describe, it, expect } from 'vitest';
import { setCompare } from './setCompare';

describe('setCompare', () => {
  it('should return true for equals', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(setCompare(a, 'equals', b)).toBe(true);
  });
  it('should return true for not_equals', () => {
    const a = new Set([1, 2, 3]);
    const c = new Set([4, 5]);
    expect(setCompare(a, 'not_equals', c)).toBe(true);
  });
});
