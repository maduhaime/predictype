/**
 * Enums and types for promise predicate operations.
 *
 * @module promises/enums
 */
export enum PromiseTypeEnum {
  IS_PROMISE = 'is_promise',
  IS_ASYNC_FUNCTION = 'is_async_function',
}

export type PromiseTypeOper = PromiseTypeEnum | `${PromiseTypeEnum}`;

export enum PromiseStateEnum {
  IS_PENDING = 'is_pending',
  IS_FULFILLED = 'is_fulfilled',
  IS_REJECTED = 'is_rejected',
}

export type PromiseStateOper = PromiseStateEnum | `${PromiseStateEnum}`;
