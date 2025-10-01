[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/strings](../README.md) / stringState

# Function: stringState()

> **stringState**(`source`, `oper`): `boolean`

Defined in: [predicates/strings/stringState.ts:26](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/strings/stringState.ts#L26)

Checks the state of a string (empty, not empty, blank, not blank) using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringStateOper`](../../../strings/enums/type-aliases/StringStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_blank').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const str = '';
const str2 = '   ';

stringState(str, 'is_empty'); // true
stringState(str2, 'is_blank'); // true
```

## Remarks

Supported Operators:
- **IS_EMPTY**: String is empty
- **IS_NOT_EMPTY**: String is not empty
- **IS_BLANK**: String is blank (only whitespace)
- **IS_NOT_BLANK**: String is not blank
