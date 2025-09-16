import { FunctionNameEnum, FunctionNameOper } from '../../enums/functions.js';

/**
 * Checks the name of a function using the specified operation.
 *
 * @param source The function to check.
 * @param oper The name operation to perform (e.g. 'equals', 'starts_with').
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
 * functionName(fn1, 'equals', name1); // true
 * functionName(fn2, 'starts_with', name2); // true
 *
 * @remarks
 * Supported Operators
 * | Operator      | Description                                 |
 * |---------------|---------------------------------------------|
 * | EQUALS        | Function name equals the given string        |
 * | STARTS_WITH   | Function name starts with the string         |
 * | ENDS_WITH     | Function name ends with the string           |
 * | INCLUDES      | Function name includes the string            |
 * | EXCLUDES      | Function name does not include the string    |
 */
export function functionName(source: Function, oper: FunctionNameOper, name: string): boolean {
  const operators: Record<FunctionNameEnum, (a: Function, b: string) => boolean> = {
    [FunctionNameEnum.EQUALS]: (a, b) => a.name === b,
    [FunctionNameEnum.STARTS_WITH]: (a, b) => a.name.startsWith(b),
    [FunctionNameEnum.ENDS_WITH]: (a, b) => a.name.endsWith(b),
    [FunctionNameEnum.INCLUDES]: (a, b) => a.name.includes(b),
    [FunctionNameEnum.EXCLUDES]: (a, b) => !a.name.includes(b),
  };

  const enumOper = typeof oper === 'string' ? (oper as FunctionNameEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown FunctionName operation: ${oper}`);
  return fn(source, name);
}
