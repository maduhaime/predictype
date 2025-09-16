import { describe, it, expect } from 'vitest';
import { objectPrototypeState } from './objectPrototypeState.js';

describe('objectPrototypeState', () => {
  it('should return true for prototype_is_null when prototype is null', () => {
    const obj = Object.create(null);
    expect(objectPrototypeState(obj, 'prototype_is_null')).toBe(true);
  });

  it('should return false for prototype_is_null when prototype is not null', () => {
    expect(objectPrototypeState({}, 'prototype_is_null')).toBe(false);
    class Foo {}
    expect(objectPrototypeState(new Foo(), 'prototype_is_null')).toBe(false);
  });
});
