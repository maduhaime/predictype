[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayMembership](../README.md) / arrayMembership

# Function: arrayMembership()

> **arrayMembership**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayMembership.ts:23](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/arrays/arrayMembership.ts#L23)

Checks membership conditions for all or some elements in an array, using the specified operation.

## Type Parameters

### T

`T`

Type of the array elements.

## Parameters

### source

`T`[]

The source array.

### oper

[`ArrayMembershipOper`](../../../../arrays/enums/type-aliases/ArrayMembershipOper.md)

The membership operation to perform (e.g. 'every_equals', 'includes').

### target

`T`

The value to check for membership.

## Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr1 = [1, 1, 1];
const arr2 = [1, 2, 3];
const value1 = 1;
const value2 = 2;

arrayMembership(arr1, 'every_equals', value1); // true
arrayMembership(arr2, 'includes', value2); // true
```
