[**predictype v0.8.1**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectState](../README.md) / objectState

# Function: objectState()

> **objectState**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectState.ts:17](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/predicates/objects/objectState.ts#L17)

Checks state-related properties of an object (is_empty, is_not_empty, is_plain, is_frozen, is_sealed).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectStateOper`](../../../../objects/enums/type-aliases/ObjectStateOper.md)

The state operation to perform.

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
objectState({}, 'is_empty'); // true
objectState({ a: 1 }, 'is_not_empty'); // true
objectState(Object.freeze({}), 'is_frozen'); // true
```
