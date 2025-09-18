import { BooleanComparisonEnum, BooleanComparisonOper } from '../../enums/booleans.js';

/**
 * Compares a boolean value to a target boolean using the specified comparison operation.
 *
 * @param value The boolean value to compare.
 * @param oper The comparison operation to perform (e.g. 'equals', 'not_equals').
 * @param target The boolean value to compare against.
 * @returns True if the comparison is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const valueTrue = true;
 * const valueFalse = false;
 *
 * booleanComparison(valueTrue, 'equals', true); // true
 * booleanComparison(valueFalse, 'equals', true); // false
 * booleanComparison(valueTrue, 'not_equals', false); // true
 * booleanComparison(valueFalse, 'not_equals', false); // false
 *
 * @remarks
 * Supported Operators:
 * - **EQUALS**: value === target
 * - **NOT_EQUALS**: value !== target
 */
export function booleanComparison(value: boolean, oper: BooleanComparisonOper, target: boolean): boolean {
  const operators: Record<BooleanComparisonEnum, (v: boolean) => boolean> = {
    [BooleanComparisonEnum.EQUALS]: (v) => v === target,
    [BooleanComparisonEnum.NOT_EQUALS]: (v) => v !== target,
  };

  const enumOper = typeof oper === 'string' ? (oper as BooleanComparisonEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BooleanComparison operation: ${oper}`);
  return fn(value);
}
