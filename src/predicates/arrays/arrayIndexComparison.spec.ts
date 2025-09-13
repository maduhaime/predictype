import { describe, it, expect } from 'vitest';
import { arrayIndexComparison } from './arrayIndexComparison.js';

type DummyType = number;

describe('arrayIndexComparison', () => {
  it('should return true for value_at_index_equals', () => {
    const arr = [10, 20, 30];
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_equals', 1, 20)).toBe(true);
  });

  it('should return false for value_at_index_equals', () => {
    const arr = [10, 20, 30];
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_equals', 2, 25)).toBe(false);
  });

  it('should return true for value_at_index_not_equals', () => {
    const arr = [10, 20, 30];
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_not_equals', 2, 25)).toBe(true);
  });

  it('should return true for value_at_index_greater_than', () => {
    const arr = [10, 20, 30];
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_greater_than', 2, 25)).toBe(true);
  });

  it('should return true for value_at_index_greater_than_or_equals', () => {
    const arr = [10, 20, 30];
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_greater_than_or_equals', 2, 30)).toBe(true);
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_greater_than_or_equals', 2, 25)).toBe(true);
  });

  it('should return true for value_at_index_less_than', () => {
    const arr = [10, 20, 30];
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_less_than', 0, 15)).toBe(true);
  });

  it('should return true for value_at_index_less_than_or_equals', () => {
    const arr = [10, 20, 30];
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_less_than_or_equals', 0, 10)).toBe(true);
    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_less_than_or_equals', 0, 15)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const arr = [10, 20, 30];
    // @ts-expect-error
    expect(() => arrayIndexComparison(arr, 'invalid_operator', 0, 10)).toThrow(
      'Unknown ArrayIndex operation: invalid_operator'
    );
  });
});
