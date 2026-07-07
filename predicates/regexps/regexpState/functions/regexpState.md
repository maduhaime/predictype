[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/regexps/regexpState](../README.md) / regexpState

# Function: regexpState()

> **regexpState**(`source`, `oper`): `boolean`

Defined in: [predicates/regexps/regexpState.ts:33](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/regexps/regexpState.ts#L33)

Checks the state of a RegExp (flags and pattern shape) using the specified operation.

## Parameters

### source

`RegExp`

The RegExp to check.

### oper

[`RegExpStateOper`](../../../../regexps/enums/type-aliases/RegExpStateOper.md)

The state operation to perform (e.g. 'is_global', 'has_indices').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const sourceA = /foo/gi;
const sourceB = new RegExp('');

regexpState(sourceA, 'is_global'); // true
regexpState(sourceA, 'is_ignore_case'); // true
regexpState(sourceB, 'is_empty_pattern'); // true
```

## Remarks

Supported Operators:
- **is_global**
- **is_ignore_case**
- **is_multiline**
- **is_dot_all**
- **is_unicode**
- **is_sticky**
- **has_indices**
- **is_empty_pattern**
