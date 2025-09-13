[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/booleans/booleanComparison](../README.md) / booleanComparison

# Function: booleanComparison()

> **booleanComparison**(`value`, `oper`, `target`): `boolean`

Defined in: [predicates/booleans/booleanComparison.ts:26](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/booleans/booleanComparison.ts#L26)

Compares a boolean value to a target boolean using the specified comparison operation.

Supported operations:
- 'equals': returns true if value === target
- 'not_equals': returns true if value !== target

## Parameters

### value

`boolean`

The boolean value to compare.

### oper

[`BooleanComparisonOper`](../../../../booleans/enums/type-aliases/BooleanComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'not_equals').

### target

`boolean`

The boolean value to compare against.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const valueTrue = true;
const valueFalse = false;

booleanComparison(valueTrue, 'equals', true); // true
booleanComparison(valueFalse, 'equals', true); // false
booleanComparison(valueTrue, 'not_equals', false); // true
booleanComparison(valueFalse, 'not_equals', false); // false
```
