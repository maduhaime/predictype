import { describe, it, expect } from 'vitest';
import { setState } from './setState';

describe('setState', () => {
  it('should return true for is_empty', () => {
    const a = new Set();
    expect(setState(a, 'is_empty')).toBe(true);
  });
  it('should return true for is_not_empty', () => {
    const b = new Set([1]);
    expect(setState(b, 'is_not_empty')).toBe(true);
  });
});
