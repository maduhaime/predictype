[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arraySize](../README.md) / arraySize

# Function: arraySize()

> **arraySize**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arraySize.ts:29](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/arrays/arraySize.ts#L29)

Checks the size of an array against a target value, using the specified operation.

## Parameters

### source

`any`[]

The source array.

### oper

[`ArraySizeOper`](../../../../arrays/enums/type-aliases/ArraySizeOper.md)

The size operation to perform (e.g. 'length_equals', 'length_greater_than').

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

arraySize(arr, 'length_equals', len1); // true
arraySize(arr, 'length_greater_than', len2); // true
```

## Remarks

Supported Operators:
- **SIZE_EQUALS**: arr.length === target
- **SIZE_GREATER_THAN**: arr.length > target
- **SIZE_GREATER_THAN_OR_EQUALS**: arr.length >= target
- **SIZE_LESS_THAN**: arr.length < target
- **SIZE_LESS_THAN_OR_EQUALS**: arr.length <= target
