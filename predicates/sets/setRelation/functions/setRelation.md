[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setRelation](../README.md) / setRelation

# Function: setRelation()

> **setRelation**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setRelation.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/sets/setRelation.ts#L21)

Checks the relation between two sets (disjoint, intersects, subset, superset) using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The first set.

### oper

[`SetRelationOper`](../../../../sets/enums/type-aliases/SetRelationOper.md)

The relation operation to perform (e.g. 'disjoint', 'is_subset_of').

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
```
