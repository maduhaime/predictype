[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/numbers](../README.md) / numberComparison

# Function: numberComparison()

> **numberComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/numbers/numberComparison.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/numbers/numberComparison.ts#L30)

Compares two numbers using the specified operation.

## Parameters

### source

`number`

The first number.

### oper

[`NumberComparisonOper`](../../../numbers/enums/type-aliases/NumberComparisonOper.md)

The comparison operation to perform (e.g. 'greater_than', 'equals').

### target

`number`

The second number.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = 5;
const b = 10;

numberComparison(a, 'less_than', b); // true
numberComparison(a, 'greater_than', b); // false
numberComparison(a, 'equals', 5); // true
```

## Remarks

Supported Operators:
- **equals**: source equals target
- **not_equals**: source differs from target
- **greater_than**: source is greater than target
- **greater_or_equal**: source is greater than or equal to target
- **less_than**: source is less than target
- **less_or_equal**: source is less than or equal to target
