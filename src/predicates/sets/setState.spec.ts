import { describe, it, expect } from 'vitest';

import { SetStateEnum } from '../../enums/sets.js';
import { setState } from './setState.js';

describe('setState', () => {
  describe('IS_EMPTY', () => {
    it('should return true for empty set', () => {
      const a = new Set();
      expect(setState(a, SetStateEnum.IS_EMPTY)).toBe(true);
      expect(setState(a, 'is_empty')).toBe(true);
    });

    it('should return false for non-empty set', () => {
      const b = new Set([1]);
      expect(setState(b, SetStateEnum.IS_EMPTY)).toBe(false);
      expect(setState(b, 'is_empty')).toBe(false);
    });
  });

  describe('IS_NOT_EMPTY', () => {
    it('should return true for non-empty set', () => {
      const b = new Set([1]);
      expect(setState(b, SetStateEnum.IS_NOT_EMPTY)).toBe(true);
      expect(setState(b, 'is_not_empty')).toBe(true);
    });

    it('should return false for empty set', () => {
      const a = new Set();
      expect(setState(a, SetStateEnum.IS_NOT_EMPTY)).toBe(false);
      expect(setState(a, 'is_not_empty')).toBe(false);
    });
  });

  describe('HAS_PRIMITIVES', () => {
    it('should return true when set contains primitive values', () => {
      const s1 = new Set([1, 2, 3]);
      const s2 = new Set(['hello', 'world']);
      const s3 = new Set([true, false]);
      const s4 = new Set([BigInt(123)]);
      const s5 = new Set([Symbol('test')]);
      const s6 = new Set([null, undefined]);
      const s7 = new Set([1, { id: 1 }]); // mixed

      expect(setState(s1, SetStateEnum.HAS_PRIMITIVES)).toBe(true);
      expect(setState(s2, SetStateEnum.HAS_PRIMITIVES)).toBe(true);
      expect(setState(s3, SetStateEnum.HAS_PRIMITIVES)).toBe(true);
      expect(setState(s4, SetStateEnum.HAS_PRIMITIVES)).toBe(true);
      expect(setState(s5, SetStateEnum.HAS_PRIMITIVES)).toBe(true);
      expect(setState(s6, SetStateEnum.HAS_PRIMITIVES)).toBe(true);
      expect(setState(s7, SetStateEnum.HAS_PRIMITIVES)).toBe(true);
    });

    it('should return false when set contains only objects', () => {
      const s1 = new Set([{ id: 1 }, { id: 2 }]);
      const s2 = new Set([[], [1, 2]]);
      const s3 = new Set([(): void => {}, function (): void {}]);

      expect(setState(s1, SetStateEnum.HAS_PRIMITIVES)).toBe(false);
      expect(setState(s2, SetStateEnum.HAS_PRIMITIVES)).toBe(false);
      expect(setState(s3, SetStateEnum.HAS_PRIMITIVES)).toBe(false);
    });

    it('should return false for empty set', () => {
      const empty = new Set();
      expect(setState(empty, SetStateEnum.HAS_PRIMITIVES)).toBe(false);
    });

    it('should work with string literals', () => {
      const s = new Set([1, 2, 3]);
      expect(setState(s, 'has_primitives')).toBe(true);
    });
  });

  describe('HAS_OBJECTS', () => {
    it('should return true when set contains object values', () => {
      const s1 = new Set([{ id: 1 }, { id: 2 }]);
      const s2 = new Set([[], [1, 2]]);
      const s3 = new Set([(): void => {}, function (): void {}]);
      const s4 = new Set([1, { id: 1 }]); // mixed

      expect(setState(s1, SetStateEnum.HAS_OBJECTS)).toBe(true);
      expect(setState(s2, SetStateEnum.HAS_OBJECTS)).toBe(true);
      expect(setState(s3, SetStateEnum.HAS_OBJECTS)).toBe(true);
      expect(setState(s4, SetStateEnum.HAS_OBJECTS)).toBe(true);
    });

    it('should return false when set contains only primitives', () => {
      const s1 = new Set([1, 2, 3]);
      const s2 = new Set(['hello', 'world']);
      const s3 = new Set([true, false]);
      const s4 = new Set([null, undefined]);

      expect(setState(s1, SetStateEnum.HAS_OBJECTS)).toBe(false);
      expect(setState(s2, SetStateEnum.HAS_OBJECTS)).toBe(false);
      expect(setState(s3, SetStateEnum.HAS_OBJECTS)).toBe(false);
      expect(setState(s4, SetStateEnum.HAS_OBJECTS)).toBe(false);
    });

    it('should return false for empty set', () => {
      const empty = new Set();
      expect(setState(empty, SetStateEnum.HAS_OBJECTS)).toBe(false);
    });

    it('should work with string literals', () => {
      const s = new Set([{ id: 1 }]);
      expect(setState(s, 'has_objects')).toBe(true);
    });
  });

  describe('error handling', () => {
    it('should throw for unknown operator', () => {
      const a = new Set();
      // @ts-expect-error
      expect(() => setState(a, 'invalid_operator')).toThrow('Unknown SetState operation: invalid_operator');
    });
  });
});
