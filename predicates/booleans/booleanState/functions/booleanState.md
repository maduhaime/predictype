[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/booleans/booleanState](../README.md) / booleanState

# Function: booleanState()

> **booleanState**(`value`, `oper`): `boolean`

Defined in: [predicates/booleans/booleanState.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/booleans/booleanState.ts#L19)

Checks the state of a boolean value (true or false) using the specified operation.

## Parameters

### value

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
