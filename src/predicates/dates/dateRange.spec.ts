import { describe, it, expect } from 'vitest';
import { dateRange } from './dateRange';

describe('dateRange', () => {
  it('should return true for in_range', () => {
    const date = new Date('2025-01-10');
    const start = new Date('2025-01-01');
    const end = new Date('2025-01-31');
    expect(dateRange(date, 'in_range', start, end)).toBe(true);
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
});
