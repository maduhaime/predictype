import { describe, it, expect } from 'vitest';
import { setState } from './setState.js';

describe('setState', () => {
  it('should return true for is_empty', () => {
    const a = new Set();
    expect(setState(a, 'is_empty')).toBe(true);
  });

  it('should return true for is_not_empty', () => {
    const b = new Set([1]);
    expect(setState(b, 'is_not_empty')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = new Set();
    // @ts-expect-error
    expect(() => setState(a, 'invalid_operator')).toThrow('Unknown SetState operation: invalid_operator');
  });
});
