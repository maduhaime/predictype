[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/maps/mapState](../README.md) / mapState

# Function: mapState()

> **mapState**\<`K`, `V`\>(`source`, `oper`): `boolean`

Defined in: [predicates/maps/mapState.ts:26](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/maps/mapState.ts#L26)

Checks the state of a Map (empty or not) using the specified operation.

## Type Parameters

### K

`K`

Type of the Map keys.

### V

`V`

Type of the Map values.

## Parameters

### source

`Map`\<`K`, `V`\>

The Map to check.

### oper

[`MapStateOper`](../../../../maps/enums/type-aliases/MapStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_empty').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const m1 = new Map();
const m2 = new Map([[1, 'a']]);

mapState(m1, 'is_empty'); // true
mapState(m2, 'is_not_empty'); // true
```

## Remarks

Supported Operators:
- **is_empty**: map size is 0
- **is_not_empty**: map size is greater than 0
