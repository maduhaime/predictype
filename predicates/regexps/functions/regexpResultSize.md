[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/regexps](../README.md) / regexpResultSize

# Function: regexpResultSize()

> **regexpResultSize**(`pattern`, `oper`, `target`, `count`): `boolean`

Defined in: [predicates/regexps/regexpResultSize.ts:52](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/regexps/regexpResultSize.ts#L52)

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

## Example

```ts
const pattern = /foo/g;
const target = 'foo-bar-foo';
const countA = 2;
const countB = 1;

regexpResultSize(pattern, 'size_equals', target, countA); // true
regexpResultSize(pattern, 'size_greater_than', target, countB); // true
```

## Remarks

Supported Operators:
- **size_equals**
- **size_greater_than**
- **size_greater_than_or_equals**
- **size_less_than**
- **size_less_than_or_equals**
