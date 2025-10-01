/**
 * Enums and types for set predicate operations.
 *
 * @module sets/enums
 */
export enum SetComparisonEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  SAME_ELEMENTS = 'same_elements',
}

export type SetComparisonOper = SetComparisonEnum | `${SetComparisonEnum}`;

export enum SetIntersectionEnum {
  DISJOINT = 'disjoint',
  INTERSECTS = 'intersects',
}

export type SetIntersectionOper = SetIntersectionEnum | `${SetIntersectionEnum}`;

export enum SetMembershipEnum {
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type SetMembershipOper = SetMembershipEnum | `${SetMembershipEnum}`;

export enum SetArrayMembershipEnum {
  CONTAINS_ALL = 'contains_all',
  CONTAINS_ANY = 'contains_any',
  EXCLUDES_ALL = 'excludes_all',
}

export type SetArrayMembershipOper = SetArrayMembershipEnum | `${SetArrayMembershipEnum}`;

export enum SetRelationEnum {
  DISJOINT = 'disjoint',
  INTERSECTS = 'intersects',
  SUBSET_OF = 'subset_of',
  SUPERSET_OF = 'superset_of',
  STRICT_SUBSET_OF = 'strict_subset_of',
  STRICT_SUPERSET_OF = 'strict_superset_of',
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
  HAS_PRIMITIVES = 'has_primitives',
  HAS_OBJECTS = 'has_objects',
}

export type SetStateOper = SetStateEnum | `${SetStateEnum}`;
