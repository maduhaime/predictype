import { describe, it, expect } from 'vitest';
import { bigintState } from './bigintState.js';

describe('bigintState', () => {
  it('should return true for is_zero', () => {
    const value = BigInt(0);
    expect(bigintState(value, 'is_zero')).toBe(true);
  });

  it('should return true for is_positive', () => {
    const value = BigInt(10);
    expect(bigintState(value, 'is_positive')).toBe(true);
  });

  it('should return true for is_negative', () => {
    const value = BigInt(-5);
    expect(bigintState(value, 'is_negative')).toBe(true);
  });

  it('should return true for is_even', () => {
    const value = BigInt(8);
    expect(bigintState(value, 'is_even')).toBe(true);
  });

  it('should return true for is_odd', () => {
    const value = BigInt(7);
    expect(bigintState(value, 'is_odd')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = BigInt(1);
    // @ts-expect-error: purposely passing an invalid operator
    expect(() => bigintState(value, 'invalid_operator')).toThrow('Unknown BigIntState operation: invalid_operator');
  });
});
