/**
 * Enums and types for number predicate operations.
 *
 * @module numbers/enums
 */
export enum NumberCompareEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  GREATER_OR_EQUAL = 'greater_or_equal',
  LESS_THAN = 'less_than',
  LESS_OR_EQUAL = 'less_or_equal',
}

export type NumberCompareOper = NumberCompareEnum | `${NumberCompareEnum}`;

export enum NumberRangeEnum {
  IN_RANGE = 'in_range',
  OUT_RANGE = 'out_range',
  STRICT_IN_RANGE = 'strict_in_range',
  STRICT_OUT_RANGE = 'strict_out_range',
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
