[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/maps](../README.md) / mapEntry

# Function: mapEntry()

> **mapEntry**\<`K`, `V`\>(`source`, `oper`, `entry`): `boolean`

Defined in: [predicates/maps/mapEntry.ts:28](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/maps/mapEntry.ts#L28)

Checks if a Map contains (or lacks) a specific entry (key-value pair) using the specified operation.

## Type Parameters

### K

`K`

Type of the Map keys.

### V

`V`

Type of the Map values.

## Parameters

### source

`Map`\<`K`, `V`\>

The Map to check.

### oper

[`MapEntryOper`](../../../maps/enums/type-aliases/MapEntryOper.md)

The entry operation to perform (e.g. 'contains_entry', 'lacks_entry').

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

mapEntry(m, 'contains_entry', entry1); // true
mapEntry(m, 'lacks_entry', entry2); // true
```

## Remarks

Supported Operators:
- **contains_entry**: map contains the [key, value] entry
- **lacks_entry**: map does not contain the [key, value] entry
