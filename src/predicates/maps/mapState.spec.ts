import { describe, it, expect } from 'vitest';

import { mapState } from './mapState.js';

describe('mapState', () => {
  it('should return true for is_empty', () => {
    const m = new Map();
    expect(mapState(m, 'is_empty')).toBe(true);
  });

  it('should return false for is_empty with non-empty map', () => {
    const m = new Map([[1, 'a']]);
    expect(mapState(m, 'is_empty')).toBe(false);
  });

  it('should return true for is_not_empty', () => {
    const m = new Map([[1, 'a']]);
    expect(mapState(m, 'is_not_empty')).toBe(true);
  });

  it('should return false for is_not_empty with empty map', () => {
    const m = new Map();
    expect(mapState(m, 'is_not_empty')).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const m = new Map();
    // @ts-expect-error
    expect(() => mapState(m, 'unknown')).toThrow('Unknown MapState operation');
  });
});
