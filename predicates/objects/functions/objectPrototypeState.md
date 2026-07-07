[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectPrototypeState

# Function: objectPrototypeState()

> **objectPrototypeState**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectPrototypeState.ts:23](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectPrototypeState.ts#L23)

Checks state-related properties of an object's prototype (e.g. prototype_is_null).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectPrototypeStateOper`](../../../objects/enums/type-aliases/ObjectPrototypeStateOper.md)

The prototype state operation to perform.

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const sourceA = Object.create(null);
const sourceB = { id: 1 };

objectPrototypeState(sourceA, 'prototype_is_null'); // true
objectPrototypeState(sourceB, 'prototype_is_null'); // false
```

## Remarks

Supported Operators:
- **prototype_is_null**: Object prototype is null
