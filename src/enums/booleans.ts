/**
 * Enums and types for boolean predicate operations.
 *
 * @module booleans/enums
 */

export enum BooleanStateEnum {
  IS_TRUE = 'is_true',
  IS_FALSE = 'is_false',
}

export type BooleanStateOper = BooleanStateEnum | `${BooleanStateEnum}`;

export enum BooleanComparisonEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
}

export type BooleanComparisonOper = BooleanComparisonEnum | `${BooleanComparisonEnum}`;
