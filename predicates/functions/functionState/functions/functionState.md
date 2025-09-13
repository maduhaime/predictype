[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/functions/functionState](../README.md) / functionState

# Function: functionState()

> **functionState**(`source`, `oper`): `boolean`

Defined in: [predicates/functions/functionState.ts:22](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/functions/functionState.ts#L22)

Checks the state of a function (e.g. async, generator, constructor, arrow, anonymous, has name) using the specified operation.

## Parameters

### source

`Function`

The function to check.

### oper

[`FunctionStateOper`](../../../../functions/enums/type-aliases/FunctionStateOper.md)

The state operation to perform (e.g. 'is_async', 'is_arrow').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const asyncFn = async function foo() {};
const genFn = function* gen() {};

functionState(asyncFn, 'is_async'); // true
functionState(genFn, 'is_generator'); // true
functionState(() => {}, 'is_arrow'); // true
functionState(function() {}, 'is_anonymous'); // true
functionState(function named() {}, 'has_name'); // true
```
