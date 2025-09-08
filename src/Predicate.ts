import {
  arrayMembership,
  arrayCompare,
  arrayIndexCompare,
  arrayIndexMembership,
  arrayIntersection,
  arrayRelation,
  arraySequence,
  arraySize,
  arrayState,
} from './predicates/arrays';
import {
  ArrayMembershipOper,
  ArrayCompareOper,
  ArrayIndexCompareOper,
  ArrayIndexMembershipOper,
  ArrayIntersectionOper,
  ArrayRelationOper,
  ArraySequenceOper,
  ArraySizeOper,
  ArrayStateOper,
} from './predicates/arrays/enums';

import { bigintCompare, bigintMembership, bigintRange, bigintState } from './predicates/bigints';
import { BigIntCompareOper, BigIntMembershipOper, BigIntRangeOper, BigIntStateOper } from './predicates/bigints/enums';

import { booleanState } from './predicates/booleans';
import { BooleanStateOper } from './predicates/booleans/enums';

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

import { numberCompare, numberRange, numberState } from './predicates/numbers';
import { NumberCompareOper, NumberRangeOper, NumberStateOper } from './predicates/numbers/enums';

import { objectAttributes, objectInstance, objectKey, objectKeys } from './predicates/objects';
import { ObjectAttributesOper, ObjectInstanceOper, ObjectKeyOper, ObjectKeysOper } from './predicates/objects/enums';

import { promiseState, PromiseWithState } from './predicates/promises/promiseState';
import { PromiseStateOper } from './predicates/promises/enums';

import { setCompare, setRelation, setSize, setState } from './predicates/sets';
import { SetCompareOper, SetRelationOper, SetSizeOper, SetStateOper } from './predicates/sets/enums';

import { stringCompare, stringMembership, stringPattern, stringSize, stringState } from './predicates/strings';
import {
  StringCompareOper,
  StringMembershipOper,
  StringPatternOper,
  StringSizeOper,
  StringStateOper,
} from './predicates/strings/enums';

import { symbolCompare, symbolState } from './predicates/symbols';
import { SymbolCompareOper, SymbolStateOper } from './predicates/symbols/enums';

export const PredicType = {
  array: {
    compare: <T>(source: T[], oper: ArrayCompareOper, target: T[]): boolean => {
      return arrayCompare<T>(source, oper, target);
    },
    indexCompare: <T>(source: T[], oper: ArrayIndexCompareOper, index: number, target: T): boolean => {
      return arrayIndexCompare<T>(source, oper, index, target);
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
  bigints: {
    compare: (source: bigint, oper: BigIntCompareOper, target: bigint): boolean => {
      return bigintCompare(source, oper, target);
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
  booleans: {
    state: (value: boolean, oper: BooleanStateOper): boolean => {
      return booleanState(value, oper);
    },
  },
  dates: {
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
  functions: {
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
  maps: {
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
  numbers: {
    compare: (source: number, oper: NumberCompareOper, target: number): boolean => {
      return numberCompare(source, oper, target);
    },
    range: (value: number, oper: NumberRangeOper, min: number, max: number): boolean => {
      return numberRange(value, oper, min, max);
    },
    state: (value: number, oper: NumberStateOper): boolean => {
      return numberState(value, oper);
    },
  },
  objects: {
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
  promises: {
    state: <T>(wrapper: PromiseWithState<T>, oper: PromiseStateOper): boolean => {
      return promiseState(wrapper, oper);
    },
  },
  sets: {
    compare: <T>(source: Set<T>, oper: SetCompareOper, target: Set<T>): boolean => {
      return setCompare(source, oper, target);
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
  strings: {
    compare: (source: string, oper: StringCompareOper, target: string): boolean => {
      return stringCompare(source, oper, target);
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
  symbols: {
    compare: (source: symbol, oper: SymbolCompareOper, target: symbol): boolean => {
      return symbolCompare(source, oper, target);
    },
    state: (source: symbol, oper: SymbolStateOper): boolean => {
      return symbolState(source, oper);
    },
  },
};

// Predicate Alias
export const P = PredicType;
