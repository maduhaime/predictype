import { describe, it, expect } from 'vitest';
import { stringSize } from './stringSize.js';

describe('stringSize', () => {
  it('should return true for size_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'size_equals', 5)).toBe(true);
  });

  it('should return true for size_greater_than', () => {
    const str = 'hello';
    expect(stringSize(str, 'size_greater_than', 3)).toBe(true);
  });

  it('should return true for size_greater_than_or_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'size_greater_than_or_equals', 5)).toBe(true);
  });

  it('should return true for size_less_than', () => {
    const str = 'hello';
    expect(stringSize(str, 'size_less_than', 10)).toBe(true);
  });

  it('should return true for size_less_than_or_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'size_less_than_or_equals', 5)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const str = 'hello';
    // @ts-expect-error
    expect(() => stringSize(str, 'invalid_operator', 5)).toThrow('Unknown StringSize operation: invalid_operator');
  });
});
