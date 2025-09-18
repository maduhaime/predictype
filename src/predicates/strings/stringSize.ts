import { StringSizeEnum, StringSizeOper } from '../../enums/strings.js';

/**
 * Checks the size (length) of a string using the specified operation.
 *
 * @param source The string to check.
 * @param oper The size operation to perform (e.g. 'length_equals', 'length_greater_than').
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
 * stringSize(str, 'length_equals', len1); // true
 * stringSize(str, 'length_greater_than', len2); // true
 *
 * @remarks
 * Supported Operators:
 * - **SIZE_EQUALS**: String length equals the given value
 * - **SIZE_GREATER_THAN**: String length is greater than value
 * - **SIZE_GREATER_THAN_OR_EQUALS**: String length is greater or equal
 * - **SIZE_LESS_THAN**: String length is less than value
 * - **SIZE_LESS_THAN_OR_EQUALS**: String length is less or equal
 */
export function stringSize(source: string, oper: StringSizeOper, target: number): boolean {
  const operators: Record<StringSizeEnum, (a: string, b: number) => boolean> = {
    [StringSizeEnum.SIZE_EQUALS]: (a, b) => a.length === b,
    [StringSizeEnum.SIZE_GREATER_THAN]: (a, b) => a.length > b,
    [StringSizeEnum.SIZE_GREATER_THAN_OR_EQUALS]: (a, b) => a.length >= b,
    [StringSizeEnum.SIZE_LESS_THAN]: (a, b) => a.length < b,
    [StringSizeEnum.SIZE_LESS_THAN_OR_EQUALS]: (a, b) => a.length <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as StringSizeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown StringSize operation: ${oper}`);
  return fn(source, target);
}
