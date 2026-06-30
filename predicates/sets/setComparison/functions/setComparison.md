[**predictype v0.11.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setComparison](../README.md) / setComparison

# Function: setComparison()

> **setComparison**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setComparison.ts:27](https://github.com/maduhaime/predictype/blob/86f717c6944a6682f5761acd54d002b5890f0f91/src/predicates/sets/setComparison.ts#L27)

Compares two sets for equality or inequality using the specified operation.

## Type Parameters

### T

`T`

## Parameters

### source

`Set`\<`T`\>

The first set to compare.

### oper

[`SetComparisonOper`](../../../../sets/enums/type-aliases/SetComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'not_equals').

### target

`Set`\<`T`\>

The second set to compare.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = new Set([1, 2, 3]);
const b = new Set([1, 2, 3]);
const c = new Set([4, 5]);

setComparison(a, 'equals', b); // true
setComparison(a, 'not_equals', c); // true
```

## Remarks

Supported Operators:
- **EQUALS**: Sets are equal
- **NOT_EQUALS**: Sets are not equal
- **SAME_ELEMENTS**: Sets contain the same elements (alias for EQUALS)
