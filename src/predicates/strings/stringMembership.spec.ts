import { describe, it, expect } from 'vitest';
import { stringMembership } from './stringMembership.js';

describe('stringMembership', () => {
  it('should return true for is_one_of', () => {
    const arr = ['foo', 'bar'];
    const value1 = 'foo';
    expect(stringMembership(value1, 'is_one_of', arr)).toBe(true);
  });

  it('should return true for is_not_one_of', () => {
    const arr = ['foo', 'bar'];
    const value2 = 'baz';
    expect(stringMembership(value2, 'is_not_one_of', arr)).toBe(true);
  });

  it('throws on unknown operation', () => {
    const arr = ['foo', 'bar'];
    const value = 'foo';
    // @ts-expect-error
    expect(() => stringMembership(value, 'invalid', arr)).toThrow('Unknown StringMembership operation: invalid');
  });
});
