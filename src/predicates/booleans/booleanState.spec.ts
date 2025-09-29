import { describe, it, expect } from 'vitest';

import { booleanState } from './booleanState.js';

describe('booleanState', () => {
  it('should return true for is_true', () => {
    const value = true;
    expect(booleanState(value, 'is_true')).toBe(true);
  });

  it('should return true for is_false', () => {
    const value = false;
    expect(booleanState(value, 'is_false')).toBe(true);
  });

  it('should return false for is_true if value is false', () => {
    const value = false;
    expect(booleanState(value, 'is_true')).toBe(false);
  });

  it('should return false for is_false if value is true', () => {
    const value = true;
    expect(booleanState(value, 'is_false')).toBe(false);
  });

  it('should throw for unknown operation', () => {
    // @ts-expect-error
    expect(() => booleanState(true, 'unknown')).toThrow('Unknown BooleanState operation: unknown');
  });
});
