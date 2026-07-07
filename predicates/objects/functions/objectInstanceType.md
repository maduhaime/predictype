[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectInstanceType

# Function: objectInstanceType()

> **objectInstanceType**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectInstanceType.ts:28](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectInstanceType.ts#L28)

Checks the type of an instance using the specified operation.

## Parameters

### source

`any`

The value to check.

### oper

[`ObjectInstanceTypeOper`](../../../objects/enums/type-aliases/ObjectInstanceTypeOper.md)

The type operation to perform.

## Returns

`boolean`

True if the type check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
class User {}
const classCtor = User;
const plain = { id: 1 };

objectInstanceType(classCtor, 'instance_of_class'); // true
objectInstanceType(classCtor, 'instance_of_function'); // true
objectInstanceType(plain, 'instance_of_object'); // true
```

## Remarks

Supported Operators:
- **instance_of_class**: value is a class constructor
- **instance_of_constructor**: value is a constructor/function
- **instance_of_function**: value is a function
- **instance_of_object**: value is a non-null object
