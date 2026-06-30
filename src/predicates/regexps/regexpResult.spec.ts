import { describe, it, expect } from 'vitest';

import { RegExpResultEnum } from '../../enums/regexps.js';
import { regexpResult } from './regexpResult.js';

describe('regexpResult', () => {
  it('should return true for tests', () => {
    expect(regexpResult(/^foo/, 'tests', 'foobar')).toBe(true);
  });

  it('should return true for not_tests', () => {
    expect(regexpResult(/^foo/, 'not_tests', 'barfoo')).toBe(true);
  });

  it('should return true for matches', () => {
    expect(regexpResult(/foo/, 'matches', 'barfoo')).toBe(true);
  });

  it('should return true for not_matches', () => {
    expect(regexpResult(/foo/, 'not_matches', 'bar')).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(regexpResult(/foo/, RegExpResultEnum.MATCHES, 'foo')).toBe(true);
  });

  it('should not mutate lastIndex for global regexes', () => {
    const re = /foo/g;
    re.lastIndex = 2;
    expect(regexpResult(re, 'tests', 'foo')).toBe(true);
    expect(re.lastIndex).toBe(2);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => regexpResult(/foo/, 'invalid_operator', 'foo')).toThrow(
      'Unknown RegExpResult operation: invalid_operator',
    );
  });
});
