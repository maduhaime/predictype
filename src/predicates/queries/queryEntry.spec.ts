import { describe, expect, it } from 'vitest';

import { QueryEntryEnum } from '../../enums/queries.js';
import { queryEntry } from './queryEntry.js';

describe('queryEntry', () => {
  const params = new URLSearchParams('foo=bar&foo=baz&zap=zip');
  const url = new URL('https://example.com?foo=bar&foo=baz&zap=zip');

  it('should return true for contains_entry', () => {
    expect(queryEntry(params, 'contains_entry', ['foo', 'bar'])).toBe(true);
  });

  it('should return true for lacks_entry', () => {
    expect(queryEntry(params, 'lacks_entry', ['foo', 'missing'])).toBe(true);
  });

  it('should accept URLSearchParams as source', () => {
    const source = new URLSearchParams('alpha=one&beta=two');
    expect(queryEntry(source, 'contains_entry', ['alpha', 'one'])).toBe(true);
  });

  it('should accept URL as source and use searchParams', () => {
    expect(queryEntry(url, 'contains_entry', ['foo', 'bar'])).toBe(true);
  });

  it('should accept enum operators directly', () => {
    expect(queryEntry(params, QueryEntryEnum.CONTAINS_ENTRY, ['foo', 'bar'])).toBe(true);
  });

  it('should throw for unknown operator', () => {
    // @ts-expect-error
    expect(() => queryEntry(params, 'invalid_operator', ['foo', 'bar'])).toThrow(
      'Unknown QueryEntry operation: invalid_operator',
    );
  });
});
