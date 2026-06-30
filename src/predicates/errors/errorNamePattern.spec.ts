import { describe, it, expect } from 'vitest';

import { ErrorNamePatternEnum } from '../../enums/errors.js';
import { errorNamePattern } from './errorNamePattern.js';

describe('errorNamePattern', () => {
  it('should return true for matches', () => {
    expect(errorNamePattern(new TypeError('boom'), 'matches', /Type/)).toBe(true);
  });

  it('should return true for not_matches', () => {
    expect(errorNamePattern(new TypeError('boom'), 'not_matches', /Range/)).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(errorNamePattern(new TypeError('boom'), ErrorNamePatternEnum.MATCHES, /Error$/)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => errorNamePattern(new TypeError('boom'), 'invalid_operator', /Type/)).toThrow(
      'Unknown ErrorNamePattern operation: invalid_operator',
    );
  });
});
