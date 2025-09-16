/**
 * Enums and types for map predicate operations.
 *
 * @module maps/enums
 */
export enum MapEntryEnum {
  CONTAINS_ENTRY = 'contains_entry',
  LACKS_ENTRY = 'lacks_entry',
}

export type MapEntryOper = MapEntryEnum | `${MapEntryEnum}`;

export enum MapKeyEnum {
  CONTAINS_KEY = 'contains_key',
  LACKS_KEY = 'lacks_key',
}

export type MapKeyOper = MapKeyEnum | `${MapKeyEnum}`;

export enum MapSizeEnum {
  SIZE_EQUALS = 'size_equals',
  SIZE_GREATER_THAN = 'size_greater_than',
  SIZE_GREATER_THAN_OR_EQUALS = 'size_greater_than_or_equals',
  SIZE_LESS_THAN = 'size_less_than',
  SIZE_LESS_THAN_OR_EQUALS = 'size_less_than_or_equals',
}

export type MapSizeOper = MapSizeEnum | `${MapSizeEnum}`;

export enum MapStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type MapStateOper = MapStateEnum | `${MapStateEnum}`;

export enum MapValueEnum {
  CONTAINS_VALUE = 'contains_value',
  LACKS_VALUE = 'lacks_value',
}

export type MapValueOper = MapValueEnum | `${MapValueEnum}`;
