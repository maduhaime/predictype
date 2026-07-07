[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectKeysCompare

# Function: objectKeysCompare()

> **objectKeysCompare**(`source`, `oper`, `keys`): `boolean`

Defined in: [predicates/objects/objectKeys.ts:33](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectKeys.ts#L33)

Checks object keys for key-comparison operations (CONTAINS_, LACKS_, EQUALS_, etc.).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectKeysOper`](../../../objects/enums/type-aliases/ObjectKeysOper.md)

The key operation to perform (e.g. 'contains_all_keys', 'lacks_all_keys', 'equals_keys', ...).

### keys

`string`[] \| `symbol`[]

The array of keys to check (string[] | symbol[]).

## Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized or keys is missing.

## Example

```ts
const source = { a: 1, b: 2, c: 3 };
const keysA = ['a', 'b'];
const keysB = ['a', 'b', 'c'];

objectKeysCompare(source, 'contains_all_keys', keysA); // true
objectKeysCompare(source, 'equals_keys', keysB); // true
objectKeysCompare(source, 'lacks_all_keys', ['z']); // true
```

## Remarks

Supported Operators:
- **contains_all_keys**: object contains all given keys
- **contains_any_key**: object contains at least one given key
- **contains_only_keys**: object keys and given keys contain the same members
- **contains_symbol_keys**: object has at least one symbol key
- **equals_keys**: object keys equal given keys (order ignored)
- **lacks_all_keys**: object contains none of the given keys
- **only_keys**: every object key belongs to given keys
- **strict_equals_keys**: object keys equal given keys in same order
