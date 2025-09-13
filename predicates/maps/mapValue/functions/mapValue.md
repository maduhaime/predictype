[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/maps/mapValue](../README.md) / mapValue

# Function: mapValue()

> **mapValue**\<`K`, `V`\>(`source`, `oper`, `value`): `boolean`

Defined in: [predicates/maps/mapValue.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/maps/mapValue.ts#L22)

Checks if a Map contains (or lacks) a specific value using the specified operation.

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

[`MapValueOper`](../../../../maps/enums/type-aliases/MapValueOper.md)

The value operation to perform (e.g. 'has_value', 'lacks_value').

### value

`V`

The value to check for.

## Returns

`boolean`

True if the value check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const m1 = new Map([[1, 'a'], [2, 'b']]);
const m2 = new Map([[1, 'a']]);
const valueA = 'a';
const valueB = 'b';

mapValue(m1, 'has_value', valueA); // true
mapValue(m2, 'lacks_value', valueB); // true
```
