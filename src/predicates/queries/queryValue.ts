import { QueryValueEnum, QueryValueOper } from '../../enums/queries.js';

/**
 * Checks whether query parameters contain or lack a value.
 *
 * @param source The query source to inspect (URL or URLSearchParams).
 * @param oper The value operation to perform ('contains_value' or 'lacks_value').
 * @param value The value to check.
 * @returns True if the value check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URLSearchParams('status=active&role=admin&role=editor');
 * const valueA = 'editor';
 * const valueB = 'guest';
 *
 * queryValue(source, 'contains_value', valueA); // true
 * queryValue(source, 'lacks_value', valueB); // true
 *
 * @remarks
 * Supported Operators:
 * - **contains_value**
 * - **lacks_value**
 */
export function queryValue(source: URL | URLSearchParams, oper: QueryValueOper, value: string): boolean {
  const operators: Record<QueryValueEnum, (a: URLSearchParams, b: string) => boolean> = {
    [QueryValueEnum.CONTAINS_VALUE]: (a, b) => Array.from(a.values()).includes(b),
    [QueryValueEnum.LACKS_VALUE]: (a, b) => !Array.from(a.values()).includes(b),
  };

  const fn = operators[oper];
  const searchParams = source instanceof URL ? source.searchParams : source;

  if (!fn) throw new Error(`Unknown QueryValue operation: ${oper}`);
  return fn(searchParams, value);
}
