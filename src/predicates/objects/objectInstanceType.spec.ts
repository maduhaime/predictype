import { describe, it, expect } from 'vitest';
import { objectInstanceType } from './objectInstanceType.js';

describe('objectInstanceType', () => {
  it('should return true for instance_of_class with a class', () => {
    class Foo {}
    expect(objectInstanceType(Foo, 'instance_of_class')).toBe(true);
    function Bar() {}
    expect(objectInstanceType(Bar, 'instance_of_class')).toBe(false);
  });

  it('should return true for instance_of_constructor with a function or class', () => {
    class Foo {}
    function Bar() {}
    expect(objectInstanceType(Foo, 'instance_of_constructor')).toBe(true);
    expect(objectInstanceType(Bar, 'instance_of_constructor')).toBe(true);
    expect(objectInstanceType({}, 'instance_of_constructor')).toBe(false);
  });

  it('should return true for instance_of_function with a function or class', () => {
    class Foo {}
    function Bar() {}
    expect(objectInstanceType(Foo, 'instance_of_function')).toBe(true);
    expect(objectInstanceType(Bar, 'instance_of_function')).toBe(true);
    expect(objectInstanceType({}, 'instance_of_function')).toBe(false);
  });

  it('should return true for instance_of_object with an object', () => {
    expect(objectInstanceType({}, 'instance_of_object')).toBe(true);
    expect(objectInstanceType([], 'instance_of_object')).toBe(true);
    expect(objectInstanceType(null, 'instance_of_object')).toBe(false);
    expect(objectInstanceType(42, 'instance_of_object')).toBe(false);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => objectInstanceType({}, 'invalid_operator')).toThrow(
      'Unknown ObjectInstanceType operation: invalid_operator'
    );
  });
});
