import { describe, it, expect } from 'vitest';
import { mapEntry } from './mapEntry';

describe('mapEntry', () => {
  it('should return true for has_entry', () => {
    const m = new Map([[1, 'a']]);
    const entry = [1, 'a'] as [number, string];
    expect(mapEntry(m, 'has_entry', entry)).toBe(true);
  });

  it('should return false for has_entry with wrong value', () => {
    const m = new Map([[1, 'a']]);
    const entry = [1, 'b'] as [number, string];
    expect(mapEntry(m, 'has_entry', entry)).toBe(false);
  });

  it('should return true for lacks_entry', () => {
    const m = new Map([[1, 'a']]);
    const entry = [2, 'b'] as [number, string];
    expect(mapEntry(m, 'lacks_entry', entry)).toBe(true);
  });

  it('should return false for lacks_entry with present entry', () => {
    const m = new Map([[1, 'a']]);
    const entry = [1, 'a'] as [number, string];
    expect(mapEntry(m, 'lacks_entry', entry)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const m = new Map([[1, 'a']]);
    // @ts-expect-error
    expect(() => mapEntry(m, 'unknown', [1, 'a'])).toThrow('Unknown MapEntry operation');
  });
});
