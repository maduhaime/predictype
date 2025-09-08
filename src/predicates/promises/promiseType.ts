import { PromiseTypeEnum, PromiseTypeOper } from './enums';

/**
 * Checks if a value is a Promise or an async function using the specified operation.
 *
 * @param source The value to check.
 * @param oper The type operation to perform (e.g. 'is_promise', 'is_async_function').
 * @returns True if the type check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const p = Promise.resolve(42);
 * async function foo() {}
 *
 * promiseType(p, 'is_promise'); // true
 * promiseType(foo, 'is_async_function'); // true
 */
export function promiseType(source: unknown, oper: PromiseTypeOper): boolean {
  const operators: Record<PromiseTypeEnum, (a: unknown) => boolean> = {
    [PromiseTypeEnum.IS_PROMISE]: (a) => typeof a === 'object' && a !== null && typeof (a as any).then === 'function',
    [PromiseTypeEnum.IS_ASYNC_FUNCTION]: (a) => typeof a === 'function' && a.constructor.name === 'AsyncFunction',
  };
  const enumOper = typeof oper === 'string' ? (oper as PromiseTypeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown PromiseType operation: ${oper}`);
  return fn(source);
}
