[**predictype v0.8.1**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/maps](../README.md) / mapEntry

# Function: mapEntry()

> **mapEntry**\<`K`, `V`\>(`source`, `oper`, `entry`): `boolean`

Defined in: [predicates/maps/mapEntry.ts:26](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/maps/mapEntry.ts#L26)

Checks if a Map contains (or lacks) a specific entry (key-value pair) using the specified operation.

## Type Parameters

### K

`K`

### V

`V`

## Parameters

### source

`Map`\<`K`, `V`\>

The Map to check.

### oper

[`MapEntryOper`](../../../maps/enums/type-aliases/MapEntryOper.md)

The entry operation to perform (e.g. 'has_entry', 'lacks_entry').

### entry

\[`K`, `V`\]

The [key, value] pair to check for.

## Returns

`boolean`

True if the entry check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const m = new Map([[1, 'a']]);
const entry1 = [1, 'a'];
const entry2 = [2, 'b'];

mapEntry(m, 'has_entry', entry1); // true
mapEntry(m, 'lacks_entry', entry2); // true
```

## Remarks

Supported Operators:
- **CONTAINS_ENTRY**: Map contains the [key, value] entry
- **LACKS_ENTRY**: Map does not contain the [key, value] entry
