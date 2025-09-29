import { describe, it, expect } from 'vitest';

import { bigintComparison } from './bigintComparison.js';

describe('bigintComparison', () => {
  it('should return true for equals', () => {
    const a = BigInt(10);
    const b = BigInt(10);
    expect(bigintComparison(a, 'equals', b)).toBe(true);
  });

  it('should return true for not_equals', () => {
    const a = BigInt(10);
    const b = BigInt(5);
    expect(bigintComparison(a, 'not_equals', b)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const a = BigInt(10);
    const b = BigInt(5);
    expect(bigintComparison(a, 'greater_than', b)).toBe(true);
  });

  it('should return true for greater_than_or_equals', () => {
    const a = BigInt(10);
    const b = BigInt(10);
    const c = BigInt(5);
    expect(bigintComparison(a, 'greater_than_or_equals', b)).toBe(true);
    expect(bigintComparison(a, 'greater_than_or_equals', c)).toBe(true);
  });

  it('should return true for less_than', () => {
    const a = BigInt(5);
    const b = BigInt(10);
    expect(bigintComparison(a, 'less_than', b)).toBe(true);
  });

  it('should return true for less_than_or_equals', () => {
    const a = BigInt(5);
    const b = BigInt(10);
    const c = BigInt(5);
    expect(bigintComparison(a, 'less_than_or_equals', b)).toBe(true);
    expect(bigintComparison(a, 'less_than_or_equals', c)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = BigInt(5);
    const b = BigInt(10);
    // @ts-expect-error: purposely passing an invalid operator
    expect(() => bigintComparison(a, 'invalid_operator', b)).toThrow(
      'Unknown BigIntComparison operation: invalid_operator',
    );
  });
});
