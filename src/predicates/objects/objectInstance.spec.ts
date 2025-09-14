import { describe, it, expect } from 'vitest';
import { objectInstance } from './objectInstance.js';

describe('objectInstance', () => {
  it('should return true for is_prototype_of', () => {
    class Foo {}
    const proto = Foo.prototype;
    const foo = new Foo();
    expect(objectInstance(proto, 'is_prototype_of', foo)).toBe(true);
    // Use a function as dummy for type compatibility
    function Bar() {}
    expect(objectInstance({}, 'is_prototype_of', Bar)).toBe(false);
    expect(objectInstance(proto, 'is_prototype_of', Bar)).toBe(false);
    expect(objectInstance(proto, 'is_prototype_of', null as any)).toBe(false);
    expect(objectInstance(null as any, 'is_prototype_of', foo)).toBe(false);
  });
  it('should return true for is_class', () => {
    class Foo {}
    expect(objectInstance(Foo, 'is_class')).toBe(true);
  });

  it('should return true for is_constructor on function', () => {
    function Bar() {}
    expect(objectInstance(Bar, 'is_constructor')).toBe(true);
  });

  it('should return true for is_function_instance on function', () => {
    function Bar() {}
    expect(objectInstance(Bar, 'is_function_instance')).toBe(true);
  });

  it('should return true for is_instance_of', () => {
    class Foo {}
    const foo = new Foo();
    expect(objectInstance(foo, 'is_instance_of', Foo)).toBe(true);
  });

  it('should return false for is_instance_of with wrong ctor', () => {
    class Foo {}
    class Bar {}
    const foo = new Foo();
    expect(objectInstance(foo, 'is_instance_of', Bar)).toBe(false);
  });

  it('should return true for is_object_instance on object', () => {
    const obj = {};
    expect(objectInstance(obj, 'is_object_instance')).toBe(true);
  });

  it('should return false for is_object_instance on null', () => {
    expect(objectInstance(null, 'is_object_instance')).toBe(false);
  });

  it('should return false for is_class on function', () => {
    function Bar() {}
    expect(objectInstance(Bar, 'is_class')).toBe(false);
  });

  it('should throw for unknown operator', () => {
    class Foo {}
    // @ts-expect-error
    expect(() => objectInstance(Foo, 'invalid_operator')).toThrow('Unknown ObjectInstance operation: invalid_operator');
  });
});
