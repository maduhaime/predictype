import { describe, it, expect } from 'vitest';

import { SymbolComparisonEnum } from '../../enums/symbols.js';
import { symbolComparison } from './symbolComparison.js';

describe('symbolComparison', () => {
  it('should return true for equals', () => {
    const a = Symbol('foo');
    expect(symbolComparison(a, 'equals', a)).toBe(true);
  });

  it('should return true for not_equals', () => {
    const a = Symbol('foo');
    const b = Symbol('foo');
    expect(symbolComparison(a, 'not_equals', b)).toBe(true);
  });

  it('should accept enum operators directly', () => {
    const a = Symbol('foo');
    expect(symbolComparison(a, SymbolComparisonEnum.EQUALS, a)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const a = Symbol('foo');
    const b = Symbol('bar');
    // @ts-expect-error
    expect(() => symbolComparison(a, 'invalid_operator', b)).toThrow();
  });
});
