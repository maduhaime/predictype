import { describe, it, expect } from 'vitest';
import { dateRange } from './dateRange';

describe('dateRange', () => {
  it('should return true for in_range', () => {
    const date = new Date('2025-01-10');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'in_range', start, end)).toBe(true);
  });

  it('should return true for out_range', () => {
    const date = new Date('2025-02-01');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'out_range', start, end)).toBe(true);
  });

  it('should return true for strict_in_range', () => {
    const date = new Date('2025-01-10');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'strict_in_range', start, end)).toBe(true);
  });

  it('should return false for strict_in_range if on boundary', () => {
    const date = new Date('2025-01-01');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'strict_in_range', start, end)).toBe(false);
  });

  it('should return true for strict_out_range', () => {
    const date = new Date('2025-01-01');
    const start = new Date('2025-01-10');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'strict_out_range', start, end)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const date = new Date('2025-01-10');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    // @ts-expect-error
    expect(() => dateRange(date, 'invalid_operator', start, end)).toThrow(
      'Unknown DateRange operation: invalid_operator'
    );
  });
});
