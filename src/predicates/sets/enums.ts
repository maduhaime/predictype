/**
 * Enums and types for set predicate operations.
 *
 * @module sets/enums
 */
export enum SetComparisonEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
}

export type SetComparisonOper = SetComparisonEnum | `${SetComparisonEnum}`;

export enum SetRelationEnum {
  DISJOINT = 'disjoint',
  INTERSECTS = 'intersects',
  IS_SUBSET_OF = 'is_subset_of',
  IS_SUPERSET_OF = 'is_superset_of',
}

export type SetRelationOper = SetRelationEnum | `${SetRelationEnum}`;

export enum SetSizeEnum {
  EQUALS = 'equals',
  GREATER_THAN = 'greater_than',
  GREATER_THAN_OR_EQUALS = 'greater_than_or_equals',
  LESS_THAN = 'less_than',
  LESS_THAN_OR_EQUALS = 'less_than_or_equals',
}

export type SetSizeOper = SetSizeEnum | `${SetSizeEnum}`;

export enum SetStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type SetStateOper = SetStateEnum | `${SetStateEnum}`;
