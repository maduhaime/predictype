[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/queries/queryValue](../README.md) / queryValue

# Function: queryValue()

> **queryValue**(`source`, `oper`, `value`): `boolean`

Defined in: [predicates/queries/queryValue.ts:26](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/queries/queryValue.ts#L26)

Checks whether query parameters contain or lack a value.

## Parameters

### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

### oper

[`QueryValueOper`](../../../../queries/enums/type-aliases/QueryValueOper.md)

The value operation to perform ('contains_value' or 'lacks_value').

### value

`string`

The value to check.

## Returns

`boolean`

True if the value check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URLSearchParams('status=active&role=admin&role=editor');
const valueA = 'editor';
const valueB = 'guest';

queryValue(source, 'contains_value', valueA); // true
queryValue(source, 'lacks_value', valueB); // true
```

## Remarks

Supported Operators:
- **contains_value**
- **lacks_value**
