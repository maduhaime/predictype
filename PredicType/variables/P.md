[**predictype v0.8.1**](../../README.md)

***

[predictype](../../modules.md) / [PredicType](../README.md) / P

# Variable: P

> `const` **P**: `object`

Defined in: [PredicType.ts:102](https://github.com/maduhaime/predictype/blob/2310adbaccb6fbc00cdab8e345e79bd5b09e40f5/src/PredicType.ts#L102)

## Type Declaration

### arr

> **arr**: `object` = `PredicType.array`

#### arr.comparison()

> **comparison**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `arrays.arrayComparison`

Compares two arrays using a variety of comparison operations.

##### Type Parameters

###### T

`T`

Type of the array elements.

##### Parameters

###### source

`T`[]

The source array to compare.

###### oper

[`ArrayComparisonOper`](../../arrays/enums/type-aliases/ArrayComparisonOper.md)

The comparison operation to perform (EQUALS, NOT_EQUALS, SAME_MEMBERS, SET_EQUALS, SET_NOT_EQUALS).

###### target

`T`[]

The target array to compare against the source.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
arrayComparison([1, 2, 3], 'equals', [1, 2, 3]); // true
arrayComparison([1, 2, 3], 'equals', [3, 2, 1]); // false
arrayComparison([1, 2, 3], 'not_equals', [1, 2, 4]); // true
arrayComparison([1, 2, 2], 'same_members', [2, 1, 2]); // true
arrayComparison([1, 2, 2], 'same_members', [2, 1]); // false
arrayComparison([1, 2, 2], 'set_equals', [2, 1]); // true
arrayComparison([1, 2, 2], 'set_equals', [2, 1, 3]); // false
arrayComparison([1, 2, 2], 'set_not_equals', [2, 1, 3]); // true
arrayComparison([1, 2, 2], 'set_not_equals', [2, 1]); // false
```

##### Remarks

Supported operators:
- EQUALS: Strict equality (same order, same values)
- NOT_EQUALS: Strict inequality (different order or values)
- SAME_MEMBERS: Multiset equality (same values and counts, order ignored)
- SET_EQUALS: Set equality (same unique values, order/dupes ignored)
- SET_NOT_EQUALS: Set inequality (different unique values)

#### arr.indexComparison()

> **indexComparison**: \<`T`\>(`source`, `oper`, `index`, `target`) => `boolean` = `arrays.arrayIndexComparison`

Compares the value at a specific index in an array with a target value, using the specified operation.

##### Type Parameters

###### T

`T`

Type of the array elements.

##### Parameters

###### source

`T`[]

The source array.

###### oper

[`ArrayIndexComparisonOper`](../../arrays/enums/type-aliases/ArrayIndexComparisonOper.md)

The comparison operation to perform (e.g. 'at_index_equals').

###### index

`number`

The index in the array to compare.

###### target

`T`

The value to compare against the value at the given index.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr = [10, 20, 30];
const idx1 = 1;
const idx2 = 2;
const val1 = 20;
const val2 = 25;

arrayIndexComparison(arr, 'at_index_equals', idx1, val1); // true
arrayIndexComparison(arr, 'at_index_greater_than', idx2, val2); // true
```

##### Remarks

Supported Operators:
- **AT_INDEX_EQUALS**: arr[index] === value
- **AT_INDEX_NOT_EQUALS**: arr[index] !== value
- **AT_INDEX_GREATER_THAN**: arr[index] > value
- **AT_INDEX_GREATER_THAN_OR_EQUALS**: arr[index] >= value
- **AT_INDEX_LESS_THAN**: arr[index] < value
- **AT_INDEX_LESS_THAN_OR_EQUALS**: arr[index] <= value

#### arr.indexMembership()

> **indexMembership**: \<`T`\>(`source`, `oper`, `index`, `target`) => `boolean` = `arrays.arrayIndexMembership`

Checks if the value at a specific index in an array is (or is not) included in a target array, using the specified
operation.

##### Type Parameters

###### T

`T`

Type of the array elements.

##### Parameters

###### source

`T`[]

The source array.

###### oper

[`ArrayIndexMembershipOper`](../../arrays/enums/type-aliases/ArrayIndexMembershipOper.md)

The membership operation to perform (e.g. 'at_index_in').

###### index

`number`

The index in the array to check.

###### target

`T`[]

The array of values to check for inclusion/exclusion.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr = [10, 20, 30];
const idx1 = 1;
const idx2 = 2;
const values = [10, 20];

arrayIndexMembership(arr, 'at_index_in', idx1, values); // true
arrayIndexMembership(arr, 'at_index_not_in', idx2, values); // true
```

##### Remarks

Supported Operators:
- **AT_INDEX_IN**: arr[index] is in target array
- **AT_INDEX_NOT_IN**: arr[index] is not in target array

#### arr.intersection()

> **intersection**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `arrays.arrayIntersection`

Checks if two arrays are disjoint or intersect, using the specified operation.

##### Type Parameters

###### T

`T`

Type of the array elements.

##### Parameters

###### source

`T`[]

The source array.

###### oper

[`ArrayIntersectionOper`](../../arrays/enums/type-aliases/ArrayIntersectionOper.md)

The intersection operation to perform (e.g. 'disjoint', 'intersects').

###### target

`T`[]

The target array to check against the source.

##### Returns

`boolean`

True if the intersection check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [2, 4, 6];

arrayIntersection(arr1, 'disjoint', arr2); // true
arrayIntersection(arr1, 'intersects', arr3); // true
```

##### Remarks

Supported Operators:
- **DISJOINT**: No common elements
- **INTERSECTS**: At least one common element

#### arr.membership()

> **membership**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `arrays.arrayMembership`

Checks membership conditions for all or some elements in an array, using the specified operation.

##### Type Parameters

###### T

`T`

Type of the array elements.

##### Parameters

###### source

`T`[]

The source array.

###### oper

[`ArrayMembershipOper`](../../arrays/enums/type-aliases/ArrayMembershipOper.md)

The membership operation to perform (e.g. 'every_equals', 'includes').

###### target

`T`

The value to check for membership.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr1 = [1, 1, 1];
const arr2 = [1, 2, 3];
const value1 = 1;
const value2 = 2;

arrayMembership(arr1, 'every_equals', value1); // true
arrayMembership(arr2, 'includes', value2); // true
```

##### Remarks

Supported Operators:
- **EVERY_EQUALS**: Every element equals target
- **SOME_EQUALS**: At least one element equals target
- **INCLUDES**: Array includes target
- **EXCLUDES**: Array does not include target

#### arr.relation()

> **relation**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `arrays.arrayRelation`

Checks if the source array is a subset, strict subset, superset, or strict superset of the target array, using the
specified operation.

##### Type Parameters

###### T

`T`

Type of the array elements.

##### Parameters

###### source

`T`[]

The source array.

###### oper

[`ArrayRelationOper`](../../arrays/enums/type-aliases/ArrayRelationOper.md)

The relation operation to perform ('subset_of', 'superset_of', 'strict_subset_of', 'strict_superset_of').

###### target

`T`[]

The target array to check against the source.

##### Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Examples

```ts
arrayRelation([1, 2], 'subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'subset_of', [1, 2]); // true (equality allowed)
arrayRelation([1, 2, 3], 'superset_of', [2, 3]); // true
arrayRelation([1, 2], 'superset_of', [1, 2]); // true (equality allowed)
```

```ts
arrayRelation([1, 2], 'strict_subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'strict_subset_of', [1, 2]); // false (equality not allowed)
arrayRelation([1, 2, 3], 'strict_superset_of', [2, 3]); // true
arrayRelation([1, 2], 'strict_superset_of', [1, 2]); // false (equality not allowed)
```

##### Remarks

Supported Operators:
- **SUBSET_OF**: Every element of source is in target (equality allowed)
- **SUPERSET_OF**: Every element of target is in source (equality allowed)
- **STRICT_SUBSET_OF**: Every element of source is in target, and source.length < target.length
- **STRICT_SUPERSET_OF**: Every element of target is in source, and source.length > target.length

#### arr.sequence()

> **sequence**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `arrays.arraySequence`

Checks if the source array contains, starts with, or ends with a given subsequence, using the specified operation.

##### Type Parameters

###### T

`T`

Type of the array elements.

##### Parameters

###### source

`T`[]

The source array.

###### oper

[`ArraySequenceOper`](../../arrays/enums/type-aliases/ArraySequenceOper.md)

The sequence operation to perform (e.g. 'contains_subsequence', 'starts_with', 'ends_with').

###### target

`T`[]

The target subsequence array to check against the source.

##### Returns

`boolean`

True if the sequence check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3];
const arr3 = [1, 2, 3];
const arr4 = [1, 2];

arraySequence(arr1, 'contains_subsequence', arr2); // true
arraySequence(arr3, 'starts_with', arr4); // true
```

##### Remarks

Supported Operators:
- **CONTAINS_SUBSEQUENCE**: Source contains target as a contiguous subsequence
- **STARTS_WITH**: Source starts with target
- **ENDS_WITH**: Source ends with target

#### arr.size()

> **size**: (`source`, `oper`, `target`) => `boolean` = `arrays.arraySize`

Checks the size of an array against a target value, using the specified operation.

##### Parameters

###### source

`any`[]

The source array.

###### oper

[`ArraySizeOper`](../../arrays/enums/type-aliases/ArraySizeOper.md)

The size operation to perform (e.g. 'length_equals', 'length_greater_than').

###### target

`number`

The target size to compare against the array's length.

##### Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr = [1, 2, 3];
const len1 = 3;
const len2 = 2;

arraySize(arr, 'length_equals', len1); // true
arraySize(arr, 'length_greater_than', len2); // true
```

##### Remarks

Supported Operators:
- **SIZE_EQUALS**: arr.length === target
- **SIZE_GREATER_THAN**: arr.length > target
- **SIZE_GREATER_THAN_OR_EQUALS**: arr.length >= target
- **SIZE_LESS_THAN**: arr.length < target
- **SIZE_LESS_THAN_OR_EQUALS**: arr.length <= target

#### arr.state()

> **state**: (`source`, `oper`) => `boolean` = `arrays.arrayState`

Checks if an array is empty or not, using the specified operation.

##### Parameters

###### source

`any`[]

The source array.

###### oper

[`ArrayStateOper`](../../arrays/enums/type-aliases/ArrayStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_empty').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr1 = [];
const arr2 = [1, 2, 3];

arrayState(arr1, 'is_empty'); // true
arrayState(arr2, 'is_not_empty'); // true
```

##### Remarks

Supported Operators:
- **IS_EMPTY**: arr.length === 0
- **IS_NOT_EMPTY**: arr.length > 0

### big

> **big**: `object` = `PredicType.bigint`

#### big.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean` = `bigints.bigintComparison`

Compares two bigint values using the specified operation.

##### Parameters

###### source

`bigint`

The source bigint value.

###### oper

[`BigIntComparisonOper`](../../bigints/enums/type-aliases/BigIntComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'greater_than').

###### target

`bigint`

The target bigint value to compare against the source.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = BigInt(10);
const b = BigInt(5);
const c = BigInt(20);

bigintComparison(a, 'equals', a); // true
bigintComparison(a, 'greater_than', b); // true
bigintComparison(a, 'less_than', c); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: a === b
- **NOT_EQUALS**: a !== b
- **GREATER_THAN**: a > b
- **GREATER_THAN_OR_EQUALS**: a >= b
- **LESS_THAN**: a < b
- **LESS_THAN_OR_EQUALS**: a <= b

#### big.membership()

> **membership**: (`source`, `oper`, `target`) => `boolean` = `bigints.bigintMembership`

Checks if a bigint value is (or is not) a member of a set of bigints using the specified operation.

##### Parameters

###### source

`bigint`

The source bigint value.

###### oper

[`BigIntMembershipOper`](../../bigints/enums/type-aliases/BigIntMembershipOper.md)

The membership operation to perform (e.g. 'is_one_of', 'is_not_one_of').

###### target

`bigint`[]

The array of bigints to check membership against.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const value1 = BigInt(5);
const value2 = BigInt(3);
const arr = [BigInt(1), BigInt(2), BigInt(5)];

bigintMembership(value1, 'is_one_of', arr); // true
bigintMembership(value2, 'is_not_one_of', arr); // true
```

##### Remarks

Supported Operators:
- **IN**: value is in the target array
- **NOT_IN**: value is not in the target array

#### big.range()

> **range**: (`source`, `oper`, `min`, `max`) => `boolean` = `bigints.bigintRange`

Checks if a bigint value falls within or outside a specified range using the given operation.

##### Parameters

###### source

`bigint`

The source bigint value.

###### oper

[`BigIntRangeOper`](../../bigints/enums/type-aliases/BigIntRangeOper.md)

The range operation to perform (e.g. 'between', 'not_between').

###### min

`bigint`

The minimum value of the range (inclusive).

###### max

`bigint`

The maximum value of the range (inclusive).

##### Returns

`boolean`

True if the range check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const value1 = BigInt(5);
const value2 = BigInt(15);
const min = BigInt(1);
const max = BigInt(10);

bigintRange(value1, 'between', min, max); // true
bigintRange(value2, 'not_between', min, max); // true
```

##### Remarks

Supported Operators:
- **BETWEEN**: min <= value <= max
- **NOT_BETWEEN**: value < min or value > max
- **STRICT_BETWEEN**: min < value < max
- **STRICT_NOT_BETWEEN**: value <= min or value >= max

#### big.state()

> **state**: (`source`, `oper`) => `boolean` = `bigints.bigintState`

Checks the state of a bigint value (zero, positive, negative, even, odd) using the specified operation.

##### Parameters

###### source

`bigint`

The source bigint value.

###### oper

[`BigIntStateOper`](../../bigints/enums/type-aliases/BigIntStateOper.md)

The state operation to perform (e.g. 'is_zero', 'is_even').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const zero = BigInt(0);
const even = BigInt(10);
const negative = BigInt(-5);

bigintState(zero, 'is_zero'); // true
bigintState(even, 'is_even'); // true
bigintState(negative, 'is_negative'); // true
```

##### Remarks

Supported Operators:
- **IS_ZERO**: value === 0n
- **IS_POSITIVE**: value > 0n
- **IS_NEGATIVE**: value < 0n
- **IS_EVEN**: value % 2n === 0n
- **IS_ODD**: value % 2n !== 0n

### bool

> **bool**: `object` = `PredicType.boolean`

#### bool.comparison()

> **comparison**: (`value`, `oper`, `target`) => `boolean` = `booleans.booleanComparison`

Compares a boolean value to a target boolean using the specified comparison operation.

##### Parameters

###### value

`boolean`

The boolean value to compare.

###### oper

[`BooleanComparisonOper`](../../booleans/enums/type-aliases/BooleanComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'not_equals').

###### target

`boolean`

The boolean value to compare against.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const valueTrue = true;
const valueFalse = false;

booleanComparison(valueTrue, 'equals', true); // true
booleanComparison(valueFalse, 'equals', true); // false
booleanComparison(valueTrue, 'not_equals', false); // true
booleanComparison(valueFalse, 'not_equals', false); // false
```

##### Remarks

Supported Operators:
- **EQUALS**: value === target
- **NOT_EQUALS**: value !== target

#### bool.state()

> **state**: (`source`, `oper`) => `boolean` = `booleans.booleanState`

Checks the state of a boolean value (true or false) using the specified operation.

##### Parameters

###### source

`boolean`

The boolean value to check.

###### oper

[`BooleanStateOper`](../../booleans/enums/type-aliases/BooleanStateOper.md)

The operation to perform (e.g. 'is_true', 'is_false').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const valueTrue = true;
const valueFalse = false;

booleanState(valueTrue, 'is_true'); // true
booleanState(valueFalse, 'is_false'); // true
```

##### Remarks

Supported Operators:
- **IS_TRUE**: source === true
- **IS_FALSE**: source === false

### date

> **date**: `object` = `PredicType.date`

#### date.calendar()

> **calendar**: (`source`, `oper`, `today`) => `boolean` = `dates.dateCalendar`

Checks calendar-based properties of a date (UTC) using the specified operation.

##### Parameters

###### source

`Date`

The date to check.

###### oper

[`DateCalendarOper`](../../dates/enums/type-aliases/DateCalendarOper.md)

The calendar operation to perform (e.g. 'is_today', 'is_weekend', 'is_past').

###### today

`Date` = `...`

(optional) The reference date to use as "today" (defaults to new Date()). Useful for testing.

##### Returns

`boolean`

True if the calendar check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const today = new Date();
const janFirst = new Date('2025-01-01');

dateCalendar(today, 'is_today'); // true (if run today)
dateCalendar(janFirst, 'is_first_day_of_month'); // true
```

##### Remarks

Supported Operators:
- **IS_TODAY**: Is the date today (UTC)?
- **IS_YESTERDAY**: Is the date yesterday (UTC)?
- **IS_TOMORROW**: Is the date tomorrow (UTC)?
- **IS_WEEKEND**: Is the date a weekend?
- **IS_WEEKDAY**: Is the date a weekday?
- **IS_PAST**: Is the date before today?
- **IS_FUTURE**: Is the date after today?
- **IS_FIRST_DAY_OF_MONTH**: Is the date the 1st of the month?
- **IS_LAST_DAY_OF_MONTH**: Is the date the last of the month?

#### date.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean` = `dates.dateComparison`

Compares two dates in UTC using the specified comparison operation.

##### Parameters

###### source

`Date`

The first date to compare.

###### oper

[`DateComparisonOper`](../../dates/enums/type-aliases/DateComparisonOper.md)

The comparison operation to perform (e.g. 'after', 'before', 'equals').

###### target

`Date`

The second date to compare against.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const d1 = new Date('2025-01-01');
const d2 = new Date('2025-01-02');
dateComparison(d1, 'before', d2); // true
dateComparison(d1, 'equals', d1); // true
```

##### Remarks

Supported Operators:
- **AFTER**: Is the first date after the second?
- **AFTER_OR_EQUAL**: After or equal to the second date?
- **BEFORE**: Is the first date before the second?
- **BEFORE_OR_EQUAL**: Before or equal to the second date?
- **EQUALS**: Are the dates equal?
- **NOT_EQUALS**: Are the dates not equal?
- **SAME_DAY**: Are the dates on the same day?
- **SAME_MONTH**: Are the dates in the same month?
- **SAME_YEAR**: Are the dates in the same year?

#### date.range()

> **range**: (`source`, `oper`, `min`, `max`) => `boolean` = `dates.dateRange`

Checks if a date is in or outside a UTC date range using the specified operation.

##### Parameters

###### source

`Date`

The date to check.

###### oper

[`DateRangeOper`](../../dates/enums/type-aliases/DateRangeOper.md)

The range operation to perform (e.g. 'in_range', 'strict_in_range').

###### min

`Date`

The minimum date (inclusive or exclusive depending on operation).

###### max

`Date`

The maximum date (inclusive or exclusive depending on operation).

##### Returns

`boolean`

True if the range check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const date = new Date('2025-01-10');
const start = new Date('2025-01-01');
const end = new Date('2025-01-31');

dateRange(date, 'in_range', start, end); // true
```

##### Remarks

Supported Operators:
- **BETWEEN**: Inclusive: min <= date <= max
- **NOT_BETWEEN**: Inclusive: date < min or date > max
- **STRICT_BETWEEN**: Exclusive: min < date < max
- **STRICT_NOT_BETWEEN**: Exclusive: date <= min or date >= max

#### date.state()

> **state**: (`source`, `oper`) => `boolean` = `dates.dateState`

Checks the state of a date (valid or invalid) in UTC using the specified operation.

##### Parameters

###### source

`Date`

The date to check.

###### oper

[`DateStateOper`](../../dates/enums/type-aliases/DateStateOper.md)

The state operation to perform (e.g. 'is_valid', 'is_invalid').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const validDate = new Date('2025-01-01');
const invalidDate = new Date('invalid');

dateState(validDate, 'is_valid'); // true
dateState(invalidDate, 'is_invalid'); // true
```

##### Remarks

Supported Operators:
- **IS_VALID**: Is the date valid?
- **IS_INVALID**: Is the date invalid?

### func

> **func**: `object` = `PredicType.function`

#### func.arity()

> **arity**: (`source`, `oper`, `arity`) => `boolean` = `functions.functionArity`

Checks the arity (number of parameters) of a function using the specified operation.

##### Parameters

###### source

`Function`

The function to check.

###### oper

[`FunctionArityOper`](../../functions/enums/type-aliases/FunctionArityOper.md)

The arity operation to perform (e.g. 'arity_equals', 'arity_greater_than').

###### arity

`number`

The arity (number of parameters) to compare against.

##### Returns

`boolean`

True if the arity check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const fn1 = function(a, b) {};
const fn2 = function(a, b, c) {};
const arity2 = 2;

functionArity(fn1, 'arity_equals', arity2); // true
functionArity(fn2, 'arity_greater_than', arity2); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: Function arity equals the given value
- **NOT_EQUALS**: Function arity does not equal the value
- **GREATER_THAN**: Function arity is greater than the value
- **GREATER_OR_EQUAL**: Function arity is greater or equal to value
- **LESS_THAN**: Function arity is less than the value
- **LESS_OR_EQUAL**: Function arity is less or equal to value

#### func.name()

> **name**: (`source`, `oper`, `target`) => `boolean` = `functions.functionName`

Checks the name of a function using the specified operation.

##### Parameters

###### source

`Function`

The function to check.

###### oper

[`FunctionNameOper`](../../functions/enums/type-aliases/FunctionNameOper.md)

The name operation to perform (e.g. 'equals', 'starts_with').

###### target

`string`

The string to compare the function name against.

##### Returns

`boolean`

True if the name check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const fn1 = function foo() {};
const fn2 = function barTest() {};
const name1 = 'foo';
const name2 = 'bar';

functionName(fn1, 'equals', name1); // true
functionName(fn2, 'starts_with', name2); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: Function name equals the given string
- **STARTS_WITH**: Function name starts with the string
- **ENDS_WITH**: Function name ends with the string
- **INCLUDES**: Function name includes the string
- **EXCLUDES**: Function name does not include the string

#### func.namePattern()

> **namePattern**: (`source`, `oper`, `pattern`) => `boolean` = `functions.functionNamePattern`

Checks if the function name matches a given regular expression pattern using the specified operation.

##### Parameters

###### source

`Function`

The function to check.

###### oper

[`FunctionNamePatternOper`](../../functions/enums/type-aliases/FunctionNamePatternOper.md)

The pattern operation to perform (e.g. 'matches').

###### pattern

`RegExp`

The regular expression to test against the function name.

##### Returns

`boolean`

True if the pattern check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const fn = function fooBar() {};
const pattern = /^foo/;

functionPattern(fn, 'matches', pattern); // true
```

##### Remarks

Supported Operators:
- **MATCHES**: Function name matches the RegExp pattern
- **NOT_MATCHES**: Function name does not match the pattern

#### func.state()

> **state**: (`source`, `oper`) => `boolean` = `functions.functionState`

Checks the state of a function (e.g. async, generator, constructor, arrow, anonymous, has name) using the specified
operation.

##### Parameters

###### source

`Function`

The function to check.

###### oper

[`FunctionStateOper`](../../functions/enums/type-aliases/FunctionStateOper.md)

The state operation to perform (e.g. 'is_async', 'is_arrow').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const asyncFn = async function foo() {};
const genFn = function* gen() {};

functionState(asyncFn, 'is_async'); // true
functionState(genFn, 'is_generator'); // true
functionState(() => {}, 'is_arrow'); // true
functionState(function() {}, 'is_anonymous'); // true
functionState(function named() {}, 'has_name'); // true
```

##### Remarks

Supported Operators:
- **HAS_NAME**: Function has a name
- **IS_ANONYMOUS**: Function is anonymous
- **IS_ARROW**: Function is an arrow function
- **IS_ASYNC**: Function is async
- **IS_CONSTRUCTOR**: Function is a constructor
- **IS_GENERATOR**: Function is a generator function

### map

> **map**: `object` = `PredicType.map`

#### map.entry()

> **entry**: \<`K`, `V`\>(`source`, `oper`, `entry`) => `boolean` = `maps.mapEntry`

Checks if a Map contains (or lacks) a specific entry (key-value pair) using the specified operation.

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapEntryOper`](../../maps/enums/type-aliases/MapEntryOper.md)

The entry operation to perform (e.g. 'has_entry', 'lacks_entry').

###### entry

\[`K`, `V`\]

The [key, value] pair to check for.

##### Returns

`boolean`

True if the entry check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const m = new Map([[1, 'a']]);
const entry1 = [1, 'a'];
const entry2 = [2, 'b'];

mapEntry(m, 'has_entry', entry1); // true
mapEntry(m, 'lacks_entry', entry2); // true
```

##### Remarks

Supported Operators:
- **CONTAINS_ENTRY**: Map contains the [key, value] entry
- **LACKS_ENTRY**: Map does not contain the [key, value] entry

#### map.key()

> **key**: \<`K`, `V`\>(`source`, `oper`, `key`) => `boolean` = `maps.mapKey`

Checks if a Map contains (or lacks) a specific key using the specified operation.

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapKeyOper`](../../maps/enums/type-aliases/MapKeyOper.md)

The key operation to perform (e.g. 'has_key', 'lacks_key').

###### key

`K`

The key to check for.

##### Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const m = new Map([[1, 'a']]);
const key1 = 1;
const key2 = 2;

mapKey(m, 'has_key', key1); // true
mapKey(m, 'lacks_key', key2); // true
```

##### Remarks

Supported Operators:
- **CONTAINS_KEY**: Map contains the key
- **LACKS_KEY**: Map does not contain the key

#### map.size()

> **size**: \<`K`, `V`\>(`source`, `oper`, `target`) => `boolean` = `maps.mapSize`

Checks the size of a Map using the specified operation.

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapSizeOper`](../../maps/enums/type-aliases/MapSizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

###### target

`number`

The size to compare against.

##### Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const m1 = new Map([[1, 'a'], [2, 'b']]);
const m2 = new Map([[1, 'a']]);
const size2 = 2;
const size0 = 0;

mapSize(m1, 'size_equals', size2); // true
mapSize(m2, 'size_greater_than', size0); // true
```

##### Remarks

Supported Operators:
- **SIZE_EQUALS**: Map size equals the given value
- **SIZE_GREATER_THAN**: Map size is greater than value
- **SIZE_GREATER_THAN_OR_EQUALS**: Map size is greater or equal
- **SIZE_LESS_THAN**: Map size is less than value
- **SIZE_LESS_THAN_OR_EQUALS**: Map size is less or equal

#### map.state()

> **state**: \<`K`, `V`\>(`source`, `oper`) => `boolean` = `maps.mapState`

Checks the state of a Map (empty or not) using the specified operation.

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapStateOper`](../../maps/enums/type-aliases/MapStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_empty').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const m1 = new Map();
const m2 = new Map([[1, 'a']]);

mapState(m1, 'is_empty'); // true
mapState(m2, 'is_not_empty'); // true
```

##### Remarks

Supported Operators:
- **IS_EMPTY**: Map is empty
- **IS_NOT_EMPTY**: Map is not empty

#### map.value()

> **value**: \<`K`, `V`\>(`source`, `oper`, `target`) => `boolean` = `maps.mapValue`

Checks if a Map contains (or lacks) a specific value using the specified operation.

##### Type Parameters

###### K

`K`

###### V

`V`

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapValueOper`](../../maps/enums/type-aliases/MapValueOper.md)

