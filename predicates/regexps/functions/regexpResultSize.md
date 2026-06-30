[**predictype v0.11.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/regexps](../README.md) / regexpResultSize

# Function: regexpResultSize()

> **regexpResultSize**(`pattern`, `oper`, `target`, `count`): `boolean`

Defined in: [predicates/regexps/regexpResultSize.ts:35](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/regexps/regexpResultSize.ts#L35)

Counts RegExp matches on a target string and compares the count against a threshold.

## Parameters

### pattern

`RegExp`

The RegExp pattern to apply.

### oper

[`RegExpResultSizeOper`](../../../regexps/enums/type-aliases/RegExpResultSizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

### target

`string`

The candidate string to validate.

### count

`number`

The numeric threshold to compare against.

## Returns

`boolean`

True if the count comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.
