import { PredicType, P } from '../src/PredicType.js';
import { describe, it, expect } from 'vitest';
import { PromiseWithState } from './predicates/promises/index.js';

describe('PredicType.array', () => {
  it('should return true for array comparison equals', () => {
    expect(PredicType.array.comparison([1, 2], 'equals', [1, 2])).toBe(true);
    expect(P.arr.comparison([1, 2], 'equals', [1, 2])).toBe(true);
  });
  it('should return true for array indexComparison value_at_index_equals', () => {
    expect(PredicType.array.indexComparison([1, 2], 'value_at_index_equals', 0, 1)).toBe(true);
    expect(P.arr.indexComparison([1, 2], 'value_at_index_equals', 0, 1)).toBe(true);
  });
  it('should return true for array indexMembership value_at_index_in', () => {
    expect(PredicType.array.indexMembership([1, 2], 'value_at_index_in', 0, [1, 3])).toBe(true);
    expect(P.arr.indexMembership([1, 2], 'value_at_index_in', 0, [1, 3])).toBe(true);
  });
  it('should return true for array intersection intersects', () => {
    expect(PredicType.array.intersection([1, 2], 'intersects', [2, 3])).toBe(true);
    expect(P.arr.intersection([1, 2], 'intersects', [2, 3])).toBe(true);
  });
  it('should return true for array membership includes', () => {
    expect(PredicType.array.membership([1, 2], 'includes', 1)).toBe(true);
    expect(P.arr.membership([1, 2], 'includes', 1)).toBe(true);
  });
  it('should return true for array relation is_subset_of', () => {
    expect(PredicType.array.relation([1], 'is_subset_of', [1, 2])).toBe(true);
    expect(P.arr.relation([1], 'is_subset_of', [1, 2])).toBe(true);
  });
  it('should return true for array sequence contains_subsequence', () => {
    expect(PredicType.array.sequence([1, 2], 'contains_subsequence', [1, 2])).toBe(true);
    expect(P.arr.sequence([1, 2], 'contains_subsequence', [1, 2])).toBe(true);
  });
  it('should return true for array size equals', () => {
    expect(PredicType.array.size([1, 2], 'equals', 2)).toBe(true);
    expect(P.arr.size([1, 2], 'equals', 2)).toBe(true);
  });
  it('should return true for array state is_not_empty', () => {
    expect(PredicType.array.state([1], 'is_not_empty')).toBe(true);
    expect(P.arr.state([1], 'is_not_empty')).toBe(true);
  });
});

describe('PredicType.bigint', () => {
  it('should return true for bigint comparison equals', () => {
    expect(PredicType.bigint.comparison(BigInt(1), 'equals', BigInt(1))).toBe(true);
    expect(P.big.comparison(BigInt(1), 'equals', BigInt(1))).toBe(true);
  });
  it('should return true for bigint membership is_one_of', () => {
    expect(PredicType.bigint.membership(BigInt(1), 'is_one_of', [BigInt(1), BigInt(2)])).toBe(true);
    expect(P.big.membership(BigInt(1), 'is_one_of', [BigInt(1), BigInt(2)])).toBe(true);
  });
  it('should return true for bigint range between', () => {
    expect(PredicType.bigint.range(BigInt(2), 'between', BigInt(1), BigInt(3))).toBe(true);
    expect(P.big.range(BigInt(2), 'between', BigInt(1), BigInt(3))).toBe(true);
  });
  it('should return true for bigint state IS_POSITIVE', () => {
    expect(PredicType.bigint.state(BigInt(1), 'is_positive')).toBe(true);
    expect(P.big.state(BigInt(1), 'is_positive')).toBe(true);
  });
});

describe('PredicType.boolean', () => {
  it('should return true for boolean comparison equals', () => {
    expect(PredicType.boolean.comparison(true, 'equals', true)).toBe(true);
    expect(P.bool.comparison(false, 'equals', false)).toBe(true);
  });
  it('should return true for boolean state IS_TRUE', () => {
    expect(PredicType.boolean.state(true, 'is_true')).toBe(true);
    expect(P.bool.state(false, 'is_false')).toBe(true);
  });
});

