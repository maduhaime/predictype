import { describe, it, expect } from 'vitest';

import { ErrorMessageEnum } from '../../enums/errors.js';
import { errorMessage } from './errorMessage.js';

describe('errorMessage', () => {
  it('should return true for equals', () => {
    expect(errorMessage(new Error('boom'), 'equals', 'boom')).toBe(true);
  });

  it('should return true for starts_with', () => {
    expect(errorMessage(new Error('Network timeout'), 'starts_with', 'Network')).toBe(true);
  });

  it('should return true for ends_with', () => {
    expect(errorMessage(new Error('Network timeout'), 'ends_with', 'timeout')).toBe(true);
  });

  it('should return true for includes', () => {
    expect(errorMessage(new Error('Network timeout'), 'includes', 'work')).toBe(true);
  });

  it('should return true for excludes', () => {
    expect(errorMessage(new Error('Network timeout'), 'excludes', 'syntax')).toBe(true);
  });

  it('should return false for equals if not equal', () => {
    expect(errorMessage(new Error('boom'), 'equals', 'crash')).toBe(false);
  });

  it('should accept enum operators directly', () => {
    expect(errorMessage(new Error('boom'), ErrorMessageEnum.EQUALS, 'boom')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => errorMessage(new Error('boom'), 'invalid_operator', 'boom')).toThrow(
      'Unknown ErrorMessage operation: invalid_operator',
    );
  });
});
