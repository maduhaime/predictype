/**
 * Enums and types for function predicate operations.
 *
 * @module functions/enums
 */
export enum FunctionArityEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  GREATER_OR_EQUAL = 'greater_or_equal',
  LESS_THAN = 'less_than',
  LESS_OR_EQUAL = 'less_or_equal',
}

export type FunctionArityOper = FunctionArityEnum | `${FunctionArityEnum}`;

export enum FunctionNameEnum {
  NAME_EQUALS = 'name_equals',
  NAME_STARTS_WITH = 'name_starts_with',
  NAME_ENDS_WITH = 'name_ends_with',
  NAME_INCLUDES = 'name_includes',
  NAME_EXCLUDES = 'name_excludes',
}

export type FunctionNameOper = FunctionNameEnum | `${FunctionNameEnum}`;

export enum FunctionPatternEnum {
  NAME_MATCHES = 'name_matches',
}

export type FunctionPatternOper = FunctionPatternEnum | `${FunctionPatternEnum}`;

export enum FunctionStateEnum {
  HAS_NAME = 'has_name',
  IS_ASYNC = 'is_async',
  IS_GENERATOR = 'is_generator',
  IS_CONSTRUCTOR = 'is_constructor',
  IS_ARROW = 'is_arrow',
  IS_ANONYMOUS = 'is_anonymous',
}

export type FunctionStateOper = FunctionStateEnum | `${FunctionStateEnum}`;