describe('PredicType.date', () => {
  it('should return true for date calendar is_today', () => {
    expect(PredicType.date.calendar(new Date(), 'is_today')).toBe(true);
    expect(P.date.calendar(new Date(), 'is_today')).toBe(true);
  });
  it('should return true for date range in_range', () => {
    const d = new Date('2020-01-02');
    expect(PredicType.date.range(d, 'in_range', new Date('2020-01-01'), new Date('2020-01-03'))).toBe(true);
    expect(P.date.range(d, 'in_range', new Date('2020-01-01'), new Date('2020-01-03'))).toBe(true);
  });
  it('should return true for date state IS_VALID', () => {
    expect(PredicType.date.state(new Date('2020-01-01'), 'is_valid')).toBe(true);
    expect(P.date.state(new Date('2020-01-01'), 'is_valid')).toBe(true);
  });
});

describe('PredicType.function', () => {
  it('should return true for function arity equals', () => {
    expect(PredicType.function.arity((a: any) => a, 'equals', 1)).toBe(true);
    expect(P.func.arity((a: any) => a, 'equals', 1)).toBe(true);
  });
  it('should return true for function name equals', () => {
    function foo() {}
    expect(PredicType.function.name(foo, 'equals', 'foo')).toBe(true);
    expect(P.func.name(foo, 'equals', 'foo')).toBe(true);
  });
  it('should return true for function pattern name_matches', () => {
    function foo() {}
    expect(PredicType.function.pattern(foo, 'name_matches', /foo/)).toBe(true);
    expect(P.func.pattern(foo, 'name_matches', /foo/)).toBe(true);
  });
  it('should return true for function state IS_ANONYMOUS', () => {
    expect(PredicType.function.state(() => {}, 'is_anonymous')).toBe(true);
    expect(P.func.state(() => {}, 'is_anonymous')).toBe(true);
  });
});

describe('PredicType.map', () => {
  it('should return true for map entry has_entry', () => {
    expect(PredicType.map.entry(new Map([[1, 2]]), 'has_entry', [1, 2])).toBe(true);
    expect(P.map.entry(new Map([[1, 2]]), 'has_entry', [1, 2])).toBe(true);
  });
  it('should return true for map key has_key', () => {
    expect(PredicType.map.key(new Map([[1, 2]]), 'has_key', 1)).toBe(true);
    expect(P.map.key(new Map([[1, 2]]), 'has_key', 1)).toBe(true);
  });
  it('should return true for map size equals', () => {
    expect(PredicType.map.size(new Map([[1, 2]]), 'equals', 1)).toBe(true);
    expect(P.map.size(new Map([[1, 2]]), 'equals', 1)).toBe(true);
  });
  it('should return true for map state IS_NOT_EMPTY', () => {
    expect(PredicType.map.state(new Map([[1, 2]]), 'is_not_empty')).toBe(true);
    expect(P.map.state(new Map([[1, 2]]), 'is_not_empty')).toBe(true);
  });
  it('should return true for map value has_value', () => {
    expect(PredicType.map.value(new Map([[1, 2]]), 'has_value', 2)).toBe(true);
    expect(P.map.value(new Map([[1, 2]]), 'has_value', 2)).toBe(true);
  });
});

describe('PredicType.number', () => {
  it('should return true for number comparison equals', () => {
    expect(PredicType.number.comparison(1, 'equals', 1)).toBe(true);
    expect(P.num.comparison(1, 'equals', 1)).toBe(true);
  });
  it('should return true for number range in_range', () => {
    expect(PredicType.number.range(2, 'in_range', 1, 3)).toBe(true);
    expect(P.num.range(2, 'in_range', 1, 3)).toBe(true);
  });
  it('should return true for number state IS_POSITIVE', () => {
    expect(PredicType.number.state(1, 'is_positive')).toBe(true);
    expect(P.num.state(1, 'is_positive')).toBe(true);
  });
});

describe('PredicType.object', () => {
  it('should return true for object attributes is_enumerable', () => {
    expect(PredicType.object.attributes({ foo: 1 }, 'is_enumerable', 'foo')).toBe(true);
    expect(P.obj.attributes({ foo: 1 }, 'is_enumerable', 'foo')).toBe(true);
  });
  it('should return true for object instance', () => {
    expect(PredicType.object.instance({}, 'is_object_instance')).toBe(true);
    expect(P.obj.instance({}, 'is_object_instance')).toBe(true);
  });
  it('should return true for object key has_key', () => {
    expect(PredicType.object.key({ foo: 1 }, 'has_key', 'foo')).toBe(true);
    expect(P.obj.key({ foo: 1 }, 'has_key', 'foo')).toBe(true);
  });
  it('should return true for object keys has_all_keys', () => {
    expect(PredicType.object.keys({ foo: 1, bar: 2 }, 'has_all_keys', ['foo', 'bar'])).toBe(true);
    expect(P.obj.keys({ foo: 1, bar: 2 }, 'has_all_keys', ['foo', 'bar'])).toBe(true);
  });
});

