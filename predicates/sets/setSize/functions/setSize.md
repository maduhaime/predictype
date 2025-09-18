[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setSize](../README.md) / setSize

# Function: setSize()

> **setSize**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setSize.ts:27](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/sets/setSize.ts#L27)

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

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

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

setSize(a, 'size_equals', 3); // true
setSize(a, 'size_greater_than', 2); // true
```

## Remarks

Supported Operators:
- **SIZE_EQUALS**: Set size equals the given value
- **SIZE_GREATER_THAN**: Set size is greater than value
- **SIZE_GREATER_THAN_OR_EQUALS**: Set size is greater or equal
- **SIZE_LESS_THAN**: Set size is less than value
- **SIZE_LESS_THAN_OR_EQUALS**: Set size is less or equal
