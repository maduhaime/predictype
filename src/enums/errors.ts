/**
 * Enums and types for error predicate operations.
 *
 * @module errors/enums
 */

export enum ErrorMessageEnum {
  EQUALS = 'equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type ErrorMessageOper = ErrorMessageEnum | `${ErrorMessageEnum}`;

export enum ErrorMessagePatternEnum {
  MATCHES = 'matches',
  NOT_MATCHES = 'not_matches',
}

export type ErrorMessagePatternOper = ErrorMessagePatternEnum | `${ErrorMessagePatternEnum}`;

export enum ErrorNameEnum {
  EQUALS = 'equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type ErrorNameOper = ErrorNameEnum | `${ErrorNameEnum}`;

export enum ErrorNamePatternEnum {
  MATCHES = 'matches',
  NOT_MATCHES = 'not_matches',
}

export type ErrorNamePatternOper = ErrorNamePatternEnum | `${ErrorNamePatternEnum}`;

export enum ErrorStateEnum {
  HAS_CAUSE = 'has_cause',
  HAS_STACK = 'has_stack',
  IS_AGGREGATE_ERROR = 'is_aggregate_error',
}

export type ErrorStateOper = ErrorStateEnum | `${ErrorStateEnum}`;
