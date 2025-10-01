[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/functions/functionArity](../README.md) / functionArity

# Function: functionArity()

> **functionArity**(`source`, `oper`, `arity`): `boolean`

Defined in: [predicates/functions/functionArity.ts:30](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/functions/functionArity.ts#L30)

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

## Remarks

Supported Operators:
- **EQUALS**: Function arity equals the given value
- **NOT_EQUALS**: Function arity does not equal the value
- **GREATER_THAN**: Function arity is greater than the value
- **GREATER_OR_EQUAL**: Function arity is greater or equal to value
- **LESS_THAN**: Function arity is less than the value
- **LESS_OR_EQUAL**: Function arity is less or equal to value
