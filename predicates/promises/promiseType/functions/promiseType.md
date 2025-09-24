[**predictype v0.7.5**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/promises/promiseType](../README.md) / promiseType

# Function: promiseType()

> **promiseType**(`source`, `oper`): `boolean`

Defined in: [predicates/promises/promiseType.ts:24](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/promises/promiseType.ts#L24)

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

## Remarks

Supported Operators:
- **IS_PROMISE**: Value is a Promise
- **IS_ASYNC_FUNCTION**: Value is an async function
