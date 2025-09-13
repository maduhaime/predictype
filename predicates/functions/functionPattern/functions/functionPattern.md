[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/functions/functionPattern](../README.md) / functionPattern

# Function: functionPattern()

> **functionPattern**(`source`, `oper`, `pattern`): `boolean`

Defined in: [predicates/functions/functionPattern.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/functions/functionPattern.ts#L19)

Checks if the function name matches a given regular expression pattern using the specified operation.

## Parameters

### source

`Function`

The function to check.

### oper

[`FunctionPatternOper`](../../../../functions/enums/type-aliases/FunctionPatternOper.md)

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
