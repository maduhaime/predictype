[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/booleans/booleanState](../README.md) / booleanState

# Function: booleanState()

> **booleanState**(`source`, `oper`): `boolean`

Defined in: [predicates/booleans/booleanState.ts:24](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/booleans/booleanState.ts#L24)

Checks the state of a boolean value (true or false) using the specified operation.

## Parameters

### source

`boolean`

The boolean value to check.

### oper

[`BooleanStateOper`](../../../../booleans/enums/type-aliases/BooleanStateOper.md)

The operation to perform (e.g. 'is_true', 'is_false').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const valueTrue = true;
const valueFalse = false;

booleanState(valueTrue, 'is_true'); // true
booleanState(valueFalse, 'is_false'); // true
```

## Remarks

Supported Operators:
- **is_true**: source is true
- **is_false**: source is false
