[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/errors/errorNamePattern](../README.md) / errorNamePattern

# Function: errorNamePattern()

> **errorNamePattern**(`source`, `oper`, `pattern`): `boolean`

Defined in: [predicates/errors/errorNamePattern.ts:25](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/errors/errorNamePattern.ts#L25)

Evaluates an error name against a pattern operation (matches or not matches a RegExp) using the specified
operation.

## Parameters

### source

`Error`

The Error whose name will be tested.

### oper

[`ErrorNamePatternOper`](../../../../errors/enums/type-aliases/ErrorNamePatternOper.md)

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
const err = new TypeError('boom');

errorNamePattern(err, 'matches', /Type/); // true
errorNamePattern(err, 'not_matches', /Range/); // true
```

## Remarks

Supported Operators:
- **MATCHES**: Error name matches the RegExp pattern
- **NOT_MATCHES**: Error name does not match the pattern
