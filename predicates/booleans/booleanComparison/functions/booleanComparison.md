[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/booleans/booleanComparison](../README.md) / booleanComparison

# Function: booleanComparison()

> **booleanComparison**(`value`, `oper`, `target`): `boolean`

Defined in: [predicates/booleans/booleanComparison.ts:27](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/booleans/booleanComparison.ts#L27)

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
- **EQUALS**: value === target
- **NOT_EQUALS**: value !== target
