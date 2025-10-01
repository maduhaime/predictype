[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/numbers](../README.md) / numberState

# Function: numberState()

> **numberState**(`source`, `oper`): `boolean`

Defined in: [predicates/numbers/numberState.ts:28](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/numbers/numberState.ts#L28)

Checks the state of a number (integer, float, finite, positive, negative, zero) using the specified operation.

## Parameters

### source

`number`

The number to check.

### oper

[`NumberStateOper`](../../../numbers/enums/type-aliases/NumberStateOper.md)

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

## Remarks

Supported Operators:
- **IS_INTEGER**: Is an integer
- **IS_FLOAT**: Is a finite float (not integer)
- **IS_FINITE**: Is a finite number
- **IS_POSITIVE**: Is positive
- **IS_NEGATIVE**: Is negative
- **IS_ZERO**: Is zero
