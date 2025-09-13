import { describe, it, expect } from 'vitest';
import { arrayMembership } from './arrayMembership.js';

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

  it('should return true for excludes', () => {
    const arr = [1, 2, 3];
    const value = 4;
    expect(arrayMembership<DummyType>(arr, 'excludes', value)).toBe(true);
  });

  it('should return false for excludes if value is present', () => {
    const arr = [1, 2, 3];
    const value = 2;
    expect(arrayMembership<DummyType>(arr, 'excludes', value)).toBe(false);
  });

  it('should return true for includes', () => {
    const arr = [1, 2, 3];
    const value = 2;
    expect(arrayMembership<DummyType>(arr, 'includes', value)).toBe(true);
  });

  it('should return false for includes if value is not present', () => {
    const arr = [1, 2, 3];
    const value = 4;
    expect(arrayMembership<DummyType>(arr, 'includes', value)).toBe(false);
  });

  it('should return true for some_equals', () => {
    const arr = [1, 2, 3];
    const value = 2;
    expect(arrayMembership<DummyType>(arr, 'some_equals', value)).toBe(true);
  });

  it('should return false for some_equals if none match', () => {
    const arr = [1, 2, 3];
    const value = 4;
    expect(arrayMembership<DummyType>(arr, 'some_equals', value)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const arr = [1, 2, 3];
    const value = 1;
    // @ts-expect-error
    expect(() => arrayMembership(arr, 'invalid_operator', value)).toThrow(
      'Unknown ArrayMembership operation: invalid_operator'
    );
  });
});