The value operation to perform (e.g. 'has_value', 'lacks_value').

###### target

`V`

The value to check for.

##### Returns

`boolean`

True if the value check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const m1 = new Map([[1, 'a'], [2, 'b']]);
const m2 = new Map([[1, 'a']]);
const valueA = 'a';
const valueB = 'b';

mapValue(m1, 'has_value', valueA); // true
mapValue(m2, 'lacks_value', valueB); // true
```

##### Remarks

Supported Operators:
- **CONTAINS_VALUE**: Map contains the value
- **LACKS_VALUE**: Map does not contain the value

### num

> **num**: `object` = `PredicType.number`

#### num.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean` = `numbers.numberComparison`

Compares two numbers using the specified operation.

##### Parameters

###### source

`number`

The first number.

###### oper

[`NumberComparisonOper`](../../numbers/enums/type-aliases/NumberComparisonOper.md)

The comparison operation to perform (e.g. 'greater_than', 'equals').

###### target

`number`

The second number.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = 5;
const b = 10;

numberComparison(a, 'less_than', b); // true
numberComparison(a, 'greater_than', b); // false
numberComparison(a, 'equals', 5); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: a === b
- **NOT_EQUALS**: a !== b
- **GREATER_THAN**: a > b
- **GREATER_OR_EQUAL**: a >= b
- **LESS_THAN**: a < b
- **LESS_OR_EQUAL**: a <= b

