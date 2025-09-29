import { describe, it, expect } from 'vitest';

import { objectKeysState } from './objectKeysState.js';

describe('objectKeysState', () => {
  it('should return true for HAS_SYMBOL_KEYS if object has symbol keys', () => {
    const sym = Symbol('s');
    const obj = { [sym]: 1 };
    expect(objectKeysState(obj, 'has_symbol_keys')).toBe(true);
    expect(objectKeysState({}, 'has_symbol_keys')).toBe(false);
  });

  it('should return true for HAS_NUMERIC_KEYS if object has numeric string keys', () => {
    const obj = { '123': 1, 'foo': 2 };
    expect(objectKeysState(obj, 'has_numeric_keys')).toBe(true);
    expect(objectKeysState({ foo: 1 }, 'has_numeric_keys')).toBe(false);
  });

  it('should return true for HAS_CAMELCASE_KEYS if object has camelCase keys', () => {
    const obj = { camelCase: 1, foo: 2 };
    expect(objectKeysState(obj, 'has_camelcase_keys')).toBe(true);
    expect(objectKeysState({ foo: 1 }, 'has_camelcase_keys')).toBe(false);
  });

  it('should return true for HAS_HOMOGENEOUS_KEYS if all keys are of same type', () => {
    const obj = { foo: 1, bar: 2 };
    expect(objectKeysState(obj, 'has_homogeneous_keys')).toBe(true);
    const sym = Symbol('s');
    const obj2 = { foo: 1, [sym]: 2 };
    expect(objectKeysState(obj2, 'has_homogeneous_keys')).toBe(false);
    expect(objectKeysState({}, 'has_homogeneous_keys')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const obj = { foo: 1 };
    // @ts-expect-error
    expect(() => objectKeysState(obj, 'invalid_operator')).toThrow(
      'Unknown ObjectKeysState operation: invalid_operator',
    );
  });
});
