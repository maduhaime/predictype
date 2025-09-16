/**
 * Enums and types for string predicate operations.
 *
 * @module strings/enums
 */
export enum StringComparisonEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
}

export type StringComparisonOper = StringComparisonEnum | `${StringComparisonEnum}`;

export enum StringMembershipEnum {
  IN = 'in',
  NOT_IN = 'not_in',
}

export type StringMembershipOper = StringMembershipEnum | `${StringMembershipEnum}`;

export enum StringPatternEnum {
  MATCHES = 'matches',
  NOT_MATCHES = 'not_matches',
}

export type StringPatternOper = StringPatternEnum | `${StringPatternEnum}`;

export enum StringSizeEnum {
  SIZE_EQUALS = 'size_equals',
  SIZE_GREATER_THAN = 'size_greater_than',
  SIZE_GREATER_THAN_OR_EQUALS = 'size_greater_than_or_equals',
  SIZE_LESS_THAN = 'size_less_than',
  SIZE_LESS_THAN_OR_EQUALS = 'size_less_than_or_equals',
}

export type StringSizeOper = StringSizeEnum | `${StringSizeEnum}`;

export enum StringStateEnum {
  IS_BLANK = 'is_blank',
  IS_EMPTY = 'is_empty',
  IS_NOT_BLANK = 'is_not_blank',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type StringStateOper = StringStateEnum | `${StringStateEnum}`;

export enum StringSubstringEnum {
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
}

export type StringSubstringOper = StringSubstringEnum | `${StringSubstringEnum}`;
