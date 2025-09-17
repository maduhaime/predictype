import { describe, it, expect } from 'vitest';
import { numberState } from './numberState.js';

describe('numberState', () => {
  it('should return true for is_integer', () => {
    const n = 5;
    expect(numberState(n, 'is_integer')).toBe(true);
  });

  it('should return true for is_float', () => {
    const n = 3.14;
    expect(numberState(n, 'is_float')).toBe(true);
  });

  it('should return true for is_finite', () => {
    const n = 42;
    expect(numberState(n, 'is_finite')).toBe(true);
  });

  it('should return true for is_positive', () => {
    const n = 7;
    expect(numberState(n, 'is_positive')).toBe(true);
  });

  it('should return true for is_negative', () => {
    const n = -3;
    expect(numberState(n, 'is_negative')).toBe(true);
  });

  it('should return true for is_zero', () => {
    const n = 0;
    expect(numberState(n, 'is_zero')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const n = 1;
    // @ts-expect-error
    expect(() => numberState(n, 'invalid_operator')).toThrow('Unknown NumberState operation: invalid_operator');
  });

  describe('special values (NaN, Infinity, -Infinity)', () => {
    it('should handle NaN correctly', () => {
      expect(numberState(NaN, 'is_integer')).toBe(false);
      expect(numberState(NaN, 'is_float')).toBe(false);
      expect(numberState(NaN, 'is_finite')).toBe(false);
      expect(numberState(NaN, 'is_positive')).toBe(false);
      expect(numberState(NaN, 'is_negative')).toBe(false);
      expect(numberState(NaN, 'is_zero')).toBe(false);
    });
    it('should handle Infinity and -Infinity correctly', () => {
      expect(numberState(Infinity, 'is_integer')).toBe(false);
      expect(numberState(-Infinity, 'is_integer')).toBe(false);
      expect(numberState(Infinity, 'is_float')).toBe(false);
      expect(numberState(-Infinity, 'is_float')).toBe(false);
      expect(numberState(Infinity, 'is_finite')).toBe(false);
      expect(numberState(-Infinity, 'is_finite')).toBe(false);
      expect(numberState(Infinity, 'is_positive')).toBe(true);
      expect(numberState(-Infinity, 'is_negative')).toBe(true);
      expect(numberState(Infinity, 'is_zero')).toBe(false);
      expect(numberState(-Infinity, 'is_zero')).toBe(false);
    });
  });
});
