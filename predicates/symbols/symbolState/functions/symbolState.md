[**predictype v0.7.4**](../../../../README.md)

***

[predictype](../../../../modules.md) / [predicates/symbols/symbolState](../README.md) / symbolState

# Function: symbolState()

> **symbolState**(`source`, `oper`): `boolean`

Defined in: [predicates/symbols/symbolState.ts:24](https://github.com/maduhaime/predictype/blob/a31e64bd1ddebd7ac4985de7a7c77139c8ac958d/src/predicates/symbols/symbolState.ts#L24)

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

## Remarks

Supported Operators:
- **IS_GLOBAL**: Symbol is global (Symbol.for)
- **IS_LOCAL**: Symbol is local (not Symbol.for)
