[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/sets](../README.md) / setState

# Function: setState()

> **setState**\<`T`\>(`source`, `oper`): `boolean`

Defined in: [predicates/sets/setState.ts:29](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/sets/setState.ts#L29)

Checks the state of a set using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The set to check.

### oper

[`SetStateOper`](../../../sets/enums/type-aliases/SetStateOper.md)

The state operation to perform (e.g. 'is_empty', 'has_primitives').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = new Set();
const b = new Set([1]);
const c = new Set([1, 'hello', { id: 1 }]);

setState(a, 'is_empty'); // true
setState(b, 'is_not_empty'); // true
setState(c, 'has_primitives'); // true
setState(c, 'has_objects'); // true
```

## Remarks

Supported Operators:
- **IS_EMPTY**: Set is empty
- **IS_NOT_EMPTY**: Set is not empty
- **HAS_PRIMITIVES**: Set contains primitive values (string, number, boolean, null, undefined, symbol, bigint)
- **HAS_OBJECTS**: Set contains object values (objects, arrays, functions)
