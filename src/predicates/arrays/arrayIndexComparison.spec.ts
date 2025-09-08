import { describe, it, expect } from 'vitest';
import { arrayIndexComparison } from './arrayIndexComparison';

type DummyType = number;

describe('arrayIndexComparison', () => {
  it('should return true when value at index equals target', () => {
    const arr = [10, 20, 30];
    const idx = 1;
    const val = 20;

    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_equals', idx, val)).toBe(true);
  });

  it('should return false when value at index does not equal target', () => {
    const arr = [10, 20, 30];
    const idx = 2;
    const val = 25;

    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_equals', idx, val)).toBe(false);
  });

  it('should return true for greater_than', () => {
    const arr = [10, 20, 30];
    const idx = 2;
    const val = 25;

    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_greater_than', idx, val)).toBe(true);
  });

  it('should return true for less_than', () => {
    const arr = [10, 20, 30];
    const idx = 0;
    const val = 15;

    expect(arrayIndexComparison<DummyType>(arr, 'value_at_index_less_than', idx, val)).toBe(true);
  });
});
