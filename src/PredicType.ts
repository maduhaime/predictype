import * as arrays from './predicates/arrays/index.js';
import * as bigints from './predicates/bigints/index.js';
import * as booleans from './predicates/booleans/index.js';
import * as dates from './predicates/dates/index.js';
import * as functions from './predicates/functions/index.js';
import * as maps from './predicates/maps/index.js';
import * as numbers from './predicates/numbers/index.js';
import * as objects from './predicates/objects/index.js';
import * as promises from './predicates/promises/index.js';
import * as sets from './predicates/sets/index.js';
import * as strings from './predicates/strings/index.js';
import * as symbols from './predicates/symbols/index.js';

import {
  ArrayComparisonOper,
  ArrayIndexComparisonOper,
  ArrayIndexMembershipOper,
  ArrayIntersectionOper,
  ArrayMembershipOper,
  ArrayRelationOper,
  ArraySequenceOper,
  ArraySizeOper,
  ArrayStateOper,
  BigIntComparisonOper,
  BigIntMembershipOper,
  BigIntRangeOper,
  BigIntStateOper,
  BooleanComparisonOper,
  BooleanStateOper,
  DateCalendarOper,
  DateRangeOper,
  DateStateOper,
  FunctionArityOper,
  FunctionNameOper,
  FunctionPatternOper,
  FunctionStateOper,
  MapEntryOper,
  MapKeyOper,
  MapSizeOper,
  MapStateOper,
  MapValueOper,
  NumberComparisonOper,
  NumberRangeOper,
  NumberStateOper,
  ObjectAttributesOper,
  ObjectInstanceOper,
  ObjectKeyOper,
  ObjectKeysOper,
  ObjectStateOper,
  PromiseStateOper,
  PromiseTypeOper,
  SetComparisonOper,
  SetRelationOper,
  SetSizeOper,
  SetStateOper,
  StringComparisonOper,
  StringMembershipOper,
  StringPatternOper,
  StringSizeOper,
  StringStateOper,
  StringSubstringOper,
  SymbolComparisonOper,
  SymbolStateOper,
} from './enums/index.js';

