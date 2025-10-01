[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/sets](../README.md) / setRelation

# Function: setRelation()

> **setRelation**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setRelation.ts:32](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/sets/setRelation.ts#L32)

Checks the relation between two sets (disjoint, intersects, subset, superset) using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The first set.

### oper

[`SetRelationOper`](../../../sets/enums/type-aliases/SetRelationOper.md)

The relation operation to perform (e.g. 'disjoint', 'subset_of').

### target

`Set`\<`T`\>

The second set.

## Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = new Set([1, 2]);
const b = new Set([2, 3]);
const c = new Set([4, 5]);

setRelation(a, 'intersects', b); // true
setRelation(a, 'disjoint', c); // true
setRelation(a, 'subset_of', b); // true
setRelation(a, 'superset_of', b); // false
```

## Remarks

Supported Operators:
- **DISJOINT**: Sets have no elements in common
- **INTERSECTS**: Sets have at least one element in common
- **SUBSET_OF**: First set is a subset of second
- **SUPERSET_OF**: First set is a superset of second
- **STRICT_SUBSET_OF**: First set is a strict subset of second
- **STRICT_SUPERSET_OF**: First set is a strict superset of second
