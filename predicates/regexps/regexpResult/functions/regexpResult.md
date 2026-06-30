[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/regexps/regexpResult](../README.md) / regexpResult

# Function: regexpResult()

> **regexpResult**(`pattern`, `oper`, `target`): `boolean`

Defined in: [predicates/regexps/regexpResult.ts:18](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/regexps/regexpResult.ts#L18)

Evaluates a RegExp against a target string and validates the result using the specified operation.

## Parameters

### pattern

`RegExp`

The RegExp pattern to apply.

### oper

[`RegExpResultOper`](../../../../regexps/enums/type-aliases/RegExpResultOper.md)

The result operation to perform (e.g. 'tests', 'matches').

### target

`string`

The candidate string to validate.

## Returns

`boolean`

True if the result operation is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.
