import { describe, it, expect } from 'vitest';
import { symbolState } from './symbolState';

describe('symbolState', () => {
  it('should return true for is_global', () => {
    const globalSym = Symbol.for('foo');
    expect(symbolState(globalSym, 'is_global')).toBe(true);
  });

  it('should return true for is_local', () => {
    const localSym = Symbol('bar');
    expect(symbolState(localSym, 'is_local')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const sym = Symbol('foo');
    // @ts-expect-error
    expect(() => symbolState(sym, 'invalid_operator')).toThrow();
  });
});
