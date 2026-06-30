import { QueryKeyEnum, QueryKeyOper } from '../../enums/queries.js';

/**
 * Checks whether a URLSearchParams collection contains a given key.
 */
export function queryKey(source: URLSearchParams, oper: QueryKeyOper, key: string): boolean {
  const operators: Record<QueryKeyEnum, (a: URLSearchParams, b: string) => boolean> = {
    [QueryKeyEnum.CONTAINS_KEY]: (a, b) => a.has(b),
    [QueryKeyEnum.LACKS_KEY]: (a, b) => !a.has(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown QueryKey operation: ${oper}`);
  return fn(source, key);
}
