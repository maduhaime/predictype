[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/strings/stringPattern](../README.md) / stringPattern

# Function: stringPattern()

> **stringPattern**(`source`, `oper`, `pattern`): `boolean`

Defined in: [predicates/strings/stringPattern.ts:26](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/strings/stringPattern.ts#L26)

Evaluates a string against a pattern operation (matches or not matches a RegExp) using the specified operation.

## Parameters

### source

`string`

The string to test.

### oper

[`StringPatternOper`](../../../../strings/enums/type-aliases/StringPatternOper.md)

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
const str = 'foobar';
const pattern1 = /^foo/;
const pattern2 = /baz/;

stringPattern(str, 'matches', pattern1); // true
stringPattern(str, 'not_matches', pattern2); // true
```

## Remarks

Supported Operators:
- **MATCHES**: String matches the RegExp pattern
- **NOT_MATCHES**: String does not match the pattern
