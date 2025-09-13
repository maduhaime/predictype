[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectAttributes](../README.md) / objectAttributes

# Function: objectAttributes()

> **objectAttributes**(`obj`, `oper`, `key`): `boolean`

Defined in: [predicates/objects/objectAttributes.ts:23](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/objects/objectAttributes.ts#L23)

Checks object property attributes (writable, enumerable, configurable, accessor, data property) using the specified operation.

## Parameters

### obj

`object`

The object to check.

### oper

[`ObjectAttributesOper`](../../../../objects/enums/type-aliases/ObjectAttributesOper.md)

The attribute operation to perform (e.g. 'is_writable', 'is_accessor').

### key

The property key to check.

`string` | `symbol`

## Returns

`boolean`

True if the attribute check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const obj = { foo: 42 };
const obj2 = {};
const sym = Symbol('bar');

Object.defineProperty(obj2, sym, { value: 1, writable: false });

objectAttributes(obj, 'is_writable', 'foo'); // true
objectAttributes(obj2, 'is_writable', sym); // false
```
