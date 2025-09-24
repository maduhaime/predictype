[**predictype v0.7.5**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectPrototypeRelation

# Function: objectPrototypeRelation()

> **objectPrototypeRelation**(`source`, `oper`, `proto`): `boolean`

Defined in: [predicates/objects/objectPrototypeRelation.ts:18](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/objects/objectPrototypeRelation.ts#L18)

Checks prototype relation between objects (contains_prototype, is_prototype_of).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectPrototypeRelationOper`](../../../objects/enums/type-aliases/ObjectPrototypeRelationOper.md)

The prototype operation to perform (e.g. 'is_prototype_of', 'prototype_is_null').

### proto

`any`

The prototype to compare against.

## Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Remarks

Supported Operators:
- **CONTAINS_PROTOTYPE**: Object's prototype is the given prototype
- **IS_PROTOTYPE_OF**: Object is prototype of the given object
