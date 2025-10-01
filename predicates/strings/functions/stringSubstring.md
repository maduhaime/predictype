[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/strings](../README.md) / stringSubstring

# Function: stringSubstring()

> **stringSubstring**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/strings/stringSubstring.ts:26](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/strings/stringSubstring.ts#L26)

Checks if a string contains, excludes, starts with, or ends with a substring using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringSubstringOper`](../../../strings/enums/type-aliases/StringSubstringOper.md)

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

## Remarks

Supported Operators:
- **INCLUDES**: String includes the substring
- **EXCLUDES**: String does not include the substring
- **STARTS_WITH**: String starts with the substring
- **ENDS_WITH**: String ends with the substring
