[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arraySequence](../README.md) / arraySequence

# Function: arraySequence()

> **arraySequence**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arraySequence.ts:29](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/arrays/arraySequence.ts#L29)

Checks if the source array contains, starts with, or ends with a given subsequence, using the specified operation.

## Type Parameters

### T

`T`

Type of the array elements.

## Parameters

### source

`T`[]

The source array.

### oper

[`ArraySequenceOper`](../../../../arrays/enums/type-aliases/ArraySequenceOper.md)

The sequence operation to perform (e.g. 'contains_subsequence', 'starts_with', 'ends_with').

### target

`T`[]

The target subsequence array to check against the source.

## Returns

`boolean`

True if the sequence check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3];
const arr3 = [1, 2, 3];
const arr4 = [1, 2];

arraySequence(arr1, 'contains_subsequence', arr2); // true
arraySequence(arr3, 'starts_with', arr4); // true
```

## Remarks

Supported Operators:
- **CONTAINS_SUBSEQUENCE**: Source contains target as a contiguous subsequence
- **STARTS_WITH**: Source starts with target
- **ENDS_WITH**: Source ends with target
