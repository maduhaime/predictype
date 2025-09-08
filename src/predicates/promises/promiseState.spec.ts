import { describe, it, expect } from 'vitest';
import { promiseState, wrapPromise } from './promiseState';

describe('promiseState', () => {
  it('should return true for is_pending immediately after wrapping', () => {
    const p = Promise.resolve(42);
    const wrapped = wrapPromise(p);
    expect(promiseState(wrapped, 'is_pending')).toBe(true);
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
});
