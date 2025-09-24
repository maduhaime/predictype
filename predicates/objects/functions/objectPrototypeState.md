[**predictype v0.7.5**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectPrototypeState

# Function: objectPrototypeState()

> **objectPrototypeState**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectPrototypeState.ts:16](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/objects/objectPrototypeState.ts#L16)

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

## Remarks

Supported Operators:
- **PROTOTYPE_IS_NULL**: Object's prototype is null
