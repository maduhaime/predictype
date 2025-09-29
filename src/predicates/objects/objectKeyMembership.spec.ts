import { describe, it, expect } from 'vitest';

import { objectKeyMembership } from './objectKeyMembership.js';

describe('objectKeyMembership', () => {
  it('should return true for key_in when at least one key matches', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeyMembership(obj, 'in', ['foo', 'baz'])).toBe(true);
    expect(objectKeyMembership(obj, 'in', ['baz'])).toBe(false);
  });

  it('should return true for not_in when no keys match', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeyMembership(obj, 'not_in', ['baz'])).toBe(true);
    expect(objectKeyMembership(obj, 'not_in', ['foo', 'baz'])).toBe(false);
  });

  it('should work with symbol keys', () => {
    const sym = Symbol('s');
    const obj = { [sym]: 1 };
    expect(objectKeyMembership(obj, 'in', [sym])).toBe(true);
    expect(objectKeyMembership(obj, 'not_in', [sym])).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const obj = { foo: 1 };
    // @ts-expect-error
    expect(() => objectKeyMembership(obj, 'invalid_operator', ['foo'])).toThrow(
      'Unknown ObjectKeyMembership operation: invalid_operator',
    );
  });
});
