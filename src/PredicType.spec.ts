import { Predictype, P } from '../src/PredicType';
// enums import removed, we use string operators for tests
import { describe, it, expect } from 'vitest';
import { PromiseWithState } from './predicates/promises';

describe('Predictype.array', () => {
  it('should return true for array comparison equals', () => {
    expect(Predictype.array.comparison([1, 2], 'equals', [1, 2])).toBe(true);
    expect(P.arr.comparison([1, 2], 'equals', [1, 2])).toBe(true);
  });
  it('should return true for array indexComparison value_at_index_equals', () => {
    expect(Predictype.array.indexComparison([1, 2], 'value_at_index_equals', 0, 1)).toBe(true);
    expect(P.arr.indexComparison([1, 2], 'value_at_index_equals', 0, 1)).toBe(true);
  });
  it('should return true for array indexMembership value_at_index_in', () => {
    expect(Predictype.array.indexMembership([1, 2], 'value_at_index_in', 0, [1, 3])).toBe(true);
    expect(P.arr.indexMembership([1, 2], 'value_at_index_in', 0, [1, 3])).toBe(true);
  });
  it('should return true for array intersection intersects', () => {
    expect(Predictype.array.intersection([1, 2], 'intersects', [2, 3])).toBe(true);
    expect(P.arr.intersection([1, 2], 'intersects', [2, 3])).toBe(true);
  });
  it('should return true for array membership includes', () => {
    expect(Predictype.array.membership([1, 2], 'includes', 1)).toBe(true);
    expect(P.arr.membership([1, 2], 'includes', 1)).toBe(true);
  });
  it('should return true for array relation is_subset_of', () => {
    expect(Predictype.array.relation([1], 'is_subset_of', [1, 2])).toBe(true);
    expect(P.arr.relation([1], 'is_subset_of', [1, 2])).toBe(true);
  });
  it('should return true for array sequence contains_subsequence', () => {
    expect(Predictype.array.sequence([1, 2], 'contains_subsequence', [1, 2])).toBe(true);
    expect(P.arr.sequence([1, 2], 'contains_subsequence', [1, 2])).toBe(true);
  });
  it('should return true for array size equals', () => {
    expect(Predictype.array.size([1, 2], 'equals', 2)).toBe(true);
    expect(P.arr.size([1, 2], 'equals', 2)).toBe(true);
  });
  it('should return true for array state is_not_empty', () => {
    expect(Predictype.array.state([1], 'is_not_empty')).toBe(true);
    expect(P.arr.state([1], 'is_not_empty')).toBe(true);
  });
});

describe('Predictype.bigint', () => {
  it('should return true for bigint comparison equals', () => {
    expect(Predictype.bigint.comparison(1n, 'equals', 1n)).toBe(true);
    expect(P.big.comparison(1n, 'equals', 1n)).toBe(true);
  });
  it('should return true for bigint membership is_one_of', () => {
    expect(Predictype.bigint.membership(1n, 'is_one_of', [1n, 2n])).toBe(true);
    expect(P.big.membership(1n, 'is_one_of', [1n, 2n])).toBe(true);
  });
  it('should return true for bigint range between', () => {
    expect(Predictype.bigint.range(2n, 'between', 1n, 3n)).toBe(true);
    expect(P.big.range(2n, 'between', 1n, 3n)).toBe(true);
  });
  it('should return true for bigint state IS_POSITIVE', () => {
    expect(Predictype.bigint.state(1n, 'is_positive')).toBe(true);
    expect(P.big.state(1n, 'is_positive')).toBe(true);
  });
});

describe('Predictype.boolean', () => {
  it('should return true for boolean comparison equals', () => {
    expect(Predictype.boolean.comparison(true, 'equals', true)).toBe(true);
    expect(P.bool.comparison(false, 'equals', false)).toBe(true);
  });
  it('should return true for boolean state IS_TRUE', () => {
    expect(Predictype.boolean.state(true, 'is_true')).toBe(true);
    expect(P.bool.state(false, 'is_false')).toBe(true);
  });
});

