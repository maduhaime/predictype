[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/bigints/bigintState](../README.md) / bigintState

# Function: bigintState()

> **bigintState**(`source`, `oper`): `boolean`

Defined in: [predicates/bigints/bigintState.ts:29](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/bigints/bigintState.ts#L29)

Checks the state of a bigint value (zero, positive, negative, even, odd) using the specified operation.

## Parameters

### source

`bigint`

The source bigint value.

### oper

[`BigIntStateOper`](../../../../bigints/enums/type-aliases/BigIntStateOper.md)

The state operation to perform (e.g. 'is_zero', 'is_even').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const zero = BigInt(0);
const even = BigInt(10);
const negative = BigInt(-5);

bigintState(zero, 'is_zero'); // true
bigintState(even, 'is_even'); // true
bigintState(negative, 'is_negative'); // true
```

## Remarks

Supported Operators:
- **IS_ZERO**: value === 0n
- **IS_POSITIVE**: value > 0n
- **IS_NEGATIVE**: value < 0n
- **IS_EVEN**: value % 2n === 0n
- **IS_ODD**: value % 2n !== 0n
