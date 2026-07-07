[**predictype v0.13.0**](../../../README.md)

***

[predictype](../../../modules.md) / [predicates/urls](../README.md) / urlState

# Function: urlState()

> **urlState**(`source`, `oper`): `boolean`

Defined in: [predicates/urls/urlState.ts:36](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/predicates/urls/urlState.ts#L36)

Checks state flags of a URL (presence and protocol checks).

## Parameters

### source

`URL`

The URL to inspect.

### oper

[`UrlStateOper`](../../../urls/enums/type-aliases/UrlStateOper.md)

The state operation to perform (e.g. 'has_hash', 'is_https').

## Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

## Throws

If the operation is not recognized.

## Example

```ts
const source = new URL('https://user:pass@example.com:8443/docs?q=1#intro');

urlState(source, 'has_hash'); // true
urlState(source, 'has_search'); // true
urlState(source, 'has_port'); // true
urlState(source, 'is_https'); // true
```

## Remarks

Supported Operators:
- **has_hash**
- **has_search**
- **has_port**
- **has_username**
- **has_password**
- **is_http**
- **is_https**
- **is_ws**
- **is_wss**
