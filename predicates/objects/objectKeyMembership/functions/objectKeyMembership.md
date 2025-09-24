[**predictype v0.7.5**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectKeyMembership](../README.md) / objectKeyMembership

# Function: objectKeyMembership()

> **objectKeyMembership**(`source`, `oper`, `keys`): `boolean`

Defined in: [predicates/objects/objectKeyMembership.ts:18](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/objects/objectKeyMembership.ts#L18)

Checks if a key is (or is not) in a list of possible keys using the specified operation.

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectKeyMembershipOper`](../../../../objects/enums/type-aliases/ObjectKeyMembershipOper.md)

The membership operation to perform (e.g. 'key_in', 'key_not_in').

### keys

(`string` \| `symbol`)[]

The array of possible keys.

## Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized or keys is missing.

## Remarks

Supported Operators:
- **IN**: At least one key is present
- **NOT_IN**: No keys are present
