[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayIndexComparison](../README.md) / arrayIndexComparison

# Function: arrayIndexComparison()

> **arrayIndexComparison**\<`T`\>(`source`, `oper`, `index`, `target`): `boolean`

Defined in: [predicates/arrays/arrayIndexComparison.ts:25](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/arrays/arrayIndexComparison.ts#L25)

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

[`ArrayIndexComparisonOper`](../../../../arrays/enums/type-aliases/ArrayIndexComparisonOper.md)

The comparison operation to perform (e.g. 'value_at_index_equals').

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

arrayIndexComparison(arr, 'value_at_index_equals', idx1, val1); // true
arrayIndexComparison(arr, 'value_at_index_greater_than', idx2, val2); // true
```
