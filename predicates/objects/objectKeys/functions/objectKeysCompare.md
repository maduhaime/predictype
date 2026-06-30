[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectKeys](../README.md) / objectKeysCompare

# Function: objectKeysCompare()

> **objectKeysCompare**(`source`, `oper`, `keys`): `boolean`

Defined in: [predicates/objects/objectKeys.ts:24](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/objects/objectKeys.ts#L24)

Checks object keys for key-comparison operations (CONTAINS_, LACKS_, EQUALS_, etc.).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectKeysOper`](../../../../objects/enums/type-aliases/ObjectKeysOper.md)

The key operation to perform (e.g. 'contains_all_keys', 'lacks_all_keys', 'equals_keys', ...).

### keys

`string`[] \| `symbol`[]

The array of keys to check (string[] | symbol[]).

## Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized or keys is missing.

## Remarks

Supported Operators:
- **CONTAINS_ALL_KEYS**: Object contains all the given keys
- **CONTAINS_ANY_KEY**: Object contains at least one of the keys
- **CONTAINS_ONLY_KEYS**: Object contains only the given keys
- **CONTAINS_SYMBOL_KEYS**: Object contains at least one symbol key
- **EQUALS_KEYS**: Object keys equal the given keys
- **LACKS_ALL_KEYS**: Object lacks all the given keys
- **ONLY_KEYS**: All object keys are in the given set
- **STRICT_EQUALS_KEYS**: Object keys strictly equal the given keys
