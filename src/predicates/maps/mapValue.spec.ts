import { describe, it, expect } from 'vitest';
import { mapValue } from './mapValue';

describe('mapValue', () => {
  it('should return true for has_value', () => {
    const m = new Map([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(mapValue(m, 'has_value', 'a')).toBe(true);
  });

  it('should return true for lacks_value', () => {
    const m = new Map([[1, 'a']]);
    expect(mapValue(m, 'lacks_value', 'b')).toBe(true);
  });
});
