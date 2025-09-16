import { describe, it, expect } from 'vitest';
import { bigintMembership } from './bigintMembership.js';

describe('bigintMembership', () => {
  it('should return true for in', () => {
    const value = BigInt(5);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'in', arr)).toBe(true);
  });

  it('should return true for not_in', () => {
    const value = BigInt(3);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'not_in', arr)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = BigInt(1);
    const arr = [BigInt(1), BigInt(2), BigInt(3)];
    // @ts-expect-error
    expect(() => bigintMembership(value, 'invalid_operator', arr)).toThrow(
      'Unknown BigIntMembership operation: invalid_operator'
    );
  });
});
