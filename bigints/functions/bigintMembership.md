[**predictype v0.11.0**](../../README.md)

***

[predictype](../../modules.md) / [bigints](../README.md) / bigintMembership

# Function: bigintMembership()

> **bigintMembership**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/bigints/bigintMembership.ts:26](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/bigints/bigintMembership.ts#L26)

Checks if a bigint value is (or is not) a member of a set of bigints using the specified operation.

## Parameters

### source

`bigint`

The source bigint value.

### oper

[`BigIntMembershipOper`](../enums/type-aliases/BigIntMembershipOper.md)

The membership operation to perform (e.g. 'in', 'not_in').

### target

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

bigintMembership(value1, 'in', arr); // true
bigintMembership(value2, 'not_in', arr); // true
```

## Remarks

Supported Operators:
- **IN**: value is in the target array
- **NOT_IN**: value is not in the target array
