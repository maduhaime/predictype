import { QueryEntryEnum, QueryEntryOper } from '../../enums/queries.js';

/**
 * Checks whether query parameters contain or lack a specific [key, value] entry.
 *
 * @param source The query source to inspect (URL or URLSearchParams).
 * @param oper The entry operation to perform ('contains_entry' or 'lacks_entry').
 * @param entry The [key, value] pair to check.
 * @returns True if the entry check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URLSearchParams('tag=ts&tag=ai&sort=desc');
 * const entryA: [string, string] = ['tag', 'ai'];
 * const entryB: [string, string] = ['tag', 'rust'];
 *
 * queryEntry(source, 'contains_entry', entryA); // true
 * queryEntry(source, 'lacks_entry', entryB); // true
 *
 * @remarks
 * Supported Operators:
 * - **contains_entry**
 * - **lacks_entry**
 */
export function queryEntry(source: URL | URLSearchParams, oper: QueryEntryOper, entry: [string, string]): boolean {
  const operators: Record<QueryEntryEnum, (a: URLSearchParams, b: [string, string]) => boolean> = {
    [QueryEntryEnum.CONTAINS_ENTRY]: (a, b) => a.has(b[0]) && a.getAll(b[0]).includes(b[1]),
    [QueryEntryEnum.LACKS_ENTRY]: (a, b) => !a.has(b[0]) || !a.getAll(b[0]).includes(b[1]),
  };

  const fn = operators[oper];
  const searchParams = source instanceof URL ? source.searchParams : source;

  if (!fn) throw new Error(`Unknown QueryEntry operation: ${oper}`);
  return fn(searchParams, entry);
}
