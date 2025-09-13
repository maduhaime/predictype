import { describe, it, expect } from 'vitest';
import { promiseState, wrapPromise } from './promiseState.js';

describe('promiseState', () => {
  it('should return true for is_pending immediately after wrapping', () => {
    const p = Promise.resolve(42);
    const wrapped = wrapPromise(p);
    expect(promiseState(wrapped, 'is_pending')).toBe(true);
  });

  it('should return true for is_fulfilled after resolution', async () => {
    const p = Promise.resolve(42);
    const wrapped = wrapPromise(p);
    await wrapped.promise;
    expect(promiseState(wrapped, 'is_fulfilled')).toBe(true);
  });

  it('should return true for is_rejected after rejection', async () => {
    const p = Promise.reject(new Error('fail'));
    const wrapped = wrapPromise(p);
    try {
      await wrapped.promise;
    } catch {}
    expect(promiseState(wrapped, 'is_rejected')).toBe(true);
  });

  it('should return false for is_fulfilled immediately after wrapping', () => {
    const p = Promise.resolve(42);
    const wrapped = wrapPromise(p);
    expect(promiseState(wrapped, 'is_fulfilled')).toBe(false);
  });

  it('should return false for is_rejected immediately after wrapping', () => {
    const p = Promise.resolve(42);
    const wrapped = wrapPromise(p);
    expect(promiseState(wrapped, 'is_rejected')).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const p = Promise.resolve(42);
    const wrapped = wrapPromise(p);
    // @ts-expect-error
    expect(() => promiseState(wrapped, 'unknown')).toThrow('Unknown PromiseState operation: unknown');
  });
});
