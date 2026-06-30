import { QueryStateEnum, QueryStateOper } from '../../enums/queries.js';

function countEntries(source: URLSearchParams): number {
  let count = 0;

  for (const _entry of source) count += 1;
  return count;
}

/**
 * Checks the state of a URLSearchParams collection.
 */
export function queryState(source: URLSearchParams, oper: QueryStateOper): boolean {
  const operators: Record<QueryStateEnum, (a: URLSearchParams) => boolean> = {
    [QueryStateEnum.IS_EMPTY]: (a) => countEntries(a) === 0,
    [QueryStateEnum.IS_NOT_EMPTY]: (a) => countEntries(a) > 0,
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown QueryState operation: ${oper}`);
  return fn(source);
}
