import { describe, expect, it } from 'vitest';

import { SetArrayMembershipEnum } from '../../enums/sets.js';
import { setArrayMembership } from './setArrayMembership.js';

describe('setArrayMembership', () => {
  const s = new Set([1, 2, 3]);

  describe('CONTAINS_ALL', () => {
    it('should return true when set contains all values', () => {
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ALL, [1, 2])).toBe(true);
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ALL, [3])).toBe(true);
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ALL, [])).toBe(true); // empty array
    });

    it('should return false when set does not contain all values', () => {
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ALL, [1, 4])).toBe(false);
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ALL, [4, 5])).toBe(false);
    });

    it('should work with string literals', () => {
      expect(setArrayMembership(s, 'contains_all', [1, 2, 3])).toBe(true);
      expect(setArrayMembership(s, 'contains_all', [1, 4])).toBe(false);
    });
  });

  describe('CONTAINS_ANY', () => {
    it('should return true when set contains at least one value', () => {
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ANY, [1, 4])).toBe(true);
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ANY, [4, 2])).toBe(true);
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ANY, [1, 2, 3])).toBe(true);
    });

    it('should return false when set contains none of the values', () => {
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ANY, [4, 5])).toBe(false);
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ANY, [6])).toBe(false);
      expect(setArrayMembership(s, SetArrayMembershipEnum.CONTAINS_ANY, [])).toBe(false); // empty array
    });

    it('should work with string literals', () => {
      expect(setArrayMembership(s, 'contains_any', [1, 4])).toBe(true);
      expect(setArrayMembership(s, 'contains_any', [4, 5])).toBe(false);
    });
  });

  describe('EXCLUDES_ALL', () => {
    it('should return true when set excludes all values', () => {
      expect(setArrayMembership(s, SetArrayMembershipEnum.EXCLUDES_ALL, [4, 5])).toBe(true);
      expect(setArrayMembership(s, SetArrayMembershipEnum.EXCLUDES_ALL, [6])).toBe(true);
      expect(setArrayMembership(s, SetArrayMembershipEnum.EXCLUDES_ALL, [])).toBe(true); // empty array
    });

    it('should return false when set contains any of the values', () => {
      expect(setArrayMembership(s, SetArrayMembershipEnum.EXCLUDES_ALL, [1, 4])).toBe(false);
      expect(setArrayMembership(s, SetArrayMembershipEnum.EXCLUDES_ALL, [4, 2])).toBe(false);
      expect(setArrayMembership(s, SetArrayMembershipEnum.EXCLUDES_ALL, [1, 2, 3])).toBe(false);
    });

    it('should work with string literals', () => {
      expect(setArrayMembership(s, 'excludes_all', [4, 5])).toBe(true);
      expect(setArrayMembership(s, 'excludes_all', [1, 4])).toBe(false);
    });
  });

  describe('error handling', () => {
    it('should throw an error for unknown operations', () => {
      expect(() => setArrayMembership(s, 'unknown' as any, [1])).toThrow(
        'Unknown SetArrayMembership operation: unknown',
      );
    });
  });

  describe('edge cases', () => {
    it('should work with empty set', () => {
      const emptySet = new Set<number>();
      expect(setArrayMembership(emptySet, SetArrayMembershipEnum.CONTAINS_ALL, [])).toBe(true);
      expect(setArrayMembership(emptySet, SetArrayMembershipEnum.CONTAINS_ANY, [1])).toBe(false);
      expect(setArrayMembership(emptySet, SetArrayMembershipEnum.EXCLUDES_ALL, [1, 2])).toBe(true);
    });

    it('should work with different types', () => {
      const stringSet = new Set(['a', 'b', 'c']);
      expect(setArrayMembership(stringSet, SetArrayMembershipEnum.CONTAINS_ALL, ['a', 'b'])).toBe(true);
      expect(setArrayMembership(stringSet, SetArrayMembershipEnum.CONTAINS_ANY, ['d', 'a'])).toBe(true);
      expect(setArrayMembership(stringSet, SetArrayMembershipEnum.EXCLUDES_ALL, ['d', 'e'])).toBe(true);
    });
  });
});
