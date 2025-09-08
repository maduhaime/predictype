/**
 * Enums and types for symbol predicate operations.
 *
 * @module symbols/enums
 */
export enum SymbolComparisonEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
}
export type SymbolComparisonOper = SymbolComparisonEnum | `${SymbolComparisonEnum}`;

export enum SymbolStateEnum {
  IS_GLOBAL = 'is_global',
  IS_LOCAL = 'is_local',
}
export type SymbolStateOper = SymbolStateEnum | `${SymbolStateEnum}`;
