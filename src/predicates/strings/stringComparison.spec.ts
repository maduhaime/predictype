import { describe, it, expect } from 'vitest';
import { stringComparison } from './stringComparison.js';

describe('stringComparison', () => {
  it('should return true for equals', () => {
    const a = 'foo';
    expect(stringComparison(a, 'equals', 'foo')).toBe(true);
  });

  it('should return true for not_equals', () => {
    const a = 'foo';
    expect(stringComparison(a, 'not_equals', 'bar')).toBe(true);
  });

  it('should return true for greater_than', () => {
    const a = 'foo';
    expect(stringComparison(a, 'greater_than', 'bar')).toBe(true);
  });

  it('should return true for less_than', () => {
    const a = 'bar';
    expect(stringComparison(a, 'less_than', 'foo')).toBe(true);
  });

  it('throws on unknown operation', () => {
    const a = 'foo';
    // @ts-expect-error
    expect(() => stringComparison(a, 'invalid_operator', 'bar')).toThrow(
      'Unknown StringComparison operation: invalid_operator'
    );
  });
});
