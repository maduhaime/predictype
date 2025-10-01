[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/bigints/bigintMembership](../README.md) / bigintMembership

# Function: bigintMembership()

> **bigintMembership**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/bigints/bigintMembership.ts:26](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/bigints/bigintMembership.ts#L26)

Checks if a bigint value is (or is not) a member of a set of bigints using the specified operation.

## Parameters

### source

`bigint`

The source bigint value.

### oper

[`BigIntMembershipOper`](../../../../bigints/enums/type-aliases/BigIntMembershipOper.md)

The membership operation to perform (e.g. 'is_one_of', 'is_not_one_of').

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

bigintMembership(value1, 'is_one_of', arr); // true
bigintMembership(value2, 'is_not_one_of', arr); // true
```

## Remarks

Supported Operators:
- **IN**: value is in the target array
- **NOT_IN**: value is not in the target array
