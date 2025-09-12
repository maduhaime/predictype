import { describe, it, expect } from 'vitest';
import { objectKey } from './objectKey';

describe('objectKey', () => {
  it('should return true for has_key', () => {
    const obj = { foo: 1 };
    expect(objectKey(obj, 'has_key', 'foo')).toBe(true);
  });

  it('should return true for lacks_key', () => {
    const obj = { foo: 1 };
    expect(objectKey(obj, 'lacks_key', 'bar')).toBe(true);
  });

  it('should return true for has_key with symbol', () => {
    const obj = {};
    const sym = Symbol('baz');
    Object.defineProperty(obj, sym, { value: 2 });
    expect(objectKey(obj, 'has_key', sym)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const obj = { foo: 1 };
    // @ts-expect-error
    expect(() => objectKey(obj, 'invalid_operator', 'foo')).toThrow('Unknown ObjectKey operation: invalid_operator');
  });
});
