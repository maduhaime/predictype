[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/urls/urlHash](../README.md) / urlHash

# Function: urlHash()

> **urlHash**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/urls/urlHash.ts:30](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlHash.ts#L30)

Checks the hash component of a URL against a string operation.

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlHashOper`](../../../../urls/enums/type-aliases/UrlHashOper.md)

The hash operation to perform (e.g. 'equals', 'starts_with').

### target

`string`

The string to compare against source.hash.

## Returns

`boolean`

True if the hash comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://example.com/docs#install');
const targetA = '#install';
const targetB = '#guide';

urlHash(source, 'equals', targetA); // true
urlHash(source, 'not_equals', targetB); // true
```

## Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**
