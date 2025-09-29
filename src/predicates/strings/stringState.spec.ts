import { describe, it, expect } from 'vitest';

import { stringState } from './stringState.js';

describe('stringState', () => {
  it('should return true for is_empty', () => {
    const str = '';
    expect(stringState(str, 'is_empty')).toBe(true);
  });

  it('should return true for is_not_empty', () => {
    const str = 'foo';
    expect(stringState(str, 'is_not_empty')).toBe(true);
  });

  it('should return true for is_blank', () => {
    const str2 = '   ';
    expect(stringState(str2, 'is_blank')).toBe(true);
  });

  it('should return true for is_not_blank', () => {
    const str = 'foo';
    expect(stringState(str, 'is_not_blank')).toBe(true);
  });

  it('throws on unknown operation', () => {
    const str = 'foo';
    // @ts-expect-error
    expect(() => stringState(str, 'invalid')).toThrow('Unknown StringState operation: invalid');
  });
});
