import { describe, it, expect } from 'vitest';
import { bigintCompare } from './bigintCompare';

describe('bigintCompare', () => {
  it('should return true for equals', () => {
    const a = 10n;
    const b = 10n;
    expect(bigintCompare(a, 'equals', b)).toBe(true);
  });

  it('should return false for not_equals', () => {
    const a = 10n;
    const b = 5n;
    expect(bigintCompare(a, 'not_equals', b)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const a = 10n;
    const b = 5n;
    expect(bigintCompare(a, 'greater_than', b)).toBe(true);
  });

  it('should return true for less_than', () => {
    const a = 5n;
    const b = 10n;
    expect(bigintCompare(a, 'less_than', b)).toBe(true);
  });
});
