[**predictype v0.7.4**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/promises](../README.md) / promiseState

# Function: promiseState()

> **promiseState**\<`T`\>(`wrapper`, `oper`): `boolean`

Defined in: [predicates/promises/promiseState.ts:55](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/promises/promiseState.ts#L55)

Checks the state of a wrapped Promise using the specified operation.

Note: This predicate requires a wrapper or custom Promise implementation that exposes state. Standard JS Promises do not expose their state synchronously.

## Type Parameters

### T

`T`

## Parameters

### wrapper

[`PromiseWithState`](../promiseState/type-aliases/PromiseWithState.md)\<`T`\>

The wrapped Promise with state.

### oper

[`PromiseStateOper`](../../../promises/enums/type-aliases/PromiseStateOper.md)

The state operation to perform (e.g. 'is_pending', 'is_fulfilled').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const p = Promise.resolve(42);
const wrapped = wrapPromise(p);

promiseState(wrapped, 'is_pending'); // true (immediately after wrapping)
```

## Remarks

Supported Operators:
- **IS_PENDING**: Promise is pending
- **IS_FULFILLED**: Promise is fulfilled
- **IS_REJECTED**: Promise is rejected
