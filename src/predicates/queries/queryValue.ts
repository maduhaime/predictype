import { QueryValueEnum, QueryValueOper } from '../../enums/queries.js';

/**
 * Checks whether a URLSearchParams collection contains a given value.
 */
export function queryValue(source: URLSearchParams, oper: QueryValueOper, value: string): boolean {
  const operators: Record<QueryValueEnum, (a: URLSearchParams, b: string) => boolean> = {
    [QueryValueEnum.CONTAINS_VALUE]: (a, b) => Array.from(a.values()).includes(b),
    [QueryValueEnum.LACKS_VALUE]: (a, b) => !Array.from(a.values()).includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown QueryValue operation: ${oper}`);
  return fn(source, value);
}
