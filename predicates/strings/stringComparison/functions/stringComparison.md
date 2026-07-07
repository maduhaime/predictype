[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/strings/stringComparison](../README.md) / stringComparison

# Function: stringComparison()

> **stringComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/strings/stringComparison.ts:27](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/strings/stringComparison.ts#L27)

Compares two strings using the specified operation.

## Parameters

### source

`string`

The first string.

### oper

[`StringComparisonOper`](../../../../strings/enums/type-aliases/StringComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'greater_than').

### target

`string`

The second string.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = 'foo';
const b = 'bar';

stringComparison(a, 'greater_than', b); // true
stringComparison(a, 'equals', a); // true
```

## Remarks

Supported Operators:
- **equals**: source equals target
- **not_equals**: source differs from target
- **greater_than**: source is greater than target
- **less_than**: source is less than target
