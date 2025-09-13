[**predictype v0.4.2**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/symbols/symbolState](../README.md) / symbolState

# Function: symbolState()

> **symbolState**(`source`, `oper`): `boolean`

Defined in: [predicates/symbols/symbolState.ts:19](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/predicates/symbols/symbolState.ts#L19)

Checks the state of a symbol (global or local) using the specified operation.

## Parameters

### source

`symbol`

The symbol to check.

### oper

[`SymbolStateOper`](../../../../symbols/enums/type-aliases/SymbolStateOper.md)

The state operation to perform (e.g. 'is_global', 'is_local').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const globalSym = Symbol.for('foo');
const localSym = Symbol('bar');

symbolState(globalSym, 'is_global'); // true
symbolState(localSym, 'is_local'); // true
```
