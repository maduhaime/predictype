[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/maps/mapValue](../README.md) / mapValue

# Function: mapValue()

> **mapValue**\<`K`, `V`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/maps/mapValue.ts:29](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/maps/mapValue.ts#L29)

Checks if a Map contains (or lacks) a specific value using the specified operation.

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

[`MapValueOper`](../../../../maps/enums/type-aliases/MapValueOper.md)

The value operation to perform (e.g. 'contains_value', 'lacks_value').

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

mapValue(m1, 'contains_value', valueA); // true
mapValue(m2, 'lacks_value', valueB); // true
```

## Remarks

Supported Operators:
- **contains_value**: map contains the value
- **lacks_value**: map does not contain the value
