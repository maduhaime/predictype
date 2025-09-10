import {
  arrayMembership,
  arrayComparison,
  arrayIndexComparison,
  arrayIndexMembership,
  arrayIntersection,
  arrayRelation,
  arraySequence,
  arraySize,
  arrayState,
} from './predicates/arrays';
import {
  ArrayMembershipOper,
  ArrayComparisonOper,
  ArrayIndexComparisonOper,
  ArrayIndexMembershipOper,
  ArrayIntersectionOper,
  ArrayRelationOper,
  ArraySequenceOper,
  ArraySizeOper,
  ArrayStateOper,
} from './predicates/arrays/enums';

import { bigintComparison, bigintMembership, bigintRange, bigintState } from './predicates/bigints';
import {
  BigIntComparisonOper,
  BigIntMembershipOper,
  BigIntRangeOper,
  BigIntStateOper,
} from './predicates/bigints/enums';

import { booleanComparison, booleanState } from './predicates/booleans';
import { BooleanComparisonOper, BooleanStateOper } from './predicates/booleans/enums';

import { dateCalendar, dateRange, dateState } from './predicates/dates';
import { DateCalendarOper, DateRangeOper, DateStateOper } from './predicates/dates/enums';

import { functionArity, functionName, functionPattern, functionState } from './predicates/functions';
import {
  FunctionArityOper,
  FunctionNameOper,
  FunctionPatternOper,
  FunctionStateOper,
} from './predicates/functions/enums';

import { mapEntry, mapKey, mapSize, mapState, mapValue } from './predicates/maps';
import { MapEntryOper, MapKeyOper, MapSizeOper, MapStateOper, MapValueOper } from './predicates/maps/enums';

import { numberComparison, numberRange, numberState } from './predicates/numbers';
import { NumberComparisonOper, NumberRangeOper, NumberStateOper } from './predicates/numbers/enums';

import { objectAttributes, objectInstance, objectKey, objectKeys } from './predicates/objects';
import { ObjectAttributesOper, ObjectInstanceOper, ObjectKeyOper, ObjectKeysOper } from './predicates/objects/enums';

import { promiseState, PromiseWithState } from './predicates/promises/promiseState';
import { PromiseStateOper } from './predicates/promises/enums';

import { setComparison, setRelation, setSize, setState } from './predicates/sets';
import { SetComparisonOper, SetRelationOper, SetSizeOper, SetStateOper } from './predicates/sets/enums';

import { stringComparison, stringMembership, stringPattern, stringSize, stringState } from './predicates/strings';
import {
  StringComparisonOper,
  StringMembershipOper,
  StringPatternOper,
  StringSizeOper,
  StringStateOper,
} from './predicates/strings/enums';

import { symbolComparison, symbolState } from './predicates/symbols';
import { SymbolComparisonOper, SymbolStateOper } from './predicates/symbols/enums';

