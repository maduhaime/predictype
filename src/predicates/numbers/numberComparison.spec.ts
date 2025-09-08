import { describe, it, expect } from 'vitest';
import { numberComparison } from './numberComparison';

describe('numberComparison', () => {
  it('should return true for equals', () => {
    const a = 5;
    expect(numberComparison(a, 'equals', 5)).toBe(true);
  });
  it('should return true for not_equals', () => {
    const a = 5;
    expect(numberComparison(a, 'not_equals', 6)).toBe(true);
  });
  it('should return true for greater_than', () => {
    const a = 10;
    expect(numberComparison(a, 'greater_than', 5)).toBe(true);
  });
  it('should return true for greater_or_equal', () => {
    const a = 10;
    expect(numberComparison(a, 'greater_or_equal', 10)).toBe(true);
  });
  it('should return true for less_than', () => {
    const a = 3;
    expect(numberComparison(a, 'less_than', 5)).toBe(true);
  });
  it('should return true for less_or_equal', () => {
    const a = 3;
    expect(numberComparison(a, 'less_or_equal', 3)).toBe(true);
  });
});