describe('PredicType.promise', () => {
  it('should return true for promise state IS_FULFILLED', () => {
    const wrapper: PromiseWithState<any> = { state: 'is_fulfilled', promise: Promise.resolve() };
    expect(PredicType.promise.state(wrapper, 'is_fulfilled')).toBe(true);
    expect(P.prom.state(wrapper, 'is_fulfilled')).toBe(true);
  });
  it('should return true for promise type is_promise', () => {
    expect(PredicType.promise.type(Promise.resolve(), 'is_promise')).toBe(true);
    expect(P.prom.type(Promise.resolve(), 'is_promise')).toBe(true);
  });
});

describe('PredicType.set', () => {
  it('should return true for set comparison equals', () => {
    expect(PredicType.set.comparison(new Set([1]), 'equals', new Set([1]))).toBe(true);
    expect(P.set.comparison(new Set([1]), 'equals', new Set([1]))).toBe(true);
  });
  it('should return true for set relation is_subset_of', () => {
    expect(PredicType.set.relation(new Set([1]), 'is_subset_of', new Set([1, 2]))).toBe(true);
    expect(P.set.relation(new Set([1]), 'is_subset_of', new Set([1, 2]))).toBe(true);
  });
  it('should return true for set size equals', () => {
    expect(PredicType.set.size(new Set([1]), 'equals', 1)).toBe(true);
    expect(P.set.size(new Set([1]), 'equals', 1)).toBe(true);
  });
  it('should return true for set state IS_NOT_EMPTY', () => {
    expect(PredicType.set.state(new Set([1]), 'is_not_empty')).toBe(true);
    expect(P.set.state(new Set([1]), 'is_not_empty')).toBe(true);
  });
});

describe('PredicType.string', () => {
  it('should return true for string comparison equals', () => {
    expect(PredicType.string.comparison('a', 'equals', 'a')).toBe(true);
    expect(P.str.comparison('a', 'equals', 'a')).toBe(true);
  });
  it('should return true for string membership is_one_of', () => {
    expect(PredicType.string.membership('foo', 'is_one_of', ['foo', 'bar'])).toBe(true);
    expect(P.str.membership('foo', 'is_one_of', ['foo', 'bar'])).toBe(true);
  });
  it('should return true for string pattern matches', () => {
    expect(PredicType.string.pattern('foobar', 'matches', /^foo/)).toBe(true);
    expect(P.str.pattern('foobar', 'matches', /^foo/)).toBe(true);
  });

  it('should return true for string size equals', () => {
    expect(PredicType.string.size('abc', 'equals', 3)).toBe(true);
    expect(P.str.size('abc', 'equals', 3)).toBe(true);
  });
  it('should return true for string state IS_NOT_EMPTY', () => {
    expect(PredicType.string.state('a', 'is_not_empty')).toBe(true);
    expect(P.str.state('a', 'is_not_empty')).toBe(true);
  });
  it('should return true for string substring includes', () => {
    expect(PredicType.string.substring('foobar', 'includes', 'foo')).toBe(true);
    expect(P.str.substring('foobar', 'includes', 'foo')).toBe(true);
    expect(PredicType.string.substring('foobar', 'includes', 'baz')).toBe(false);
    expect(P.str.substring('foobar', 'includes', 'baz')).toBe(false);
  });
  it('should return true for string substring excludes', () => {
    expect(PredicType.string.substring('foobar', 'excludes', 'baz')).toBe(true);
    expect(P.str.substring('foobar', 'excludes', 'baz')).toBe(true);
    expect(PredicType.string.substring('foobar', 'excludes', 'foo')).toBe(false);
    expect(P.str.substring('foobar', 'excludes', 'foo')).toBe(false);
  });
});

describe('PredicType.symbol', () => {
  it('should return true for symbol comparison equals', () => {
    const s = Symbol('a');
    expect(PredicType.symbol.comparison(s, 'equals', s)).toBe(true);
    expect(P.sym.comparison(s, 'equals', s)).toBe(true);
  });
  it('should return true for symbol state IS_GLOBAL', () => {
    const s = Symbol.for('a');
    expect(PredicType.symbol.state(s, 'is_global')).toBe(true);
    expect(P.sym.state(s, 'is_global')).toBe(true);
  });
});
