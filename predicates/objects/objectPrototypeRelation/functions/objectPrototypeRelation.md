[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectPrototypeRelation](../README.md) / objectPrototypeRelation

# Function: objectPrototypeRelation()

> **objectPrototypeRelation**(`source`, `oper`, `proto`): `boolean`

Defined in: [predicates/objects/objectPrototypeRelation.ts:18](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/objects/objectPrototypeRelation.ts#L18)

Checks prototype relation between objects (contains_prototype, is_prototype_of).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectPrototypeRelationOper`](../../../../objects/enums/type-aliases/ObjectPrototypeRelationOper.md)

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
