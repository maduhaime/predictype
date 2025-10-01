[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/maps](../README.md) / mapState

# Function: mapState()

> **mapState**\<`K`, `V`\>(`source`, `oper`): `boolean`

Defined in: [predicates/maps/mapState.ts:24](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/maps/mapState.ts#L24)

Checks the state of a Map (empty or not) using the specified operation.

## Type Parameters

### K

`K`

### V

`V`

## Parameters

### source

`Map`\<`K`, `V`\>

The Map to check.

### oper

[`MapStateOper`](../../../maps/enums/type-aliases/MapStateOper.md)

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
- **IS_EMPTY**: Map is empty
- **IS_NOT_EMPTY**: Map is not empty