export const PredicType = {
  array: {
    comparison: (source: any[], oper: ArrayComparisonOper, target: any[]) =>
      arrays.arrayComparison(source, oper, target),
    indexComparison: (source: any[], oper: ArrayIndexComparisonOper, index: number, value: any) =>
      arrays.arrayIndexComparison(source, oper, index, value),
    indexMembership: (source: any[], oper: ArrayIndexMembershipOper, index: number, arr: any[]) =>
      arrays.arrayIndexMembership(source, oper, index, arr),
    intersection: (source: any[], oper: ArrayIntersectionOper, arr: any[]) =>
      arrays.arrayIntersection(source, oper, arr),
    membership: (source: any[], oper: ArrayMembershipOper, arr: any[]) => arrays.arrayMembership(source, oper, arr),
    relation: (source: any[], oper: ArrayRelationOper, arr: any[]) => arrays.arrayRelation(source, oper, arr),
    sequence: (source: any[], oper: ArraySequenceOper, arr: any[]) => arrays.arraySequence(source, oper, arr),
    size: (source: any[], oper: ArraySizeOper, size: number) => arrays.arraySize(source, oper, size),
    state: (source: any[], oper: ArrayStateOper) => arrays.arrayState(source, oper),
  },
  bigint: {
    comparison: (source: bigint, oper: BigIntComparisonOper, target: bigint) =>
      bigints.bigintComparison(source, oper, target),
    membership: (source: bigint, oper: BigIntMembershipOper, arr: bigint[]) =>
      bigints.bigintMembership(source, oper, arr),
    range: (source: bigint, oper: BigIntRangeOper, min: bigint, max: bigint) =>
      bigints.bigintRange(source, oper, min, max),
    state: (source: bigint, oper: BigIntStateOper) => bigints.bigintState(source, oper),
  },
  boolean: {
    comparison: (value: boolean, oper: BooleanComparisonOper, target: boolean): boolean => {
      return booleans.booleanComparison(value, oper, target);
    },
    state: (value: boolean, oper: BooleanStateOper): boolean => {
      return booleans.booleanState(value, oper);
    },
  },
  date: {
    calendar: (value: Date, oper: DateCalendarOper): boolean => {
      return dates.dateCalendar(value, oper);
    },
    range: (value: Date, oper: DateRangeOper, min: Date, max: Date): boolean => {
      return dates.dateRange(value, oper, min, max);
    },
    state: (value: Date, oper: DateStateOper): boolean => {
      return dates.dateState(value, oper);
    },
  },
  function: {
    arity: (source: Function, oper: FunctionArityOper, arity: number): boolean => {
      return functions.functionArity(source, oper, arity);
    },
    name: (source: Function, oper: FunctionNameOper, name: string): boolean => {
      return functions.functionName(source, oper, name);
    },
    pattern: (source: Function, oper: FunctionPatternOper, pattern: RegExp): boolean => {
      return functions.functionPattern(source, oper, pattern);
    },
    state: (source: Function, oper: FunctionStateOper): boolean => {
      return functions.functionState(source, oper);
    },
  },
  map: {
    entry: <K, V>(source: Map<K, V>, oper: MapEntryOper, entry: [K, V]): boolean => {
      return maps.mapEntry(source, oper, entry);
    },
    key: <K, V>(source: Map<K, V>, oper: MapKeyOper, key: K): boolean => {
      return maps.mapKey(source, oper, key);
    },
    size: <K, V>(source: Map<K, V>, oper: MapSizeOper, size: number): boolean => {
      return maps.mapSize(source, oper, size);
    },
    state: <K, V>(source: Map<K, V>, oper: MapStateOper): boolean => {
      return maps.mapState(source, oper);
    },
    value: <K, V>(source: Map<K, V>, oper: MapValueOper, value: V): boolean => {
      return maps.mapValue(source, oper, value);
    },
  },
  number: {
    comparison: (source: number, oper: NumberComparisonOper, target: number): boolean => {
      return numbers.numberComparison(source, oper, target);
    },
    range: (value: number, oper: NumberRangeOper, min: number, max: number): boolean => {
      return numbers.numberRange(value, oper, min, max);
    },
    state: (value: number, oper: NumberStateOper): boolean => {
      return numbers.numberState(value, oper);
    },
  },
  object: {
    attributes: (obj: object, oper: ObjectAttributesOper, key: string | symbol): boolean => {
      return objects.objectAttributes(obj, oper, key);
    },
    instance: (value: any, oper: ObjectInstanceOper, ctor?: Function): boolean => {
      return objects.objectInstance(value, oper, ctor);
    },
    key: (obj: object, oper: ObjectKeyOper, key: string | symbol): boolean => {
      return objects.objectKey(obj, oper, key);
    },
    keys: (obj: object, oper: ObjectKeysOper, keys?: string | string[] | symbol[]): boolean => {
      return objects.objectKeys(obj, oper, keys);
    },
    state: (obj: object, oper: ObjectStateOper): boolean => {
      return objects.objectState(obj, oper);
    },
  },
  promise: {
    state: <T>(wrapper: promises.PromiseWithState<T>, oper: PromiseStateOper): boolean => {
      return promises.promiseState(wrapper, oper);
    },
    type: <T>(source: Promise<T>, oper: PromiseTypeOper): boolean => {
      return promises.promiseType(source, oper);
    },
  },
  set: {
    comparison: <T>(source: Set<T>, oper: SetComparisonOper, target: Set<T>): boolean => {
      return sets.setComparison(source, oper, target);
    },
    relation: <T>(source: Set<T>, oper: SetRelationOper, target: Set<T>): boolean => {
      return sets.setRelation(source, oper, target);
    },
    size: <T>(source: Set<T>, oper: SetSizeOper, target: number): boolean => {
      return sets.setSize(source, oper, target);
    },
    state: <T>(source: Set<T>, oper: SetStateOper): boolean => {
      return sets.setState(source, oper);
    },
  },
  string: {
    comparison: (source: string, oper: StringComparisonOper, target: string): boolean => {
      return strings.stringComparison(source, oper, target);
    },
    membership: (source: string, oper: StringMembershipOper, arr: string[]): boolean => {
      return strings.stringMembership(source, oper, arr);
    },
    pattern: (source: string, oper: StringPatternOper, pattern: RegExp): boolean => {
      return strings.stringPattern(source, oper, pattern);
    },

    size: (source: string, oper: StringSizeOper, target: number): boolean => {
      return strings.stringSize(source, oper, target);
    },
    state: (source: string, oper: StringStateOper): boolean => {
      return strings.stringState(source, oper);
    },
    substring: (source: string, oper: StringSubstringOper, target: string): boolean => {
      return strings.stringSubstring(source, oper, target);
    },
  },
  symbol: {
    comparison: (source: symbol, oper: SymbolComparisonOper, target: symbol): boolean => {
      return symbols.symbolComparison(source, oper, target);
    },
    state: (source: symbol, oper: SymbolStateOper): boolean => {
      return symbols.symbolState(source, oper);
    },
  },
};

// Predicate Alias
// export const P = Predicate;
export const P = {
  arr: PredicType.array,
  big: PredicType.bigint,
  bool: PredicType.boolean,
  date: PredicType.date,
  func: PredicType.function,
  map: PredicType.map,
  num: PredicType.number,
  obj: PredicType.object,
  prom: PredicType.promise,
  set: PredicType.set,
  str: PredicType.string,
  sym: PredicType.symbol,
};