describe('Predictype.date', () => {
  it('should return true for date calendar is_today', () => {
    expect(Predictype.date.calendar(new Date(), 'is_today')).toBe(true);
    expect(P.date.calendar(new Date(), 'is_today')).toBe(true);
  });
  it('should return true for date range in_range', () => {
    const d = new Date('2020-01-02');
    expect(Predictype.date.range(d, 'in_range', new Date('2020-01-01'), new Date('2020-01-03'))).toBe(true);
    expect(P.date.range(d, 'in_range', new Date('2020-01-01'), new Date('2020-01-03'))).toBe(true);
  });
  it('should return true for date state IS_VALID', () => {
    expect(Predictype.date.state(new Date('2020-01-01'), 'is_valid')).toBe(true);
    expect(P.date.state(new Date('2020-01-01'), 'is_valid')).toBe(true);
  });
});

describe('Predictype.function', () => {
  it('should return true for function arity equals', () => {
    expect(Predictype.function.arity((a: any) => a, 'equals', 1)).toBe(true);
    expect(P.func.arity((a: any) => a, 'equals', 1)).toBe(true);
  });
  it('should return true for function name equals', () => {
    function foo() {}
    expect(Predictype.function.name(foo, 'equals', 'foo')).toBe(true);
    expect(P.func.name(foo, 'equals', 'foo')).toBe(true);
  });
  it('should return true for function pattern name_matches', () => {
    function foo() {}
    expect(Predictype.function.pattern(foo, 'name_matches', /foo/)).toBe(true);
    expect(P.func.pattern(foo, 'name_matches', /foo/)).toBe(true);
  });
  it('should return true for function state IS_ANONYMOUS', () => {
    expect(Predictype.function.state(() => {}, 'is_anonymous')).toBe(true);
    expect(P.func.state(() => {}, 'is_anonymous')).toBe(true);
  });
});

describe('Predictype.map', () => {
  it('should return true for map entry has_entry', () => {
    expect(Predictype.map.entry(new Map([[1, 2]]), 'has_entry', [1, 2])).toBe(true);
    expect(P.map.entry(new Map([[1, 2]]), 'has_entry', [1, 2])).toBe(true);
  });
  it('should return true for map key has_key', () => {
    expect(Predictype.map.key(new Map([[1, 2]]), 'has_key', 1)).toBe(true);
    expect(P.map.key(new Map([[1, 2]]), 'has_key', 1)).toBe(true);
  });
  it('should return true for map size equals', () => {
    expect(Predictype.map.size(new Map([[1, 2]]), 'equals', 1)).toBe(true);
    expect(P.map.size(new Map([[1, 2]]), 'equals', 1)).toBe(true);
  });
  it('should return true for map state IS_NOT_EMPTY', () => {
    expect(Predictype.map.state(new Map([[1, 2]]), 'is_not_empty')).toBe(true);
    expect(P.map.state(new Map([[1, 2]]), 'is_not_empty')).toBe(true);
  });
  it('should return true for map value has_value', () => {
    expect(Predictype.map.value(new Map([[1, 2]]), 'has_value', 2)).toBe(true);
    expect(P.map.value(new Map([[1, 2]]), 'has_value', 2)).toBe(true);
  });
});

describe('Predictype.number', () => {
  it('should return true for number comparison equals', () => {
    expect(Predictype.number.comparison(1, 'equals', 1)).toBe(true);
    expect(P.num.comparison(1, 'equals', 1)).toBe(true);
  });
  it('should return true for number range in_range', () => {
    expect(Predictype.number.range(2, 'in_range', 1, 3)).toBe(true);
    expect(P.num.range(2, 'in_range', 1, 3)).toBe(true);
  });
  it('should return true for number state IS_POSITIVE', () => {
    expect(Predictype.number.state(1, 'is_positive')).toBe(true);
    expect(P.num.state(1, 'is_positive')).toBe(true);
  });
});

