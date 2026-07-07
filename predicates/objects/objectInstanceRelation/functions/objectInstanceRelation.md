[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectInstanceRelation](../README.md) / objectInstanceRelation

# Function: objectInstanceRelation()

> **objectInstanceRelation**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/objects/objectInstanceRelation.ts:28](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectInstanceRelation.ts#L28)

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

## Example

```ts
class User {}
const sourceA = new User();
const targetA = User;
const proto = { kind: 'base' };
const child = Object.create(proto);

objectInstanceRelation(sourceA, 'instance_of', targetA); // true
objectInstanceRelation(proto, 'prototype_of', child); // true
```

## Remarks

Supported Operators:
- **instance_of**: value instanceof target
- **prototype_of**: value is prototype of target
