[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/strings/stringSize](../README.md) / stringSize

# Function: stringSize()

> **stringSize**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/strings/stringSize.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/strings/stringSize.ts#L21)

Checks the size (length) of a string using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringSizeOper`](../../../../strings/enums/type-aliases/StringSizeOper.md)

The size operation to perform (e.g. 'equals', 'greater_than').

### target

`number`

The length to compare against.

## Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const str = 'hello';
const len1 = 5;
const len2 = 3;

stringSize(str, 'equals', len1); // true
stringSize(str, 'greater_than', len2); // true
```
