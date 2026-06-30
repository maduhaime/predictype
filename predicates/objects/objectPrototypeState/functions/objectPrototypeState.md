[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectPrototypeState](../README.md) / objectPrototypeState

# Function: objectPrototypeState()

> **objectPrototypeState**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectPrototypeState.ts:16](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/objects/objectPrototypeState.ts#L16)

Checks state-related properties of an object's prototype (e.g. prototype_is_null).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectPrototypeStateOper`](../../../../objects/enums/type-aliases/ObjectPrototypeStateOper.md)

The prototype state operation to perform.

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Remarks

Supported Operators:
- **PROTOTYPE_IS_NULL**: Object's prototype is null
