[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectInstance](../README.md) / objectInstance

# Function: objectInstance()

> **objectInstance**(`value`, `oper`, `ctor?`): `boolean`

Defined in: [predicates/objects/objectInstance.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/objects/objectInstance.ts#L22)

Checks object instance/type characteristics using the specified operation.

## Parameters

### value

`any`

The value to check.

### oper

[`ObjectInstanceOper`](../../../../objects/enums/type-aliases/ObjectInstanceOper.md)

The instance operation to perform (e.g. 'is_class', 'is_instance_of').

### ctor?

`Function`

The constructor to check against (for 'is_instance_of').

## Returns

`boolean`

True if the instance check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
class Foo {}
const foo = new Foo();
function Bar() {}

objectInstance(foo, 'is_instance_of', Foo); // true
objectInstance(Bar, 'is_class'); // false (not a class)
objectInstance(Bar, 'is_constructor'); // true
```
