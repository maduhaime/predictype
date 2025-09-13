[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/functions/functionName](../README.md) / functionName

# Function: functionName()

> **functionName**(`source`, `oper`, `name`): `boolean`

Defined in: [predicates/functions/functionName.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/functions/functionName.ts#L22)

Checks the name of a function using the specified operation.

## Parameters

### source

`Function`

The function to check.

### oper

[`FunctionNameOper`](../../../../functions/enums/type-aliases/FunctionNameOper.md)

The name operation to perform (e.g. 'equals', 'starts_with').

### name

`string`

The string to compare the function name against.

## Returns

`boolean`

True if the name check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const fn1 = function foo() {};
const fn2 = function barTest() {};
const name1 = 'foo';
const name2 = 'bar';

functionName(fn1, 'equals', name1); // true
functionName(fn2, 'starts_with', name2); // true
```
