/**
 * Enums and types for RegExp predicate operations.
 *
 * @module regexps/enums
 */
export enum RegExpPatternEnum {
  EQUALS = 'equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type RegExpPatternOper = RegExpPatternEnum | `${RegExpPatternEnum}`;

export enum RegExpResultEnum {
  TESTS = 'tests',
  NOT_TESTS = 'not_tests',
  MATCHES = 'matches',
  NOT_MATCHES = 'not_matches',
}

export type RegExpResultOper = RegExpResultEnum | `${RegExpResultEnum}`;

export enum RegExpResultSizeEnum {
  SIZE_EQUALS = 'size_equals',
  SIZE_GREATER_THAN = 'size_greater_than',
  SIZE_GREATER_THAN_OR_EQUALS = 'size_greater_than_or_equals',
  SIZE_LESS_THAN = 'size_less_than',
  SIZE_LESS_THAN_OR_EQUALS = 'size_less_than_or_equals',
}

export type RegExpResultSizeOper = RegExpResultSizeEnum | `${RegExpResultSizeEnum}`;

export enum RegExpResultRangeEnum {
  BETWEEN = 'between',
  NOT_BETWEEN = 'not_between',
  STRICT_BETWEEN = 'strict_between',
  STRICT_NOT_BETWEEN = 'strict_not_between',
}

export type RegExpResultRangeOper = RegExpResultRangeEnum | `${RegExpResultRangeEnum}`;

export enum RegExpStateEnum {
  IS_GLOBAL = 'is_global',
  IS_IGNORE_CASE = 'is_ignore_case',
  IS_MULTILINE = 'is_multiline',
  IS_DOT_ALL = 'is_dot_all',
  IS_UNICODE = 'is_unicode',
  IS_STICKY = 'is_sticky',
  HAS_INDICES = 'has_indices',
  IS_EMPTY_PATTERN = 'is_empty_pattern',
}

export type RegExpStateOper = RegExpStateEnum | `${RegExpStateEnum}`;
