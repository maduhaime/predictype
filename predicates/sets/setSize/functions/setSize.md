[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setSize](../README.md) / setSize

# Function: setSize()

> **setSize**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setSize.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/sets/setSize.ts#L19)

Checks the size of a set using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetSizeOper`](../../../../sets/enums/type-aliases/SetSizeOper.md)

The size operation to perform (e.g. 'equals', 'greater_than').

### target

`number`

The size to compare against.

## Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = new Set([1, 2, 3]);

setSize(a, 'equals', 3); // true
setSize(a, 'greater_than', 2); // true
```
