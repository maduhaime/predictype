[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/numbers/numberComparison](../README.md) / numberComparison

# Function: numberComparison()

> **numberComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/numbers/numberComparison.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/numbers/numberComparison.ts#L21)

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
