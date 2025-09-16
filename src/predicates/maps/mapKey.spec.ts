import { describe, it, expect } from 'vitest';
import { mapKey } from './mapKey.js';

describe('mapKey', () => {
  it('should return true for contains_key', () => {
    const m = new Map([[1, 'a']]);
    expect(mapKey(m, 'contains_key', 1)).toBe(true);
  });

  it('should return false for contains_key with missing key', () => {
    const m = new Map([[1, 'a']]);
    expect(mapKey(m, 'contains_key', 2)).toBe(false);
  });

  it('should return true for lacks_key', () => {
    const m = new Map([[1, 'a']]);
    expect(mapKey(m, 'lacks_key', 2)).toBe(true);
  });

  it('should return false for lacks_key with present key', () => {
    const m = new Map([[1, 'a']]);
    expect(mapKey(m, 'lacks_key', 1)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const m = new Map([[1, 'a']]);
    // @ts-expect-error
    expect(() => mapKey(m, 'unknown', 1)).toThrow('Unknown MapKey operation');
  });
});