export const Predicate = {
  array: {
    comparison: <T>(source: T[], oper: ArrayComparisonOper, target: T[]): boolean => {
      return arrayComparison<T>(source, oper, target);
    },
    indexComparison: <T>(source: T[], oper: ArrayIndexComparisonOper, index: number, target: T): boolean => {
      return arrayIndexComparison<T>(source, oper, index, target);
    },
    indexMembership: <T>(source: T[], oper: ArrayIndexMembershipOper, index: number, target: T[]): boolean => {
      return arrayIndexMembership<T>(source, oper, index, target);
    },
    intersection: <T>(source: T[], oper: ArrayIntersectionOper, target: T[]): boolean => {
      return arrayIntersection<T>(source, oper, target);
    },
    membership: <T>(source: T[], oper: ArrayMembershipOper, target: T): boolean => {
      return arrayMembership<T>(source, oper, target);
    },
    relation: <T>(source: T[], oper: ArrayRelationOper, target: T[]): boolean => {
      return arrayRelation<T>(source, oper, target);
    },
    sequence: <T>(source: T[], oper: ArraySequenceOper, target: T[]): boolean => {
      return arraySequence<T>(source, oper, target);
    },
    size: (source: any[], oper: ArraySizeOper, target: number): boolean => {
      return arraySize(source, oper, target);
    },
    state: (source: any[], oper: ArrayStateOper): boolean => {
      return arrayState(source, oper);
    },
  },
  bigint: {
    comparison: (source: bigint, oper: BigIntComparisonOper, target: bigint): boolean => {
      return bigintComparison(source, oper, target);
    },
    membership: (source: bigint, oper: BigIntMembershipOper, set: bigint[]): boolean => {
      return bigintMembership(source, oper, set);
    },
    range: (source: bigint, oper: BigIntRangeOper, min: bigint, max: bigint): boolean => {
      return bigintRange(source, oper, min, max);
    },
    state: (source: bigint, oper: BigIntStateOper): boolean => {
      return bigintState(source, oper);
    },
  },
  boolean: {
    comparison: (value: boolean, oper: BooleanComparisonOper, target: boolean): boolean => {
      return booleanComparison(value, oper, target);
    },
    state: (value: boolean, oper: BooleanStateOper): boolean => {
      return booleanState(value, oper);
    },
  },
  date: {
    calendar: (value: Date, oper: DateCalendarOper): boolean => {
      return dateCalendar(value, oper);
    },
    range: (value: Date, oper: DateRangeOper, min: Date, max: Date): boolean => {
      return dateRange(value, oper, min, max);
    },
    state: (value: Date, oper: DateStateOper): boolean => {
      return dateState(value, oper);
    },
  },
  function: {
    arity: (source: Function, oper: FunctionArityOper, arity: number): boolean => {
      return functionArity(source, oper, arity);
    },
    name: (source: Function, oper: FunctionNameOper, name: string): boolean => {
      return functionName(source, oper, name);
    },
    pattern: (source: Function, oper: FunctionPatternOper, pattern: RegExp): boolean => {
      return functionPattern(source, oper, pattern);
    },
    state: (source: Function, oper: FunctionStateOper): boolean => {
      return functionState(source, oper);
    },
  },
  map: {
    entry: <K, V>(source: Map<K, V>, oper: MapEntryOper, entry: [K, V]): boolean => {
      return mapEntry(source, oper, entry);
    },
    key: <K, V>(source: Map<K, V>, oper: MapKeyOper, key: K): boolean => {
      return mapKey(source, oper, key);
    },
    size: <K, V>(source: Map<K, V>, oper: MapSizeOper, size: number): boolean => {
      return mapSize(source, oper, size);
    },
    state: <K, V>(source: Map<K, V>, oper: MapStateOper): boolean => {
      return mapState(source, oper);
    },
    value: <K, V>(source: Map<K, V>, oper: MapValueOper, value: V): boolean => {
      return mapValue(source, oper, value);
    },
  },
  number: {
    comparison: (source: number, oper: NumberComparisonOper, target: number): boolean => {
      return numberComparison(source, oper, target);
    },
    range: (value: number, oper: NumberRangeOper, min: number, max: number): boolean => {
      return numberRange(value, oper, min, max);
    },
    state: (value: number, oper: NumberStateOper): boolean => {
      return numberState(value, oper);
    },
  },
  object: {
    attributes: (obj: object, oper: ObjectAttributesOper, key: string | symbol): boolean => {
      return objectAttributes(obj, oper, key);
    },
    instance: (value: any, oper: ObjectInstanceOper, ctor?: Function): boolean => {
      return objectInstance(value, oper, ctor);
    },
    key: (obj: object, oper: ObjectKeyOper, key: string | symbol): boolean => {
      return objectKey(obj, oper, key);
    },
    keys: (obj: object, oper: ObjectKeysOper, keys?: string | string[] | symbol[]): boolean => {
      return objectKeys(obj, oper, keys);
    },
  },
  promise: {
    state: <T>(wrapper: PromiseWithState<T>, oper: PromiseStateOper): boolean => {
      return promiseState(wrapper, oper);
    },
  },
  set: {
    comparison: <T>(source: Set<T>, oper: SetComparisonOper, target: Set<T>): boolean => {
      return setComparison(source, oper, target);
    },
    relation: <T>(source: Set<T>, oper: SetRelationOper, target: Set<T>): boolean => {
      return setRelation(source, oper, target);
    },
    size: <T>(source: Set<T>, oper: SetSizeOper, target: number): boolean => {
      return setSize(source, oper, target);
    },
    state: <T>(source: Set<T>, oper: SetStateOper): boolean => {
      return setState(source, oper);
    },
  },
  string: {
    comparison: (source: string, oper: StringComparisonOper, target: string): boolean => {
      return stringComparison(source, oper, target);
    },
    membership: (source: string, oper: StringMembershipOper, arr: string[]): boolean => {
      return stringMembership(source, oper, arr);
    },
    pattern: (source: string, oper: StringPatternOper, pattern: RegExp): boolean => {
      return stringPattern(source, oper, pattern);
    },
    size: (source: string, oper: StringSizeOper, target: number): boolean => {
      return stringSize(source, oper, target);
    },
    state: (source: string, oper: StringStateOper): boolean => {
      return stringState(source, oper);
    },
  },
  symbol: {
    comparison: (source: symbol, oper: SymbolComparisonOper, target: symbol): boolean => {
      return symbolComparison(source, oper, target);
    },
    state: (source: symbol, oper: SymbolStateOper): boolean => {
      return symbolState(source, oper);
    },
  },
};

// Predicate Alias
// export const P = Predicate;
export const P = {
  arr: Predicate.array,
  big: Predicate.bigint,
  bool: Predicate.boolean,
  date: Predicate.date,
  func: Predicate.function,
  map: Predicate.map,
  num: Predicate.number,
  obj: Predicate.object,
  prom: Predicate.promise,
  set: Predicate.set,
  str: Predicate.string,
  sym: Predicate.symbol,
};
