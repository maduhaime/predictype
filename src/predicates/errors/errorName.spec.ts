import { describe, it, expect } from 'vitest';

import { ErrorNameEnum } from '../../enums/errors.js';
import { errorName } from './errorName.js';

describe('errorName', () => {
  it('should return true for equals', () => {
    expect(errorName(new TypeError('boom'), 'equals', 'TypeError')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(errorName(new TypeError('boom'), 'starts_with', 'Type')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(errorName(new RangeError('boom'), 'ends_with', 'Error')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(errorName(new ReferenceError('boom'), 'includes', 'Reference')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(errorName(new SyntaxError('boom'), 'excludes', 'Range')).toBe(true);
  });

  it('should return false for equals if not equal', () => {
    expect(errorName(new TypeError('boom'), 'equals', 'RangeError')).toBe(false);
  });

  it('should accept enum operators directly', () => {
    expect(errorName(new TypeError('boom'), ErrorNameEnum.EQUALS, 'TypeError')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => errorName(new Error('boom'), 'invalid_operator', 'Error')).toThrow(
      'Unknown ErrorName operation: invalid_operator',
    );
  });
});
