import { SetStateEnum, SetStateOper } from '../../enums/sets.js';

/**
 * Checks the state of a set using the specified operation.
 *
 * @param source The set to check.
 * @param oper The state operation to perform (e.g. 'is_empty', 'has_primitives').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = new Set();
 * const b = new Set([1]);
 * const c = new Set([1, 'hello', { id: 1 }]);
 *
 * setState(a, 'is_empty'); // true
 * setState(b, 'is_not_empty'); // true
 * setState(c, 'has_primitives'); // true
 * setState(c, 'has_objects'); // true
 *
 * @remarks
 * Supported Operators:
 * - **IS_EMPTY**: Set is empty
 * - **IS_NOT_EMPTY**: Set is not empty
 * - **HAS_PRIMITIVES**: Set contains primitive values (string, number, boolean, null, undefined, symbol, bigint)
 * - **HAS_OBJECTS**: Set contains object values (objects, arrays, functions)
 */
export function setState<T>(source: Set<T>, oper: SetStateOper): boolean {
  const operators: Record<SetStateEnum, (a: Set<T>) => boolean> = {
    [SetStateEnum.IS_EMPTY]: (a) => a.size === 0,
    [SetStateEnum.IS_NOT_EMPTY]: (a) => a.size > 0,
    [SetStateEnum.HAS_PRIMITIVES]: (a) => {
      for (const value of a) {
        const type = typeof value;
        if (type === 'string' || type === 'number' || type === 'boolean' || 
            type === 'symbol' || type === 'bigint' || value === null || value === undefined) {
          return true;
        }
      }
      return false;
    },
    [SetStateEnum.HAS_OBJECTS]: (a) => {
      for (const value of a) {
        const type = typeof value;
        if (type === 'object' && value !== null || type === 'function') {
          return true;
        }
      }
      return false;
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as SetStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetState operation: ${oper}`);
  return fn(source);
}