#### num.range()

> **range**: (`source`, `oper`, `min`, `max`) => `boolean` = `numbers.numberRange`

Checks if a number is in or outside a range using the specified operation.

##### Parameters

###### source

`number`

The number to check.

###### oper

[`NumberRangeOper`](../../numbers/enums/type-aliases/NumberRangeOper.md)

The range operation to perform (e.g. 'in_range', 'strict_in_range').

###### min

`number`

The minimum value (inclusive or exclusive depending on operation).

###### max

`number`

The maximum value (inclusive or exclusive depending on operation).

##### Returns

`boolean`

True if the range check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const n = 5;

numberRange(n, 'in_range', 1, 10); // true
numberRange(n, 'strict_in_range', 5, 10); // false
```

##### Remarks

Supported Operators:
- **BETWEEN**: Inclusive: min <= x <= max
- **NOT_BETWEEN**: Inclusive: x < min or x > max
- **STRICT_BETWEEN**: Exclusive: min < x < max
- **STRICT_NOT_BETWEEN**: Exclusive: x <= min or x >= max

#### num.state()

> **state**: (`source`, `oper`) => `boolean` = `numbers.numberState`

Checks the state of a number (integer, float, finite, positive, negative, zero) using the specified operation.

##### Parameters

###### source

`number`

The number to check.

###### oper

[`NumberStateOper`](../../numbers/enums/type-aliases/NumberStateOper.md)

The state operation to perform (e.g. 'is_integer', 'is_float').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const n = 5;

numberState(n, 'is_integer'); // true
numberState(3.14, 'is_float'); // true
numberState(0, 'is_zero'); // true
```

