[**predictype v0.11.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/errors](../README.md) / errorMessage

# Function: errorMessage()

> **errorMessage**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/errors/errorMessage.ts:27](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/errors/errorMessage.ts#L27)

Checks the message of an Error using the specified operation.

## Parameters

### source

`Error`

The Error to check.

### oper

[`ErrorMessageOper`](../../../errors/enums/type-aliases/ErrorMessageOper.md)

The message operation to perform (e.g. 'equals', 'includes').

### target

`string`

The string to compare the error message against.

## Returns

`boolean`

True if the message check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const err = new Error('Network timeout');

errorMessage(err, 'includes', 'timeout'); // true
errorMessage(err, 'starts_with', 'Network'); // true
```

## Remarks

Supported Operators:
- **EQUALS**: Error message equals the given string
- **STARTS_WITH**: Error message starts with the string
- **ENDS_WITH**: Error message ends with the string
- **INCLUDES**: Error message includes the string
- **EXCLUDES**: Error message does not include the string
