/**
 * Enums and types for bigint predicate operations.
 *
 * @module bigints/enums
 */

export enum BigIntComparisonEnum {
  EQUALS = 'equals',
  GREATER_THAN = 'greater_than',
  GREATER_THAN_OR_EQUALS = 'greater_than_or_equals',
  LESS_THAN = 'less_than',
  LESS_THAN_OR_EQUALS = 'less_than_or_equals',
  NOT_EQUALS = 'not_equals',
}
export type BigIntComparisonOper = BigIntComparisonEnum | `${BigIntComparisonEnum}`;

export enum BigIntStateEnum {
  IS_EVEN = 'is_even',
  IS_NEGATIVE = 'is_negative',
  IS_ODD = 'is_odd',
  IS_POSITIVE = 'is_positive',
  IS_ZERO = 'is_zero',
}
export type BigIntStateOper = BigIntStateEnum | `${BigIntStateEnum}`;

export enum BigIntMembershipEnum {
  IN = 'in',
  NOT_IN = 'not_in',
}
export type BigIntMembershipOper = BigIntMembershipEnum | `${BigIntMembershipEnum}`;

export enum BigIntRangeEnum {
  BETWEEN = 'between', // inclusif : min <= x <= max
  NOT_BETWEEN = 'not_between', // inclusif : x < min || x > max
  STRICT_BETWEEN = 'strict_between', // exclusif : min < x < max
  STRICT_NOT_BETWEEN = 'strict_not_between', // exclusif : x <= min || x >= max
}
export type BigIntRangeOper = BigIntRangeEnum | `${BigIntRangeEnum}`;
