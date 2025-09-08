import { describe, it, expect } from 'vitest';
import { bigintComparison } from './bigintComparison';

describe('bigintComparison', () => {
  it('should return true for equals', () => {
    const a = 10n;
    const b = 10n;
    expect(bigintComparison(a, 'equals', b)).toBe(true);
  });

  it('should return false for not_equals', () => {
    const a = 10n;
    const b = 5n;
    expect(bigintComparison(a, 'not_equals', b)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const a = 10n;
    const b = 5n;
    expect(bigintComparison(a, 'greater_than', b)).toBe(true);
  });

  it('should return true for less_than', () => {
    const a = 5n;
    const b = 10n;
    expect(bigintComparison(a, 'less_than', b)).toBe(true);
  });
});
