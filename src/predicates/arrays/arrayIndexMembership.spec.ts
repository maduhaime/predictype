import { describe, it, expect } from 'vitest';
import { arrayIndexMembership } from './arrayIndexMembership';

type DummyType = number;

describe('arrayIndexMembership', () => {
  it('should return true when value at index is in target array', () => {
    const arr = [10, 20, 30];
    const idx = 1;
    const values = [10, 20];

    expect(arrayIndexMembership<DummyType>(arr, 'value_at_index_in', idx, values)).toBe(true);
  });

  it('should return false when value at index is not in target array', () => {
    const arr = [10, 20, 30];
    const idx = 2;
    const values = [10, 20];

    expect(arrayIndexMembership<DummyType>(arr, 'value_at_index_in', idx, values)).toBe(false);
  });

  it('should return true for value_at_index_not_in', () => {
    const arr = [10, 20, 30];
    const idx = 2;
    const values = [10, 20];

    expect(arrayIndexMembership<DummyType>(arr, 'value_at_index_not_in', idx, values)).toBe(true);
  });
});
