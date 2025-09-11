import { Predictype, P } from '../src/PredicType';
// enums import removed, we use string operators for tests
import { describe, it, expect } from 'vitest';
import { PromiseWithState } from './predicates/promises';

describe('Predictype.array', () => {
  it('should return true for array comparison equals', () => {
    expect(Predictype.array.comparison([1, 2], 'equals', [1, 2])).toBe(true);
    expect(P.arr.comparison([1, 2], 'equals', [1, 2])).toBe(true);
  });
  it('should return true for array state IS_NOT_EMPTY', () => {
    expect(Predictype.array.state([1], 'is_not_empty')).toBe(true);
    expect(P.arr.state([1], 'is_not_empty')).toBe(true);
  });
});

describe('Predictype.bigint', () => {
  it('should return true for bigint comparison equals', () => {
    expect(Predictype.bigint.comparison(1n, 'equals', 1n)).toBe(true);
    expect(P.big.comparison(1n, 'equals', 1n)).toBe(true);
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
  it('should return true for date state IS_VALID', () => {
    expect(Predictype.date.state(new Date('2020-01-01'), 'is_valid')).toBe(true);
    expect(P.date.state(new Date('2020-01-01'), 'is_valid')).toBe(true);
  });
});

describe('Predictype.function', () => {
  it('should return true for function state IS_ANONYMOUS', () => {
    expect(Predictype.function.state(() => {}, 'is_anonymous')).toBe(true);
    expect(P.func.state(() => {}, 'is_anonymous')).toBe(true);
  });
});

describe('Predictype.map', () => {
  it('should return true for map state IS_NOT_EMPTY', () => {
    expect(Predictype.map.state(new Map([[1, 2]]), 'is_not_empty')).toBe(true);
    expect(P.map.state(new Map([[1, 2]]), 'is_not_empty')).toBe(true);
  });
});

describe('Predictype.number', () => {
  it('should return true for number comparison equals', () => {
    expect(Predictype.number.comparison(1, 'equals', 1)).toBe(true);
    expect(P.num.comparison(1, 'equals', 1)).toBe(true);
  });
  it('should return true for number state IS_POSITIVE', () => {
    expect(Predictype.number.state(1, 'is_positive')).toBe(true);
    expect(P.num.state(1, 'is_positive')).toBe(true);
  });
});

describe('Predictype.object', () => {
  it('should return true for object instance', () => {
    expect(Predictype.object.instance({}, 'is_object_instance')).toBe(true);
    expect(P.obj.instance({}, 'is_object_instance')).toBe(true);
  });
});

describe('Predictype.promise', () => {
  it('should return true for promise state IS_FULFILLED', () => {
    const wrapper: PromiseWithState<any> = { state: 'is_fulfilled', promise: Promise.resolve() };
    expect(Predictype.promise.state(wrapper, 'is_fulfilled')).toBe(true);
    expect(P.prom.state(wrapper, 'is_fulfilled')).toBe(true);
  });
});

describe('Predictype.set', () => {
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
