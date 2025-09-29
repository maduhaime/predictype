import { describe, it, expect } from 'vitest';

import { objectProperty } from './objectProperty.js';

describe('objectProperty', () => {
  it('should return true for contains_property (inherited or own)', () => {
    const obj = { foo: 1 };
    expect(objectProperty(obj, 'contains_property', 'foo')).toBe(true);
    expect(objectProperty(obj, 'contains_property', 'toString')).toBe(true); // inherited
    expect(objectProperty(obj, 'contains_property', 'bar')).toBe(false);
  });

  it('should return true for lacks_property', () => {
    const obj = { foo: 1 };
    expect(objectProperty(obj, 'lacks_property', 'bar')).toBe(true);
    expect(objectProperty(obj, 'lacks_property', 'foo')).toBe(false);
  });

  it('should return true for contains_own_property', () => {
    const obj = { foo: 1 };
    expect(objectProperty(obj, 'contains_own_property', 'foo')).toBe(true);
    expect(objectProperty(obj, 'contains_own_property', 'toString')).toBe(false);
  });

  it('should return true for lacks_own_property', () => {
    const obj = { foo: 1 };
    expect(objectProperty(obj, 'lacks_own_property', 'bar')).toBe(true);
    expect(objectProperty(obj, 'lacks_own_property', 'toString')).toBe(true);
    expect(objectProperty(obj, 'lacks_own_property', 'foo')).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const obj = { foo: 1 };
    // @ts-expect-error
    expect(() => objectProperty(obj, 'invalid_operator', 'foo')).toThrow(
      'Unknown ObjectProperty operation: invalid_operator',
    );
  });
});
