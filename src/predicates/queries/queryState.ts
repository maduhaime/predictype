import { QueryStateEnum, QueryStateOper } from '../../enums/queries.js';

function countEntries(source: URLSearchParams): number {
  let count = 0;

  source.forEach(() => {
    count += 1;
  });
  return count;
}

/**
 * Checks whether URLSearchParams is empty or not empty.
 *
 * @param source The URLSearchParams instance to inspect.
 * @param oper The state operation to perform ('is_empty' or 'is_not_empty').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const sourceA = new URLSearchParams('q=predicate');
 * const sourceB = new URLSearchParams('');
 *
 * queryState(sourceA, 'is_not_empty'); // true
 * queryState(sourceB, 'is_empty'); // true
 *
 * @remarks
 * Supported Operators:
 * - **is_empty**
 * - **is_not_empty**
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
