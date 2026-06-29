import { describe, it, expect } from 'vitest';

import { BigIntMembershipEnum } from '../../enums/bigints.js';
import { bigintMembership } from './bigintMembership.js';

describe('bigintMembership', () => {
  it('should return true for in', () => {
    const value = BigInt(5);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'in', arr)).toBe(true);
  });

  it('should return false for in when the value is absent', () => {
    const value = BigInt(3);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'in', arr)).toBe(false);
  });

  it('should return true for not_in', () => {
    const value = BigInt(3);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'not_in', arr)).toBe(true);
  });

  it('should return false for not_in when the value is present', () => {
    const value = BigInt(5);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, 'not_in', arr)).toBe(false);
  });

  it('should accept enum operators directly', () => {
    const value = BigInt(3);
    const arr = [BigInt(1), BigInt(2), BigInt(5)];
    expect(bigintMembership(value, BigIntMembershipEnum.NOT_IN, arr)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = BigInt(1);
    const arr = [BigInt(1), BigInt(2), BigInt(3)];
    // @ts-expect-error
    expect(() => bigintMembership(value, 'invalid_operator', arr)).toThrow(
      'Unknown BigIntMembership operation: invalid_operator',
    );
  });
});
