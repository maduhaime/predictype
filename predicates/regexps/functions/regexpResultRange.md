[**predictype v0.11.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/regexps](../README.md) / regexpResultRange

# Function: regexpResultRange()

> **regexpResultRange**(`pattern`, `oper`, `target`, `min`, `max`): `boolean`

Defined in: [predicates/regexps/regexpResultRange.ts:36](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/regexps/regexpResultRange.ts#L36)

Counts RegExp matches on a target string and validates whether the count is within a range.

## Parameters

### pattern

`RegExp`

The RegExp pattern to apply.

### oper

[`RegExpResultRangeOper`](../../../regexps/enums/type-aliases/RegExpResultRangeOper.md)

The range operation to perform (e.g. 'between', 'strict_between').

### target

`string`

The candidate string to validate.

### min

`number`

The lower bound of the range.

### max

`number`

The upper bound of the range.

## Returns

`boolean`

True if the range comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.
