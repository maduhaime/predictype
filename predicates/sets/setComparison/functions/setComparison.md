[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/sets/setComparison](../README.md) / setComparison

# Function: setComparison()

> **setComparison**\<`T`\>(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/sets/setComparison.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/sets/setComparison.ts#L21)

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
