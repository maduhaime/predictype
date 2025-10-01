[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayComparison](../README.md) / arrayComparison

# Function: arrayComparison()

> **arrayComparison**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayComparison.ts:34](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/arrays/arrayComparison.ts#L34)

Compares two arrays using a variety of comparison operations.

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

The comparison operation to perform (EQUALS, NOT_EQUALS, SAME_MEMBERS, SET_EQUALS, SET_NOT_EQUALS).

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
arrayComparison([1, 2, 3], 'equals', [1, 2, 3]); // true
arrayComparison([1, 2, 3], 'equals', [3, 2, 1]); // false
arrayComparison([1, 2, 3], 'not_equals', [1, 2, 4]); // true
arrayComparison([1, 2, 2], 'same_members', [2, 1, 2]); // true
arrayComparison([1, 2, 2], 'same_members', [2, 1]); // false
arrayComparison([1, 2, 2], 'set_equals', [2, 1]); // true
arrayComparison([1, 2, 2], 'set_equals', [2, 1, 3]); // false
arrayComparison([1, 2, 2], 'set_not_equals', [2, 1, 3]); // true
arrayComparison([1, 2, 2], 'set_not_equals', [2, 1]); // false
```

## Remarks

Supported operators:
- EQUALS: Strict equality (same order, same values)
- NOT_EQUALS: Strict inequality (different order or values)
- SAME_MEMBERS: Multiset equality (same values and counts, order ignored)
- SET_EQUALS: Set equality (same unique values, order/dupes ignored)
- SET_NOT_EQUALS: Set inequality (different unique values)
