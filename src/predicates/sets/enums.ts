/**
 * Enums and types for set predicate operations.
 *
 * @module sets/enums
 */
export enum SetCompareEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
}

export type SetCompareOper = SetCompareEnum | `${SetCompareEnum}`;

export enum SetRelationEnum {
  DISJOINT = 'disjoint',
  INTERSECTS = 'intersects',
  IS_SUBSET_OF = 'is_subset_of',
  IS_SUPERSET_OF = 'is_superset_of',
}

export type SetRelationOper = SetRelationEnum | `${SetRelationEnum}`;

export enum SetSizeEnum {
  SIZE_EQUALS = 'size_equals',
  SIZE_GREATER_THAN = 'size_greater_than',
  SIZE_GREATER_THAN_OR_EQUALS = 'size_greater_than_or_equals',
  SIZE_LESS_THAN = 'size_less_than',
  SIZE_LESS_THAN_OR_EQUALS = 'size_less_than_or_equals',
}

export type SetSizeOper = SetSizeEnum | `${SetSizeEnum}`;

export enum SetStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type SetStateOper = SetStateEnum | `${SetStateEnum}`;
