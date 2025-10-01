import { describe, it, expect } from 'vitest';

import { SetMembershipEnum } from '../../enums/sets.js';
import { setMembership } from './setMembership.js';

describe('setMembership', () => {
  const s = new Set([1, 2, 3]);

  describe('INCLUDES', () => {
    it('should return true when set contains the value', () => {
      expect(setMembership(s, SetMembershipEnum.INCLUDES, 2)).toBe(true);
      expect(setMembership(s, SetMembershipEnum.INCLUDES, 1)).toBe(true);
      expect(setMembership(s, SetMembershipEnum.INCLUDES, 3)).toBe(true);
    });

    it('should return false when set does not contain the value', () => {
      expect(setMembership(s, SetMembershipEnum.INCLUDES, 4)).toBe(false);
      expect(setMembership(s, SetMembershipEnum.INCLUDES, 0)).toBe(false);
    });

    it('should work with string literals', () => {
      expect(setMembership(s, 'includes', 2)).toBe(true);
      expect(setMembership(s, 'includes', 4)).toBe(false);
    });
  });

  describe('EXCLUDES', () => {
    it('should return true when set does not contain the value', () => {
      expect(setMembership(s, SetMembershipEnum.EXCLUDES, 4)).toBe(true);
      expect(setMembership(s, SetMembershipEnum.EXCLUDES, 0)).toBe(true);
      expect(setMembership(s, SetMembershipEnum.EXCLUDES, 5)).toBe(true);
    });

    it('should return false when set contains the value', () => {
      expect(setMembership(s, SetMembershipEnum.EXCLUDES, 2)).toBe(false);
      expect(setMembership(s, SetMembershipEnum.EXCLUDES, 1)).toBe(false);
      expect(setMembership(s, SetMembershipEnum.EXCLUDES, 3)).toBe(false);
    });

    it('should work with string literals', () => {
      expect(setMembership(s, 'excludes', 4)).toBe(true);
      expect(setMembership(s, 'excludes', 2)).toBe(false);
    });
  });

  describe('error handling', () => {
    it('should throw an error for unknown operations', () => {
      expect(() => setMembership(s, 'unknown' as any, 1)).toThrow('Unknown SetMembership operation: unknown');
    });
  });

  describe('edge cases', () => {
    it('should work with empty set', () => {
      const emptySet = new Set<number>();
      expect(setMembership(emptySet, SetMembershipEnum.INCLUDES, 1)).toBe(false);
      expect(setMembership(emptySet, SetMembershipEnum.EXCLUDES, 1)).toBe(true);
    });

    it('should work with different types', () => {
      const stringSet = new Set(['a', 'b', 'c']);
      expect(setMembership(stringSet, SetMembershipEnum.INCLUDES, 'a')).toBe(true);
      expect(setMembership(stringSet, SetMembershipEnum.INCLUDES, 'd')).toBe(false);
      expect(setMembership(stringSet, SetMembershipEnum.EXCLUDES, 'd')).toBe(true);
      expect(setMembership(stringSet, SetMembershipEnum.EXCLUDES, 'a')).toBe(false);
    });

    it('should work with object references', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const obj3 = { id: 3 };
      const objectSet = new Set([obj1, obj2]);

      expect(setMembership(objectSet, SetMembershipEnum.INCLUDES, obj1)).toBe(true);
      expect(setMembership(objectSet, SetMembershipEnum.INCLUDES, obj3)).toBe(false);
      expect(setMembership(objectSet, SetMembershipEnum.EXCLUDES, obj3)).toBe(true);
      expect(setMembership(objectSet, SetMembershipEnum.EXCLUDES, obj1)).toBe(false);
    });
  });
});
