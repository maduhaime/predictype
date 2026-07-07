[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/maps/mapKey](../README.md) / mapKey

# Function: mapKey()

> **mapKey**\<`K`, `V`\>(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/maps/mapKey.ts:28](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/maps/mapKey.ts#L28)

Checks if a Map contains (or lacks) a specific key using the specified operation.

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

[`MapKeyOper`](../../../../maps/enums/type-aliases/MapKeyOper.md)

The key operation to perform (e.g. 'contains_key', 'lacks_key').

### key

`K`

The key to check for.

## Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const m = new Map([[1, 'a']]);
const key1 = 1;
const key2 = 2;

mapKey(m, 'contains_key', key1); // true
mapKey(m, 'lacks_key', key2); // true
```

## Remarks

Supported Operators:
- **contains_key**: map contains the key
- **lacks_key**: map does not contain the key
