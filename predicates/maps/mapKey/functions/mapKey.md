[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/maps/mapKey](../README.md) / mapKey

# Function: mapKey()

> **mapKey**\<`K`, `V`\>(`source`, `oper`, `key`): `boolean`

Defined in: [predicates/maps/mapKey.ts:26](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/maps/mapKey.ts#L26)

Checks if a Map contains (or lacks) a specific key using the specified operation.

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

[`MapKeyOper`](../../../../maps/enums/type-aliases/MapKeyOper.md)

The key operation to perform (e.g. 'has_key', 'lacks_key').

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

mapKey(m, 'has_key', key1); // true
mapKey(m, 'lacks_key', key2); // true
```

## Remarks

Supported Operators:
- **CONTAINS_KEY**: Map contains the key
- **LACKS_KEY**: Map does not contain the key
