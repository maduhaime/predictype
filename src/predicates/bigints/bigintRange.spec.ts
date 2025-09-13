import { describe, it, expect } from 'vitest';
import { bigintRange } from './bigintRange.js';

describe('bigintRange', () => {
  it('should return true for between', () => {
    const value = BigInt(5);
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(value, 'between', min, max)).toBe(true);
  });

  it('should return true for not_between', () => {
    const value = BigInt(15);
    const min = BigInt(1);
    const max = BigInt(10);
    expect(bigintRange(value, 'not_between', min, max)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const value = BigInt(5);
    const min = BigInt(1);
    const max = BigInt(10);
    // @ts-expect-error
    expect(() => bigintRange(value, 'invalid_operator', min, max)).toThrow(
      'Unknown BigIntRange operation: invalid_operator'
    );
  });
});
