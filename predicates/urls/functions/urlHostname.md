[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/urls](../README.md) / urlHostname

# Function: urlHostname()

> **urlHostname**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlHostname.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlHostname.ts#L30)

Checks the hostname component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlHostnameOper`](../../../urls/enums/type-aliases/UrlHostnameOper.md)

The hostname operation to perform (e.g. 'equals', 'excludes').

### target

`string`

The string to compare against source.hostname.

## Returns

`boolean`

True if the hostname comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://blog.example.com/posts');
const targetA = 'blog.example.com';
const targetB = 'internal';

urlHostname(source, 'equals', targetA); // true
urlHostname(source, 'excludes', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
