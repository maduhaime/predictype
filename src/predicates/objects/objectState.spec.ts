import { describe, it, expect } from 'vitest';
import { objectState } from './objectState.js';

describe('objectState', () => {
  it('should return true for has_array_prop when object has an array property', () => {
    const obj = { a: [1, 2, 3], b: 42 };
    expect(objectState(obj, 'has_array_prop')).toBe(true);
    expect(objectState({ a: 1 }, 'has_array_prop')).toBe(false);
  });

  it('should return true for has_camelcase_keys when object has camelCase key', () => {
    const obj = { camelCaseKey: 1 };
    expect(objectState(obj, 'has_camelcase_keys')).toBe(true);
    expect(objectState({ snake_case: 1 }, 'has_camelcase_keys')).toBe(false);
  });

  it('should return true for has_function_prop when object has a function property', () => {
    const obj = { fn: () => 1 };
    expect(objectState(obj, 'has_function_prop')).toBe(true);
    expect(objectState({ a: 1 }, 'has_function_prop')).toBe(false);
  });

  it('should return true for has_nested_object when object has a nested object', () => {
    const obj = { nested: { x: 1 } };
    expect(objectState(obj, 'has_nested_object')).toBe(true);
    expect(objectState({ a: 1 }, 'has_nested_object')).toBe(false);
  });

  it('should return true for has_no_keys on empty object', () => {
    expect(objectState({}, 'has_no_keys')).toBe(true);
    expect(objectState({ a: 1 }, 'has_no_keys')).toBe(false);
  });

  it('should return true for has_no_undefined when no property is undefined', () => {
    expect(objectState({ a: 1 }, 'has_no_undefined')).toBe(true);
    expect(objectState({ a: undefined }, 'has_no_undefined')).toBe(false);
  });

  it('should return true for has_null_proto when object prototype is null', () => {
    const obj = Object.create(null);
    expect(objectState(obj, 'has_null_proto')).toBe(true);
    expect(objectState({}, 'has_null_proto')).toBe(false);
  });

  it('should return true for has_numeric_keys when object has numeric key', () => {
    const obj = { 123: 'x' };
    expect(objectState(obj, 'has_numeric_keys')).toBe(true);
    expect(objectState({ a: 1 }, 'has_numeric_keys')).toBe(false);
  });

  it('should return true for has_symbol_keys when object has symbol keys', () => {
    const sym = Symbol('s');
    const obj = { [sym]: 1 };
    expect(objectState(obj, 'has_symbol_keys')).toBe(true);
    expect(objectState({}, 'has_symbol_keys')).toBe(false);
  });

  it('should return true for has_symbols when object has symbol keys', () => {
    const sym = Symbol('s');
    const obj = { [sym]: 1 };
    expect(objectState(obj, 'has_symbols')).toBe(true);
    expect(objectState({}, 'has_symbols')).toBe(false);
  });

  it('should return true for inherits_object when prototype is not Object or null', () => {
    class Base {}
    class Derived extends Base {}
    const obj = new Derived();
    expect(objectState(obj, 'inherits_object')).toBe(true);
    expect(objectState({}, 'inherits_object')).toBe(false);
  });

  it('should return true for is_cloneable when object is JSON serializable', () => {
    expect(objectState({ a: 1 }, 'is_cloneable')).toBe(true);
    expect(objectState({ a: () => 1 }, 'is_cloneable')).toBe(false);
  });

  it('should return true for is_empty on empty object', () => {
    const obj = {};
    expect(objectState(obj, 'is_empty')).toBe(true);
  });

  it('should return false for is_empty on non-empty object', () => {
    const obj = { a: 1 };
    expect(objectState(obj, 'is_empty')).toBe(false);
  });

  it('should return true for is_not_empty on non-empty object', () => {
    const obj = { a: 1 };
    expect(objectState(obj, 'is_not_empty')).toBe(true);
  });

  it('should return false for is_not_empty on empty object', () => {
    const obj = {};
    expect(objectState(obj, 'is_not_empty')).toBe(false);
  });

  it('should return true for is_extensible on extensible object', () => {
    expect(objectState({}, 'is_extensible')).toBe(true);
    expect(objectState(Object.preventExtensions({}), 'is_extensible')).toBe(false);
  });

  it('should return true for is_frozen on frozen object', () => {
    const obj = Object.freeze({});
    expect(objectState(obj, 'is_frozen')).toBe(true);
  });

  it('should return false for is_frozen on non-frozen object', () => {
    const obj = {};
    expect(objectState(obj, 'is_frozen')).toBe(false);
  });

  it('should return true for is_homogeneous when all values have same type', () => {
    expect(objectState({ a: 1, b: 2 }, 'is_homogeneous')).toBe(true);
    expect(objectState({ a: 1, b: 'x' }, 'is_homogeneous')).toBe(false);
  });

  it('should return true for is_iterable on iterable object', () => {
    expect(objectState([], 'is_iterable')).toBe(true);
    expect(objectState({}, 'is_iterable')).toBe(false);
  });

  it('should return true for is_json_serializable on serializable object', () => {
    expect(objectState({ a: 1 }, 'is_json_serializable')).toBe(true);
    expect(objectState({ a: undefined, b: 2 }, 'is_json_serializable')).toBe(true);
    expect(objectState({ a: () => 1 }, 'is_json_serializable')).toBe(false);
  });

  it('should return true for is_plain on plain object', () => {
    const obj = {};
    expect(objectState(obj, 'is_plain')).toBe(true);
  });

  it('should return true for is_plain on null prototype', () => {
    const obj = Object.create(null);
    expect(objectState(obj, 'is_plain')).toBe(true);
  });

  it('should return false for is_plain on array', () => {
    const arr: unknown[] = [];
    expect(objectState(arr, 'is_plain')).toBe(false);
  });

  it('should return true for is_sealed on sealed object', () => {
    const obj = Object.seal({});
    expect(objectState(obj, 'is_sealed')).toBe(true);
  });

  it('should return false for is_sealed on non-sealed object', () => {
    const obj = {};
    expect(objectState(obj, 'is_sealed')).toBe(false);
  });

  it('should return true for is_typed_object for Map, Set, Date', () => {
    expect(objectState(new Map(), 'is_typed_object')).toBe(true);
    expect(objectState(new Set(), 'is_typed_object')).toBe(true);
    expect(objectState(new Date(), 'is_typed_object')).toBe(true);
    expect(objectState({}, 'is_typed_object')).toBe(false);
  });

  it('should throw for unknown operation', () => {
    const obj = {};
    // @ts-expect-error
    expect(() => objectState(obj, 'invalid_operator')).toThrow('Unknown ObjectState operation: invalid_operator');
  });
});
