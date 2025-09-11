import { NumberComparisonEnum, NumberComparisonOper } from '../../enums/numbers';

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
 * numberComparison(a, 'less_than', b); // true
 * numberComparison(a, 'greater_than', b); // false
 * numberComparison(a, 'equals', 5); // true
 */
export function numberComparison(source: number, oper: NumberComparisonOper, target: number): boolean {
  const operators: Record<NumberComparisonEnum, (a: number, b: number) => boolean> = {
    [NumberComparisonEnum.EQUALS]: (a, b) => a === b,
    [NumberComparisonEnum.NOT_EQUALS]: (a, b) => a !== b,
    [NumberComparisonEnum.GREATER_THAN]: (a, b) => a > b,
    [NumberComparisonEnum.GREATER_OR_EQUAL]: (a, b) => a >= b,
    [NumberComparisonEnum.LESS_THAN]: (a, b) => a < b,
    [NumberComparisonEnum.LESS_OR_EQUAL]: (a, b) => a <= b,
  };

  const enumOper = typeof oper === 'string' ? (oper as NumberComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown NumberComparison operation: ${oper}`);
  return fn(source, target);
}
