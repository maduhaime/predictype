[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/promises/promiseType](../README.md) / promiseType

# Function: promiseType()

> **promiseType**(`source`, `oper`): `boolean`

Defined in: [predicates/promises/promiseType.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/promises/promiseType.ts#L19)

Checks if a value is a Promise or an async function using the specified operation.

## Parameters

### source

`unknown`

The value to check.

### oper

[`PromiseTypeOper`](../../../../promises/enums/type-aliases/PromiseTypeOper.md)

The type operation to perform (e.g. 'is_promise', 'is_async_function').

## Returns

`boolean`

True if the type check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const p = Promise.resolve(42);
async function foo() {}

promiseType(p, 'is_promise'); // true
promiseType(foo, 'is_async_function'); // true
```
