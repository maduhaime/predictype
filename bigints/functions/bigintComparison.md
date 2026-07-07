[**predictype v0.13.0**](../../README.md)

***

[predictype](../../modules.md) / [bigints](../README.md) / bigintComparison

# Function: bigintComparison()

> **bigintComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/bigints/bigintComparison.ts:31](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/bigints/bigintComparison.ts#L31)

Compares two bigint values using the specified operation.

## Parameters

### source

`bigint`

The source bigint value.

### oper

[`BigIntComparisonOper`](../enums/type-aliases/BigIntComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'greater_than').

### target

`bigint`

The target bigint value to compare against the source.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = BigInt(10);
const b = BigInt(5);
const c = BigInt(20);

bigintComparison(a, 'equals', a); // true
bigintComparison(a, 'greater_than', b); // true
bigintComparison(a, 'less_than', c); // true
```

## Remarks

Supported Operators:
- **equals**: source equals target
- **not_equals**: source differs from target
- **greater_than**: source is greater than target
- **greater_than_or_equals**: source is greater than or equal to target
- **less_than**: source is less than target
- **less_than_or_equals**: source is less than or equal to target
