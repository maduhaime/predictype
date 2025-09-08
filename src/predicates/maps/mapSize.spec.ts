import { describe, it, expect } from 'vitest';
import { mapSize } from './mapSize';

describe('mapSize', () => {
  it('should return true for size_equals', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'size_equals', 2)).toBe(true);
  });

  it('should return true for size_greater_than', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'size_greater_than', 1)).toBe(true);
  });

  it('should return true for size_less_than', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'size_less_than', 2)).toBe(true);
  });
});
