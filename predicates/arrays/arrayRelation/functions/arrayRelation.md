[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayRelation](../README.md) / arrayRelation

# Function: arrayRelation()

> **arrayRelation**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayRelation.ts:34](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/arrays/arrayRelation.ts#L34)

Checks if the source array is a subset, strict subset, superset, or strict superset of the target array, using the
specified operation.

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

The relation operation to perform ('subset_of', 'superset_of', 'strict_subset_of', 'strict_superset_of').

### target

`T`[]

The target array to check against the source.

## Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Examples

```ts
arrayRelation([1, 2], 'subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'subset_of', [1, 2]); // true (equality allowed)
arrayRelation([1, 2, 3], 'superset_of', [2, 3]); // true
arrayRelation([1, 2], 'superset_of', [1, 2]); // true (equality allowed)
```

```ts
arrayRelation([1, 2], 'strict_subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'strict_subset_of', [1, 2]); // false (equality not allowed)
arrayRelation([1, 2, 3], 'strict_superset_of', [2, 3]); // true
arrayRelation([1, 2], 'strict_superset_of', [1, 2]); // false (equality not allowed)
```

## Remarks

Supported Operators:
- **SUBSET_OF**: Every element of source is in target (equality allowed)
- **SUPERSET_OF**: Every element of target is in source (equality allowed)
- **STRICT_SUBSET_OF**: Every element of source is in target, and source.length < target.length
- **STRICT_SUPERSET_OF**: Every element of target is in source, and source.length > target.length
