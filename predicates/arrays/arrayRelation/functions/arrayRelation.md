[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayRelation](../README.md) / arrayRelation

# Function: arrayRelation()

> **arrayRelation**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayRelation.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/arrays/arrayRelation.ts#L22)

Checks if the source array is a subset or superset of the target array, using the specified operation.

## Type Parameters

### T

`T`

Type of the array elements.

## Parameters

### source

`T`[]

The source array.

### oper

[`ArrayRelationOper`](../../../../arrays/enums/type-aliases/ArrayRelationOper.md)

The relation operation to perform (e.g. 'is_subset_of', 'is_superset_of').

### target

`T`[]

The target array to check against the source.

## Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr1 = [1, 2];
const arr2 = [1, 2, 3];
const arr3 = [2, 3];

arrayRelation(arr1, 'is_subset_of', arr2); // true
arrayRelation(arr2, 'is_superset_of', arr3); // true
```
