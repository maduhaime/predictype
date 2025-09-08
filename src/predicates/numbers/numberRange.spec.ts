import { describe, it, expect } from 'vitest';
import { numberRange } from './numberRange';

describe('numberRange', () => {
  it('should return true for in_range', () => {
    const n = 5;
    expect(numberRange(n, 'in_range', 1, 10)).toBe(true);
  });
  it('should return true for out_range', () => {
    const n = 0;
    expect(numberRange(n, 'out_range', 1, 10)).toBe(true);
  });
  it('should return true for strict_in_range', () => {
    const n = 5;
    expect(numberRange(n, 'strict_in_range', 1, 10)).toBe(true);
    expect(numberRange(n, 'strict_in_range', 5, 10)).toBe(false);
  });
  it('should return true for strict_out_range', () => {
    const n = 1;
    expect(numberRange(n, 'strict_out_range', 1, 10)).toBe(true);
    expect(numberRange(10, 'strict_out_range', 1, 10)).toBe(true);
  });
});
