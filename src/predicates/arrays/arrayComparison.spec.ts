import { describe, it, expect } from 'vitest';

import { arrayComparison } from './arrayComparison.js';

type DummyType = number;

describe('arrayComparison', () => {
  it('should return true for equal arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(arrayComparison<DummyType>(arr1, 'equals', arr2)).toBe(true);
  });

  it('should return false for different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];

    expect(arrayComparison<DummyType>(arr1, 'equals', arr2)).toBe(false);
  });

  it('should return true for not_equals with different arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];

    expect(arrayComparison<DummyType>(arr1, 'not_equals', arr2)).toBe(true);
  });

  it('should return true for set_equals with same unique elements (ignores order and duplicates)', () => {
    const arr1 = [1, 2, 3, 2];
    const arr2 = [3, 1, 2, 1];
    expect(arrayComparison(arr1, 'set_equals', arr2)).toBe(true);
  });

  it('should return false for set_equals with different unique elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(arrayComparison(arr1, 'set_equals', arr2)).toBe(false);
  });

  it('should return false for set_equals with different set sizes', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    expect(arrayComparison(arr1, 'set_equals', arr2)).toBe(false);
  });

  it('should return false for set_not_equals with same unique elements', () => {
    const arr1 = [1, 2, 3, 2];
    const arr2 = [3, 1, 2, 1];
    expect(arrayComparison(arr1, 'set_not_equals', arr2)).toBe(false);
  });

  it('should return true for set_not_equals with different unique elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(arrayComparison(arr1, 'set_not_equals', arr2)).toBe(true);
  });

  it('should return true for set_not_equals with different set sizes', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    expect(arrayComparison(arr1, 'set_not_equals', arr2)).toBe(true);
  });

  it('should return true for same_members with same elements in different order', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 1, 2];
    expect(arrayComparison(arr1, 'same_members', arr2)).toBe(true);
  });

  it('should return false for same_members with different elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(arrayComparison(arr1, 'same_members', arr2)).toBe(false);
  });

  it('should return false for same_members with different counts', () => {
    const arr1 = [1, 2, 2];
    const arr2 = [2, 1, 1];
    expect(arrayComparison(arr1, 'same_members', arr2)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    // @ts-expect-error
    expect(() => arrayComparison(arr1, 'invalid_operator', arr2)).toThrow(
      'Unknown ArrayComparison operation: invalid_operator',
    );
  });
});
