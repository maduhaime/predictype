[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectPrototypeState](../README.md) / objectPrototypeState

# Function: objectPrototypeState()

> **objectPrototypeState**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectPrototypeState.ts:16](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/objects/objectPrototypeState.ts#L16)

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
