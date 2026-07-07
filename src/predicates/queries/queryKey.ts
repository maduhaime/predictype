import { QueryKeyEnum, QueryKeyOper } from '../../enums/queries.js';

/**
 * Checks whether query parameters contain or lack a key.
 *
 * @param source The query source to inspect (URL or URLSearchParams).
 * @param oper The key operation to perform ('contains_key' or 'lacks_key').
 * @param key The key to check.
 * @returns True if the key check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URLSearchParams('q=predicates&page=2');
 * const keyA = 'q';
 * const keyB = 'lang';
 *
 * queryKey(source, 'contains_key', keyA); // true
 * queryKey(source, 'lacks_key', keyB); // true
 *
 * @remarks
 * Supported Operators:
 * - **contains_key**
 * - **lacks_key**
 */
export function queryKey(source: URL | URLSearchParams, oper: QueryKeyOper, key: string): boolean {
  const operators: Record<QueryKeyEnum, (a: URLSearchParams, b: string) => boolean> = {
    [QueryKeyEnum.CONTAINS_KEY]: (a, b) => a.has(b),
    [QueryKeyEnum.LACKS_KEY]: (a, b) => !a.has(b),
  };

  const fn = operators[oper];
  const searchParams = source instanceof URL ? source.searchParams : source;

  if (!fn) throw new Error(`Unknown QueryKey operation: ${oper}`);
  return fn(searchParams, key);
}
