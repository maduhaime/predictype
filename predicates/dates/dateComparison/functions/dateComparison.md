[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/dates/dateComparison](../README.md) / dateComparison

# Function: dateComparison()

> **dateComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/dates/dateComparison.ts:41](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/dates/dateComparison.ts#L41)

Compares two dates in UTC using the specified comparison operation.

## Parameters

### source

`Date`

The first date to compare.

### oper

[`DateComparisonOper`](../../../../dates/enums/type-aliases/DateComparisonOper.md)

The comparison operation to perform (e.g. 'after', 'before', 'equals').

### target

`Date`

The second date to compare against.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const d1 = new Date('2025-01-01');
const d2 = new Date('2025-01-02');
dateComparison(d1, 'before', d2); // true
dateComparison(d1, 'equals', d1); // true
```

## Remarks

Supported Operators:
- **AFTER**: Is the first date after the second?
- **AFTER_OR_EQUAL**: After or equal to the second date?
- **BEFORE**: Is the first date before the second?
- **BEFORE_OR_EQUAL**: Before or equal to the second date?
- **EQUALS**: Are the dates equal?
- **NOT_EQUALS**: Are the dates not equal?
- **SAME_DAY**: Are the dates on the same day?
- **SAME_MONTH**: Are the dates in the same month?
- **SAME_YEAR**: Are the dates in the same year?
