[**predictype v0.13.0**](../../README.md)

***

[predictype](../../modules.md) / [arrays](../README.md) / arraySize

# Function: arraySize()

> **arraySize**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arraySize.ts:29](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/arrays/arraySize.ts#L29)

Checks the size of an array against a target value, using the specified operation.

## Parameters

### source

`any`[]

The source array.

### oper

[`ArraySizeOper`](../enums/type-aliases/ArraySizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

### target

`number`

The target size to compare against the array's length.

## Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr = [1, 2, 3];
const len1 = 3;
const len2 = 2;

arraySize(arr, 'size_equals', len1); // true
arraySize(arr, 'size_greater_than', len2); // true
```

## Remarks

Supported Operators:
- **SIZE_EQUALS**: arr.length === target
- **SIZE_GREATER_THAN**: arr.length > target
- **SIZE_GREATER_THAN_OR_EQUALS**: arr.length >= target
- **SIZE_LESS_THAN**: arr.length < target
- **SIZE_LESS_THAN_OR_EQUALS**: arr.length <= target
