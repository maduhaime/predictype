[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/maps](../README.md) / mapSize

# Function: mapSize()

> **mapSize**\<`K`, `V`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/maps/mapSize.ts:30](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/maps/mapSize.ts#L30)

Checks the size of a Map using the specified operation.

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

[`MapSizeOper`](../../../maps/enums/type-aliases/MapSizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

### target

`number`

The size to compare against.

## Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const m1 = new Map([[1, 'a'], [2, 'b']]);
const m2 = new Map([[1, 'a']]);
const size2 = 2;
const size0 = 0;

mapSize(m1, 'size_equals', size2); // true
mapSize(m2, 'size_greater_than', size0); // true
```

## Remarks

Supported Operators:
- **SIZE_EQUALS**: Map size equals the given value
- **SIZE_GREATER_THAN**: Map size is greater than value
- **SIZE_GREATER_THAN_OR_EQUALS**: Map size is greater or equal
- **SIZE_LESS_THAN**: Map size is less than value
- **SIZE_LESS_THAN_OR_EQUALS**: Map size is less or equal
