[**predictype v0.11.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/errors](../README.md) / errorState

# Function: errorState()

> **errorState**(`source`, `oper`): `boolean`

Defined in: [predicates/errors/errorState.ts:26](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/errors/errorState.ts#L26)

Checks the state of an Error using the specified operation.

## Parameters

### source

`Error`

The Error to check.

### oper

[`ErrorStateOper`](../../../errors/enums/type-aliases/ErrorStateOper.md)

The state operation to perform (e.g. 'has_stack', 'has_cause').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const err = new Error('boom');

errorState(err, 'has_stack'); // true
errorState(new AggregateError([], 'many'), 'is_aggregate_error'); // true
```

## Remarks

Supported Operators:
- **HAS_CAUSE**: Error has a defined `cause`
- **HAS_STACK**: Error has a non-empty `stack`
- **IS_AGGREGATE_ERROR**: Error is an AggregateError
