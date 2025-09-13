[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayComparison](../README.md) / arrayComparison

# Function: arrayComparison()

> **arrayComparison**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayComparison.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/arrays/arrayComparison.ts#L22)

Compares two arrays for strict equality or inequality based on the specified operation.

## Type Parameters

### T

`T`

Type of the array elements.

## Parameters

### source

`T`[]

The source array to compare.

### oper

[`ArrayComparisonOper`](../../../../arrays/enums/type-aliases/ArrayComparisonOper.md)

The comparison operation to perform (EQUALS or NOT_EQUALS).

### target

`T`[]

The target array to compare against the source.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];

arrayComparison(arr1, 'equals', arr2); // true
arrayComparison(arr1, 'not_equals', arr3); // true
```
