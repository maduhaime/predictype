import { describe, it, expect } from 'vitest';
import { bigintMembership } from './bigintMembership.js';

describe('bigintMembership', () => {
  it('should return true for is_one_of', () => {
    const value = BigInt(5);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'is_one_of', arr)).toBe(true);
  });

  it('should return true for is_not_one_of', () => {
    const value = BigInt(3);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'is_not_one_of', arr)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = BigInt(1);
    const arr = [BigInt(1), BigInt(2), BigInt(3)];
    // @ts-expect-error: purposely passing an invalid operator
    expect(() => bigintMembership(value, 'invalid_operator', arr)).toThrow(
      'Unknown BigIntMembership operation: invalid_operator'
    );
  });
});
