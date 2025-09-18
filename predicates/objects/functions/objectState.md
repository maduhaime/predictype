[**predictype v0.7.4**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectState

# Function: objectState()

> **objectState**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectState.ts:17](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/objects/objectState.ts#L17)

Checks state-related properties of an object (is_empty, is_not_empty, is_plain, is_frozen, is_sealed).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectStateOper`](../../../objects/enums/type-aliases/ObjectStateOper.md)

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
