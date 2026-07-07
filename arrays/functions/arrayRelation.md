[**predictype v0.13.0**](../../README.md)

***

[predictype](../../modules.md) / [arrays](../README.md) / arrayRelation

# Function: arrayRelation()

> **arrayRelation**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/arrays/arrayRelation.ts:34](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/arrays/arrayRelation.ts#L34)

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

[`ArrayRelationOper`](../enums/type-aliases/ArrayRelationOper.md)

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

**Subset and Superset**

```ts
arrayRelation([1, 2], 'subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'subset_of', [1, 2]); // true (equality allowed)
arrayRelation([1, 2, 3], 'superset_of', [2, 3]); // true
arrayRelation([1, 2], 'superset_of', [1, 2]); // true (equality allowed)
```

**Strict Subset and Strict Superset**

```ts
arrayRelation([1, 2], 'strict_subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'strict_subset_of', [1, 2]); // false (equality not allowed)
arrayRelation([1, 2, 3], 'strict_superset_of', [2, 3]); // true
arrayRelation([1, 2], 'strict_superset_of', [1, 2]); // false (equality not allowed)
```

## Remarks

Supported Operators:
- **subset_of**: every element of source is in target, equality allowed
- **superset_of**: every element of target is in source, equality allowed
- **strict_subset_of**: every element of source is in target and source is smaller than target
- **strict_superset_of**: every element of target is in source and source is larger than target
