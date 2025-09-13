[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayIndexMembership](../README.md) / arrayIndexMembership

# Function: arrayIndexMembership()

> **arrayIndexMembership**\<`T`\>(`source`, `oper`, `index`, `target`): `boolean`

Defined in: [predicates/arrays/arrayIndexMembership.ts:24](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/arrays/arrayIndexMembership.ts#L24)

Checks if the value at a specific index in an array is (or is not) included in a target array, using the specified operation.

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

The membership operation to perform (e.g. 'value_at_index_in').

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

arrayIndexMembership(arr, 'value_at_index_in', idx1, values); // true
arrayIndexMembership(arr, 'value_at_index_not_in', idx2, values); // true
```
