import { describe, it, expect } from 'vitest';
import { numberComparison } from './numberComparison.js';

describe('numberComparison', () => {
  it('should return true for equals', () => {
    const a = 5;
    expect(numberComparison(a, 'equals', 5)).toBe(true);
  });

  it('should return true for not_equals', () => {
    const a = 5;
    expect(numberComparison(a, 'not_equals', 6)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const a = 10;
    expect(numberComparison(a, 'greater_than', 5)).toBe(true);
  });

  it('should return true for greater_or_equal', () => {
    const a = 10;
    expect(numberComparison(a, 'greater_or_equal', 10)).toBe(true);
    expect(numberComparison(a, 'greater_or_equal', 5)).toBe(true);
  });

  it('should return true for less_than', () => {
    const a = 3;
    expect(numberComparison(a, 'less_than', 5)).toBe(true);
  });

  it('should return true for less_or_equal', () => {
    const a = 3;
    expect(numberComparison(a, 'less_or_equal', 3)).toBe(true);
    expect(numberComparison(a, 'less_or_equal', 5)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = 1;
    // @ts-expect-error
    expect(() => numberComparison(a, 'invalid_operator', 2)).toThrow(
      'Unknown NumberComparison operation: invalid_operator'
    );
  });

  describe('special values (NaN, Infinity, -Infinity)', () => {
    it('should return false for any comparison with NaN', () => {
      expect(numberComparison(NaN, 'equals', 5)).toBe(false);
      expect(numberComparison(5, 'equals', NaN)).toBe(false);
      expect(numberComparison(NaN, 'not_equals', 5)).toBe(true);
      expect(numberComparison(5, 'not_equals', NaN)).toBe(true);
      expect(numberComparison(NaN, 'greater_than', 5)).toBe(false);
      expect(numberComparison(5, 'greater_than', NaN)).toBe(false);
      expect(numberComparison(NaN, 'less_than', 5)).toBe(false);
      expect(numberComparison(5, 'less_than', NaN)).toBe(false);
      expect(numberComparison(NaN, 'greater_or_equal', 5)).toBe(false);
      expect(numberComparison(5, 'greater_or_equal', NaN)).toBe(false);
      expect(numberComparison(NaN, 'less_or_equal', 5)).toBe(false);
      expect(numberComparison(5, 'less_or_equal', NaN)).toBe(false);
    });
    it('should handle Infinity and -Infinity as expected', () => {
      expect(numberComparison(Infinity, 'greater_than', 1)).toBe(true);
      expect(numberComparison(-Infinity, 'less_than', 1)).toBe(true);
      expect(numberComparison(Infinity, 'equals', Infinity)).toBe(true);
      expect(numberComparison(-Infinity, 'equals', -Infinity)).toBe(true);
      expect(numberComparison(Infinity, 'not_equals', -Infinity)).toBe(true);
      expect(numberComparison(-Infinity, 'not_equals', Infinity)).toBe(true);
      expect(numberComparison(Infinity, 'less_than', 1)).toBe(false);
      expect(numberComparison(-Infinity, 'greater_than', 1)).toBe(false);
    });
  });
});
