[**predictype v0.13.0**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/objects/objectState](../README.md) / objectState

# Function: objectState()

> **objectState**(`source`, `oper`): `boolean`

Defined in: [predicates/objects/objectState.ts:44](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectState.ts#L44)

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
const empty = {};
const frozen = Object.freeze({ a: 1 });

objectState(empty, 'is_empty'); // true
objectState(frozen, 'is_frozen'); // true
```

## Remarks

Supported Operators:
- **has_array_prop**: object has at least one array property value
- **has_camelcase_keys**: object has at least one camelCase key
- **has_function_prop**: object has at least one function property value
- **has_nested_object**: object has at least one nested object value
- **has_no_keys**: object has no own string keys
- **has_no_undefined**: object has no undefined own values
- **has_null_proto**: object prototype is null
- **has_numeric_keys**: object has at least one numeric key
- **has_symbol_keys**: object has at least one symbol key
- **has_symbols**: object has at least one symbol key
- **inherits_object**: object inherits from a custom prototype
- **is_cloneable**: object can be cloned with JSON serialization
- **is_empty**: object has no own string or symbol keys
- **is_extensible**: object is extensible
- **is_frozen**: object is frozen
- **is_homogeneous**: all own values have the same type
- **is_iterable**: object exposes Symbol.iterator
- **is_json_serializable**: object can be JSON serialized
- **is_not_empty**: object has at least one own string or symbol key
- **is_plain**: object is a plain object or null-prototype object
- **is_sealed**: object is sealed
- **is_typed_object**: object prototype is Map, Set, or Date prototype
