import { describe, it, expect } from 'vitest';
import { arrayIndexMembership } from './arrayIndexMembership.js';

type DummyType = number;

describe('arrayIndexMembership', () => {
  it('should return true when value at index is in target array', () => {
    const arr = [10, 20, 30];
    const idx = 1;
    const values = [10, 20];
    expect(arrayIndexMembership<DummyType>(arr, 'at_index_in', idx, values)).toBe(true);
  });

  it('should return false when value at index is not in target array', () => {
    const arr = [10, 20, 30];
    const idx = 2;
    const values = [10, 20];
    expect(arrayIndexMembership<DummyType>(arr, 'at_index_in', idx, values)).toBe(false);
  });

  it('should return true for at_index_not_in', () => {
    const arr = [10, 20, 30];
    const idx = 2;
    const values = [10, 20];
    expect(arrayIndexMembership<DummyType>(arr, 'at_index_not_in', idx, values)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const arr = [10, 20, 30];
    const idx = 0;
    const values = [10, 20];
    // @ts-expect-error
    expect(() => arrayIndexMembership(arr, 'invalid_operator', idx, values)).toThrow(
      'Unknown ArrayIndexMembership operation: invalid_operator'
    );
  });
});
