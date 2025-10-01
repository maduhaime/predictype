[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/bigints/bigintRange](../README.md) / bigintRange

# Function: bigintRange()

> **bigintRange**(`source`, `oper`, `min`, `max`): `boolean`

Defined in: [predicates/bigints/bigintRange.ts:30](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/bigints/bigintRange.ts#L30)

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

## Remarks

Supported Operators:
- **BETWEEN**: min <= value <= max
- **NOT_BETWEEN**: value < min or value > max
- **STRICT_BETWEEN**: min < value < max
- **STRICT_NOT_BETWEEN**: value <= min or value >= max
