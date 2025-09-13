[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/strings/stringState](../README.md) / stringState

# Function: stringState()

> **stringState**(`source`, `oper`): `boolean`

Defined in: [predicates/strings/stringState.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/strings/stringState.ts#L19)

Checks the state of a string (empty, not empty, blank, not blank) using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringStateOper`](../../../../strings/enums/type-aliases/StringStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_blank').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const str = '';
const str2 = '   ';

stringState(str, 'is_empty'); // true
stringState(str2, 'is_blank'); // true
```
