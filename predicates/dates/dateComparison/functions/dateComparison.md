[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/dates/dateComparison](../README.md) / dateComparison

# Function: dateComparison()

> **dateComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/dates/dateComparison.ts:41](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/dates/dateComparison.ts#L41)

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
- **after**: source occurs after target
- **after_or_equal**: source occurs after or at target
- **before**: source occurs before target
- **before_or_equal**: source occurs before or at target
- **equals**: source occurs at the same instant as target
- **not_equals**: source does not occur at the same instant as target
- **same_day**: source and target share the same UTC day
- **same_month**: source and target share the same UTC month
- **same_year**: source and target share the same UTC year
