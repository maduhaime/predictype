[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setMembership](../README.md) / setMembership

# Function: setMembership()

> **setMembership**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setMembership.ts:25](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/sets/setMembership.ts#L25)

Checks membership conditions for elements in a set using the specified operation.

## Type Parameters

### T

`T`

Type of the Set elements.

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetMembershipOper`](../../../../sets/enums/type-aliases/SetMembershipOper.md)

The membership operation to perform (e.g. 'includes', 'excludes').

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

setMembership(s, 'includes', 2); // true
setMembership(s, 'excludes', 4); // true
```

## Remarks

Supported Operators:
- **INCLUDES**: Set contains the value
- **EXCLUDES**: Set does not contain the value
