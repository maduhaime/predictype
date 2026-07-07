[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/urls/urlPathname](../README.md) / urlPathname

# Function: urlPathname()

> **urlPathname**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlPathname.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlPathname.ts#L30)

Checks the pathname component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlPathnameOper`](../../../../urls/enums/type-aliases/UrlPathnameOper.md)

The pathname operation to perform (e.g. 'starts_with', 'includes').

### target

`string`

The string to compare against source.pathname.

## Returns

`boolean`

True if the pathname comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://example.com/products/books/42');
const targetA = '/products';
const targetB = '/42';

urlPathname(source, 'starts_with', targetA); // true
urlPathname(source, 'ends_with', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
