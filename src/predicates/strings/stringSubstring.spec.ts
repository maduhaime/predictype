import { describe, it, expect } from 'vitest';
import { stringSubstring } from './stringSubstring';

describe('stringSubstring', () => {
  it('should return true for includes', () => {
    const str = 'foobar';
    expect(stringSubstring(str, 'includes', 'foo')).toBe(true);
  });
  it('should return true for excludes', () => {
    const str = 'foobar';
    expect(stringSubstring(str, 'excludes', 'baz')).toBe(true);
  });
  it('should return true for starts_with', () => {
    const str = 'foobar';
    expect(stringSubstring(str, 'starts_with', 'foo')).toBe(true);
  });
  it('should return true for ends_with', () => {
    const str = 'foobar';
    expect(stringSubstring(str, 'ends_with', 'bar')).toBe(true);
  });
});
