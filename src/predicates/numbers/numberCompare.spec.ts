import { describe, it, expect } from 'vitest';
import { numberCompare } from './numberCompare';

describe('numberCompare', () => {
  it('should return true for equals', () => {
    const a = 5;
    expect(numberCompare(a, 'equals', 5)).toBe(true);
  });
  it('should return true for not_equals', () => {
    const a = 5;
    expect(numberCompare(a, 'not_equals', 6)).toBe(true);
  });
  it('should return true for greater_than', () => {
    const a = 10;
    expect(numberCompare(a, 'greater_than', 5)).toBe(true);
  });
  it('should return true for greater_or_equal', () => {
    const a = 10;
    expect(numberCompare(a, 'greater_or_equal', 10)).toBe(true);
  });
  it('should return true for less_than', () => {
    const a = 3;
    expect(numberCompare(a, 'less_than', 5)).toBe(true);
  });
  it('should return true for less_or_equal', () => {
    const a = 3;
    expect(numberCompare(a, 'less_or_equal', 3)).toBe(true);
  });
});
