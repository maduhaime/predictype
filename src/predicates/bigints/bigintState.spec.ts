import { describe, it, expect } from 'vitest';

import { BigIntStateEnum } from '../../enums/bigints.js';
import { bigintState } from './bigintState.js';

describe('bigintState', () => {
  it('should return true for is_zero', () => {
    const value = BigInt(0);
    expect(bigintState(value, 'is_zero')).toBe(true);
  });

  it('should return false for is_zero when the value is non-zero', () => {
    const value = BigInt(1);
    expect(bigintState(value, 'is_zero')).toBe(false);
  });

  it('should return true for is_positive', () => {
    const value = BigInt(10);
    expect(bigintState(value, 'is_positive')).toBe(true);
  });

  it('should return false for is_positive when the value is not positive', () => {
    expect(bigintState(BigInt(0), 'is_positive')).toBe(false);
    expect(bigintState(BigInt(-5), 'is_positive')).toBe(false);
  });

  it('should return true for is_negative', () => {
    const value = BigInt(-5);
    expect(bigintState(value, 'is_negative')).toBe(true);
  });

  it('should return false for is_negative when the value is not negative', () => {
    expect(bigintState(BigInt(0), 'is_negative')).toBe(false);
    expect(bigintState(BigInt(5), 'is_negative')).toBe(false);
  });

  it('should return true for is_even', () => {
    const value = BigInt(8);
    expect(bigintState(value, 'is_even')).toBe(true);
  });

  it('should return false for is_even when the value is odd', () => {
    expect(bigintState(BigInt(7), 'is_even')).toBe(false);
  });

  it('should return true for is_odd', () => {
    const value = BigInt(7);
    expect(bigintState(value, 'is_odd')).toBe(true);
  });

  it('should return false for is_odd when the value is even', () => {
    expect(bigintState(BigInt(8), 'is_odd')).toBe(false);
  });

  it('should accept enum operators directly', () => {
    expect(bigintState(BigInt(0), BigIntStateEnum.IS_ZERO)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = BigInt(1);
    // @ts-expect-error: purposely passing an invalid operator
    expect(() => bigintState(value, 'invalid_operator')).toThrow('Unknown BigIntState operation: invalid_operator');
  });
});
