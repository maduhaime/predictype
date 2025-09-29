import { describe, it, expect } from 'vitest';

import { stringPattern } from './stringPattern.js';

describe('stringPattern', () => {
  it('should return true for matches', () => {
    const str = 'foobar';
    const pattern1 = /^foo/;
    expect(stringPattern(str, 'matches', pattern1)).toBe(true);
  });

  it('should return true for not_matches', () => {
    const str = 'foobar';
    const pattern2 = /baz/;
    expect(stringPattern(str, 'not_matches', pattern2)).toBe(true);
  });

  it('throws on unknown operation', () => {
    const str = 'foobar';
    const pattern = /^foo/;
    // @ts-expect-error
    expect(() => stringPattern(str, 'invalid', pattern)).toThrow('Unknown StringPattern operation: invalid');
  });
});
