[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/queries/queryState](../README.md) / queryState

# Function: queryState()

> **queryState**(`source`, `oper`): `boolean`

Defined in: [predicates/queries/queryState.ts:33](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/queries/queryState.ts#L33)

Checks whether query parameters are empty or not empty.

## Parameters

### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

### oper

[`QueryStateOper`](../../../../queries/enums/type-aliases/QueryStateOper.md)

The state operation to perform ('is_empty' or 'is_not_empty').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const sourceA = new URLSearchParams('q=predicate');
const sourceB = new URLSearchParams('');

queryState(sourceA, 'is_not_empty'); // true
queryState(sourceB, 'is_empty'); // true
```

## Remarks

Supported Operators:
- **is_empty**
- **is_not_empty**
