/**
 * Enums and types for function predicate operations.
 *
 * @module functions/enums
 */
export enum FunctionArityEnum {
  EQUALS = 'equals',
  GREATER_OR_EQUAL = 'greater_or_equal',
  GREATER_THAN = 'greater_than',
  LESS_OR_EQUAL = 'less_or_equal',
  LESS_THAN = 'less_than',
  NOT_EQUALS = 'not_equals',
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

export enum FunctionNamePatternEnum {
  MATCHES = 'matches',
  NOT_MATCHES = 'not_matches',
}

export type FunctionNamePatternOper = FunctionNamePatternEnum | `${FunctionNamePatternEnum}`;

export enum FunctionStateEnum {
  HAS_NAME = 'has_name',
  IS_ANONYMOUS = 'is_anonymous',
  IS_ARROW = 'is_arrow',
  IS_ASYNC = 'is_async',
  IS_CONSTRUCTOR = 'is_constructor',
  IS_GENERATOR = 'is_generator',
}

export type FunctionStateOper = FunctionStateEnum | `${FunctionStateEnum}`;
