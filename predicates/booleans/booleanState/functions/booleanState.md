[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/booleans/booleanState](../README.md) / booleanState

# Function: booleanState()

> **booleanState**(`source`, `oper`): `boolean`

Defined in: [predicates/booleans/booleanState.ts:24](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/booleans/booleanState.ts#L24)

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
- **IS_TRUE**: source === true
- **IS_FALSE**: source === false
