/**
 * Enums and types for array predicate operations.
 *
 * @module arrays/enums
 */

export enum ArrayIndexCompareEnum {
  VALUE_AT_INDEX_EQUALS = 'value_at_index_equals',
  VALUE_AT_INDEX_NOT_EQUALS = 'value_at_index_not_equals',
  VALUE_AT_INDEX_GREATER_THAN = 'value_at_index_greater_than',
  VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS = 'value_at_index_greater_than_or_equals',
  VALUE_AT_INDEX_LESS_THAN = 'value_at_index_less_than',
  VALUE_AT_INDEX_LESS_THAN_OR_EQUALS = 'value_at_index_less_than_or_equals',
}
export type ArrayIndexCompareOper = ArrayIndexCompareEnum | `${ArrayIndexCompareEnum}`;

export enum ArrayIndexMembershipEnum {
  VALUE_AT_INDEX_IN = 'value_at_index_in',
  VALUE_AT_INDEX_NOT_IN = 'value_at_index_not_in',
}

export type ArrayIndexMembershipOper = ArrayIndexMembershipEnum | `${ArrayIndexMembershipEnum}`;

export enum ArrayCompareEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
}

export type ArrayCompareOper = ArrayCompareEnum | `${ArrayCompareEnum}`;

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
  IS_SUBSET_OF = 'is_subset_of',
  IS_SUPERSET_OF = 'is_superset_of',
}

export type ArrayRelationOper = ArrayRelationEnum | `${ArrayRelationEnum}`;

export enum ArraySequenceEnum {
  CONTAINS_SUBSEQUENCE = 'contains_subsequence',
  ENDS_WITH = 'ends_with',
  STARTS_WITH = 'starts_with',
}

export type ArraySequenceOper = ArraySequenceEnum | `${ArraySequenceEnum}`;

export enum ArraySizeEnum {
  LENGTH_EQUALS = 'length_equals',
  LENGTH_GREATER_THAN = 'length_greater_than',
  LENGTH_GREATER_THAN_OR_EQUALS = 'length_greater_than_or_equals',
  LENGTH_LESS_THAN = 'length_less_than',
  LENGTH_LESS_THAN_OR_EQUALS = 'length_less_than_or_equals',
}

export type ArraySizeOper = ArraySizeEnum | `${ArraySizeEnum}`;

export enum ArrayStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type ArrayStateOper = ArrayStateEnum | `${ArrayStateEnum}`;
