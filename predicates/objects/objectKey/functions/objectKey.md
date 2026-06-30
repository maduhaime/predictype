[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectKey](../README.md) / objectKey

# Function: objectKey()

> **objectKey**(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/objects/objectKey.ts:28](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/objects/objectKey.ts#L28)

Checks if an object has or lacks a specific key (string or symbol) using the specified operation.

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectKeyOper`](../../../../objects/enums/type-aliases/ObjectKeyOper.md)

The key operation to perform (e.g. 'contains_key', 'lacks_key').

### key

`string` \| `symbol`

The key to check.

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

objectKey(obj, 'contains_key', 'foo'); // true
objectKey(obj, 'lacks_key', 'bar'); // true
objectKey(obj2, 'contains_key', sym); // true
```

## Remarks

Supported Operators:
- **CONTAINS_KEY**: Object has the key
- **LACKS_KEY**: Object does not have the key
