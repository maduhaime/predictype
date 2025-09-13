[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/functions/functionArity](../README.md) / functionArity

# Function: functionArity()

> **functionArity**(`source`, `oper`, `arity`): `boolean`

Defined in: [predicates/functions/functionArity.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/functions/functionArity.ts#L21)

Checks the arity (number of parameters) of a function using the specified operation.

## Parameters

### source

`Function`

The function to check.

### oper

[`FunctionArityOper`](../../../../functions/enums/type-aliases/FunctionArityOper.md)

The arity operation to perform (e.g. 'arity_equals', 'arity_greater_than').

### arity

`number`

The arity (number of parameters) to compare against.

## Returns

`boolean`

True if the arity check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const fn1 = function(a, b) {};
const fn2 = function(a, b, c) {};
const arity2 = 2;

functionArity(fn1, 'arity_equals', arity2); // true
functionArity(fn2, 'arity_greater_than', arity2); // true
```
