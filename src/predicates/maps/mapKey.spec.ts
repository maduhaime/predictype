import { describe, it, expect } from 'vitest';
import { mapKey } from './mapKey';

describe('mapKey', () => {
  it('should return true for has_key', () => {
    const m = new Map([[1, 'a']]);
    expect(mapKey(m, 'has_key', 1)).toBe(true);
  });

  it('should return true for lacks_key', () => {
    const m = new Map([[1, 'a']]);
    expect(mapKey(m, 'lacks_key', 2)).toBe(true);
  });
});
