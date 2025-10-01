[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectAttributes](../README.md) / objectAttributes

# Function: objectAttributes()

> **objectAttributes**(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/objects/objectAttributes.ts:32](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/objects/objectAttributes.ts#L32)

Checks object property attributes (writable, enumerable, configurable, accessor, data property) using the specified
operation.

## Parameters

### source

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

## Remarks

Supported Operators:
- **ATTR_IS_WRITABLE**: Property is writable
- **ATTR_IS_ENUMERABLE**: Property is enumerable
- **ATTR_IS_CONFIGURABLE**: Property is configurable
- **ATTR_IS_ACCESSOR**: Property is an accessor (getter/setter)
- **ATTR_IS_DATA_PROPERTY**: Property is a data property
