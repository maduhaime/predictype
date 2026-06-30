import { ErrorStateEnum, ErrorStateOper } from '../../enums/errors.js';

type ErrorWithCause = Error & { cause?: unknown };

/**
 * Checks the state of an Error using the specified operation.
 *
 * @param source The Error to check.
 * @param oper The state operation to perform (e.g. 'has_stack', 'has_cause').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const err = new Error('boom');
 *
 * errorState(err, 'has_stack'); // true
 * errorState(new AggregateError([], 'many'), 'is_aggregate_error'); // true
 *
 * @remarks
 * Supported Operators:
 * - **HAS_CAUSE**: Error has a defined `cause`
 * - **HAS_STACK**: Error has a non-empty `stack`
 * - **IS_AGGREGATE_ERROR**: Error is an AggregateError
 */
export function errorState(source: Error, oper: ErrorStateOper): boolean {
  const aggregateErrorCtor = (globalThis as { AggregateError?: unknown }).AggregateError;

  const operators: Record<ErrorStateEnum, (a: Error) => boolean> = {
    [ErrorStateEnum.HAS_CAUSE]: (a) => 'cause' in a && (a as ErrorWithCause).cause !== undefined,
    [ErrorStateEnum.HAS_STACK]: (a) => typeof a.stack === 'string' && a.stack.length > 0,
    [ErrorStateEnum.IS_AGGREGATE_ERROR]: (a) =>
      typeof aggregateErrorCtor === 'function' && a instanceof (aggregateErrorCtor as new (...args: any[]) => Error),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ErrorState operation: ${oper}`);
  return fn(source);
}
