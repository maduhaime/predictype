import { describe, it, expect } from 'vitest';
import { stringSize } from './stringSize';

describe('stringSize', () => {
  it('should return true for equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'equals', 5)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const str = 'hello';
    expect(stringSize(str, 'greater_than', 3)).toBe(true);
  });

  it('should return true for greater_than_or_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'greater_than_or_equals', 5)).toBe(true);
  });

  it('should return true for less_than', () => {
    const str = 'hello';
    expect(stringSize(str, 'less_than', 10)).toBe(true);
  });

  it('should return true for less_than_or_equals', () => {
    const str = 'hello';
    expect(stringSize(str, 'less_than_or_equals', 5)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const str = 'hello';
    // @ts-expect-error
    expect(() => stringSize(str, 'invalid_operator', 5)).toThrow('Unknown StringSize operation: invalid_operator');
  });
});
