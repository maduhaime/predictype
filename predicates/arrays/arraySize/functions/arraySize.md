[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arraySize](../README.md) / arraySize

# Function: arraySize()

> **arraySize**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arraySize.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/arrays/arraySize.ts#L21)

Checks the size of an array against a target value, using the specified operation.

## Parameters

### source

`any`[]

The source array.

### oper

[`ArraySizeOper`](../../../../arrays/enums/type-aliases/ArraySizeOper.md)

The size operation to perform (e.g. 'equals', 'greater_than').

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

arraySize(arr, 'equals', len1); // true
arraySize(arr, 'greater_than', len2); // true
```
