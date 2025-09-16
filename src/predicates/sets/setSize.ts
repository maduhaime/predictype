import { SetSizeEnum, SetSizeOper } from '../../enums/sets.js';

/**
 * Checks the size of a set using the specified operation.
 *
 * @param source The set to check.
 * @param oper The size operation to perform (e.g. 'size_equals', 'size_greater_than').
 * @param target The size to compare against.
 * @returns True if the size check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = new Set([1, 2, 3]);
 *
 * setSize(a, 'size_equals', 3); // true
 * setSize(a, 'size_greater_than', 2); // true
 *
 * @remarks
 * Supported Operators
 * | Operator                        | Description                        |
 * |-------------------------------|-------------------------------------|
 * | SIZE_EQUALS                    | Set size equals the given value     |
 * | SIZE_GREATER_THAN              | Set size is greater than value      |
 * | SIZE_GREATER_THAN_OR_EQUALS    | Set size is greater or equal        |
 * | SIZE_LESS_THAN                 | Set size is less than value         |
 * | SIZE_LESS_THAN_OR_EQUALS       | Set size is less or equal           |
 */
export function setSize<T>(source: Set<T>, oper: SetSizeOper, target: number): boolean {
  const operators: Record<SetSizeEnum, (a: Set<T>, b: number) => boolean> = {
    [SetSizeEnum.SIZE_EQUALS]: (a, b) => a.size === b,
    [SetSizeEnum.SIZE_GREATER_THAN]: (a, b) => a.size > b,
    [SetSizeEnum.SIZE_GREATER_THAN_OR_EQUALS]: (a, b) => a.size >= b,
    [SetSizeEnum.SIZE_LESS_THAN]: (a, b) => a.size < b,
    [SetSizeEnum.SIZE_LESS_THAN_OR_EQUALS]: (a, b) => a.size <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as SetSizeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown SetSize operation: ${oper}`);
  return fn(source, target);
}
