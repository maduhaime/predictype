[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/regexps/regexpPattern](../README.md) / regexpPattern

# Function: regexpPattern()

> **regexpPattern**(`pattern`, `oper`, `target`): `boolean`

Defined in: [predicates/regexps/regexpPattern.ts:29](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/regexps/regexpPattern.ts#L29)

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

## Example

```ts
const pattern = /^user_[a-z]+$/;
const targetA = '^user_';
const targetB = 'admin';

regexpPattern(pattern, 'starts_with', targetA); // true
regexpPattern(pattern, 'excludes', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
