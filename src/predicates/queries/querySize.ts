import { QuerySizeEnum, QuerySizeOper } from '../../enums/queries.js';

function countEntries(source: URLSearchParams): number {
  let count = 0;

  for (const _entry of source) count += 1;
  return count;
}

/**
 * Checks the number of entries in a URLSearchParams collection.
 */
export function querySize(source: URLSearchParams, oper: QuerySizeOper, size: number): boolean {
  const operators: Record<QuerySizeEnum, (a: number, b: number) => boolean> = {
    [QuerySizeEnum.SIZE_EQUALS]: (a, b) => a === b,
    [QuerySizeEnum.SIZE_GREATER_THAN]: (a, b) => a > b,
    [QuerySizeEnum.SIZE_GREATER_THAN_OR_EQUALS]: (a, b) => a >= b,
    [QuerySizeEnum.SIZE_LESS_THAN]: (a, b) => a < b,
    [QuerySizeEnum.SIZE_LESS_THAN_OR_EQUALS]: (a, b) => a <= b,
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown QuerySize operation: ${oper}`);
  return fn(countEntries(source), size);
}
