[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/sets](../README.md) / setMembership

# Function: setMembership()

> **setMembership**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setMembership.ts:24](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/sets/setMembership.ts#L24)

Checks membership conditions for elements in a set using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetMembershipOper`](../../../sets/enums/type-aliases/SetMembershipOper.md)

The membership operation to perform (e.g. 'contains', 'excludes').

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
const s = new Set([1, 2, 3]);

setMembership(s, 'contains', 2); // true
setMembership(s, 'excludes', 4); // true
```

## Remarks

Supported Operators:
- **INCLUDES**: Set contains the value
- **EXCLUDES**: Set does not contain the value
