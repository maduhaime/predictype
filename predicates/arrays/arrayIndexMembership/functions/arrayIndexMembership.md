[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayIndexMembership](../README.md) / arrayIndexMembership

# Function: arrayIndexMembership()

> **arrayIndexMembership**\<`T`\>(`source`, `oper`, `index`, `target`): `boolean`

Defined in: [predicates/arrays/arrayIndexMembership.ts:31](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/arrays/arrayIndexMembership.ts#L31)

Checks if the value at a specific index in an array is (or is not) included in a target array, using the specified
operation.

## Type Parameters

### T

`T`

Type of the array elements.

## Parameters

### source

`T`[]

The source array.

### oper

[`ArrayIndexMembershipOper`](../../../../arrays/enums/type-aliases/ArrayIndexMembershipOper.md)

The membership operation to perform (e.g. 'at_index_in').

### index

`number`

The index in the array to check.

### target

`T`[]

The array of values to check for inclusion/exclusion.

## Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr = [10, 20, 30];
const idx1 = 1;
const idx2 = 2;
const values = [10, 20];

arrayIndexMembership(arr, 'at_index_in', idx1, values); // true
arrayIndexMembership(arr, 'at_index_not_in', idx2, values); // true
```

## Remarks

Supported Operators:
- **AT_INDEX_IN**: arr[index] is in target array
- **AT_INDEX_NOT_IN**: arr[index] is not in target array