##### Remarks

Supported Operators:
- **IS_INTEGER**: Is an integer
- **IS_FLOAT**: Is a finite float (not integer)
- **IS_FINITE**: Is a finite number
- **IS_POSITIVE**: Is positive
- **IS_NEGATIVE**: Is negative
- **IS_ZERO**: Is zero

### obj

> **obj**: `object` = `PredicType.object`

#### obj.attributes()

> **attributes**: (`source`, `oper`, `key`) => `boolean` = `objects.objectAttributes`

Checks object property attributes (writable, enumerable, configurable, accessor, data property) using the specified
operation.

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectAttributesOper`](../../objects/enums/type-aliases/ObjectAttributesOper.md)

The attribute operation to perform (e.g. 'is_writable', 'is_accessor').

###### key

The property key to check.

`string` | `symbol`

##### Returns

`boolean`

True if the attribute check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const obj = { foo: 42 };
const obj2 = {};
const sym = Symbol('bar');

Object.defineProperty(obj2, sym, { value: 1, writable: false });

objectAttributes(obj, 'is_writable', 'foo'); // true
objectAttributes(obj2, 'is_writable', sym); // false
```

##### Remarks

Supported Operators:
- **ATTR_IS_WRITABLE**: Property is writable
- **ATTR_IS_ENUMERABLE**: Property is enumerable
- **ATTR_IS_CONFIGURABLE**: Property is configurable
- **ATTR_IS_ACCESSOR**: Property is an accessor (getter/setter)
- **ATTR_IS_DATA_PROPERTY**: Property is a data property

