[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectProperty

# Function: objectProperty()

> **objectProperty**(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/objects/objectProperty.ts:20](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/objects/objectProperty.ts#L20)

Checks if an object has or lacks a property (own or inherited) using the specified operation.

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectPropertyOper`](../../../objects/enums/type-aliases/ObjectPropertyOper.md)

The property operation to perform (e.g. 'contains_property', 'lacks_own_property').

### key

The property key to check.

`string` | `symbol`

## Returns

`boolean`

True if the property check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Remarks

Supported Operators:
- **CONTAINS_PROPERTY**: Object has the property (own or inherited)
- **LACKS_PROPERTY**: Object lacks the property (own or inherited)
- **CONTAINS_OWN_PROPERTY**: Object has the property as own property
- **LACKS_OWN_PROPERTY**: Object lacks the property as own property
