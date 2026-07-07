[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/queries/querySize](../README.md) / querySize

# Function: querySize()

> **querySize**(`source`, `oper`, `size`): `boolean`

Defined in: [predicates/queries/querySize.ts:38](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/queries/querySize.ts#L38)

Checks the number of query entries against a numeric threshold.

## Parameters

### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

### oper

[`QuerySizeOper`](../../../../queries/enums/type-aliases/QuerySizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

### size

`number`

The numeric threshold to compare against.

## Returns

`boolean`

True if the size comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URLSearchParams('tag=ts&tag=ai&sort=desc');
const sizeA = 3;
const sizeB = 2;

querySize(source, 'size_equals', sizeA); // true
querySize(source, 'size_greater_than', sizeB); // true
```

## Remarks

Supported Operators:
- **size_equals**
- **size_greater_than**
- **size_greater_than_or_equals**
- **size_less_than**
- **size_less_than_or_equals**
