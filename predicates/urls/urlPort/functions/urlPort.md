[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/urls/urlPort](../README.md) / urlPort

# Function: urlPort()

> **urlPort**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlPort.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlPort.ts#L30)

Checks the port component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlPortOper`](../../../../urls/enums/type-aliases/UrlPortOper.md)

The port operation to perform (e.g. 'equals', 'not_equals').

### target

`string`

The string to compare against source.port.

## Returns

`boolean`

True if the port comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://localhost:3000/health');
const targetA = '3000';
const targetB = '8080';

urlPort(source, 'equals', targetA); // true
urlPort(source, 'not_equals', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
