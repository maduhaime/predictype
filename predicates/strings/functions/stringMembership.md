[**predictype v0.7.4**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/strings](../README.md) / stringMembership

# Function: stringMembership()

> **stringMembership**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/strings/stringMembership.ts:26](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/strings/stringMembership.ts#L26)

Checks if a string is (or is not) a member of a set of strings using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringMembershipOper`](../../../strings/enums/type-aliases/StringMembershipOper.md)

The membership operation to perform (e.g. 'in', 'not_in').

### target

`string`[]

The array of strings to check membership against.

## Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr = ['foo', 'bar'];
const value1 = 'foo';
const value2 = 'baz';

stringMembership(value1, 'in', arr); // true
stringMembership(value2, 'not_in', arr); // true
```

## Remarks

Supported Operators:
- **IN**: String is in the array
- **NOT_IN**: String is not in the array
