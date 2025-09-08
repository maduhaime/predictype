import { describe, it, expect } from 'vitest';
import { objectKeys } from './objectKeys';

describe('objectKeys', () => {
  it('should return true for has_all_keys', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeys(obj, 'has_all_keys', ['foo', 'bar'])).toBe(true);
  });
  it('should return true for has_no_keys on empty object', () => {
    const obj = {};
    expect(objectKeys(obj, 'hasNoKeys')).toBe(true);
  });
  it('should return true for has_symbol_keys', () => {
    const sym = Symbol('baz');
    const obj = { [sym]: 3 };
    expect(objectKeys(obj, 'has_symbol_keys')).toBe(true);
  });
  it('should return true for has_any_key', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeys(obj, 'has_any_key', ['foo', 'baz'])).toBe(true);
  });
  it('should return true for has_exact_keys', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeys(obj, 'hasExactKeys', ['foo', 'bar'])).toBe(true);
  });
  it('should return true for has_only_keys', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeys(obj, 'has_only_keys', ['foo', 'bar'])).toBe(true);
  });
  it('should return true for has_any_property', () => {
    const obj = { foo: 1 };
    expect(objectKeys(obj, 'has_any_property')).toBe(true);
  });
});
