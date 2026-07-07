[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/queries/queryKey](../README.md) / queryKey

# Function: queryKey()

> **queryKey**(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/queries/queryKey.ts:26](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/queries/queryKey.ts#L26)

Checks whether query parameters contain or lack a key.

## Parameters

### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

### oper

[`QueryKeyOper`](../../../../queries/enums/type-aliases/QueryKeyOper.md)

The key operation to perform ('contains_key' or 'lacks_key').

### key

`string`

The key to check.

## Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URLSearchParams('q=predicates&page=2');
const keyA = 'q';
const keyB = 'lang';

queryKey(source, 'contains_key', keyA); // true
queryKey(source, 'lacks_key', keyB); // true
```

## Remarks

Supported Operators:
- **contains_key**
- **lacks_key**
