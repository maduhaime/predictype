import { FunctionNameEnum, FunctionNameOper } from './enums';

/**
 * Checks the name of a function using the specified operation.
 *
 * @param source The function to check.
 * @param oper The name operation to perform (e.g. 'name_equals', 'name_starts_with').
 * @param name The string to compare the function name against.
 * @returns True if the name check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const fn1 = function foo() {};
 * const fn2 = function barTest() {};
 * const name1 = 'foo';
 * const name2 = 'bar';
 *
 * functionName(fn1, 'name_equals', name1); // true
 * functionName(fn2, 'name_starts_with', name2); // true
 */
export function functionName(source: Function, oper: FunctionNameOper, name: string): boolean {
  const operators: Record<FunctionNameEnum, (a: Function, b: string) => boolean> = {
    [FunctionNameEnum.NAME_EQUALS]: (a, b) => a.name === b,
    [FunctionNameEnum.NAME_STARTS_WITH]: (a, b) => a.name.startsWith(b),
    [FunctionNameEnum.NAME_ENDS_WITH]: (a, b) => a.name.endsWith(b),
    [FunctionNameEnum.NAME_INCLUDES]: (a, b) => a.name.includes(b),
    [FunctionNameEnum.NAME_EXCLUDES]: (a, b) => !a.name.includes(b),
  };
  const enumOper = typeof oper === 'string' ? (oper as FunctionNameEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown FunctionName operation: ${oper}`);
  return fn(source, name);
}
