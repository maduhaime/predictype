import { QuerySizeEnum, QuerySizeOper } from '../../enums/queries.js';

function countEntries(source: URLSearchParams): number {
  let count = 0;

  source.forEach(() => {
    count += 1;
  });
  return count;
}

/**
 * Checks the number of entries in URLSearchParams against a numeric threshold.
 *
 * @param source The URLSearchParams instance to inspect.
 * @param oper The size operation to perform (e.g. 'size_equals', 'size_greater_than').
 * @param size The numeric threshold to compare against.
 * @returns True if the size comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const source = new URLSearchParams('tag=ts&tag=ai&sort=desc');
 * const sizeA = 3;
 * const sizeB = 2;
 *
 * querySize(source, 'size_equals', sizeA); // true
 * querySize(source, 'size_greater_than', sizeB); // true
 *
 * @remarks
 * Supported Operators:
 * - **size_equals**
 * - **size_greater_than**
 * - **size_greater_than_or_equals**
 * - **size_less_than**
 * - **size_less_than_or_equals**
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
