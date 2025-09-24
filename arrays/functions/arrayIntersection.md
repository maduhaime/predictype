[**predictype v0.7.5**](../../README.md)

***

[predictype](../../modules.md) / [arrays](../README.md) / arrayIntersection

# Function: arrayIntersection()

> **arrayIntersection**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayIntersection.ts:28](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/arrays/arrayIntersection.ts#L28)

Checks if two arrays are disjoint or intersect, using the specified operation.

## Type Parameters

### T

`T`

Type of the array elements.

## Parameters

### source

`T`[]

The source array.

### oper

[`ArrayIntersectionOper`](../enums/type-aliases/ArrayIntersectionOper.md)

The intersection operation to perform (e.g. 'disjoint', 'intersects').

### target

`T`[]

The target array to check against the source.

## Returns

`boolean`

True if the intersection check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [2, 4, 6];

arrayIntersection(arr1, 'disjoint', arr2); // true
arrayIntersection(arr1, 'intersects', arr3); // true
```

## Remarks

Supported Operators:
- **DISJOINT**: No common elements
- **INTERSECTS**: At least one common element
