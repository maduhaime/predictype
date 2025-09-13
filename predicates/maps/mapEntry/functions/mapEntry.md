[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/maps/mapEntry](../README.md) / mapEntry

# Function: mapEntry()

> **mapEntry**\<`K`, `V`\>(`source`, `oper`, `entry`): `boolean`

Defined in: [predicates/maps/mapEntry.ts:21](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/maps/mapEntry.ts#L21)

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

[`MapEntryOper`](../../../../maps/enums/type-aliases/MapEntryOper.md)

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
