import { FunctionArityEnum, FunctionArityOper } from './enums';

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
