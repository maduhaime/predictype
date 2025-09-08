/**
 * Enums and types for bigint predicate operations.
 *
 * @module bigints/enums
 */

export enum BigIntCompareEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  GREATER_THAN_OR_EQUALS = 'greater_than_or_equals',
  LESS_THAN = 'less_than',
  LESS_THAN_OR_EQUALS = 'less_than_or_equals',
}
export type BigIntCompareOper = BigIntCompareEnum | `${BigIntCompareEnum}`;

export enum BigIntStateEnum {
  IS_ZERO = 'is_zero',
  IS_POSITIVE = 'is_positive',
  IS_NEGATIVE = 'is_negative',
  IS_EVEN = 'is_even',
  IS_ODD = 'is_odd',
}
export type BigIntStateOper = BigIntStateEnum | `${BigIntStateEnum}`;

export enum BigIntMembershipEnum {
  IS_ONE_OF = 'is_one_of',
  IS_NOT_ONE_OF = 'is_not_one_of',
}
export type BigIntMembershipOper = BigIntMembershipEnum | `${BigIntMembershipEnum}`;

export enum BigIntRangeEnum {
  BETWEEN = 'between',
  NOT_BETWEEN = 'not_between',
}
export type BigIntRangeOper = BigIntRangeEnum | `${BigIntRangeEnum}`;
