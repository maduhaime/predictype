[**predictype v0.7.4**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/strings](../README.md) / stringSize

# Function: stringSize()

> **stringSize**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/strings/stringSize.ts:29](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/strings/stringSize.ts#L29)

Checks the size (length) of a string using the specified operation.

## Parameters

### source

`string`

The string to check.

### oper

[`StringSizeOper`](../../../strings/enums/type-aliases/StringSizeOper.md)

The size operation to perform (e.g. 'length_equals', 'length_greater_than').

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

stringSize(str, 'length_equals', len1); // true
stringSize(str, 'length_greater_than', len2); // true
```

## Remarks

Supported Operators:
- **SIZE_EQUALS**: String length equals the given value
- **SIZE_GREATER_THAN**: String length is greater than value
- **SIZE_GREATER_THAN_OR_EQUALS**: String length is greater or equal
- **SIZE_LESS_THAN**: String length is less than value
- **SIZE_LESS_THAN_OR_EQUALS**: String length is less or equal
