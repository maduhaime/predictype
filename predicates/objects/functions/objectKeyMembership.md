[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectKeyMembership

# Function: objectKeyMembership()

> **objectKeyMembership**(`source`, `oper`, `keys`): `boolean`

Defined in: [predicates/objects/objectKeyMembership.ts:27](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectKeyMembership.ts#L27)

Checks if a key is (or is not) in a list of possible keys using the specified operation.

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectKeyMembershipOper`](../../../objects/enums/type-aliases/ObjectKeyMembershipOper.md)

The membership operation to perform (e.g. 'in', 'not_in').

### keys

(`string` \| `symbol`)[]

The array of possible keys.

## Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized or keys is missing.

## Example

```ts
const idSymbol = Symbol('id');
const source = { name: 'Ada', [idSymbol]: 1 };
const keysA = ['name', 'missing'];
const keysB = ['missing'];

objectKeyMembership(source, 'in', keysA); // true
objectKeyMembership(source, 'not_in', keysB); // true
```

## Remarks

Supported Operators:
- **in**: at least one key from keys is present
- **not_in**: no key from keys is present
