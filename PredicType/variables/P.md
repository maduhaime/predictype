[**predictype v0.4.2**](../../README.md)

***

[predictype](../../modules.md) / [PredicType](../README.md) / P

# Variable: P

> `const` **P**: `object`

Defined in: [PredicType.ts:234](https://github.com/maduhaime/predictype/blob/360114d4a59ffdd4b6dff1c05c1b93f735615ba4/src/PredicType.ts#L234)

## Type declaration

### arr

> **arr**: `object` = `PredicType.array`

#### arr.comparison()

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

#### arr.indexComparison()

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

#### arr.indexMembership()

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

#### arr.intersection()

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

#### arr.membership()

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

#### arr.relation()

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

#### arr.sequence()

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

#### arr.size()

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

#### arr.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`any`[]

###### oper

[`ArrayStateOper`](../../arrays/enums/type-aliases/ArrayStateOper.md)

##### Returns

`boolean`

### big

> **big**: `object` = `PredicType.bigint`

#### big.comparison()

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

#### big.membership()

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

#### big.range()

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

#### big.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`bigint`

###### oper

[`BigIntStateOper`](../../bigints/enums/type-aliases/BigIntStateOper.md)

##### Returns

`boolean`

### bool

> **bool**: `object` = `PredicType.boolean`

#### bool.comparison()

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

#### bool.state()

> **state**: (`value`, `oper`) => `boolean`

##### Parameters

###### value

`boolean`

###### oper

[`BooleanStateOper`](../../booleans/enums/type-aliases/BooleanStateOper.md)

##### Returns

`boolean`

### date

> **date**: `object` = `PredicType.date`

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

### func

> **func**: `object` = `PredicType.function`

#### func.arity()

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

#### func.name()

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

#### func.pattern()

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

#### func.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`Function`

###### oper

[`FunctionStateOper`](../../functions/enums/type-aliases/FunctionStateOper.md)

##### Returns

`boolean`

### map

> **map**: `object` = `PredicType.map`

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

### num

> **num**: `object` = `PredicType.number`

#### num.comparison()

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

#### num.range()

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

#### num.state()

> **state**: (`value`, `oper`) => `boolean`

##### Parameters

###### value

`number`

###### oper

[`NumberStateOper`](../../numbers/enums/type-aliases/NumberStateOper.md)

##### Returns

`boolean`

### obj

> **obj**: `object` = `PredicType.object`

#### obj.attributes()

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

#### obj.instance()

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

#### obj.key()

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

#### obj.keys()

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

### prom

> **prom**: `object` = `PredicType.promise`

#### prom.state()

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

#### prom.type()

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

> **set**: `object` = `PredicType.set`

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

### str

> **str**: `object` = `PredicType.string`

#### str.comparison()

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

#### str.membership()

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

#### str.pattern()

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

#### str.size()

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

#### str.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`string`

###### oper

[`StringStateOper`](../../strings/enums/type-aliases/StringStateOper.md)

##### Returns

`boolean`

### sym

> **sym**: `object` = `PredicType.symbol`

#### sym.comparison()

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

#### sym.state()

> **state**: (`source`, `oper`) => `boolean`

##### Parameters

###### source

`symbol`

###### oper

[`SymbolStateOper`](../../symbols/enums/type-aliases/SymbolStateOper.md)

##### Returns

`boolean`
