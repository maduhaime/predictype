/**
 * Enums and types for array predicate operations.
 *
 * @module arrays/enums
 */

export enum ArrayIndexComparisonEnum {
  AT_INDEX_EQUALS = 'at_index_equals',
  AT_INDEX_NOT_EQUALS = 'at_index_not_equals',
  AT_INDEX_GREATER_THAN = 'at_index_greater_than',
  AT_INDEX_GREATER_THAN_OR_EQUALS = 'at_index_greater_than_or_equals',
  AT_INDEX_LESS_THAN = 'at_index_less_than',
  AT_INDEX_LESS_THAN_OR_EQUALS = 'at_index_less_than_or_equals',
}
export type ArrayIndexComparisonOper = ArrayIndexComparisonEnum | `${ArrayIndexComparisonEnum}`;

export enum ArrayIndexMembershipEnum {
  AT_INDEX_IN = 'at_index_in',
  AT_INDEX_NOT_IN = 'at_index_not_in',
}

export type ArrayIndexMembershipOper = ArrayIndexMembershipEnum | `${ArrayIndexMembershipEnum}`;

export enum ArrayComparisonEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  SAME_MEMBERS = 'same_members',
  SET_EQUALS = 'set_equals',
  SET_NOT_EQUALS = 'set_not_equals',
}

export type ArrayComparisonOper = ArrayComparisonEnum | `${ArrayComparisonEnum}`;

export enum ArrayIntersectionEnum {
  DISJOINT = 'disjoint',
  INTERSECTS = 'intersects',
}

export type ArrayIntersectionOper = ArrayIntersectionEnum | `${ArrayIntersectionEnum}`;

export enum ArrayMembershipEnum {
  EVERY_EQUALS = 'every_equals',
  EXCLUDES = 'excludes',
  INCLUDES = 'includes',
  SOME_EQUALS = 'some_equals',
}

export type ArrayMembershipOper = ArrayMembershipEnum | `${ArrayMembershipEnum}`;

export enum ArrayRelationEnum {
  SUBSET_OF = 'subset_of',
  SUPERSET_OF = 'superset_of',
  STRICT_SUBSET_OF = 'strict_subset_of',
  STRICT_SUPERSET_OF = 'strict_superset_of',
}

export type ArrayRelationOper = ArrayRelationEnum | `${ArrayRelationEnum}`;

export enum ArraySequenceEnum {
  CONTAINS_SUBSEQUENCE = 'contains_subsequence',
  ENDS_WITH = 'ends_with',
  STARTS_WITH = 'starts_with',
}

export type ArraySequenceOper = ArraySequenceEnum | `${ArraySequenceEnum}`;

export enum ArraySizeEnum {
  SIZE_EQUALS = 'size_equals',
  SIZE_GREATER_THAN = 'size_greater_than',
  SIZE_GREATER_THAN_OR_EQUALS = 'size_greater_than_or_equals',
  SIZE_LESS_THAN = 'size_less_than',
  SIZE_LESS_THAN_OR_EQUALS = 'size_less_than_or_equals',
}

export type ArraySizeOper = ArraySizeEnum | `${ArraySizeEnum}`;

export enum ArrayStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type ArrayStateOper = ArrayStateEnum | `${ArrayStateEnum}`;
