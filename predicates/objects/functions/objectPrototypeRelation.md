[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/objects](../README.md) / objectPrototypeRelation

# Function: objectPrototypeRelation()

> **objectPrototypeRelation**(`source`, `oper`, `proto`): `boolean`

Defined in: [predicates/objects/objectPrototypeRelation.ts:26](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/objects/objectPrototypeRelation.ts#L26)

Checks prototype relation between objects (contains_prototype, is_prototype_of).

## Parameters

### source

`object`

The object to check.

### oper

[`ObjectPrototypeRelationOper`](../../../objects/enums/type-aliases/ObjectPrototypeRelationOper.md)

The prototype relation operation to perform (e.g. 'contains_prototype', 'is_prototype_of').

### proto

`any`

The prototype to compare against.

## Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const proto = { kind: 'base' };
const source = Object.create(proto);
const target = Object.create(source);

objectPrototypeRelation(source, 'contains_prototype', proto); // true
objectPrototypeRelation(source, 'is_prototype_of', target); // true
```

## Remarks

Supported Operators:
- **contains_prototype**: object prototype is the given prototype
- **is_prototype_of**: object is prototype of the given value
