import { describe, it, expect } from 'vitest';

import { ErrorStateEnum } from '../../enums/errors.js';
import { errorState } from './errorState.js';

describe('errorState', () => {
  const aggregateErrorCtor = (globalThis as { AggregateError?: new (...args: any[]) => Error }).AggregateError;

  it('should return true for has_cause', () => {
    const err = new Error('boom');
    Object.defineProperty(err, 'cause', { value: new Error('root cause'), configurable: true });
    expect(errorState(err, 'has_cause')).toBe(true);
  });

  it('should return false for has_cause when cause is missing', () => {
    expect(errorState(new Error('boom'), 'has_cause')).toBe(false);
  });

  it('should return true for has_stack', () => {
    expect(errorState(new Error('boom'), 'has_stack')).toBe(true);
  });

  it('should return true for is_aggregate_error', () => {
    if (!aggregateErrorCtor) {
      expect(errorState(new Error('boom'), 'is_aggregate_error')).toBe(false);
      return;
    }

    expect(errorState(new aggregateErrorCtor([new Error('one')], 'many'), 'is_aggregate_error')).toBe(true);
  });

  it('should return false for is_aggregate_error on regular Error', () => {
    expect(errorState(new Error('boom'), 'is_aggregate_error')).toBe(false);
  });

  it('should accept enum operators directly', () => {
    expect(errorState(new Error('boom'), ErrorStateEnum.HAS_STACK)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => errorState(new Error('boom'), 'invalid_operator')).toThrow(
      'Unknown ErrorState operation: invalid_operator',
    );
  });
});
