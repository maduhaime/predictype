[**predictype v0.7.4**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/sets](../README.md) / setState

# Function: setState()

> **setState**\<`T`\>(`source`, `oper`): `boolean`

Defined in: [predicates/sets/setState.ts:24](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/sets/setState.ts#L24)

Checks the state of a set (empty or not) using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetStateOper`](../../../sets/enums/type-aliases/SetStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_empty').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = new Set();
const b = new Set([1]);

setState(a, 'is_empty'); // true
setState(b, 'is_not_empty'); // true
```

## Remarks

Supported Operators:
- **IS_EMPTY**: Set is empty
- **IS_NOT_EMPTY**: Set is not empty
