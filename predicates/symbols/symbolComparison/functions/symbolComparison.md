[**predictype v0.7.5**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/symbols/symbolComparison](../README.md) / symbolComparison

# Function: symbolComparison()

> **symbolComparison**(`source`, `oper`, `target`): `boolean`

Defined in: [predicates/symbols/symbolComparison.ts:25](https://github.com/maduhaime/predictype/blob/ef4bbbc6b35bbd00ea6de27b270da1255f7cee6b/src/predicates/symbols/symbolComparison.ts#L25)

Compares two symbols for equality or inequality using the specified operation.

## Parameters

### source

`symbol`

The first symbol to compare.

### oper

[`SymbolComparisonOper`](../../../../symbols/enums/type-aliases/SymbolComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'not_equals').

### target

`symbol`

The second symbol to compare.

## Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const a = Symbol('foo');
const b = Symbol('foo');

symbolComparison(a, 'equals', a); // true
symbolComparison(a, 'not_equals', b); // true
```

## Remarks

Supported Operators:
- **EQUALS**: Symbols are equal
- **NOT_EQUALS**: Symbols are not equal
