import { BooleanStateEnum, BooleanStateOper } from '../../enums/booleans.js';

/**
 * Checks the state of a boolean value (true or false) using the specified operation.
 *
 * @param value The boolean value to check.
 * @param oper The operation to perform (e.g. 'is_true', 'is_false').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const valueTrue = true;
 * const valueFalse = false;
 *
 * booleanState(valueTrue, 'is_true'); // true
 * booleanState(valueFalse, 'is_false'); // true
 *
 * @remarks
 * Supported Operators
 * | Operator   | Description        |
 * |------------|-------------------|
 * | IS_TRUE    | value === true     |
 * | IS_FALSE   | value === false    |
 */
export function booleanState(value: boolean, oper: BooleanStateOper): boolean {
  const operators: Record<BooleanStateEnum, (v: boolean) => boolean> = {
    [BooleanStateEnum.IS_FALSE]: (v) => v === false,
    [BooleanStateEnum.IS_TRUE]: (v) => v === true,
  };

  const enumOper = typeof oper === 'string' ? (oper as BooleanStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BooleanState operation: ${oper}`);
  return fn(value);
}
