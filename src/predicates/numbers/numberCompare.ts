import { NumberCompareEnum, NumberCompareOper } from './enums';

/**
 * Compares two numbers using the specified operation.
 *
 * @param source The first number.
 * @param oper The comparison operation to perform (e.g. 'greater_than', 'equals').
 * @param target The second number.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const a = 5;
 * const b = 10;
 *
 * numberCompare(a, 'less_than', b); // true
 * numberCompare(a, 'greater_than', b); // false
 * numberCompare(a, 'equals', 5); // true
 */
export function numberCompare(source: number, oper: NumberCompareOper, target: number): boolean {
  const operators: Record<NumberCompareEnum, (a: number, b: number) => boolean> = {
    [NumberCompareEnum.EQUALS]: (a, b) => a === b,
    [NumberCompareEnum.NOT_EQUALS]: (a, b) => a !== b,
    [NumberCompareEnum.GREATER_THAN]: (a, b) => a > b,
    [NumberCompareEnum.GREATER_OR_EQUAL]: (a, b) => a >= b,
    [NumberCompareEnum.LESS_THAN]: (a, b) => a < b,
    [NumberCompareEnum.LESS_OR_EQUAL]: (a, b) => a <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as NumberCompareEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown NumberCompare operation: ${oper}`);
  return fn(source, target);
}
