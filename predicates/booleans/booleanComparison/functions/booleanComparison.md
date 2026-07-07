[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/booleans/booleanComparison](../README.md) / booleanComparison

# Function: booleanComparison()

> **booleanComparison**(`value`, `oper`, `target`): `boolean`

Defined in: [predicates/booleans/booleanComparison.ts:27](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/booleans/booleanComparison.ts#L27)

Compares a boolean value to a target boolean using the specified comparison operation.

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

## Remarks

Supported Operators:
- **equals**: value equals target
- **not_equals**: value does not equal target
