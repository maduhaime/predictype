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

export const PredicType = {
  array: {
    comparison: arrays.arrayComparison,
    indexComparison: arrays.arrayIndexComparison,
    indexMembership: arrays.arrayIndexMembership,
    intersection: arrays.arrayIntersection,
    membership: arrays.arrayMembership,
    relation: arrays.arrayRelation,
    sequence: arrays.arraySequence,
    size: arrays.arraySize,
    state: arrays.arrayState,
  },
  bigint: {
    comparison: bigints.bigintComparison,
    membership: bigints.bigintMembership,
    range: bigints.bigintRange,
    state: bigints.bigintState,
  },
  boolean: {
    comparison: booleans.booleanComparison,
    state: booleans.booleanState,
  },
  date: {
    calendar: dates.dateCalendar,
    comparison: dates.dateComparison,
    range: dates.dateRange,
    state: dates.dateState,
  },
  function: {
    arity: functions.functionArity,
    name: functions.functionName,
    pattern: functions.functionPattern,
    state: functions.functionState,
  },
  map: {
    entry: maps.mapEntry,
    key: maps.mapKey,
    size: maps.mapSize,
    state: maps.mapState,
    value: maps.mapValue,
  },
  number: {
    comparison: numbers.numberComparison,
    range: numbers.numberRange,
    state: numbers.numberState,
  },
  object: {
    attributes: objects.objectAttributes,
    instanceType: objects.objectInstanceType,
    instanceRelation: objects.objectInstanceRelation,
    key: objects.objectKey,
    keyMembership: objects.objectKeyMembership,
    keys: objects.objectKeysCompare,
    keysState: objects.objectKeysState,
    property: objects.objectProperty,
    prototypeRelation: objects.objectPrototypeRelation,
    prototypeState: objects.objectPrototypeState,
    state: objects.objectState,
  },
  promise: {
    state: promises.promiseState,
    type: promises.promiseType,
  },
  set: {
    comparison: sets.setComparison,
    relation: sets.setRelation,
    size: sets.setSize,
    state: sets.setState,
  },
  string: {
    comparison: strings.stringComparison,
    membership: strings.stringMembership,
    pattern: strings.stringPattern,
    size: strings.stringSize,
    state: strings.stringState,
    substring: strings.stringSubstring,
  },
  symbol: {
    comparison: symbols.symbolComparison,
    state: symbols.symbolState,
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
