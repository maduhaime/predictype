[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setIntersection](../README.md) / setIntersection

# Function: setIntersection()

> **setIntersection**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setIntersection.ts:27](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/sets/setIntersection.ts#L27)

Checks intersection properties between two sets using the specified operation.

## Type Parameters

### T

`T`

Type of the Set elements.

## Parameters

### source

`Set`\<`T`\>

The first set.

### oper

[`SetIntersectionOper`](../../../../sets/enums/type-aliases/SetIntersectionOper.md)

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
