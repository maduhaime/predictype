import { describe, it, expect } from 'vitest';

import { stringMembership } from './stringMembership.js';

describe('stringMembership', () => {
  it('should return true for in', () => {
    const arr = ['foo', 'bar'];
    const value1 = 'foo';
    expect(stringMembership(value1, 'in', arr)).toBe(true);
  });

  it('should return true for not_in', () => {
    const arr = ['foo', 'bar'];
    const value2 = 'baz';
    expect(stringMembership(value2, 'not_in', arr)).toBe(true);
  });

  it('throws on unknown operation', () => {
    const arr = ['foo', 'bar'];
    const value = 'foo';
    // @ts-expect-error
    expect(() => stringMembership(value, 'invalid', arr)).toThrow('Unknown StringMembership operation: invalid');
  });
});
