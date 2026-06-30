[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/regexps/regexpPattern](../README.md) / regexpPattern

# Function: regexpPattern()

> **regexpPattern**(`pattern`, `oper`, `target`): `boolean`

Defined in: [predicates/regexps/regexpPattern.ts:13](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/regexps/regexpPattern.ts#L13)

Checks the pattern string of a RegExp using the specified operation.

## Parameters

### pattern

`RegExp`

The RegExp pattern to check.

### oper

[`RegExpPatternOper`](../../../../regexps/enums/type-aliases/RegExpPatternOper.md)

The pattern operation to perform (e.g. 'equals', 'includes').

### target

`string`

The string to compare against the RegExp pattern source.

## Returns

`boolean`

True if the pattern check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.
