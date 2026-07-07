[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/numbers/numberRange](../README.md) / numberRange

# Function: numberRange()

> **numberRange**(`source`, `oper`, `min`, `max`): `boolean`

Defined in: [predicates/numbers/numberRange.ts:27](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/numbers/numberRange.ts#L27)

Checks if a number is in or outside a range using the specified operation.

## Parameters

### source

`number`

The number to check.

### oper

[`NumberRangeOper`](../../../../numbers/enums/type-aliases/NumberRangeOper.md)

The range operation to perform (e.g. 'between', 'strict_between').

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

numberRange(n, 'between', 1, 10); // true
numberRange(n, 'strict_between', 5, 10); // false
```

## Remarks

Supported Operators:
- **BETWEEN**: Inclusive: min <= x <= max
- **NOT_BETWEEN**: Inclusive: x < min or x > max
- **STRICT_BETWEEN**: Exclusive: min < x < max
- **STRICT_NOT_BETWEEN**: Exclusive: x <= min or x >= max
