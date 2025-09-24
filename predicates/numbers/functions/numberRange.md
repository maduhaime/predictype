[**predictype v0.7.5**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/numbers](../README.md) / numberRange

# Function: numberRange()

> **numberRange**(`source`, `oper`, `min`, `max`): `boolean`

Defined in: [predicates/numbers/numberRange.ts:27](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/numbers/numberRange.ts#L27)

Checks if a number is in or outside a range using the specified operation.

## Parameters

### source

`number`

The number to check.

### oper

[`NumberRangeOper`](../../../numbers/enums/type-aliases/NumberRangeOper.md)

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

## Remarks

Supported Operators:
- **BETWEEN**: Inclusive: min <= x <= max
- **NOT_BETWEEN**: Inclusive: x < min or x > max
- **STRICT_BETWEEN**: Exclusive: min < x < max
- **STRICT_NOT_BETWEEN**: Exclusive: x <= min or x >= max
