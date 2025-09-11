/**
 * Enums and types for map predicate operations.
 *
 * @module maps/enums
 */
export enum MapEntryEnum {
  HAS_ENTRY = 'has_entry',
  LACKS_ENTRY = 'lacks_entry',
}

export type MapEntryOper = MapEntryEnum | `${MapEntryEnum}`;

export enum MapKeyEnum {
  HAS_KEY = 'has_key',
  LACKS_KEY = 'lacks_key',
}

export type MapKeyOper = MapKeyEnum | `${MapKeyEnum}`;

export enum MapSizeEnum {
  EQUALS = 'equals',
  GREATER_THAN = 'greater_than',
  GREATER_THAN_OR_EQUALS = 'greater_than_or_equals',
  LESS_THAN = 'less_than',
  LESS_THAN_OR_EQUALS = 'less_than_or_equals',
}

export type MapSizeOper = MapSizeEnum | `${MapSizeEnum}`;

export enum MapStateEnum {
  IS_EMPTY = 'is_empty',
  IS_NOT_EMPTY = 'is_not_empty',
}

export type MapStateOper = MapStateEnum | `${MapStateEnum}`;

export enum MapValueEnum {
  HAS_VALUE = 'has_value',
  LACKS_VALUE = 'lacks_value',
}

export type MapValueOper = MapValueEnum | `${MapValueEnum}`;
