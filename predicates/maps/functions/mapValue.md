[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/maps](../README.md) / mapValue

# Function: mapValue()

> **mapValue**\<`K`, `V`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/maps/mapValue.ts:27](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/maps/mapValue.ts#L27)

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

[`MapValueOper`](../../../maps/enums/type-aliases/MapValueOper.md)

The value operation to perform (e.g. 'has_value', 'lacks_value').

### target

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

## Remarks

Supported Operators:
- **CONTAINS_VALUE**: Map contains the value
- **LACKS_VALUE**: Map does not contain the value
