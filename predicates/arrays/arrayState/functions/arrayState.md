[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/arrays/arrayState](../README.md) / arrayState

# Function: arrayState()

> **arrayState**(`source`, `oper`): `boolean`

Defined in: [predicates/arrays/arrayState.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/arrays/arrayState.ts#L19)

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
