[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/dates/dateCalendar](../README.md) / dateCalendar

# Function: dateCalendar()

> **dateCalendar**(`source`, `oper`, `today`): `boolean`

Defined in: [predicates/dates/dateCalendar.ts:42](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/dates/dateCalendar.ts#L42)

Checks calendar-based properties of a date (UTC) using the specified operation.

## Parameters

### source

`Date`

The date to check.

### oper

[`DateCalendarOper`](../../../../dates/enums/type-aliases/DateCalendarOper.md)

The calendar operation to perform (e.g. 'is_today', 'is_weekend', 'is_past').

### today

`Date` = `...`

(optional) The reference date to use as "today" (defaults to new Date()). Useful for testing.

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

## Remarks

Supported Operators:
- **IS_TODAY**: Is the date today (UTC)?
- **IS_YESTERDAY**: Is the date yesterday (UTC)?
- **IS_TOMORROW**: Is the date tomorrow (UTC)?
- **IS_WEEKEND**: Is the date a weekend?
- **IS_WEEKDAY**: Is the date a weekday?
- **IS_PAST**: Is the date before today?
- **IS_FUTURE**: Is the date after today?
- **IS_FIRST_DAY_OF_MONTH**: Is the date the 1st of the month?
- **IS_LAST_DAY_OF_MONTH**: Is the date the last of the month?
