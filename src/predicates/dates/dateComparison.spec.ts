import { describe, it, expect } from 'vitest';

import { dateComparison } from './dateComparison.js';

describe('dateComparison', () => {
  const d1 = new Date('2025-01-01');
  const d2 = new Date('2025-01-02');
  const d3 = new Date('2025-01-01');
  const d4 = new Date('2025-02-01');
  const d5 = new Date('2026-01-01');

  it('should compare AFTER and AFTER_OR_EQUAL', () => {
    expect(dateComparison(d2, 'after', d1)).toBe(true);
    expect(dateComparison(d1, 'after', d2)).toBe(false);
    expect(dateComparison(d2, 'after_or_equal', d1)).toBe(true);
    expect(dateComparison(d1, 'after_or_equal', d1)).toBe(true);
    expect(dateComparison(d1, 'after_or_equal', d2)).toBe(false);
  });

  it('should compare BEFORE and BEFORE_OR_EQUAL', () => {
    expect(dateComparison(d1, 'before', d2)).toBe(true);
    expect(dateComparison(d2, 'before', d1)).toBe(false);
    expect(dateComparison(d1, 'before_or_equal', d2)).toBe(true);
    expect(dateComparison(d1, 'before_or_equal', d1)).toBe(true);
    expect(dateComparison(d2, 'before_or_equal', d1)).toBe(false);
  });

  it('should compare EQUALS and NOT_EQUALS', () => {
    expect(dateComparison(d1, 'equals', d3)).toBe(true);
    expect(dateComparison(d1, 'equals', d2)).toBe(false);
    expect(dateComparison(d1, 'not_equals', d2)).toBe(true);
    expect(dateComparison(d1, 'not_equals', d3)).toBe(false);
  });

  it('should compare SAME_DAY', () => {
    expect(dateComparison(d1, 'same_day', d3)).toBe(true);
    expect(dateComparison(d1, 'same_day', d2)).toBe(false);
  });

  it('should compare SAME_MONTH', () => {
    expect(dateComparison(d1, 'same_month', d3)).toBe(true);
    expect(dateComparison(d1, 'same_month', d4)).toBe(false);
  });

  it('should compare SAME_YEAR', () => {
    expect(dateComparison(d1, 'same_year', d3)).toBe(true);
    expect(dateComparison(d1, 'same_year', d5)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => dateComparison(d1, 'invalid_operator', d2)).toThrow(
      'Unknown DateComparison operation: invalid_operator',
    );
  });
});
