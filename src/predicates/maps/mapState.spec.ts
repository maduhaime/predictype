import { describe, it, expect } from 'vitest';
import { mapState } from './mapState';

describe('mapState', () => {
  it('should return true for is_empty', () => {
    const m = new Map();
    expect(mapState(m, 'is_empty')).toBe(true);
  });

  it('should return true for is_not_empty', () => {
    const m = new Map([[1, 'a']]);
    expect(mapState(m, 'is_not_empty')).toBe(true);
  });
});
