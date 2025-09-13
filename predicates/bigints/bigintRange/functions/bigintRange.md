[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/bigints/bigintRange](../README.md) / bigintRange

# Function: bigintRange()

> **bigintRange**(`source`, `oper`, `min`, `max`): `boolean`

Defined in: [predicates/bigints/bigintRange.ts:23](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/bigints/bigintRange.ts#L23)

Checks if a bigint value falls within or outside a specified range using the given operation.

## Parameters

### source

`bigint`

The source bigint value.

### oper

[`BigIntRangeOper`](../../../../bigints/enums/type-aliases/BigIntRangeOper.md)

The range operation to perform (e.g. 'between', 'not_between').

### min

`bigint`

The minimum value of the range (inclusive).

### max

`bigint`

The maximum value of the range (inclusive).

## Returns

`boolean`

True if the range check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const value1 = BigInt(5);
const value2 = BigInt(15);
const min = BigInt(1);
const max = BigInt(10);

bigintRange(value1, 'between', min, max); // true
bigintRange(value2, 'not_between', min, max); // true
```
