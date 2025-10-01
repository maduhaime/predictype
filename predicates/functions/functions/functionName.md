[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/functions](../README.md) / functionName

# Function: functionName()

> **functionName**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/functions/functionName.ts:30](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/functions/functionName.ts#L30)

Checks the name of a function using the specified operation.

## Parameters

### source

`Function`

The function to check.

### oper

[`FunctionNameOper`](../../../functions/enums/type-aliases/FunctionNameOper.md)

The name operation to perform (e.g. 'equals', 'starts_with').

### target

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

## Remarks

Supported Operators:
- **EQUALS**: Function name equals the given string
- **STARTS_WITH**: Function name starts with the string
- **ENDS_WITH**: Function name ends with the string
- **INCLUDES**: Function name includes the string
- **EXCLUDES**: Function name does not include the string
