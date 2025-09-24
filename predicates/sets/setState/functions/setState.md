[**predictype v0.7.5**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setState](../README.md) / setState

# Function: setState()

> **setState**\<`T`\>(`source`, `oper`): `boolean`

Defined in: [predicates/sets/setState.ts:24](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/sets/setState.ts#L24)

Checks the state of a set (empty or not) using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetStateOper`](../../../../sets/enums/type-aliases/SetStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_empty').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = new Set();
const b = new Set([1]);

setState(a, 'is_empty'); // true
setState(b, 'is_not_empty'); // true
```

## Remarks

Supported Operators:
- **IS_EMPTY**: Set is empty
- **IS_NOT_EMPTY**: Set is not empty
