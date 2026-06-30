import { ErrorMessageEnum, ErrorMessageOper } from '../../enums/errors.js';

/**
 * Checks the message of an Error using the specified operation.
 *
 * @param source The Error to check.
 * @param oper The message operation to perform (e.g. 'equals', 'includes').
 * @param target The string to compare the error message against.
 * @returns True if the message check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const err = new Error('Network timeout');
 *
 * errorMessage(err, 'includes', 'timeout'); // true
 * errorMessage(err, 'starts_with', 'Network'); // true
 *
 * @remarks
 * Supported Operators:
 * - **EQUALS**: Error message equals the given string
 * - **STARTS_WITH**: Error message starts with the string
 * - **ENDS_WITH**: Error message ends with the string
 * - **INCLUDES**: Error message includes the string
 * - **EXCLUDES**: Error message does not include the string
 */
export function errorMessage(source: Error, oper: ErrorMessageOper, target: string): boolean {
  const operators: Record<ErrorMessageEnum, (a: Error, b: string) => boolean> = {
    [ErrorMessageEnum.EQUALS]: (a, b) => a.message === b,
    [ErrorMessageEnum.STARTS_WITH]: (a, b) => a.message.startsWith(b),
    [ErrorMessageEnum.ENDS_WITH]: (a, b) => a.message.endsWith(b),
    [ErrorMessageEnum.INCLUDES]: (a, b) => a.message.includes(b),
    [ErrorMessageEnum.EXCLUDES]: (a, b) => !a.message.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ErrorMessage operation: ${oper}`);
  return fn(source, target);
}
