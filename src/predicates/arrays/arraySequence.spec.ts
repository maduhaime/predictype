import { describe, it, expect } from 'vitest';
import { arraySequence } from './arraySequence.js';

type DummyType = number;

describe('arraySequence', () => {
  it('should return true for contains_subsequence', () => {
    const arr = [1, 2, 3, 4];
    const subseq = [2, 3];
    expect(arraySequence<DummyType>(arr, 'contains_subsequence', subseq)).toBe(true);
  });

  it('should return false for contains_subsequence if not present', () => {
    const arr = [1, 2, 3, 4];
    const subseq = [3, 2];
    expect(arraySequence<DummyType>(arr, 'contains_subsequence', subseq)).toBe(false);
  });

  it('should return true for ends_with', () => {
    const arr = [1, 2, 3];
    const end = [2, 3];
    expect(arraySequence<DummyType>(arr, 'ends_with', end)).toBe(true);
  });

  it('should return false for ends_with if not matching', () => {
    const arr = [1, 2, 3];
    const end = [1, 2];
    expect(arraySequence<DummyType>(arr, 'ends_with', end)).toBe(false);
  });

  it('should return true for starts_with', () => {
    const arr = [1, 2, 3];
    const start = [1, 2];
    expect(arraySequence<DummyType>(arr, 'starts_with', start)).toBe(true);
  });

  it('should return false for starts_with if not matching', () => {
    const arr = [1, 2, 3];
    const start = [2, 3];
    expect(arraySequence<DummyType>(arr, 'starts_with', start)).toBe(false);
  });

  it('should throw for unknown operator', () => {
    const arr = [1, 2, 3];
    const seq = [2, 3];
    // @ts-expect-error
    expect(() => arraySequence(arr, 'invalid_operator', seq)).toThrow(
      'Unknown ArraySequence operation: invalid_operator'
    );
  });
});
