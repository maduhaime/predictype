[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/sets](../README.md) / setIntersection

# Function: setIntersection()

> **setIntersection**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setIntersection.ts:26](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/sets/setIntersection.ts#L26)

Checks intersection properties between two sets using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The first set.

### oper

[`SetIntersectionOper`](../../../sets/enums/type-aliases/SetIntersectionOper.md)

The intersection operation to perform (e.g. 'disjoint', 'intersects').

### target

`Set`\<`T`\>

The second set.

## Returns

`boolean`

True if the intersection check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = new Set([1, 2]);
const b = new Set([2, 3]);
const c = new Set([4, 5]);

setIntersection(a, 'intersects', b); // true
setIntersection(a, 'disjoint', c); // true
```

## Remarks

Supported Operators:
- **DISJOINT**: Sets have no elements in common
- **INTERSECTS**: Sets have at least one element in common
