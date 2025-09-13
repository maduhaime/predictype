[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/bigints/bigintMembership](../README.md) / bigintMembership

# Function: bigintMembership()

> **bigintMembership**(`source`, `oper`, `set`): `boolean`

Defined in: [predicates/bigints/bigintMembership.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/bigints/bigintMembership.ts#L21)

Checks if a bigint value is (or is not) a member of a set of bigints using the specified operation.

## Parameters

### source

`bigint`

The source bigint value.

### oper

[`BigIntMembershipOper`](../../../../bigints/enums/type-aliases/BigIntMembershipOper.md)

The membership operation to perform (e.g. 'is_one_of', 'is_not_one_of').

### set

`bigint`[]

The array of bigints to check membership against.

## Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const value1 = BigInt(5);
const value2 = BigInt(3);
const arr = [BigInt(1), BigInt(2), BigInt(5)];

bigintMembership(value1, 'is_one_of', arr); // true
bigintMembership(value2, 'is_not_one_of', arr); // true
```
