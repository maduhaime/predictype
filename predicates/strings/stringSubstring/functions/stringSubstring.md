[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/strings/stringSubstring](../README.md) / stringSubstring

# Function: stringSubstring()

> **stringSubstring**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/strings/stringSubstring.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/strings/stringSubstring.ts#L19)

Checks if a string contains, excludes, starts with, or ends with a substring using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringSubstringOper`](../../../../strings/enums/type-aliases/StringSubstringOper.md)

The substring operation to perform (e.g. 'includes', 'starts_with').

### target

`string`

The substring to check for.

## Returns

`boolean`

True if the substring check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const str = 'foobar';

stringSubstring(str, 'includes', sub); // true
stringSubstring(str, 'starts_with', sub); // true
```
