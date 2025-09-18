[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectKeysState](../README.md) / objectKeysState

# Function: objectKeysState()

> **objectKeysState**(`obj`, `oper`): `boolean`

Defined in: [predicates/objects/objectKeysState.ts:19](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/objects/objectKeysState.ts#L19)

Checks state-related properties of an object's keys (e.g. has_symbol_keys, has_numeric_keys).

## Parameters

### obj

`object`

The object to check.

### oper

[`ObjectKeysStateOper`](../../../../objects/enums/type-aliases/ObjectKeysStateOper.md)

The state operation to perform (ObjectKeysStateOper).

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Remarks

Supported Operators:
- **HAS_SYMBOL_KEYS**: Object has at least one symbol key
- **HAS_NUMERIC_KEYS**: Object has at least one numeric key
- **HAS_CAMELCASE_KEYS**: Object has at least one camelCase key
- **HAS_HOMOGENEOUS_KEYS**: All keys are of the same type