describe('Predictype.object', () => {
  it('should return true for object attributes is_enumerable', () => {
    expect(Predictype.object.attributes({ foo: 1 }, 'is_enumerable', 'foo')).toBe(true);
    expect(P.obj.attributes({ foo: 1 }, 'is_enumerable', 'foo')).toBe(true);
  });
  it('should return true for object instance', () => {
    expect(Predictype.object.instance({}, 'is_object_instance')).toBe(true);
    expect(P.obj.instance({}, 'is_object_instance')).toBe(true);
  });
  it('should return true for object key has_key', () => {
    expect(Predictype.object.key({ foo: 1 }, 'has_key', 'foo')).toBe(true);
    expect(P.obj.key({ foo: 1 }, 'has_key', 'foo')).toBe(true);
  });
  it('should return true for object keys has_all_keys', () => {
    expect(Predictype.object.keys({ foo: 1, bar: 2 }, 'has_all_keys', ['foo', 'bar'])).toBe(true);
    expect(P.obj.keys({ foo: 1, bar: 2 }, 'has_all_keys', ['foo', 'bar'])).toBe(true);
  });
});

describe('Predictype.promise', () => {
  it('should return true for promise state IS_FULFILLED', () => {
    const wrapper: PromiseWithState<any> = { state: 'is_fulfilled', promise: Promise.resolve() };
    expect(Predictype.promise.state(wrapper, 'is_fulfilled')).toBe(true);
    expect(P.prom.state(wrapper, 'is_fulfilled')).toBe(true);
  });
  it('should return true for promise type is_promise', () => {
    expect(Predictype.promise.type(Promise.resolve(), 'is_promise')).toBe(true);
    expect(P.prom.type(Promise.resolve(), 'is_promise')).toBe(true);
  });
});

describe('Predictype.set', () => {
  it('should return true for set comparison equals', () => {
    expect(Predictype.set.comparison(new Set([1]), 'equals', new Set([1]))).toBe(true);
    expect(P.set.comparison(new Set([1]), 'equals', new Set([1]))).toBe(true);
  });
  it('should return true for set relation is_subset_of', () => {
    expect(Predictype.set.relation(new Set([1]), 'is_subset_of', new Set([1, 2]))).toBe(true);
    expect(P.set.relation(new Set([1]), 'is_subset_of', new Set([1, 2]))).toBe(true);
  });
  it('should return true for set size equals', () => {
    expect(Predictype.set.size(new Set([1]), 'equals', 1)).toBe(true);
    expect(P.set.size(new Set([1]), 'equals', 1)).toBe(true);
  });
  it('should return true for set state IS_NOT_EMPTY', () => {
    expect(Predictype.set.state(new Set([1]), 'is_not_empty')).toBe(true);
    expect(P.set.state(new Set([1]), 'is_not_empty')).toBe(true);
  });
});

describe('Predictype.string', () => {
  it('should return true for string comparison equals', () => {
    expect(Predictype.string.comparison('a', 'equals', 'a')).toBe(true);
    expect(P.str.comparison('a', 'equals', 'a')).toBe(true);
  });
  it('should return true for string membership is_one_of', () => {
    expect(Predictype.string.membership('foo', 'is_one_of', ['foo', 'bar'])).toBe(true);
    expect(P.str.membership('foo', 'is_one_of', ['foo', 'bar'])).toBe(true);
  });
  it('should return true for string pattern matches', () => {
    expect(Predictype.string.pattern('foobar', 'matches', /^foo/)).toBe(true);
    expect(P.str.pattern('foobar', 'matches', /^foo/)).toBe(true);
  });
  it('should return true for string size equals', () => {
    expect(Predictype.string.size('abc', 'equals', 3)).toBe(true);
    expect(P.str.size('abc', 'equals', 3)).toBe(true);
  });
  it('should return true for string state IS_NOT_EMPTY', () => {
    expect(Predictype.string.state('a', 'is_not_empty')).toBe(true);
    expect(P.str.state('a', 'is_not_empty')).toBe(true);
  });
});

describe('Predictype.symbol', () => {
  it('should return true for symbol comparison equals', () => {
    const s = Symbol('a');
    expect(Predictype.symbol.comparison(s, 'equals', s)).toBe(true);
    expect(P.sym.comparison(s, 'equals', s)).toBe(true);
  });
  it('should return true for symbol state IS_GLOBAL', () => {
    const s = Symbol.for('a');
    expect(Predictype.symbol.state(s, 'is_global')).toBe(true);
    expect(P.sym.state(s, 'is_global')).toBe(true);
  });
});
