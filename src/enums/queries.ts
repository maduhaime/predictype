/**
 * Enums and types for URLSearchParams predicate operations.
 *
 * @module queries/enums
 */
export enum QueryEntryEnum {
  CONTAINS_ENTRY = 'contains_entry',
  LACKS_ENTRY = 'lacks_entry',
}

export type QueryEntryOper = QueryEntryEnum | `${QueryEntryEnum}`;

export enum QueryKeyEnum {
  CONTAINS_KEY = 'contains_key',
  LACKS_KEY = 'lacks_key',
}

export type QueryKeyOper = QueryKeyEnum | `${QueryKeyEnum}`;

export enum QueryValueEnum {
  CONTAINS_VALUE = 'contains_value',
  LACKS_VALUE = 'lacks_value',
}

export type QueryValueOper = QueryValueEnum | `${QueryValueEnum}`;

export enum QuerySizeEnum {
  SIZE_EQUALS = 'size_equals',
  SIZE_GREATER_THAN = 'size_greater_than',
  SIZE_GREATER_THAN_OR_EQUALS = 'size_greater_than_or_equals',
  SIZE_LESS_THAN = 'size_less_than',
  SIZE_LESS_THAN_OR_EQUALS = 'size_less_than_or_equals',
}

export type QuerySizeOper = QuerySizeEnum | `${QuerySizeEnum}`;

export enum QueryStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type QueryStateOper = QueryStateEnum | `${QueryStateEnum}`;
