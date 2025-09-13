[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/promises/promiseState](../README.md) / promiseState

# Function: promiseState()

> **promiseState**\<`T`\>(`wrapper`, `oper`): `boolean`

Defined in: [predicates/promises/promiseState.ts:49](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/promises/promiseState.ts#L49)

Checks the state of a wrapped Promise using the specified operation.

Note: This predicate requires a wrapper or custom Promise implementation that exposes state. Standard JS Promises do not expose their state synchronously.

## Type Parameters

### T

`T`

## Parameters

### wrapper

[`PromiseWithState`](../type-aliases/PromiseWithState.md)\<`T`\>

The wrapped Promise with state.

### oper

[`PromiseStateOper`](../../../../promises/enums/type-aliases/PromiseStateOper.md)

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