#### obj.instanceType()

> **instanceType**: (`source`, `oper`) => `boolean` = `objects.objectInstanceType`

Checks the type of an instance using the specified operation.

##### Parameters

###### source

`any`

The value to check.

###### oper

[`ObjectInstanceTypeOper`](../../objects/enums/type-aliases/ObjectInstanceTypeOper.md)

The type operation to perform.

##### Returns

`boolean`

True if the type check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Remarks

Supported Operators:
- **INSTANCE_OF_CLASS**: Is a class constructor
- **INSTANCE_OF_CONSTRUCTOR**: Is a constructor function
- **INSTANCE_OF_FUNCTION**: Is a function
- **INSTANCE_OF_OBJECT**: Is an object

#### obj.instanceRelation()

> **instanceRelation**: (`source`, `oper`, `target`) => `boolean` = `objects.objectInstanceRelation`

Checks instance or prototype relation between two values using the specified operation.

##### Parameters

###### source

`any`

The value to check.

###### oper

[`ObjectInstanceRelationOper`](../../objects/enums/type-aliases/ObjectInstanceRelationOper.md)

The relation operation to perform (e.g. 'instance_of', 'prototype_of').

###### target

`any`

The target to compare against.

##### Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Remarks

Supported Operators:
- **INSTANCE_OF**: value instanceof target
- **PROTOTYPE_OF**: value is prototype of target

