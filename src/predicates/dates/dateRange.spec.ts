import { describe, it, expect } from 'vitest';
import { dateRange } from './dateRange.js';

describe('dateRange', () => {
  it('should return true for between', () => {
    const date = new Date('2025-01-10');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'between', start, end)).toBe(true);
  });

  it('should return true for not_between', () => {
    const date = new Date('2025-02-01');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'not_between', start, end)).toBe(true);
  });

  it('should return true for strict_between', () => {
    const date = new Date('2025-01-10');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'strict_between', start, end)).toBe(true);
  });

  it('should return false for strict_between if on boundary', () => {
    const date = new Date('2025-01-01');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'strict_between', start, end)).toBe(false);
  });

  it('should return true for strict_not_between', () => {
    const date = new Date('2025-01-01');
    const start = new Date('2025-01-10');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'strict_not_between', start, end)).toBe(true);
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
