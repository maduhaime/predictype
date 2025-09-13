[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectKeys](../README.md) / objectKeys

# Function: objectKeys()

> **objectKeys**(`obj`, `oper`, `keys?`): `boolean`

Defined in: [predicates/objects/objectKeys.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/objects/objectKeys.ts#L22)

Checks object keys according to the specified operation.

## Parameters

### obj

`object`

The object to check.

### oper

[`ObjectKeysOper`](../../../../objects/enums/type-aliases/ObjectKeysOper.md)

The key operation to perform (e.g. 'has_all_keys', 'has_no_keys').

### keys?

The key(s) to check (string | string[] | symbol[]).

`string` | `string`[] | `symbol`[]

## Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const obj = { foo: 1, bar: 2 };
const obj2 = { [sym]: 3 };
const sym = Symbol('baz');

objectKeys(obj, 'has_all_keys', ['foo', 'bar']); // true
objectKeys(obj, 'has_no_keys'); // false
objectKeys(obj2, 'has_symbol_keys'); // true
```
