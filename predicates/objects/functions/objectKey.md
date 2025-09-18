[**predictype v0.7.4**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectKey

# Function: objectKey()

> **objectKey**(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/objects/objectKey.ts:28](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/objects/objectKey.ts#L28)

Checks if an object has or lacks a specific key (string or symbol) using the specified operation.

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectKeyOper`](../../../objects/enums/type-aliases/ObjectKeyOper.md)

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

## Remarks

Supported Operators:
- **CONTAINS_KEY**: Object has the key
- **LACKS_KEY**: Object does not have the key
