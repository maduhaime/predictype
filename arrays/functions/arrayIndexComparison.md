[**predictype v0.8.1**](../../README.md)

***

[predictype](../../modules.md) / [arrays](../README.md) / arrayIndexComparison

# Function: arrayIndexComparison()

> **arrayIndexComparison**\<`T`\>(`source`, `oper`, `index`, `target`): `boolean`

Defined in: [predicates/arrays/arrayIndexComparison.ts:34](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/arrays/arrayIndexComparison.ts#L34)

Compares the value at a specific index in an array with a target value, using the specified operation.

## Type Parameters

### T

`T`

Type of the array elements.

## Parameters

### source

`T`[]

The source array.

### oper

[`ArrayIndexComparisonOper`](../enums/type-aliases/ArrayIndexComparisonOper.md)

The comparison operation to perform (e.g. 'at_index_equals').

### index

`number`

The index in the array to compare.

### target

`T`

The value to compare against the value at the given index.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr = [10, 20, 30];
const idx1 = 1;
const idx2 = 2;
const val1 = 20;
const val2 = 25;

arrayIndexComparison(arr, 'at_index_equals', idx1, val1); // true
arrayIndexComparison(arr, 'at_index_greater_than', idx2, val2); // true
```

## Remarks

Supported Operators:
- **AT_INDEX_EQUALS**: arr[index] === value
- **AT_INDEX_NOT_EQUALS**: arr[index] !== value
- **AT_INDEX_GREATER_THAN**: arr[index] > value
- **AT_INDEX_GREATER_THAN_OR_EQUALS**: arr[index] >= value
- **AT_INDEX_LESS_THAN**: arr[index] < value
- **AT_INDEX_LESS_THAN_OR_EQUALS**: arr[index] <= value
