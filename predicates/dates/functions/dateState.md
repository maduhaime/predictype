[**predictype v0.11.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/dates](../README.md) / dateState

# Function: dateState()

> **dateState**(`source`, `oper`): `boolean`

Defined in: [predicates/dates/dateState.ts:34](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/dates/dateState.ts#L34)

Checks the state of a date (valid or invalid) in UTC using the specified operation.

## Parameters

### source

`Date`

The date to check.

### oper

[`DateStateOper`](../../../dates/enums/type-aliases/DateStateOper.md)

The state operation to perform (e.g. 'is_valid', 'is_invalid').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const validDate = new Date('2025-01-01');
const invalidDate = new Date('invalid');

dateState(validDate, 'is_valid'); // true
dateState(invalidDate, 'is_invalid'); // true
```

## Remarks

Supported Operators:
- **IS_VALID**: Is the date valid?
- **IS_INVALID**: Is the date invalid?
