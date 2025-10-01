[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/numbers/numberComparison](../README.md) / numberComparison

# Function: numberComparison()

> **numberComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/numbers/numberComparison.ts:30](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/numbers/numberComparison.ts#L30)

Compares two numbers using the specified operation.

## Parameters

### source

`number`

The first number.

### oper

[`NumberComparisonOper`](../../../../numbers/enums/type-aliases/NumberComparisonOper.md)

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
- **EQUALS**: a === b
- **NOT_EQUALS**: a !== b
- **GREATER_THAN**: a > b
- **GREATER_OR_EQUAL**: a >= b
- **LESS_THAN**: a < b
- **LESS_OR_EQUAL**: a <= b
