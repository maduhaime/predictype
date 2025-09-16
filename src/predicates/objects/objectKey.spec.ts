import { describe, it, expect } from 'vitest';
import { objectKey } from './objectKey.js';

describe('objectKey', () => {
  it('should return true for contains_key with string key', () => {
    const obj = { foo: 1 };
    expect(objectKey(obj, 'contains_key', 'foo')).toBe(true);
    expect(objectKey(obj, 'contains_key', 'bar')).toBe(false);
  });

  it('should return true for lacks_key with string key', () => {
    const obj = { foo: 1 };
    expect(objectKey(obj, 'lacks_key', 'bar')).toBe(true);
    expect(objectKey(obj, 'lacks_key', 'foo')).toBe(false);
  });

  it('should return true for contains_key with symbol key', () => {
    const sym = Symbol('baz');
    const obj = { [sym]: 2 };
    expect(objectKey(obj, 'contains_key', sym)).toBe(true);
    expect(objectKey(obj, 'lacks_key', sym)).toBe(false);
  });

  it('should return true for lacks_key with symbol key', () => {
    const sym = Symbol('baz');
    const obj = {};
    expect(objectKey(obj, 'lacks_key', sym)).toBe(true);
    expect(objectKey(obj, 'contains_key', sym)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const obj = { foo: 1 };
    // @ts-expect-error
    expect(() => objectKey(obj, 'invalid_operator', 'foo')).toThrow('Unknown ObjectKey operation: invalid_operator');
  });
});