#### obj.key()

> **key**: (`source`, `oper`, `key`) => `boolean` = `objects.objectKey`

Checks if an object has or lacks a specific key (string or symbol) using the specified operation.

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectKeyOper`](../../objects/enums/type-aliases/ObjectKeyOper.md)

The key operation to perform (e.g. 'has_key', 'lacks_key').

###### key

The key to check.

`string` | `symbol`

##### Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const obj = { foo: 1 };
const obj2 = {};
const sym = Symbol('baz');
Object.defineProperty(obj2, sym, { value: 2 });

objectKey(obj, 'has_key', 'foo'); // true
objectKey(obj, 'lacks_key', 'bar'); // true
objectKey(obj2, 'has_key', sym); // true
```

##### Remarks

Supported Operators:
- **CONTAINS_KEY**: Object has the key
- **LACKS_KEY**: Object does not have the key

#### obj.keyMembership()

> **keyMembership**: (`source`, `oper`, `keys`) => `boolean` = `objects.objectKeyMembership`

Checks if a key is (or is not) in a list of possible keys using the specified operation.

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectKeyMembershipOper`](../../objects/enums/type-aliases/ObjectKeyMembershipOper.md)

The membership operation to perform (e.g. 'key_in', 'key_not_in').

###### keys

(`string` \| `symbol`)[]

The array of possible keys.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized or keys is missing.

##### Remarks

Supported Operators:
- **IN**: At least one key is present
- **NOT_IN**: No keys are present

#### obj.keys()

> **keys**: (`source`, `oper`, `keys`) => `boolean` = `objects.objectKeysCompare`

Checks object keys for key-comparison operations (CONTAINS_, LACKS_, EQUALS_, etc.).

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectKeysOper`](../../objects/enums/type-aliases/ObjectKeysOper.md)

The key operation to perform (e.g. 'contains_all_keys', 'lacks_all_keys', 'equals_keys', ...).

###### keys

The array of keys to check (string[] | symbol[]).

`string`[] | `symbol`[]

##### Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized or keys is missing.

##### Remarks

Supported Operators:
- **CONTAINS_ALL_KEYS**: Object contains all the given keys
- **CONTAINS_ANY_KEY**: Object contains at least one of the keys
- **CONTAINS_ONLY_KEYS**: Object contains only the given keys
- **CONTAINS_SYMBOL_KEYS**: Object contains at least one symbol key
- **EQUALS_KEYS**: Object keys equal the given keys
- **LACKS_ALL_KEYS**: Object lacks all the given keys
- **ONLY_KEYS**: All object keys are in the given set
- **STRICT_EQUALS_KEYS**: Object keys strictly equal the given keys

#### obj.keysState()

> **keysState**: (`obj`, `oper`) => `boolean` = `objects.objectKeysState`

Checks state-related properties of an object's keys (e.g. has_symbol_keys, has_numeric_keys).

##### Parameters

###### obj

`object`

The object to check.

###### oper

[`ObjectKeysStateOper`](../../objects/enums/type-aliases/ObjectKeysStateOper.md)

The state operation to perform (ObjectKeysStateOper).

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Remarks

Supported Operators:
- **HAS_SYMBOL_KEYS**: Object has at least one symbol key
- **HAS_NUMERIC_KEYS**: Object has at least one numeric key
- **HAS_CAMELCASE_KEYS**: Object has at least one camelCase key
- **HAS_HOMOGENEOUS_KEYS**: All keys are of the same type

#### obj.property()

> **property**: (`source`, `oper`, `key`) => `boolean` = `objects.objectProperty`

Checks if an object has or lacks a property (own or inherited) using the specified operation.

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectPropertyOper`](../../objects/enums/type-aliases/ObjectPropertyOper.md)

The property operation to perform (e.g. 'contains_property', 'lacks_own_property').

###### key

The property key to check.

`string` | `symbol`

##### Returns

`boolean`

True if the property check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Remarks

Supported Operators:
- **CONTAINS_PROPERTY**: Object has the property (own or inherited)
- **LACKS_PROPERTY**: Object lacks the property (own or inherited)
- **CONTAINS_OWN_PROPERTY**: Object has the property as own property
- **LACKS_OWN_PROPERTY**: Object lacks the property as own property

#### obj.prototypeRelation()

> **prototypeRelation**: (`source`, `oper`, `proto`) => `boolean` = `objects.objectPrototypeRelation`

Checks prototype relation between objects (contains_prototype, is_prototype_of).

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectPrototypeRelationOper`](../../objects/enums/type-aliases/ObjectPrototypeRelationOper.md)

The prototype operation to perform (e.g. 'is_prototype_of', 'prototype_is_null').

###### proto

`any`

The prototype to compare against.

##### Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Remarks

Supported Operators:
- **CONTAINS_PROTOTYPE**: Object's prototype is the given prototype
- **IS_PROTOTYPE_OF**: Object is prototype of the given object

#### obj.prototypeState()

> **prototypeState**: (`source`, `oper`) => `boolean` = `objects.objectPrototypeState`

Checks state-related properties of an object's prototype (e.g. prototype_is_null).

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectPrototypeStateOper`](../../objects/enums/type-aliases/ObjectPrototypeStateOper.md)

The prototype state operation to perform.

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Remarks

Supported Operators:
- **PROTOTYPE_IS_NULL**: Object's prototype is null

#### obj.state()

> **state**: (`source`, `oper`) => `boolean` = `objects.objectState`

Checks state-related properties of an object (is_empty, is_not_empty, is_plain, is_frozen, is_sealed).

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectStateOper`](../../objects/enums/type-aliases/ObjectStateOper.md)

The state operation to perform.

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
objectState({}, 'is_empty'); // true
objectState({ a: 1 }, 'is_not_empty'); // true
objectState(Object.freeze({}), 'is_frozen'); // true
```

### prom

> **prom**: `object` = `PredicType.promise`

#### prom.state()

> **state**: \<`T`\>(`wrapper`, `oper`) => `boolean` = `promises.promiseState`

Checks the state of a wrapped Promise using the specified operation.

Note: This predicate requires a wrapper or custom Promise implementation that exposes state.
Standard JS Promises do not expose their state synchronously.

##### Type Parameters

###### T

`T`

##### Parameters

###### wrapper

[`PromiseWithState`](../../predicates/promises/promiseState/type-aliases/PromiseWithState.md)\<`T`\>

The wrapped Promise with state.

###### oper

[`PromiseStateOper`](../../promises/enums/type-aliases/PromiseStateOper.md)

The state operation to perform (e.g. 'is_pending', 'is_fulfilled').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const p = Promise.resolve(42);
const wrapped = wrapPromise(p);

promiseState(wrapped, 'is_pending'); // true (immediately after wrapping)
```

