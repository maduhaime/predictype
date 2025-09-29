import { describe, it, expect } from 'vitest';

import { mapSize } from './mapSize.js';

describe('mapSize', () => {
  it('should return true for size_equals', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'size_equals', 2)).toBe(true);
  });

  it('should return false for size_equals with wrong size', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'size_equals', 2)).toBe(false);
  });

  it('should return true for size_greater_than', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'size_greater_than', 1)).toBe(true);
  });

  it('should return false for size_greater_than with equal size', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'size_greater_than', 1)).toBe(false);
  });

  it('should return true for size_greater_than_or_equals', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'size_greater_than_or_equals', 2)).toBe(true);
    expect(mapSize(m, 'size_greater_than_or_equals', 1)).toBe(true);
  });

  it('should return false for size_greater_than_or_equals with smaller size', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'size_greater_than_or_equals', 2)).toBe(false);
  });

  it('should return true for size_less_than', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'size_less_than', 2)).toBe(true);
  });

  it('should return false for size_less_than with equal size', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'size_less_than', 1)).toBe(false);
  });

  it('should return true for size_less_than_or_equals', () => {
    const m = new Map([[1, 'a']]);
    expect(mapSize(m, 'size_less_than_or_equals', 1)).toBe(true);
    expect(mapSize(m, 'size_less_than_or_equals', 2)).toBe(true);
  });

  it('should return false for less_than_or_equals with greater size', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapSize(m, 'size_less_than_or_equals', 1)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const m = new Map([[1, 'a']]);
    // @ts-expect-error
    expect(() => mapSize(m, 'unknown', 1)).toThrow('Unknown MapSize operation: unknown');
  });
});
