import { describe, it, expect } from 'vitest';
import { dateState } from './dateState';

describe('dateState', () => {
  it('should return true for is_valid', () => {
    const validDate = new Date('2025-01-01');
    expect(dateState(validDate, 'is_valid')).toBe(true);
  });

  it('should return true for is_invalid', () => {
    const invalidDate = new Date('invalid');
    expect(dateState(invalidDate, 'is_invalid')).toBe(true);
  });

  it('should return false for is_valid if date is invalid', () => {
    const invalidDate = new Date('invalid');
    expect(dateState(invalidDate, 'is_valid')).toBe(false);
  });
});
