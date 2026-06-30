[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/errors/errorMessagePattern](../README.md) / errorMessagePattern

# Function: errorMessagePattern()

> **errorMessagePattern**(`source`, `oper`, `pattern`): `boolean`

Defined in: [predicates/errors/errorMessagePattern.ts:25](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/errors/errorMessagePattern.ts#L25)

Evaluates an error message against a pattern operation (matches or not matches a RegExp) using the specified
operation.

## Parameters

### source

`Error`

The Error whose message will be tested.

### oper

[`ErrorMessagePatternOper`](../../../../errors/enums/type-aliases/ErrorMessagePatternOper.md)

The pattern operation to perform (e.g. 'matches', 'not_matches').

### pattern

`RegExp`

The RegExp to test against.

## Returns

`boolean`

True if the operation matches, false otherwise.

## Throws

If the operation is not recognized.

## Example

```ts
const err = new Error('Network timeout');

errorMessagePattern(err, 'matches', /timeout$/); // true
errorMessagePattern(err, 'not_matches', /syntax/i); // true
```

## Remarks

Supported Operators:
- **MATCHES**: Error message matches the RegExp pattern
- **NOT_MATCHES**: Error message does not match the pattern
