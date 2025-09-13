[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/dates/dateState](../README.md) / dateState

# Function: dateState()

> **dateState**(`value`, `oper`): `boolean`

Defined in: [predicates/dates/dateState.ts:29](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/dates/dateState.ts#L29)

Checks the state of a date (valid or invalid) in UTC using the specified operation.

## Parameters

### value

`Date`

The date to check.

### oper

[`DateStateOper`](../../../../dates/enums/type-aliases/DateStateOper.md)

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
