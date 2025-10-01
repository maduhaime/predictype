[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectInstanceRelation](../README.md) / objectInstanceRelation

# Function: objectInstanceRelation()

> **objectInstanceRelation**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/objects/objectInstanceRelation.ts:18](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/objects/objectInstanceRelation.ts#L18)

Checks instance or prototype relation between two values using the specified operation.

## Parameters

### source

`any`

The value to check.

### oper

[`ObjectInstanceRelationOper`](../../../../objects/enums/type-aliases/ObjectInstanceRelationOper.md)

The relation operation to perform (e.g. 'instance_of', 'prototype_of').

### target

`any`

The target to compare against.

## Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Remarks

Supported Operators:
- **INSTANCE_OF**: value instanceof target
- **PROTOTYPE_OF**: value is prototype of target
