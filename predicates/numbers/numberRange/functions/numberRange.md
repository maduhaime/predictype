[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/numbers/numberRange](../README.md) / numberRange

# Function: numberRange()

> **numberRange**(`value`, `oper`, `min`, `max`): `boolean`

Defined in: [predicates/numbers/numberRange.ts:20](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/numbers/numberRange.ts#L20)

Checks if a number is in or outside a range using the specified operation.

## Parameters

### value

`number`

The number to check.

### oper

[`NumberRangeOper`](../../../../numbers/enums/type-aliases/NumberRangeOper.md)

The range operation to perform (e.g. 'in_range', 'strict_in_range').

### min

`number`

The minimum value (inclusive or exclusive depending on operation).

### max

`number`

The maximum value (inclusive or exclusive depending on operation).

## Returns

`boolean`

True if the range check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const n = 5;

numberRange(n, 'in_range', 1, 10); // true
numberRange(n, 'strict_in_range', 5, 10); // false
```
