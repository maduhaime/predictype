[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/queries/queryEntry](../README.md) / queryEntry

# Function: queryEntry()

> **queryEntry**(`source`, `oper`, `entry`): `boolean`

Defined in: [predicates/queries/queryEntry.ts:26](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/queries/queryEntry.ts#L26)

Checks whether query parameters contain or lack a specific [key, value] entry.

## Parameters

### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

### oper

[`QueryEntryOper`](../../../../queries/enums/type-aliases/QueryEntryOper.md)

The entry operation to perform ('contains_entry' or 'lacks_entry').

### entry

\[`string`, `string`\]

The [key, value] pair to check.

## Returns

`boolean`

True if the entry check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URLSearchParams('tag=ts&tag=ai&sort=desc');
const entryA: [string, string] = ['tag', 'ai'];
const entryB: [string, string] = ['tag', 'rust'];

queryEntry(source, 'contains_entry', entryA); // true
queryEntry(source, 'lacks_entry', entryB); // true
```

## Remarks

Supported Operators:
- **contains_entry**
- **lacks_entry**
