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
  EQUALS = 'equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type FunctionNameOper = FunctionNameEnum | `${FunctionNameEnum}`;

export enum FunctionPatternEnum {
  NAME_MATCHES = 'name_matches',
  NAME_NOT_MATCHES = 'name_not_matches',
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
