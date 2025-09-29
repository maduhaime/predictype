import { describe, it, expect } from 'vitest';

import { objectPrototypeRelation } from './objectPrototypeRelation.js';

describe('objectPrototypeRelation', () => {
  it('should return true for contains_prototype', () => {
    const proto = { x: 1 };
    const obj = Object.create(proto);
    expect(objectPrototypeRelation(obj, 'contains_prototype', proto)).toBe(true);
    expect(objectPrototypeRelation(obj, 'contains_prototype', {})).toBe(false);
    // null prototype
    const obj2 = Object.create(null);
    expect(objectPrototypeRelation(obj2, 'contains_prototype', null)).toBe(true);
    expect(objectPrototypeRelation(obj2, 'contains_prototype', {})).toBe(false);
  });

  it('should return true for is_prototype_of', () => {
    class Foo {}
    const proto = Foo.prototype;
    const foo = new Foo();
    expect(objectPrototypeRelation(proto, 'is_prototype_of', foo)).toBe(true);
    expect(objectPrototypeRelation({}, 'is_prototype_of', foo)).toBe(false);
    // obj not object/function
    expect(objectPrototypeRelation(42 as any, 'is_prototype_of', foo)).toBe(false);
    expect(objectPrototypeRelation(undefined as any, 'is_prototype_of', foo)).toBe(false);
    // proto not object/function
    expect(objectPrototypeRelation(proto, 'is_prototype_of', 42)).toBe(false);
    expect(objectPrototypeRelation(proto, 'is_prototype_of', undefined)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const obj = {};
    // @ts-expect-error
    expect(() => objectPrototypeRelation(obj, 'invalid_operator', {})).toThrow(
      'Unknown ObjectPrototypeRelation operation: invalid_operator',
    );
  });
});
