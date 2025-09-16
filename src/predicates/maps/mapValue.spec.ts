import { describe, it, expect } from 'vitest';
import { mapValue } from './mapValue.js';

describe('mapValue', () => {
  it('should return true for has_value', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapValue(m, 'contains_value', 'a')).toBe(true);
  });

  it('should return false for contains_value with missing value', () => {
    const m = new Map([[1, 'a']]);
    expect(mapValue(m, 'contains_value', 'b')).toBe(false);
  });

  it('should return true for lacks_value', () => {
    const m = new Map([[1, 'a']]);
    expect(mapValue(m, 'lacks_value', 'b')).toBe(true);
  });

  it('should return false for lacks_value with present value', () => {
    const m = new Map([[1, 'a']]);
    expect(mapValue(m, 'lacks_value', 'a')).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const m = new Map([[1, 'a']]);
    // @ts-expect-error
    expect(() => mapValue(m, 'unknown', 'a')).toThrow('Unknown MapValue operation');
  });
});
