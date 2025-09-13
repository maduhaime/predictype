[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/dates/dateCalendar](../README.md) / dateCalendar

# Function: dateCalendar()

> **dateCalendar**(`value`, `oper`): `boolean`

Defined in: [predicates/dates/dateCalendar.ts:29](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/dates/dateCalendar.ts#L29)

Checks calendar-based properties of a date (UTC) using the specified operation.

## Parameters

### value

`Date`

The date to check.

### oper

[`DateCalendarOper`](../../../../dates/enums/type-aliases/DateCalendarOper.md)

The calendar operation to perform (e.g. 'is_today', 'is_weekend', 'is_past').

## Returns

`boolean`

True if the calendar check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const today = new Date();
const janFirst = new Date('2025-01-01');

dateCalendar(today, 'is_today'); // true (if run today)
dateCalendar(janFirst, 'is_first_day_of_month'); // true
```
