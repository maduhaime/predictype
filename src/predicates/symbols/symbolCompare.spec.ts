import { describe, it, expect } from 'vitest';
import { symbolCompare } from './symbolCompare';

describe('symbolCompare', () => {
  it('should return true for equals', () => {
    const a = Symbol('foo');
    expect(symbolCompare(a, 'equals', a)).toBe(true);
  });
  it('should return true for not_equals', () => {
    const a = Symbol('foo');
    const b = Symbol('foo');
    expect(symbolCompare(a, 'not_equals', b)).toBe(true);
  });
});
