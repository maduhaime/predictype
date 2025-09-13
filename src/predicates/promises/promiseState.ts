import { PromiseStateEnum, PromiseStateOper } from '../../enums/promises.js';

export type PromiseWithState<T> = {
  promise: Promise<T>;
  state: PromiseStateOper;
};

export function wrapPromise<T>(p: Promise<T>): PromiseWithState<T> {
  const stateObj = { value: PromiseStateEnum.IS_PENDING as PromiseStateOper };

  const wrapped = (async () => {
    try {
      const result = await p;
      stateObj.value = PromiseStateEnum.IS_FULFILLED;
      return result;
    } catch (err) {
      stateObj.value = PromiseStateEnum.IS_REJECTED;
      throw err;
    }
  })();

  // Use a getter for state so it always reflects the latest value
  return Object.defineProperty({ promise: wrapped }, 'state', {
    get() {
      return stateObj.value;
    },
    enumerable: true,
    configurable: false,
  }) as PromiseWithState<T>;
}

/**
 * Checks the state of a wrapped Promise using the specified operation.
 *
 * Note: This predicate requires a wrapper or custom Promise implementation that exposes state. Standard JS Promises do not expose their state synchronously.
 *
 * @param wrapper The wrapped Promise with state.
 * @param oper The state operation to perform (e.g. 'is_pending', 'is_fulfilled').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const p = Promise.resolve(42);
 * const wrapped = wrapPromise(p);
 *
 * promiseState(wrapped, 'is_pending'); // true (immediately after wrapping)
 */
export function promiseState<T>(wrapper: PromiseWithState<T>, oper: PromiseStateOper): boolean {
  const operators: Record<PromiseStateEnum, (w: PromiseWithState<T>) => boolean> = {
    [PromiseStateEnum.IS_PENDING]: (w) => w.state === PromiseStateEnum.IS_PENDING,
    [PromiseStateEnum.IS_FULFILLED]: (w) => w.state === PromiseStateEnum.IS_FULFILLED,
    [PromiseStateEnum.IS_REJECTED]: (w) => w.state === PromiseStateEnum.IS_REJECTED,
  };

  const enumOper = typeof oper === 'string' ? (oper as PromiseStateEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown PromiseState operation: ${oper}`);
  return fn(wrapper);
}
