[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/strings/stringMembership](../README.md) / stringMembership

# Function: stringMembership()

> **stringMembership**(`source`, `oper`, `arr`): `boolean`

Defined in: [predicates/strings/stringMembership.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/strings/stringMembership.ts#L21)

Checks if a string is (or is not) a member of a set of strings using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringMembershipOper`](../../../../strings/enums/type-aliases/StringMembershipOper.md)

The membership operation to perform (e.g. 'is_one_of', 'is_not_one_of').

### arr

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

stringMembership(value1, 'is_one_of', arr); // true
stringMembership(value2, 'is_not_one_of', arr); // true
```
