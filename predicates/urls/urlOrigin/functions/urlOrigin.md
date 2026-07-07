[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/urls/urlOrigin](../README.md) / urlOrigin

# Function: urlOrigin()

> **urlOrigin**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlOrigin.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlOrigin.ts#L30)

Checks the origin component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlOriginOper`](../../../../urls/enums/type-aliases/UrlOriginOper.md)

The origin operation to perform (e.g. 'equals', 'starts_with').

### target

`string`

The string to compare against source.origin.

## Returns

`boolean`

True if the origin comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://api.example.com:8443/v1/users');
const targetA = 'https://api.example.com:8443';
const targetB = 'https://api.';

urlOrigin(source, 'equals', targetA); // true
urlOrigin(source, 'starts_with', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
