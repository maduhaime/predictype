[**predictype v0.8.1**](../../README.md)

***

[predictype](../../modules.md) / [arrays](../README.md) / arrayMembership

# Function: arrayMembership()

> **arrayMembership**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayMembership.ts:30](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/arrays/arrayMembership.ts#L30)

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

[`ArrayMembershipOper`](../enums/type-aliases/ArrayMembershipOper.md)

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

## Remarks

Supported Operators:
- **EVERY_EQUALS**: Every element equals target
- **SOME_EQUALS**: At least one element equals target
- **INCLUDES**: Array includes target
- **EXCLUDES**: Array does not include target
