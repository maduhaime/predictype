[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/errors/errorName](../README.md) / errorName

# Function: errorName()

> **errorName**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/errors/errorName.ts:28](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/errors/errorName.ts#L28)

Checks the name of an Error using the specified operation.

## Parameters

### source

`Error`

The Error to check.

### oper

[`ErrorNameOper`](../../../../errors/enums/type-aliases/ErrorNameOper.md)

The name operation to perform (e.g. 'equals', 'starts_with').

### target

`string`

The string to compare the error name against.

## Returns

`boolean`

True if the name check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const err = new TypeError('boom');

errorName(err, 'equals', 'TypeError'); // true
errorName(err, 'ends_with', 'Error'); // true
errorName(err, 'equals', 'TypeError'); // true
```

## Remarks

Supported Operators:
- **EQUALS**: Error name equals the given string
- **STARTS_WITH**: Error name starts with the string
- **ENDS_WITH**: Error name ends with the string
- **INCLUDES**: Error name includes the string
- **EXCLUDES**: Error name does not include the string
