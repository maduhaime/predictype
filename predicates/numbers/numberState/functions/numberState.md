[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/numbers/numberState](../README.md) / numberState

# Function: numberState()

> **numberState**(`value`, `oper`): `boolean`

Defined in: [predicates/numbers/numberState.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/numbers/numberState.ts#L19)

Checks the state of a number (integer, float, finite, positive, negative, zero) using the specified operation.

## Parameters

### value

`number`

The number to check.

### oper

[`NumberStateOper`](../../../../numbers/enums/type-aliases/NumberStateOper.md)

The state operation to perform (e.g. 'is_integer', 'is_float').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const n = 5;

numberState(n, 'is_integer'); // true
numberState(3.14, 'is_float'); // true
numberState(0, 'is_zero'); // true
```
