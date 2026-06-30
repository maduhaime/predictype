import { describe, it, expect } from 'vitest';

import { ErrorMessagePatternEnum } from '../../enums/errors.js';
import { errorMessagePattern } from './errorMessagePattern.js';

describe('errorMessagePattern', () => {
  it('should return true for matches', () => {
    expect(errorMessagePattern(new Error('Network timeout'), 'matches', /timeout$/)).toBe(true);
  });

  it('should return true for not_matches', () => {
    expect(errorMessagePattern(new Error('Network timeout'), 'not_matches', /syntax/i)).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(errorMessagePattern(new Error('Network timeout'), ErrorMessagePatternEnum.MATCHES, /^Network/)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => errorMessagePattern(new Error('Network timeout'), 'invalid_operator', /timeout/)).toThrow(
      'Unknown ErrorMessagePattern operation: invalid_operator',
    );
  });
});
