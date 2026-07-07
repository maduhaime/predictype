[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/urls](../README.md) / urlHost

# Function: urlHost()

> **urlHost**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlHost.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlHost.ts#L30)

Checks the host component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlHostOper`](../../../urls/enums/type-aliases/UrlHostOper.md)

The host operation to perform (e.g. 'equals', 'ends_with').

### target

`string`

The string to compare against source.host.

## Returns

`boolean`

True if the host comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://portal.example.com:8080/dashboard');
const targetA = 'portal.example.com:8080';
const targetB = ':8080';

urlHost(source, 'equals', targetA); // true
urlHost(source, 'ends_with', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
