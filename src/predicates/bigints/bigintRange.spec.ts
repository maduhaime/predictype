import { describe, it, expect } from 'vitest';

import { BigIntRangeEnum } from '../../enums/bigints.js';
import { bigintRange } from './bigintRange.js';

describe('bigintRange', () => {
  it('should return true for between', () => {
    const value = BigInt(5);
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(value, 'between', min, max)).toBe(true);
  });

  it('should return false for between when outside the bounds', () => {
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(BigInt(0), 'between', min, max)).toBe(false);
    expect(bigintRange(BigInt(11), 'between', min, max)).toBe(false);
  });

  it('should return true for strict_between (exclusive)', () => {
    const value = BigInt(5);
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(value, 'strict_between', min, max)).toBe(true);
    expect(bigintRange(BigInt(1), 'strict_between', min, max)).toBe(false);
    expect(bigintRange(BigInt(10), 'strict_between', min, max)).toBe(false);
  });

  it('should return true for strict_not_between (exclusive)', () => {
    const value = BigInt(1);
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(value, 'strict_not_between', min, max)).toBe(true);
    expect(bigintRange(BigInt(10), 'strict_not_between', min, max)).toBe(true);
    expect(bigintRange(BigInt(5), 'strict_not_between', min, max)).toBe(false);
  });

  it('should return true for not_between', () => {
    const value = BigInt(15);
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(value, 'not_between', min, max)).toBe(true);
  });

  it('should return false for not_between when inside the bounds', () => {
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(BigInt(5), 'not_between', min, max)).toBe(false);
  });

  it('should accept enum operators directly', () => {
    const value = BigInt(5);
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(value, BigIntRangeEnum.BETWEEN, min, max)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = BigInt(5);
    const min = BigInt(1);
    const max = BigInt(10);
    // @ts-expect-error
    expect(() => bigintRange(value, 'invalid_operator', min, max)).toThrow(
      'Unknown BigIntRange operation: invalid_operator',
    );
  });
});
