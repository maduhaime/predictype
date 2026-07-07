[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/urls](../README.md) / urlHref

# Function: urlHref()

> **urlHref**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlHref.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlHref.ts#L30)

Checks the href component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlHrefOper`](../../../urls/enums/type-aliases/UrlHrefOper.md)

The href operation to perform (e.g. 'equals', 'includes').

### target

`string`

The string to compare against source.href.

## Returns

`boolean`

True if the href comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://docs.example.com:443/path?q=1#intro');
const targetA = 'https://docs.example.com/path?q=1#intro';
const targetB = 'docs.example.com';

urlHref(source, 'equals', targetA); // true
urlHref(source, 'includes', targetB); // true
```

## Remarks

Supported Operators:
- **equals**: href is exactly target
- **not_equals**: href differs from target
- **starts_with**: href starts with target
- **ends_with**: href ends with target
- **includes**: href contains target
- **excludes**: href does not contain target
