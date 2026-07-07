[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/regexps/regexpResult](../README.md) / regexpResult

# Function: regexpResult()

> **regexpResult**(`pattern`, `oper`, `target`): `boolean`

Defined in: [predicates/regexps/regexpResult.ts:33](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/regexps/regexpResult.ts#L33)

Evaluates a RegExp against a target string and validates the result using the specified operation.

## Parameters

### pattern

`RegExp`

The RegExp pattern to apply.

### oper

[`RegExpResultOper`](../../../../regexps/enums/type-aliases/RegExpResultOper.md)

The result operation to perform (e.g. 'tests', 'matches').

### target

`string`

The candidate string to validate.

## Returns

`boolean`

True if the result operation is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const pattern = /cat/i;
const targetA = 'My Cat is sleeping';
const targetB = 'dog only';

regexpResult(pattern, 'tests', targetA); // true
regexpResult(pattern, 'not_matches', targetB); // true
```

## Remarks

Supported Operators:
- **tests**
- **not_tests**
- **matches**
- **not_matches**
