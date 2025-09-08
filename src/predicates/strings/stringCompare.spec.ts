import { describe, it, expect } from 'vitest';
import { stringCompare } from './stringCompare';

describe('stringCompare', () => {
  it('should return true for equals', () => {
    const a = 'foo';
    expect(stringCompare(a, 'equals', 'foo')).toBe(true);
  });
  it('should return true for not_equals', () => {
    const a = 'foo';
    expect(stringCompare(a, 'not_equals', 'bar')).toBe(true);
  });
  it('should return true for greater_than', () => {
    const a = 'foo';
    expect(stringCompare(a, 'greater_than', 'bar')).toBe(true);
  });
  it('should return true for less_than', () => {
    const a = 'bar';
    expect(stringCompare(a, 'less_than', 'foo')).toBe(true);
  });
});