##### Remarks

Supported Operators:
- **IS_PENDING**: Promise is pending
- **IS_FULFILLED**: Promise is fulfilled
- **IS_REJECTED**: Promise is rejected

#### prom.type()

> **type**: (`source`, `oper`) => `boolean` = `promises.promiseType`

Checks if a value is a Promise or an async function using the specified operation.

##### Parameters

###### source

`unknown`

The value to check.

###### oper

[`PromiseTypeOper`](../../promises/enums/type-aliases/PromiseTypeOper.md)

The type operation to perform (e.g. 'is_promise', 'is_async_function').

##### Returns

`boolean`

True if the type check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const p = Promise.resolve(42);
async function foo() {}

promiseType(p, 'is_promise'); // true
promiseType(foo, 'is_async_function'); // true
```

##### Remarks

Supported Operators:
- **IS_PROMISE**: Value is a Promise
- **IS_ASYNC_FUNCTION**: Value is an async function

### set

> **set**: `object` = `PredicType.set`

#### set.arrayMembership()

> **arrayMembership**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setArrayMembership`

Checks membership conditions for multiple elements in a set using the specified operation.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

The set to check.

###### oper

[`SetArrayMembershipOper`](../../sets/enums/type-aliases/SetArrayMembershipOper.md)

The membership operation to perform (e.g. 'contains_all', 'contains_any').

###### target

`T`[]

The array of values to check for membership.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const s = new Set([1, 2, 3]);
const values = [2, 4];

setArrayMembership(s, 'contains_any', values); // true (contains 2)
setArrayMembership(s, 'contains_all', values); // false (missing 4)
setArrayMembership(s, 'excludes_all', [5, 6]); // true (excludes both)
```

##### Remarks

Supported Operators:
- **CONTAINS_ALL**: Set contains all the given values
- **CONTAINS_ANY**: Set contains at least one of the given values
- **EXCLUDES_ALL**: Set does not contain any of the given values

#### set.comparison()

> **comparison**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setComparison`

Compares two sets for equality or inequality using the specified operation.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

The first set to compare.

###### oper

[`SetComparisonOper`](../../sets/enums/type-aliases/SetComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'not_equals').

###### target

`Set`\<`T`\>

The second set to compare.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = new Set([1, 2, 3]);
const b = new Set([1, 2, 3]);
const c = new Set([4, 5]);

setComparison(a, 'equals', b); // true
setComparison(a, 'not_equals', c); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: Sets are equal
- **NOT_EQUALS**: Sets are not equal
- **SAME_ELEMENTS**: Sets contain the same elements (alias for EQUALS)

#### set.intersection()

> **intersection**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setIntersection`

Checks intersection properties between two sets using the specified operation.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

The first set.

###### oper

[`SetIntersectionOper`](../../sets/enums/type-aliases/SetIntersectionOper.md)

The intersection operation to perform (e.g. 'disjoint', 'intersects').

###### target

`Set`\<`T`\>

The second set.

##### Returns

`boolean`

True if the intersection check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = new Set([1, 2]);
const b = new Set([2, 3]);
const c = new Set([4, 5]);

setIntersection(a, 'intersects', b); // true
setIntersection(a, 'disjoint', c); // true
```

##### Remarks

Supported Operators:
- **DISJOINT**: Sets have no elements in common
- **INTERSECTS**: Sets have at least one element in common

#### set.membership()

> **membership**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setMembership`

Checks membership conditions for elements in a set using the specified operation.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

The set to check.

###### oper

[`SetMembershipOper`](../../sets/enums/type-aliases/SetMembershipOper.md)

The membership operation to perform (e.g. 'contains', 'excludes').

###### target

`T`

The value to check for membership.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const s = new Set([1, 2, 3]);

setMembership(s, 'contains', 2); // true
setMembership(s, 'excludes', 4); // true
```

##### Remarks

Supported Operators:
- **INCLUDES**: Set contains the value
- **EXCLUDES**: Set does not contain the value

#### set.relation()

> **relation**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setRelation`

Checks the relation between two sets (disjoint, intersects, subset, superset) using the specified operation.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

The first set.

###### oper

[`SetRelationOper`](../../sets/enums/type-aliases/SetRelationOper.md)

The relation operation to perform (e.g. 'disjoint', 'subset_of').

###### target

`Set`\<`T`\>

The second set.

##### Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = new Set([1, 2]);
const b = new Set([2, 3]);
const c = new Set([4, 5]);

setRelation(a, 'intersects', b); // true
setRelation(a, 'disjoint', c); // true
setRelation(a, 'subset_of', b); // true
setRelation(a, 'superset_of', b); // false
```

##### Remarks

Supported Operators:
- **DISJOINT**: Sets have no elements in common
- **INTERSECTS**: Sets have at least one element in common
- **SUBSET_OF**: First set is a subset of second
- **SUPERSET_OF**: First set is a superset of second
- **STRICT_SUBSET_OF**: First set is a strict subset of second
- **STRICT_SUPERSET_OF**: First set is a strict superset of second

#### set.size()

> **size**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setSize`

Checks the size of a set using the specified operation.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

The set to check.

###### oper

[`SetSizeOper`](../../sets/enums/type-aliases/SetSizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

###### target

`number`

The size to compare against.

##### Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = new Set([1, 2, 3]);

setSize(a, 'size_equals', 3); // true
setSize(a, 'size_greater_than', 2); // true
```

##### Remarks

Supported Operators:
- **SIZE_EQUALS**: Set size equals the given value
- **SIZE_GREATER_THAN**: Set size is greater than value
- **SIZE_GREATER_THAN_OR_EQUALS**: Set size is greater or equal
- **SIZE_LESS_THAN**: Set size is less than value
- **SIZE_LESS_THAN_OR_EQUALS**: Set size is less or equal

#### set.state()

> **state**: \<`T`\>(`source`, `oper`) => `boolean` = `sets.setState`

Checks the state of a set using the specified operation.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`Set`\<`T`\>

The set to check.

###### oper

[`SetStateOper`](../../sets/enums/type-aliases/SetStateOper.md)

The state operation to perform (e.g. 'is_empty', 'has_primitives').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = new Set();
const b = new Set([1]);
const c = new Set([1, 'hello', { id: 1 }]);

setState(a, 'is_empty'); // true
setState(b, 'is_not_empty'); // true
setState(c, 'has_primitives'); // true
setState(c, 'has_objects'); // true
```

##### Remarks

Supported Operators:
- **IS_EMPTY**: Set is empty
- **IS_NOT_EMPTY**: Set is not empty
- **HAS_PRIMITIVES**: Set contains primitive values (string, number, boolean, null, undefined, symbol, bigint)
- **HAS_OBJECTS**: Set contains object values (objects, arrays, functions)

### str

> **str**: `object` = `PredicType.string`

#### str.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean` = `strings.stringComparison`

