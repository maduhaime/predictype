import { describe, it, expect } from 'vitest';
import { numberRange } from './numberRange.js';

describe('numberRange', () => {
  it('should return true for between', () => {
    const n = 5;
    expect(numberRange(n, 'between', 1, 10)).toBe(true);
  });

  it('should return true for not_between', () => {
    const n = 0;
    expect(numberRange(n, 'not_between', 1, 10)).toBe(true);
  });

  it('should return true for strict_between', () => {
    const n = 5;
    expect(numberRange(n, 'strict_between', 1, 10)).toBe(true);
    expect(numberRange(n, 'strict_between', 5, 10)).toBe(false);
  });

  it('should return true for strict_not_between', () => {
    const n = 1;
    expect(numberRange(n, 'strict_not_between', 1, 10)).toBe(true);
    expect(numberRange(10, 'strict_not_between', 1, 10)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const n = 5;
    // @ts-expect-error
    expect(() => numberRange(n, 'invalid_operator', 1, 10)).toThrow('Unknown NumberRange operation: invalid_operator');
  });

  describe('special values (NaN, Infinity, -Infinity)', () => {
    it('should return false for NaN as source', () => {
      expect(numberRange(NaN, 'between', 1, 10)).toBe(false);
      expect(numberRange(NaN, 'not_between', 1, 10)).toBe(true);
      expect(numberRange(NaN, 'strict_between', 1, 10)).toBe(false);
      expect(numberRange(NaN, 'strict_not_between', 1, 10)).toBe(true);
    });
    it('should return false for NaN as min or max', () => {
      expect(numberRange(5, 'between', NaN, 10)).toBe(false);
      expect(numberRange(5, 'between', 1, NaN)).toBe(false);
      expect(numberRange(5, 'strict_between', NaN, 10)).toBe(false);
      expect(numberRange(5, 'strict_between', 1, NaN)).toBe(false);
    });
    it('should handle Infinity and -Infinity as expected', () => {
      expect(numberRange(Infinity, 'between', 1, 10)).toBe(false);
      expect(numberRange(-Infinity, 'between', 1, 10)).toBe(false);
      expect(numberRange(5, 'between', -Infinity, Infinity)).toBe(true);
      expect(numberRange(Infinity, 'between', -Infinity, Infinity)).toBe(true);
      expect(numberRange(-Infinity, 'between', -Infinity, Infinity)).toBe(true);
      expect(numberRange(Infinity, 'not_between', 1, 10)).toBe(true);
      expect(numberRange(-Infinity, 'not_between', 1, 10)).toBe(true);
    });
  });
});
