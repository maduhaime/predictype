[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectProperty

# Function: objectProperty()

> **objectProperty**(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/objects/objectProperty.ts:28](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectProperty.ts#L28)

Checks if an object has or lacks a property (own or inherited) using the specified operation.

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectPropertyOper`](../../../objects/enums/type-aliases/ObjectPropertyOper.md)

The property operation to perform (e.g. 'contains_property', 'lacks_own_property').

### key

`string` \| `symbol`

The property key to check.

## Returns

`boolean`

True if the property check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = Object.create({ inherited: true });
source.own = 42;

objectProperty(source, 'contains_property', 'inherited'); // true
objectProperty(source, 'contains_own_property', 'own'); // true
objectProperty(source, 'lacks_own_property', 'inherited'); // true
```

## Remarks

Supported Operators:
- **contains_property**: object has the property (own or inherited)
- **lacks_property**: object lacks the property (own or inherited)
- **contains_own_property**: object has the property as own property
- **lacks_own_property**: object lacks the property as own property
