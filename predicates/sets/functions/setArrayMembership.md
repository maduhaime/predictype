[**predictype v0.11.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/sets](../README.md) / setArrayMembership

# Function: setArrayMembership()

> **setArrayMembership**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setArrayMembership.ts:27](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/sets/setArrayMembership.ts#L27)

Checks membership conditions for multiple elements in a set using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetArrayMembershipOper`](../../../sets/enums/type-aliases/SetArrayMembershipOper.md)

The membership operation to perform (e.g. 'contains_all', 'contains_any').

### target

`T`[]

The array of values to check for membership.

## Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const s = new Set([1, 2, 3]);
const values = [2, 4];

setArrayMembership(s, 'contains_any', values); // true (contains 2)
setArrayMembership(s, 'contains_all', values); // false (missing 4)
setArrayMembership(s, 'excludes_all', [5, 6]); // true (excludes both)
```

## Remarks

Supported Operators:
- **CONTAINS_ALL**: Set contains all the given values
- **CONTAINS_ANY**: Set contains at least one of the given values
- **EXCLUDES_ALL**: Set does not contain any of the given values
