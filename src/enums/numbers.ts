/**
 * Enums and types for number predicate operations.
 *
 * @module numbers/enums
 */
export enum NumberComparisonEnum {
  EQUALS = 'equals',
  GREATER_OR_EQUAL = 'greater_or_equal',
  GREATER_THAN = 'greater_than',
  LESS_OR_EQUAL = 'less_or_equal',
  LESS_THAN = 'less_than',
  NOT_EQUALS = 'not_equals',
}

export type NumberComparisonOper = NumberComparisonEnum | `${NumberComparisonEnum}`;

export enum NumberRangeEnum {
  BETWEEN = 'between', // inclusif : min <= x <= max
  NOT_BETWEEN = 'not_between', // inclusif : x < min || x > max
  STRICT_BETWEEN = 'strict_between', // exclusif : min < x < max
  STRICT_NOT_BETWEEN = 'strict_not_between', // exclusif : x <= min || x >= max
}

export type NumberRangeOper = NumberRangeEnum | `${NumberRangeEnum}`;

export enum NumberStateEnum {
  IS_FINITE = 'is_finite',
  IS_FLOAT = 'is_float',
  IS_INTEGER = 'is_integer',
  IS_NEGATIVE = 'is_negative',
  IS_POSITIVE = 'is_positive',
  IS_ZERO = 'is_zero',
}

export type NumberStateOper = NumberStateEnum | `${NumberStateEnum}`;
