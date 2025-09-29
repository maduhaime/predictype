import { describe, it, expect } from 'vitest';

import { objectKeysCompare } from './objectKeys.js';

describe('objectKeys', () => {
  it('should return true for contains_all_keys', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeysCompare(obj, 'contains_all_keys', ['foo', 'bar'])).toBe(true);
  });

  it('should return true for contains_any_key', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeysCompare(obj, 'contains_any_key', ['foo', 'baz'])).toBe(true);
  });

  it('should return true for equals_keys', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeysCompare(obj, 'equals_keys', ['foo', 'bar'])).toBe(true);
  });

  it('should return true for lacks_all_keys on empty object', () => {
    const obj = {};
    expect(objectKeysCompare(obj, 'lacks_all_keys', ['foo'])).toBe(true);
  });

  it('should return true for contains_only_keys', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeysCompare(obj, 'contains_only_keys', ['foo', 'bar'])).toBe(true);
  });

  it('should return true for contains_symbol_keys', () => {
    const sym = Symbol('baz');
    const obj = { [sym]: 3 };
    expect(objectKeysCompare(obj, 'contains_symbol_keys', [sym])).toBe(true);
  });

  // No direct equivalent for has_any_property in ObjectKeysEnum, skipping.

  // No direct equivalent for matches_keys in ObjectKeysEnum, skipping.

  it('should return true for only_keys', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeysCompare(obj, 'only_keys', ['foo', 'bar'])).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const obj = { foo: 1 };
    // @ts-expect-error
    expect(() => objectKeysCompare(obj, 'invalid_operator', ['foo'])).toThrow(
      'Unknown ObjectKeys operation: invalid_operator',
    );
  });
});
