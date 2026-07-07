[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/urls/urlProtocol](../README.md) / urlProtocol

# Function: urlProtocol()

> **urlProtocol**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlProtocol.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlProtocol.ts#L30)

Checks the protocol component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlProtocolOper`](../../../../urls/enums/type-aliases/UrlProtocolOper.md)

The protocol operation to perform (e.g. 'equals', 'includes').

### target

`string`

The string to compare against source.protocol.

## Returns

`boolean`

True if the protocol comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://example.com/docs');
const targetA = 'https:';
const targetB = 'http';

urlProtocol(source, 'equals', targetA); // true
urlProtocol(source, 'includes', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
