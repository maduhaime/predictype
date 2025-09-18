[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/booleans/booleanComparison](../README.md) / booleanComparison

# Function: booleanComparison()

> **booleanComparison**(`value`, `oper`, `target`): `boolean`

Defined in: [predicates/booleans/booleanComparison.ts:27](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/booleans/booleanComparison.ts#L27)

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
