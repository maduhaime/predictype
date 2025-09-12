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

  it('should throw for unknown operator', () => {
    const str = 'foobar';
    // @ts-expect-error
    expect(() => stringSubstring(str, 'invalid_operator', 'foo')).toThrow(
      'Unknown StringSubstring operation: invalid_operator'
    );
  });
});
