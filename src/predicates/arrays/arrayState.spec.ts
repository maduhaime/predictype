import { describe, it, expect } from 'vitest';

import { arrayState } from './arrayState.js';

describe('arrayState', () => {
  it('should return true for is_empty', () => {
    const arr: number[] = [];
    expect(arrayState(arr, 'is_empty')).toBe(true);
  });

  it('should return true for is_not_empty', () => {
    const arr: number[] = [1, 2, 3];
    expect(arrayState(arr, 'is_not_empty')).toBe(true);
  });

  it('should return false for is_empty if not empty', () => {
    const arr: number[] = [1];
    expect(arrayState(arr, 'is_empty')).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const arr: number[] = [1];
    // @ts-expect-error
    expect(() => arrayState(arr, 'invalid_operator')).toThrow('Unknown ArrayState operation: invalid_operator');
  });
});
