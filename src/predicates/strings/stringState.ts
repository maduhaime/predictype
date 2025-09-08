import { StringStateEnum, StringStateOper } from './enums';

/**
 * Checks the state of a string (empty, not empty, blank, not blank) using the specified operation.
 *
 * @param source The string to check.
 * @param oper The state operation to perform (e.g. 'is_empty', 'is_not_blank').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const str = '';
 * const str2 = '   ';
 *
 * stringState(str, 'is_empty'); // true
 * stringState(str2, 'is_blank'); // true
 */
export function stringState(source: string, oper: StringStateOper): boolean {
  const operators: Record<StringStateEnum, (a: string) => boolean> = {
    [StringStateEnum.IS_EMPTY]: (a) => a.length === 0,
    [StringStateEnum.IS_NOT_EMPTY]: (a) => a.length > 0,
    [StringStateEnum.IS_BLANK]: (a) => /^\s*$/.test(a),
    [StringStateEnum.IS_NOT_BLANK]: (a) => !/^\s*$/.test(a),
  };

  const enumOper = typeof oper === 'string' ? (oper as StringStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringState operation: ${oper}`);
  return fn(source);
}
