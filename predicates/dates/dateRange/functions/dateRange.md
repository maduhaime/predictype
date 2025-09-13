[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/dates/dateRange](../README.md) / dateRange

# Function: dateRange()

> **dateRange**(`value`, `oper`, `min`, `max`): `boolean`

Defined in: [predicates/dates/dateRange.ts:31](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/dates/dateRange.ts#L31)

Checks if a date is in or outside a UTC date range using the specified operation.

## Parameters

### value

`Date`

The date to check.

### oper

[`DateRangeOper`](../../../../dates/enums/type-aliases/DateRangeOper.md)

The range operation to perform (e.g. 'in_range', 'strict_in_range').

### min

`Date`

The minimum date (inclusive or exclusive depending on operation).

### max

`Date`

The maximum date (inclusive or exclusive depending on operation).

## Returns

`boolean`

True if the range check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const date = new Date('2025-01-10');
const start = new Date('2025-01-01');
const end = new Date('2025-01-31');

dateRange(date, 'in_range', start, end); // true
```
