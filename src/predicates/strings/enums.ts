/**
 * Enums and types for string predicate operations.
 *
 * @module strings/enums
 */
export enum StringCompareEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
}

export type StringCompareOper = StringCompareEnum | `${StringCompareEnum}`;

export enum StringSubstringEnum {
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
}

export type StringSubstringOper = StringSubstringEnum | `${StringSubstringEnum}`;

export enum StringSizeEnum {
  LENGTH_EQUALS = 'length_equals',
  LENGTH_GREATER_THAN = 'length_greater_than',
  LENGTH_GREATER_THAN_OR_EQUALS = 'length_greater_than_or_equals',
  LENGTH_LESS_THAN = 'length_less_than',
  LENGTH_LESS_THAN_OR_EQUALS = 'length_less_than_or_equals',
}

export type StringSizeOper = StringSizeEnum | `${StringSizeEnum}`;

export enum StringStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
  IS_BLANK = 'is_blank',
  IS_NOT_BLANK = 'is_not_blank',
}

export type StringStateOper = StringStateEnum | `${StringStateEnum}`;

export enum StringMembershipEnum {
  IS_ONE_OF = 'is_one_of',
  IS_NOT_ONE_OF = 'is_not_one_of',
}

export type StringMembershipOper = StringMembershipEnum | `${StringMembershipEnum}`;

export enum StringPatternEnum {
  MATCHES = 'matches',
  NOT_MATCHES = 'not_matches',
}

export type StringPatternOper = StringPatternEnum | `${StringPatternEnum}`;
