[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/regexps/regexpState](../README.md) / regexpState

# Function: regexpState()

> **regexpState**(`source`, `oper`): `boolean`

Defined in: [predicates/regexps/regexpState.ts:14](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/regexps/regexpState.ts#L14)

Checks the state of a RegExp (flags and pattern shape) using the specified operation.

## Parameters

### source

`RegExp`

The RegExp to check.

### oper

[`RegExpStateOper`](../../../../regexps/enums/type-aliases/RegExpStateOper.md)

The state operation to perform (e.g. 'is_global', 'has_indices').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.
