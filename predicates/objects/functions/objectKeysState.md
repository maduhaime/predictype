[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectKeysState

# Function: objectKeysState()

> **objectKeysState**(`obj`, `oper`): `boolean`

Defined in: [predicates/objects/objectKeysState.ts:27](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectKeysState.ts#L27)

Checks state-related properties of an object's keys (e.g. has_symbol_keys, has_numeric_keys).

## Parameters

### obj

`object`

The object to check.

### oper

[`ObjectKeysStateOper`](../../../objects/enums/type-aliases/ObjectKeysStateOper.md)

The state operation to perform (ObjectKeysStateOper).

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const sourceA = { userName: 'Ada', 42: 'x' };
const sourceB = { a: 1, b: 2 };

objectKeysState(sourceA, 'has_camelcase_keys'); // true
objectKeysState(sourceA, 'has_numeric_keys'); // true
objectKeysState(sourceB, 'has_homogeneous_keys'); // true
```

## Remarks

Supported Operators:
- **has_symbol_keys**: object has at least one symbol key
- **has_numeric_keys**: object has at least one numeric key
- **has_camelcase_keys**: object has at least one camelCase key
- **has_homogeneous_keys**: all keys are of the same type
