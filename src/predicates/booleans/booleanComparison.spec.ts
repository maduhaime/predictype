import { describe, it, expect } from 'vitest';

import { booleanComparison } from './booleanComparison.js';
import { BooleanComparisonEnum } from '../../enums/booleans.js';

describe('booleanComparison', () => {
  it('should return true for equals when value and target are true', () => {
    expect(booleanComparison(true, BooleanComparisonEnum.EQUALS, true)).toBe(true);
  });

  it('should return true for equals when value and target are false', () => {
    expect(booleanComparison(false, BooleanComparisonEnum.EQUALS, false)).toBe(true);
  });

  it('should return false for equals when value and target differ', () => {
    expect(booleanComparison(true, BooleanComparisonEnum.EQUALS, false)).toBe(false);
    expect(booleanComparison(false, BooleanComparisonEnum.EQUALS, true)).toBe(false);
  });

  it('should return true for not_equals when value and target differ', () => {
    expect(booleanComparison(true, BooleanComparisonEnum.NOT_EQUALS, false)).toBe(true);
    expect(booleanComparison(false, BooleanComparisonEnum.NOT_EQUALS, true)).toBe(true);
  });

  it('should return false for not_equals when value and target are the same', () => {
    expect(booleanComparison(true, BooleanComparisonEnum.NOT_EQUALS, true)).toBe(false);
    expect(booleanComparison(false, BooleanComparisonEnum.NOT_EQUALS, false)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    // @ts-expect-error
    expect(() => booleanComparison(true, 'unknown', true)).toThrow('Unknown BooleanComparison operation: unknown');
  });
});
