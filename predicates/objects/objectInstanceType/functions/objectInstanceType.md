[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectInstanceType](../README.md) / objectInstanceType

# Function: objectInstanceType()

> **objectInstanceType**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectInstanceType.ts:19](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/objects/objectInstanceType.ts#L19)

Checks the type of an instance using the specified operation.

## Parameters

### source

`any`

The value to check.

### oper

[`ObjectInstanceTypeOper`](../../../../objects/enums/type-aliases/ObjectInstanceTypeOper.md)

The type operation to perform.

## Returns

`boolean`

True if the type check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Remarks

Supported Operators:
- **INSTANCE_OF_CLASS**: Is a class constructor
- **INSTANCE_OF_CONSTRUCTOR**: Is a constructor function
- **INSTANCE_OF_FUNCTION**: Is a function
- **INSTANCE_OF_OBJECT**: Is an object
