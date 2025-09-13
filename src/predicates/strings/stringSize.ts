import { StringSizeEnum, StringSizeOper } from '../../enums/strings.js';

/**
 * Checks the size (length) of a string using the specified operation.
 *
 * @param source The string to check.
 * @param oper The size operation to perform (e.g. 'equals', 'greater_than').
 * @param target The length to compare against.
 * @returns True if the size check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const str = 'hello';
 * const len1 = 5;
 * const len2 = 3;
 *
 * stringSize(str, 'equals', len1); // true
 * stringSize(str, 'greater_than', len2); // true
 */
export function stringSize(source: string, oper: StringSizeOper, target: number): boolean {
  const operators: Record<StringSizeEnum, (a: string, b: number) => boolean> = {
    [StringSizeEnum.EQUALS]: (a, b) => a.length === b,
    [StringSizeEnum.GREATER_THAN]: (a, b) => a.length > b,
    [StringSizeEnum.GREATER_THAN_OR_EQUALS]: (a, b) => a.length >= b,
    [StringSizeEnum.LESS_THAN]: (a, b) => a.length < b,
    [StringSizeEnum.LESS_THAN_OR_EQUALS]: (a, b) => a.length <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as StringSizeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringSize operation: ${oper}`);
  return fn(source, target);
}
