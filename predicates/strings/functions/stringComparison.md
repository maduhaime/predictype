[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/strings](../README.md) / stringComparison

# Function: stringComparison()

> **stringComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/strings/stringComparison.ts:27](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/strings/stringComparison.ts#L27)

Compares two strings using the specified operation.

## Parameters

### source

`string`

The first string.

### oper

[`StringComparisonOper`](../../../strings/enums/type-aliases/StringComparisonOper.md)

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
- **EQUALS**: a === b
- **NOT_EQUALS**: a !== b
- **GREATER_THAN**: a > b
- **LESS_THAN**: a < b
