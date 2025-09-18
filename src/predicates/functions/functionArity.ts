import { FunctionArityEnum, FunctionArityOper } from '../../enums/functions.js';

/**
 * Checks the arity (number of parameters) of a function using the specified operation.
 *
 * @param source The function to check.
 * @param oper The arity operation to perform (e.g. 'arity_equals', 'arity_greater_than').
 * @param arity The arity (number of parameters) to compare against.
 * @returns True if the arity check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const fn1 = function(a, b) {};
 * const fn2 = function(a, b, c) {};
 * const arity2 = 2;
 *
 * functionArity(fn1, 'arity_equals', arity2); // true
 * functionArity(fn2, 'arity_greater_than', arity2); // true
 *
 * @remarks
 * Supported Operators:
 * - **EQUALS**: Function arity equals the given value
 * - **NOT_EQUALS**: Function arity does not equal the value
 * - **GREATER_THAN**: Function arity is greater than the value
 * - **GREATER_OR_EQUAL**: Function arity is greater or equal to value
 * - **LESS_THAN**: Function arity is less than the value
 * - **LESS_OR_EQUAL**: Function arity is less or equal to value
 */
export function functionArity(source: Function, oper: FunctionArityOper, arity: number): boolean {
  const operators: Record<FunctionArityEnum, (a: Function, b: number) => boolean> = {
    [FunctionArityEnum.EQUALS]: (a, b) => a.length === b,
    [FunctionArityEnum.NOT_EQUALS]: (a, b) => a.length !== b,
    [FunctionArityEnum.GREATER_THAN]: (a, b) => a.length > b,
    [FunctionArityEnum.GREATER_OR_EQUAL]: (a, b) => a.length >= b,
    [FunctionArityEnum.LESS_THAN]: (a, b) => a.length < b,
    [FunctionArityEnum.LESS_OR_EQUAL]: (a, b) => a.length <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as FunctionArityEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown FunctionArity operation: ${oper}`);
  return fn(source, arity);
}
