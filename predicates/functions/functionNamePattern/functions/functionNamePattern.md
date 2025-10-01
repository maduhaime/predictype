[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/functions/functionNamePattern](../README.md) / functionNamePattern

# Function: functionNamePattern()

> **functionNamePattern**(`source`, `oper`, `pattern`): `boolean`

Defined in: [predicates/functions/functionNamePattern.ts:24](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/functions/functionNamePattern.ts#L24)

Checks if the function name matches a given regular expression pattern using the specified operation.

## Parameters

### source

`Function`

The function to check.

### oper

[`FunctionNamePatternOper`](../../../../functions/enums/type-aliases/FunctionNamePatternOper.md)

The pattern operation to perform (e.g. 'matches').

### pattern

`RegExp`

The regular expression to test against the function name.

## Returns

`boolean`

True if the pattern check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const fn = function fooBar() {};
const pattern = /^foo/;

functionPattern(fn, 'matches', pattern); // true
```

## Remarks

Supported Operators:
- **MATCHES**: Function name matches the RegExp pattern
- **NOT_MATCHES**: Function name does not match the pattern
