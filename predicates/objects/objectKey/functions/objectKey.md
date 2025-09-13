[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectKey](../README.md) / objectKey

# Function: objectKey()

> **objectKey**(`obj`, `oper`, `key`): `boolean`

Defined in: [predicates/objects/objectKey.ts:23](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/objects/objectKey.ts#L23)

Checks if an object has or lacks a specific key (string or symbol) using the specified operation.

## Parameters

### obj

`object`

The object to check.

### oper

[`ObjectKeyOper`](../../../../objects/enums/type-aliases/ObjectKeyOper.md)

The key operation to perform (e.g. 'has_key', 'lacks_key').

### key

The key to check.

`string` | `symbol`

## Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const obj = { foo: 1 };
const obj2 = {};
const sym = Symbol('baz');
Object.defineProperty(obj2, sym, { value: 2 });

objectKey(obj, 'has_key', 'foo'); // true
objectKey(obj, 'lacks_key', 'bar'); // true
objectKey(obj2, 'has_key', sym); // true
```
