import { describe, it, expect } from 'vitest';
import { stringSize } from './stringSize';

describe('stringSize', () => {
  it('should return true for length_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'length_equals', 5)).toBe(true);
  });
  it('should return true for length_greater_than', () => {
    const str = 'hello';
    expect(stringSize(str, 'length_greater_than', 3)).toBe(true);
  });
  it('should return true for length_greater_than_or_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'length_greater_than_or_equals', 5)).toBe(true);
  });
  it('should return true for length_less_than', () => {
    const str = 'hello';
    expect(stringSize(str, 'length_less_than', 10)).toBe(true);
  });
  it('should return true for length_less_than_or_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'length_less_than_or_equals', 5)).toBe(true);
  });
});
