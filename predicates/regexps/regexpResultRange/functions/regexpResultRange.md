[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/regexps/regexpResultRange](../README.md) / regexpResultRange

# Function: regexpResultRange()

> **regexpResultRange**(`pattern`, `oper`, `target`, `min`, `max`): `boolean`

Defined in: [predicates/regexps/regexpResultRange.ts:54](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/regexps/regexpResultRange.ts#L54)

Counts RegExp matches on a target string and validates whether the count is within a range.

## Parameters

### pattern

`RegExp`

The RegExp pattern to apply.

### oper

[`RegExpResultRangeOper`](../../../../regexps/enums/type-aliases/RegExpResultRangeOper.md)

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

## Example

```ts
const pattern = /item/g;
const target = 'item,item,item';
const minA = 2;
const maxA = 4;
const minB = 3;
const maxB = 5;

regexpResultRange(pattern, 'between', target, minA, maxA); // true
regexpResultRange(pattern, 'strict_between', target, minB, maxB); // false
```

## Remarks

Supported Operators:
- **between**
- **not_between**
- **strict_between**
- **strict_not_between**
