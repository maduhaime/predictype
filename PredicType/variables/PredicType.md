[**predictype v0.4.2**](../../README.md)

***

[predictype](../../modules.md) / [PredicType](../README.md) / PredicType

# Variable: PredicType

> `const` **PredicType**: `object`

Defined in: [PredicType.ts:64](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/PredicType.ts#L64)

## Type declaration

### array

> **array**: `object`

#### array.comparison()

> **comparison**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`[]

###### oper

[`ArrayComparisonOper`](../../arrays/enums/type-aliases/ArrayComparisonOper.md)

###### target

`T`[]

##### Returns

`boolean`

#### array.indexComparison()

> **indexComparison**: \<`T`\>(`source`, `oper`, `index`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`[]

###### oper

[`ArrayIndexComparisonOper`](../../arrays/enums/type-aliases/ArrayIndexComparisonOper.md)

###### index

`number`

###### target

`T`

##### Returns

`boolean`

#### array.indexMembership()

> **indexMembership**: \<`T`\>(`source`, `oper`, `index`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`[]

###### oper

[`ArrayIndexMembershipOper`](../../arrays/enums/type-aliases/ArrayIndexMembershipOper.md)

###### index

`number`

###### target

`T`[]

##### Returns

`boolean`

#### array.intersection()

> **intersection**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`[]

###### oper

[`ArrayIntersectionOper`](../../arrays/enums/type-aliases/ArrayIntersectionOper.md)

###### target

`T`[]

##### Returns

`boolean`

#### array.membership()

> **membership**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`[]

###### oper

[`ArrayMembershipOper`](../../arrays/enums/type-aliases/ArrayMembershipOper.md)

###### target

`T`

##### Returns

`boolean`

#### array.relation()

> **relation**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`[]

###### oper

[`ArrayRelationOper`](../../arrays/enums/type-aliases/ArrayRelationOper.md)

###### target

`T`[]

##### Returns

`boolean`

#### array.sequence()

> **sequence**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`[]

###### oper

[`ArraySequenceOper`](../../arrays/enums/type-aliases/ArraySequenceOper.md)

###### target

`T`[]

##### Returns

`boolean`

#### array.size()

> **size**: (`source`, `oper`, `target`) => `boolean`

##### Parameters

###### source

`any`[]

###### oper

[`ArraySizeOper`](../../arrays/enums/type-aliases/ArraySizeOper.md)

###### target

`number`

##### Returns

`boolean`

#### array.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`any`[]

###### oper

[`ArrayStateOper`](../../arrays/enums/type-aliases/ArrayStateOper.md)

##### Returns

`boolean`

### bigint

> **bigint**: `object`

#### bigint.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean`

##### Parameters

###### source

`bigint`

###### oper

[`BigIntComparisonOper`](../../bigints/enums/type-aliases/BigIntComparisonOper.md)

###### target

`bigint`

##### Returns

`boolean`

#### bigint.membership()

> **membership**: (`source`, `oper`, `set`) => `boolean`

##### Parameters

###### source

`bigint`

###### oper

[`BigIntMembershipOper`](../../bigints/enums/type-aliases/BigIntMembershipOper.md)

###### set

`bigint`[]

##### Returns

`boolean`

#### bigint.range()

> **range**: (`source`, `oper`, `min`, `max`) => `boolean`

##### Parameters

###### source

`bigint`

###### oper

[`BigIntRangeOper`](../../bigints/enums/type-aliases/BigIntRangeOper.md)

###### min

`bigint`

###### max

`bigint`

##### Returns

`boolean`

#### bigint.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`bigint`

###### oper

[`BigIntStateOper`](../../bigints/enums/type-aliases/BigIntStateOper.md)

##### Returns

`boolean`

### boolean

> **boolean**: `object`

#### boolean.comparison()

> **comparison**: (`value`, `oper`, `target`) => `boolean`

##### Parameters

###### value

`boolean`

###### oper

[`BooleanComparisonOper`](../../booleans/enums/type-aliases/BooleanComparisonOper.md)

###### target

`boolean`

##### Returns

`boolean`

#### boolean.state()

> **state**: (`value`, `oper`) => `boolean`

##### Parameters

###### value

`boolean`

###### oper

[`BooleanStateOper`](../../booleans/enums/type-aliases/BooleanStateOper.md)

##### Returns

`boolean`

### date

> **date**: `object`

#### date.calendar()

> **calendar**: (`value`, `oper`) => `boolean`

##### Parameters

###### value

`Date`

###### oper

[`DateCalendarOper`](../../dates/enums/type-aliases/DateCalendarOper.md)

##### Returns

`boolean`

#### date.range()

> **range**: (`value`, `oper`, `min`, `max`) => `boolean`

##### Parameters

###### value

`Date`

###### oper

[`DateRangeOper`](../../dates/enums/type-aliases/DateRangeOper.md)

###### min

`Date`

###### max

`Date`

##### Returns

`boolean`

#### date.state()

> **state**: (`value`, `oper`) => `boolean`

##### Parameters

###### value

`Date`

###### oper

[`DateStateOper`](../../dates/enums/type-aliases/DateStateOper.md)

##### Returns

`boolean`

### function

> **function**: `object`

#### function.arity()

> **arity**: (`source`, `oper`, `arity`) => `boolean`

##### Parameters

###### source

`Function`

###### oper

[`FunctionArityOper`](../../functions/enums/type-aliases/FunctionArityOper.md)

###### arity

`number`

##### Returns

`boolean`

#### function.name()

> **name**: (`source`, `oper`, `name`) => `boolean`

##### Parameters

###### source

`Function`

###### oper

[`FunctionNameOper`](../../functions/enums/type-aliases/FunctionNameOper.md)

###### name

`string`

##### Returns

`boolean`

#### function.pattern()

> **pattern**: (`source`, `oper`, `pattern`) => `boolean`

##### Parameters

###### source

`Function`

###### oper

[`FunctionPatternOper`](../../functions/enums/type-aliases/FunctionPatternOper.md)

###### pattern

`RegExp`

##### Returns

`boolean`

#### function.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`Function`

###### oper

[`FunctionStateOper`](../../functions/enums/type-aliases/FunctionStateOper.md)

##### Returns

`boolean`

### map

> **map**: `object`

#### map.entry()

> **entry**: \<`K`, `V`\>(`source`, `oper`, `entry`) => `boolean`

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

###### oper

[`MapEntryOper`](../../maps/enums/type-aliases/MapEntryOper.md)

###### entry

\[`K`, `V`\]

##### Returns

`boolean`

#### map.key()

> **key**: \<`K`, `V`\>(`source`, `oper`, `key`) => `boolean`

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

###### oper

[`MapKeyOper`](../../maps/enums/type-aliases/MapKeyOper.md)

###### key

`K`

##### Returns

`boolean`

#### map.size()

> **size**: \<`K`, `V`\>(`source`, `oper`, `size`) => `boolean`

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

###### oper

[`MapSizeOper`](../../maps/enums/type-aliases/MapSizeOper.md)

###### size

`number`

##### Returns

`boolean`

#### map.state()

> **state**: \<`K`, `V`\>(`source`, `oper`) => `boolean`

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

###### oper

[`MapStateOper`](../../maps/enums/type-aliases/MapStateOper.md)

##### Returns

`boolean`

#### map.value()

> **value**: \<`K`, `V`\>(`source`, `oper`, `value`) => `boolean`

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

###### oper

[`MapValueOper`](../../maps/enums/type-aliases/MapValueOper.md)

###### value

`V`

##### Returns

`boolean`

### number

> **number**: `object`

#### number.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean`

##### Parameters

###### source

`number`

###### oper

[`NumberComparisonOper`](../../numbers/enums/type-aliases/NumberComparisonOper.md)

###### target

`number`

##### Returns

`boolean`

#### number.range()

> **range**: (`value`, `oper`, `min`, `max`) => `boolean`

##### Parameters

###### value

`number`

###### oper

[`NumberRangeOper`](../../numbers/enums/type-aliases/NumberRangeOper.md)

###### min

`number`

###### max

`number`

##### Returns

`boolean`

#### number.state()

> **state**: (`value`, `oper`) => `boolean`

##### Parameters

###### value

`number`

###### oper

[`NumberStateOper`](../../numbers/enums/type-aliases/NumberStateOper.md)

##### Returns

`boolean`

### object

> **object**: `object`

#### object.attributes()

> **attributes**: (`obj`, `oper`, `key`) => `boolean`

##### Parameters

###### obj

`object`

###### oper

[`ObjectAttributesOper`](../../objects/enums/type-aliases/ObjectAttributesOper.md)

###### key

`string` | `symbol`

##### Returns

`boolean`

#### object.instance()

> **instance**: (`value`, `oper`, `ctor?`) => `boolean`

##### Parameters

###### value

`any`

###### oper

[`ObjectInstanceOper`](../../objects/enums/type-aliases/ObjectInstanceOper.md)

###### ctor?

`Function`

##### Returns

`boolean`

#### object.key()

> **key**: (`obj`, `oper`, `key`) => `boolean`

##### Parameters

###### obj

`object`

###### oper

[`ObjectKeyOper`](../../objects/enums/type-aliases/ObjectKeyOper.md)

###### key

`string` | `symbol`

##### Returns

`boolean`

#### object.keys()

> **keys**: (`obj`, `oper`, `keys?`) => `boolean`

##### Parameters

###### obj

`object`

###### oper

[`ObjectKeysOper`](../../objects/enums/type-aliases/ObjectKeysOper.md)

###### keys?

`string` | `string`[] | `symbol`[]

##### Returns

`boolean`

### promise

> **promise**: `object`

#### promise.state()

> **state**: \<`T`\>(`wrapper`, `oper`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### wrapper

[`PromiseWithState`](../../predicates/promises/promiseState/type-aliases/PromiseWithState.md)\<`T`\>

###### oper

[`PromiseStateOper`](../../promises/enums/type-aliases/PromiseStateOper.md)

##### Returns

`boolean`

#### promise.type()

> **type**: \<`T`\>(`source`, `oper`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Promise`\<`T`\>

###### oper

[`PromiseTypeOper`](../../promises/enums/type-aliases/PromiseTypeOper.md)

##### Returns

`boolean`

### set

> **set**: `object`

#### set.comparison()

> **comparison**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

###### oper

[`SetComparisonOper`](../../sets/enums/type-aliases/SetComparisonOper.md)

###### target

`Set`\<`T`\>

##### Returns

`boolean`

#### set.relation()

> **relation**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

###### oper

[`SetRelationOper`](../../sets/enums/type-aliases/SetRelationOper.md)

###### target

`Set`\<`T`\>

##### Returns

`boolean`

#### set.size()

> **size**: \<`T`\>(`source`, `oper`, `target`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

###### oper

[`SetSizeOper`](../../sets/enums/type-aliases/SetSizeOper.md)

###### target

`number`

##### Returns

`boolean`

#### set.state()

> **state**: \<`T`\>(`source`, `oper`) => `boolean`

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

###### oper

[`SetStateOper`](../../sets/enums/type-aliases/SetStateOper.md)

##### Returns

`boolean`

### string

> **string**: `object`

#### string.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean`

##### Parameters

###### source

`string`

###### oper

[`StringComparisonOper`](../../strings/enums/type-aliases/StringComparisonOper.md)

###### target

`string`

##### Returns

`boolean`

#### string.membership()

> **membership**: (`source`, `oper`, `arr`) => `boolean`

##### Parameters

###### source

`string`

###### oper

[`StringMembershipOper`](../../strings/enums/type-aliases/StringMembershipOper.md)

###### arr

`string`[]

##### Returns

`boolean`

#### string.pattern()

> **pattern**: (`source`, `oper`, `pattern`) => `boolean`

##### Parameters

###### source

`string`

###### oper

[`StringPatternOper`](../../strings/enums/type-aliases/StringPatternOper.md)

###### pattern

`RegExp`

##### Returns

`boolean`

#### string.size()

> **size**: (`source`, `oper`, `target`) => `boolean`

##### Parameters

###### source

`string`

###### oper

[`StringSizeOper`](../../strings/enums/type-aliases/StringSizeOper.md)

###### target

`number`

##### Returns

`boolean`

#### string.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`string`

###### oper

[`StringStateOper`](../../strings/enums/type-aliases/StringStateOper.md)

##### Returns

`boolean`

### symbol

> **symbol**: `object`

#### symbol.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean`

##### Parameters

###### source

`symbol`

###### oper

[`SymbolComparisonOper`](../../symbols/enums/type-aliases/SymbolComparisonOper.md)

###### target

`symbol`

##### Returns

`boolean`

#### symbol.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`symbol`

###### oper

[`SymbolStateOper`](../../symbols/enums/type-aliases/SymbolStateOper.md)

##### Returns

`boolean`
