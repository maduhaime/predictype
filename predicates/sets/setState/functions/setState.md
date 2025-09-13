[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setState](../README.md) / setState

# Function: setState()

> **setState**\<`T`\>(`source`, `oper`): `boolean`

Defined in: [predicates/sets/setState.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/sets/setState.ts#L19)

Checks the state of a set (empty or not) using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetStateOper`](../../../../sets/enums/type-aliases/SetStateOper.md)

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
