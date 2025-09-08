import { describe, it, expect } from 'vitest';
import { mapSize } from './mapSize';

describe('mapSize', () => {
  it('should return true for equals', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'equals', 2)).toBe(true);
  });

  it('should return true for greater_than', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'greater_than', 1)).toBe(true);
  });

  it('should return true for less_than', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'less_than', 2)).toBe(true);
  });
});
