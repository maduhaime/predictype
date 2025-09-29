import { describe, it, expect } from 'vitest';

import { objectInstanceRelation } from './objectInstanceRelation.js';

describe('objectInstanceRelation', () => {
  it('should return true for instance_of', () => {
    class Foo {}
    const foo = new Foo();
    expect(objectInstanceRelation(foo, 'instance_of', Foo)).toBe(true);
    expect(objectInstanceRelation(foo, 'instance_of', function Bar() {})).toBe(false);
    // primitives should always return false
    expect(objectInstanceRelation(42, 'instance_of', Foo)).toBe(false);
    expect(objectInstanceRelation('str', 'instance_of', Foo)).toBe(false);
    expect(objectInstanceRelation(null, 'instance_of', Foo)).toBe(false);
    expect(objectInstanceRelation(undefined, 'instance_of', Foo)).toBe(false);
    // target not a function
    expect(objectInstanceRelation(foo, 'instance_of', 42)).toBe(false);
    expect(objectInstanceRelation(foo, 'instance_of', null)).toBe(false);
    expect(objectInstanceRelation(foo, 'instance_of', undefined)).toBe(false);
  });

  it('should return true for prototype_of', () => {
    class Foo {}
    const proto = Foo.prototype;
    const foo = new Foo();
    expect(objectInstanceRelation(proto, 'prototype_of', foo)).toBe(true);
    expect(objectInstanceRelation({}, 'prototype_of', foo)).toBe(false);
    expect(objectInstanceRelation(proto, 'prototype_of', null)).toBe(false);
    // v not object/function
    expect(objectInstanceRelation(42, 'prototype_of', foo)).toBe(false);
    expect(objectInstanceRelation('str', 'prototype_of', foo)).toBe(false);
    expect(objectInstanceRelation(undefined, 'prototype_of', foo)).toBe(false);
    // t not object/function
    expect(objectInstanceRelation(proto, 'prototype_of', 42)).toBe(false);
    expect(objectInstanceRelation(proto, 'prototype_of', 'str')).toBe(false);
    expect(objectInstanceRelation(proto, 'prototype_of', undefined)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    class Foo {}
    const foo = new Foo();
    // @ts-expect-error
    expect(() => objectInstanceRelation(foo, 'invalid_operator', Foo)).toThrow(
      'Unknown ObjectInstanceRelation operation: invalid_operator',
    );
  });
});
