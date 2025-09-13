[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/bigints/bigintComparison](../README.md) / bigintComparison

# Function: bigintComparison()

> **bigintComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/bigints/bigintComparison.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/bigints/bigintComparison.ts#L22)

Compares two bigint values using the specified operation.

## Parameters

### source

`bigint`

The source bigint value.

### oper

[`BigIntComparisonOper`](../../../../bigints/enums/type-aliases/BigIntComparisonOper.md)

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
