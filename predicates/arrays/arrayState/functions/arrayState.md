[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayState](../README.md) / arrayState

# Function: arrayState()

> **arrayState**(`source`, `oper`): `boolean`

Defined in: [predicates/arrays/arrayState.ts:24](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/arrays/arrayState.ts#L24)

Checks if an array is empty or not, using the specified operation.

## Parameters

### source

`any`[]

The source array.

### oper

[`ArrayStateOper`](../../../../arrays/enums/type-aliases/ArrayStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_empty').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const arr1 = [];
const arr2 = [1, 2, 3];

arrayState(arr1, 'is_empty'); // true
arrayState(arr2, 'is_not_empty'); // true
```

## Remarks

Supported Operators:
- **IS_EMPTY**: arr.length === 0
- **IS_NOT_EMPTY**: arr.length > 0
