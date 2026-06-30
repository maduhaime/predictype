import { ErrorNameEnum, ErrorNameOper } from '../../enums/errors.js';

/**
 * Checks the name of an Error using the specified operation.
 *
 * @param source The Error to check.
 * @param oper The name operation to perform (e.g. 'equals', 'starts_with').
 * @param target The string to compare the error name against.
 * @returns True if the name check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const err = new TypeError('boom');
 *
 * errorName(err, 'equals', 'TypeError'); // true
 * errorName(err, 'ends_with', 'Error'); // true
 * errorName(err, 'equals', 'TypeError'); // true
 *
 * @remarks
 * Supported Operators:
 * - **EQUALS**: Error name equals the given string
 * - **STARTS_WITH**: Error name starts with the string
 * - **ENDS_WITH**: Error name ends with the string
 * - **INCLUDES**: Error name includes the string
 * - **EXCLUDES**: Error name does not include the string
 */
export function errorName(source: Error, oper: ErrorNameOper, target: string): boolean {
  const operators: Record<ErrorNameEnum, (a: Error, b: string) => boolean> = {
    [ErrorNameEnum.EQUALS]: (a, b) => a.name === b,
    [ErrorNameEnum.STARTS_WITH]: (a, b) => a.name.startsWith(b),
    [ErrorNameEnum.ENDS_WITH]: (a, b) => a.name.endsWith(b),
    [ErrorNameEnum.INCLUDES]: (a, b) => a.name.includes(b),
    [ErrorNameEnum.EXCLUDES]: (a, b) => !a.name.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ErrorName operation: ${oper}`);
  return fn(source, target);
}
