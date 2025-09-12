import { describe, it, expect } from 'vitest';
import { bigintMembership } from './bigintMembership';

describe('bigintMembership', () => {
  it('should return true for is_one_of', () => {
    const value = 5n;
    const arr = [1n, 2n, 5n];
    expect(bigintMembership(value, 'is_one_of', arr)).toBe(true);
  });

  it('should return true for is_not_one_of', () => {
    const value = 3n;
    const arr = [1n, 2n, 5n];
    expect(bigintMembership(value, 'is_not_one_of', arr)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = 1n;
    const arr = [1n, 2n, 3n];
    // @ts-expect-error: purposely passing an invalid operator
    expect(() => bigintMembership(value, 'invalid_operator', arr)).toThrow(
      'Unknown BigIntMembership operation: invalid_operator'
    );
  });
});
