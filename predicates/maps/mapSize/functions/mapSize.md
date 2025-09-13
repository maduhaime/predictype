[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/maps/mapSize](../README.md) / mapSize

# Function: mapSize()

> **mapSize**\<`K`, `V`\>(`source`, `oper`, `size`): `boolean`

Defined in: [predicates/maps/mapSize.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/maps/mapSize.ts#L22)

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

[`MapSizeOper`](../../../../maps/enums/type-aliases/MapSizeOper.md)

The size operation to perform (e.g. 'equals', 'greater_than').

### size

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

mapSize(m1, 'equals', size2); // true
mapSize(m2, 'greater_than', size0); // true
```
