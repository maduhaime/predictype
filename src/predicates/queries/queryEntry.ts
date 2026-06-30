import { QueryEntryEnum, QueryEntryOper } from '../../enums/queries.js';

/**
 * Checks whether a URLSearchParams collection contains a given [key, value] entry.
 */
export function queryEntry(source: URLSearchParams, oper: QueryEntryOper, entry: [string, string]): boolean {
  const operators: Record<QueryEntryEnum, (a: URLSearchParams, b: [string, string]) => boolean> = {
    [QueryEntryEnum.CONTAINS_ENTRY]: (a, b) => a.has(b[0]) && a.getAll(b[0]).includes(b[1]),
    [QueryEntryEnum.LACKS_ENTRY]: (a, b) => !a.has(b[0]) || !a.getAll(b[0]).includes(b[1]),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown QueryEntry operation: ${oper}`);
  return fn(source, entry);
}
