import { describe, it, expect } from 'vitest';
import { promiseType } from './promiseType.js';

describe('promiseType', () => {
  it('should return true for is_promise', () => {
    const p = Promise.resolve(42);
    expect(promiseType(p, 'is_promise')).toBe(true);
  });

  it('should return false for is_promise with non-promise', () => {
    const n = 42;
    expect(promiseType(n, 'is_promise')).toBe(false);
  });

  it('should return true for is_async_function', () => {
    async function foo() {}
    expect(promiseType(foo, 'is_async_function')).toBe(true);
  });

  it('should return false for is_async_function with non-async', () => {
    function bar() {}
    expect(promiseType(bar, 'is_async_function')).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const p = Promise.resolve(42);
    // @ts-expect-error
    expect(() => promiseType(p, 'unknown')).toThrow('Unknown PromiseType operation');
  });
});
