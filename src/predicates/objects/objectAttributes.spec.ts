import { describe, it, expect } from 'vitest';
import { objectAttributes } from './objectAttributes.js';

describe('objectAttributes', () => {
  it('should return true for is_writable', () => {
    const obj = { foo: 42 };
    expect(objectAttributes(obj, 'is_writable', 'foo')).toBe(true);
  });

  it('should return true for is_enumerable', () => {
    const obj = { foo: 1 };
    expect(objectAttributes(obj, 'is_enumerable', 'foo')).toBe(true);
  });

  it('should return true for is_configurable', () => {
    const obj = { foo: 1 };
    expect(objectAttributes(obj, 'is_configurable', 'foo')).toBe(true);
  });

  it('should return true for is_accessor on accessor property', () => {
    const obj = {};
    Object.defineProperty(obj, 'bar', { get: () => 1 });
    expect(objectAttributes(obj, 'is_accessor', 'bar')).toBe(true);
  });

  it('should return false for is_accessor on data property', () => {
    const obj = { foo: 1 };
    expect(objectAttributes(obj, 'is_accessor', 'foo')).toBe(false);
  });

  it('should return true for is_data_property', () => {
    const obj = { foo: 1 };
    expect(objectAttributes(obj, 'is_data_property', 'foo')).toBe(true);
  });

  it('should return false for is_writable on non-writable', () => {
    const obj = {};
    const sym = Symbol('bar');
    Object.defineProperty(obj, sym, { value: 1, writable: false });
    expect(objectAttributes(obj, 'is_writable', sym)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const obj = { foo: 1 };
    // @ts-expect-error
    expect(() => objectAttributes(obj, 'invalid_operator', 'foo')).toThrow(
      'Unknown ObjectAttributes operation: invalid_operator'
    );
  });
});