Compares two strings using the specified operation.

##### Parameters

###### source

`string`

The first string.

###### oper

[`StringComparisonOper`](../../strings/enums/type-aliases/StringComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'greater_than').

###### target

`string`

The second string.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = 'foo';
const b = 'bar';

stringComparison(a, 'greater_than', b); // true
stringComparison(a, 'equals', a); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: a === b
- **NOT_EQUALS**: a !== b
- **GREATER_THAN**: a > b
- **LESS_THAN**: a < b

#### str.membership()

> **membership**: (`source`, `oper`, `target`) => `boolean` = `strings.stringMembership`

Checks if a string is (or is not) a member of a set of strings using the specified operation.

##### Parameters

###### source

`string`

The string to check.

###### oper

[`StringMembershipOper`](../../strings/enums/type-aliases/StringMembershipOper.md)

The membership operation to perform (e.g. 'in', 'not_in').

###### target

`string`[]

The array of strings to check membership against.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const arr = ['foo', 'bar'];
const value1 = 'foo';
const value2 = 'baz';

stringMembership(value1, 'in', arr); // true
stringMembership(value2, 'not_in', arr); // true
```

##### Remarks

Supported Operators:
- **IN**: String is in the array
- **NOT_IN**: String is not in the array

#### str.pattern()

> **pattern**: (`source`, `oper`, `pattern`) => `boolean` = `strings.stringPattern`

Evaluates a string against a pattern operation (matches or not matches a RegExp) using the specified operation.

##### Parameters

###### source

`string`

The string to test.

###### oper

[`StringPatternOper`](../../strings/enums/type-aliases/StringPatternOper.md)

The pattern operation to perform (e.g. 'matches', 'not_matches').

###### pattern

`RegExp`

The RegExp to test against.

##### Returns

`boolean`

True if the operation matches, false otherwise.

##### Throws

If the operation is not recognized.

##### Example

```ts
const str = 'foobar';
const pattern1 = /^foo/;
const pattern2 = /baz/;

stringPattern(str, 'matches', pattern1); // true
stringPattern(str, 'not_matches', pattern2); // true
```

##### Remarks

Supported Operators:
- **MATCHES**: String matches the RegExp pattern
- **NOT_MATCHES**: String does not match the pattern

#### str.size()

> **size**: (`source`, `oper`, `target`) => `boolean` = `strings.stringSize`

Checks the size (length) of a string using the specified operation.

##### Parameters

###### source

`string`

The string to check.

###### oper

[`StringSizeOper`](../../strings/enums/type-aliases/StringSizeOper.md)

The size operation to perform (e.g. 'length_equals', 'length_greater_than').

###### target

`number`

The length to compare against.

##### Returns

`boolean`

True if the size check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const str = 'hello';
const len1 = 5;
const len2 = 3;

stringSize(str, 'length_equals', len1); // true
stringSize(str, 'length_greater_than', len2); // true
```

##### Remarks

Supported Operators:
- **SIZE_EQUALS**: String length equals the given value
- **SIZE_GREATER_THAN**: String length is greater than value
- **SIZE_GREATER_THAN_OR_EQUALS**: String length is greater or equal
- **SIZE_LESS_THAN**: String length is less than value
- **SIZE_LESS_THAN_OR_EQUALS**: String length is less or equal

#### str.state()

> **state**: (`source`, `oper`) => `boolean` = `strings.stringState`

Checks the state of a string (empty, not empty, blank, not blank) using the specified operation.

##### Parameters

###### source

`string`

The string to check.

###### oper

[`StringStateOper`](../../strings/enums/type-aliases/StringStateOper.md)

The state operation to perform (e.g. 'is_empty', 'is_not_blank').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const str = '';
const str2 = '   ';

stringState(str, 'is_empty'); // true
stringState(str2, 'is_blank'); // true
```

##### Remarks

Supported Operators:
- **IS_EMPTY**: String is empty
- **IS_NOT_EMPTY**: String is not empty
- **IS_BLANK**: String is blank (only whitespace)
- **IS_NOT_BLANK**: String is not blank

#### str.substring()

> **substring**: (`source`, `oper`, `target`) => `boolean` = `strings.stringSubstring`

Checks if a string contains, excludes, starts with, or ends with a substring using the specified operation.

##### Parameters

###### source

`string`

The string to check.

###### oper

[`StringSubstringOper`](../../strings/enums/type-aliases/StringSubstringOper.md)

The substring operation to perform (e.g. 'includes', 'starts_with').

###### target

`string`

The substring to check for.

##### Returns

`boolean`

True if the substring check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const str = 'foobar';

stringSubstring(str, 'includes', sub); // true
stringSubstring(str, 'starts_with', sub); // true
```

##### Remarks

Supported Operators:
- **INCLUDES**: String includes the substring
- **EXCLUDES**: String does not include the substring
- **STARTS_WITH**: String starts with the substring
- **ENDS_WITH**: String ends with the substring

### sym

> **sym**: `object` = `PredicType.symbol`

#### sym.comparison()

> **comparison**: (`source`, `oper`, `target`) => `boolean` = `symbols.symbolComparison`

Compares two symbols for equality or inequality using the specified operation.

##### Parameters

###### source

`symbol`

The first symbol to compare.

###### oper

[`SymbolComparisonOper`](../../symbols/enums/type-aliases/SymbolComparisonOper.md)

The comparison operation to perform (e.g. 'equals', 'not_equals').

###### target

`symbol`

The second symbol to compare.

##### Returns

`boolean`

True if the comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const a = Symbol('foo');
const b = Symbol('foo');

symbolComparison(a, 'equals', a); // true
symbolComparison(a, 'not_equals', b); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: Symbols are equal
- **NOT_EQUALS**: Symbols are not equal

#### sym.state()

> **state**: (`source`, `oper`) => `boolean` = `symbols.symbolState`

Checks the state of a symbol (global or local) using the specified operation.

##### Parameters

###### source

`symbol`

The symbol to check.

###### oper

[`SymbolStateOper`](../../symbols/enums/type-aliases/SymbolStateOper.md)

The state operation to perform (e.g. 'is_global', 'is_local').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const globalSym = Symbol.for('foo');
const localSym = Symbol('bar');

symbolState(globalSym, 'is_global'); // true
symbolState(localSym, 'is_local'); // true
```

##### Remarks

Supported Operators:
- **IS_GLOBAL**: Symbol is global (Symbol.for)
- **IS_LOCAL**: Symbol is local (not Symbol.for)
