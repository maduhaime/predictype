import { describe, it, expect } from 'vitest';
import { arrayMembership } from './arrayMembership';

type DummyType = number;

describe('arrayMembership', () => {
  it('should return true for every_equals', () => {
    const arr = [1, 1, 1];
    const value = 1;

    expect(arrayMembership<DummyType>(arr, 'every_equals', value)).toBe(true);
  });

  it('should return false for every_equals if not all match', () => {
    const arr = [1, 2, 1];
    const value = 1;

    expect(arrayMembership<DummyType>(arr, 'every_equals', value)).toBe(false);
  });

  it('should return true for includes', () => {
    const arr = [1, 2, 3];
    const value = 2;

    expect(arrayMembership<DummyType>(arr, 'includes', value)).toBe(true);
  });

  it('should return true for excludes', () => {
    const arr = [1, 2, 3];
    const value = 4;

    expect(arrayMembership<DummyType>(arr, 'excludes', value)).toBe(true);
  });

  it('should return true for some_equals', () => {
    const arr = [1, 2, 3];
    const value = 2;

    expect(arrayMembership<DummyType>(arr, 'some_equals', value)).toBe(true);
  });
});
