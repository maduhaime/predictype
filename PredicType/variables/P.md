[**predictype v0.13.0**](../../README.md)

***

[predictype](../../modules.md) / [PredicType](../README.md) / P

# Variable: P

> `const` **P**: `object`

Defined in: [PredicType.ts:138](https://github.com/maduhaime/predictype/blob/dfb4568cfcfae57b6b993ee976415775b85e0700/src/PredicType.ts#L138)

## Type Declaration

### arr

> **arr**: `object` = `PredicType.array`

#### arr.comparison

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

#### arr.indexComparison

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

#### arr.indexMembership

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

#### arr.intersection

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

#### arr.membership

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

#### arr.relation

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

**Subset and Superset**

```ts
arrayRelation([1, 2], 'subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'subset_of', [1, 2]); // true (equality allowed)
arrayRelation([1, 2, 3], 'superset_of', [2, 3]); // true
arrayRelation([1, 2], 'superset_of', [1, 2]); // true (equality allowed)
```

**Strict Subset and Strict Superset**

```ts
arrayRelation([1, 2], 'strict_subset_of', [1, 2, 3]); // true
arrayRelation([1, 2], 'strict_subset_of', [1, 2]); // false (equality not allowed)
arrayRelation([1, 2, 3], 'strict_superset_of', [2, 3]); // true
arrayRelation([1, 2], 'strict_superset_of', [1, 2]); // false (equality not allowed)
```

##### Remarks

Supported Operators:
- **subset_of**: every element of source is in target, equality allowed
- **superset_of**: every element of target is in source, equality allowed
- **strict_subset_of**: every element of source is in target and source is smaller than target
- **strict_superset_of**: every element of target is in source and source is larger than target

#### arr.sequence

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
- **contains_subsequence**: source contains target as a contiguous subsequence
- **starts_with**: source starts with target
- **ends_with**: source ends with target

#### arr.size

> **size**: (`source`, `oper`, `target`) => `boolean` = `arrays.arraySize`

Checks the size of an array against a target value, using the specified operation.

##### Parameters

###### source

`any`[]

The source array.

###### oper

[`ArraySizeOper`](../../arrays/enums/type-aliases/ArraySizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

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

arraySize(arr, 'size_equals', len1); // true
arraySize(arr, 'size_greater_than', len2); // true
```

##### Remarks

Supported Operators:
- **SIZE_EQUALS**: arr.length === target
- **SIZE_GREATER_THAN**: arr.length > target
- **SIZE_GREATER_THAN_OR_EQUALS**: arr.length >= target
- **SIZE_LESS_THAN**: arr.length < target
- **SIZE_LESS_THAN_OR_EQUALS**: arr.length <= target

#### arr.state

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

#### big.comparison

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
- **equals**: source equals target
- **not_equals**: source differs from target
- **greater_than**: source is greater than target
- **greater_than_or_equals**: source is greater than or equal to target
- **less_than**: source is less than target
- **less_than_or_equals**: source is less than or equal to target

#### big.membership

> **membership**: (`source`, `oper`, `target`) => `boolean` = `bigints.bigintMembership`

Checks if a bigint value is (or is not) a member of a set of bigints using the specified operation.

##### Parameters

###### source

`bigint`

The source bigint value.

###### oper

[`BigIntMembershipOper`](../../bigints/enums/type-aliases/BigIntMembershipOper.md)

The membership operation to perform (e.g. 'in', 'not_in').

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

bigintMembership(value1, 'in', arr); // true
bigintMembership(value2, 'not_in', arr); // true
```

##### Remarks

Supported Operators:
- **IN**: value is in the target array
- **NOT_IN**: value is not in the target array

#### big.range

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

#### big.state

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

#### bool.comparison

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
- **equals**: value equals target
- **not_equals**: value does not equal target

#### bool.state

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
- **is_true**: source is true
- **is_false**: source is false

### date

> **date**: `object` = `PredicType.date`

#### date.calendar

> **calendar**: (`source`, `oper`, `today`) => `boolean` = `dates.dateCalendar`

Checks calendar-based properties of a date (UTC) using the specified operation.

##### Parameters

###### source

`Date`

The date to check.

###### oper

[`DateCalendarOper`](../../dates/enums/type-aliases/DateCalendarOper.md)

The calendar operation to perform (e.g. 'is_today', 'is_weekend', 'is_past').

###### today?

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

#### date.comparison

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
- **after**: source occurs after target
- **after_or_equal**: source occurs after or at target
- **before**: source occurs before target
- **before_or_equal**: source occurs before or at target
- **equals**: source occurs at the same instant as target
- **not_equals**: source does not occur at the same instant as target
- **same_day**: source and target share the same UTC day
- **same_month**: source and target share the same UTC month
- **same_year**: source and target share the same UTC year

#### date.range

> **range**: (`source`, `oper`, `min`, `max`) => `boolean` = `dates.dateRange`

Checks if a date is in or outside a UTC date range using the specified operation.

##### Parameters

###### source

`Date`

The date to check.

###### oper

[`DateRangeOper`](../../dates/enums/type-aliases/DateRangeOper.md)

The range operation to perform (e.g. 'between', 'strict_between').

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

dateRange(date, 'between', start, end); // true
```

##### Remarks

Supported Operators:
- **BETWEEN**: Inclusive: min <= date <= max
- **NOT_BETWEEN**: Inclusive: date < min or date > max
- **STRICT_BETWEEN**: Exclusive: min < date < max
- **STRICT_NOT_BETWEEN**: Exclusive: date <= min or date >= max

#### date.state

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

### err

> **err**: `object` = `PredicType.error`

#### err.message

> **message**: (`source`, `oper`, `target`) => `boolean` = `errors.errorMessage`

Checks the message of an Error using the specified operation.

##### Parameters

###### source

`Error`

The Error to check.

###### oper

[`ErrorMessageOper`](../../errors/enums/type-aliases/ErrorMessageOper.md)

The message operation to perform (e.g. 'equals', 'includes').

###### target

`string`

The string to compare the error message against.

##### Returns

`boolean`

True if the message check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const err = new Error('Network timeout');

errorMessage(err, 'includes', 'timeout'); // true
errorMessage(err, 'starts_with', 'Network'); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: Error message equals the given string
- **STARTS_WITH**: Error message starts with the string
- **ENDS_WITH**: Error message ends with the string
- **INCLUDES**: Error message includes the string
- **EXCLUDES**: Error message does not include the string

#### err.messagePattern

> **messagePattern**: (`source`, `oper`, `pattern`) => `boolean` = `errors.errorMessagePattern`

Evaluates an error message against a pattern operation (matches or not matches a RegExp) using the specified
operation.

##### Parameters

###### source

`Error`

The Error whose message will be tested.

###### oper

[`ErrorMessagePatternOper`](../../errors/enums/type-aliases/ErrorMessagePatternOper.md)

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
const err = new Error('Network timeout');

errorMessagePattern(err, 'matches', /timeout$/); // true
errorMessagePattern(err, 'not_matches', /syntax/i); // true
```

##### Remarks

Supported Operators:
- **MATCHES**: Error message matches the RegExp pattern
- **NOT_MATCHES**: Error message does not match the pattern

#### err.name

> **name**: (`source`, `oper`, `target`) => `boolean` = `errors.errorName`

Checks the name of an Error using the specified operation.

##### Parameters

###### source

`Error`

The Error to check.

###### oper

[`ErrorNameOper`](../../errors/enums/type-aliases/ErrorNameOper.md)

The name operation to perform (e.g. 'equals', 'starts_with').

###### target

`string`

The string to compare the error name against.

##### Returns

`boolean`

True if the name check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const err = new TypeError('boom');

errorName(err, 'equals', 'TypeError'); // true
errorName(err, 'ends_with', 'Error'); // true
errorName(err, 'equals', 'TypeError'); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: Error name equals the given string
- **STARTS_WITH**: Error name starts with the string
- **ENDS_WITH**: Error name ends with the string
- **INCLUDES**: Error name includes the string
- **EXCLUDES**: Error name does not include the string

#### err.namePattern

> **namePattern**: (`source`, `oper`, `pattern`) => `boolean` = `errors.errorNamePattern`

Evaluates an error name against a pattern operation (matches or not matches a RegExp) using the specified
operation.

##### Parameters

###### source

`Error`

The Error whose name will be tested.

###### oper

[`ErrorNamePatternOper`](../../errors/enums/type-aliases/ErrorNamePatternOper.md)

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
const err = new TypeError('boom');

errorNamePattern(err, 'matches', /Type/); // true
errorNamePattern(err, 'not_matches', /Range/); // true
```

##### Remarks

Supported Operators:
- **MATCHES**: Error name matches the RegExp pattern
- **NOT_MATCHES**: Error name does not match the pattern

#### err.state

> **state**: (`source`, `oper`) => `boolean` = `errors.errorState`

Checks the state of an Error using the specified operation.

##### Parameters

###### source

`Error`

The Error to check.

###### oper

[`ErrorStateOper`](../../errors/enums/type-aliases/ErrorStateOper.md)

The state operation to perform (e.g. 'has_stack', 'has_cause').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const err = new Error('boom');

errorState(err, 'has_stack'); // true
errorState(new AggregateError([], 'many'), 'is_aggregate_error'); // true
```

##### Remarks

Supported Operators:
- **HAS_CAUSE**: Error has a defined `cause`
- **HAS_STACK**: Error has a non-empty `stack`
- **IS_AGGREGATE_ERROR**: Error is an AggregateError

### func

> **func**: `object` = `PredicType.function`

#### func.arity

> **arity**: (`source`, `oper`, `arity`) => `boolean` = `functions.functionArity`

Checks the arity (number of parameters) of a function using the specified operation.

##### Parameters

###### source

`Function`

The function to check.

###### oper

[`FunctionArityOper`](../../functions/enums/type-aliases/FunctionArityOper.md)

The arity operation to perform (e.g. 'equals', 'greater_than').

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

functionArity(fn1, 'equals', arity2); // true
functionArity(fn2, 'greater_than', arity2); // true
```

##### Remarks

Supported Operators:
- **EQUALS**: Function arity equals the given value
- **NOT_EQUALS**: Function arity does not equal the value
- **GREATER_THAN**: Function arity is greater than the value
- **GREATER_OR_EQUAL**: Function arity is greater or equal to value
- **LESS_THAN**: Function arity is less than the value
- **LESS_OR_EQUAL**: Function arity is less or equal to value

#### func.name

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

#### func.namePattern

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

#### func.state

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

#### map.entry

> **entry**: \<`K`, `V`\>(`source`, `oper`, `entry`) => `boolean` = `maps.mapEntry`

Checks if a Map contains (or lacks) a specific entry (key-value pair) using the specified operation.

##### Type Parameters

###### K

`K`

Type of the Map keys.

###### V

`V`

Type of the Map values.

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapEntryOper`](../../maps/enums/type-aliases/MapEntryOper.md)

The entry operation to perform (e.g. 'contains_entry', 'lacks_entry').

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

mapEntry(m, 'contains_entry', entry1); // true
mapEntry(m, 'lacks_entry', entry2); // true
```

##### Remarks

Supported Operators:
- **contains_entry**: map contains the [key, value] entry
- **lacks_entry**: map does not contain the [key, value] entry

#### map.key

> **key**: \<`K`, `V`\>(`source`, `oper`, `key`) => `boolean` = `maps.mapKey`

Checks if a Map contains (or lacks) a specific key using the specified operation.

##### Type Parameters

###### K

`K`

Type of the Map keys.

###### V

`V`

Type of the Map values.

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapKeyOper`](../../maps/enums/type-aliases/MapKeyOper.md)

The key operation to perform (e.g. 'contains_key', 'lacks_key').

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

mapKey(m, 'contains_key', key1); // true
mapKey(m, 'lacks_key', key2); // true
```

##### Remarks

Supported Operators:
- **contains_key**: map contains the key
- **lacks_key**: map does not contain the key

#### map.size

> **size**: \<`K`, `V`\>(`source`, `oper`, `target`) => `boolean` = `maps.mapSize`

Checks the size of a Map using the specified operation.

##### Type Parameters

###### K

`K`

Type of the Map keys.

###### V

`V`

Type of the Map values.

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

#### map.state

> **state**: \<`K`, `V`\>(`source`, `oper`) => `boolean` = `maps.mapState`

Checks the state of a Map (empty or not) using the specified operation.

##### Type Parameters

###### K

`K`

Type of the Map keys.

###### V

`V`

Type of the Map values.

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
- **is_empty**: map size is 0
- **is_not_empty**: map size is greater than 0

#### map.value

> **value**: \<`K`, `V`\>(`source`, `oper`, `target`) => `boolean` = `maps.mapValue`

Checks if a Map contains (or lacks) a specific value using the specified operation.

##### Type Parameters

###### K

`K`

Type of the Map keys.

###### V

`V`

Type of the Map values.

##### Parameters

###### source

`Map`\<`K`, `V`\>

The Map to check.

###### oper

[`MapValueOper`](../../maps/enums/type-aliases/MapValueOper.md)

The value operation to perform (e.g. 'contains_value', 'lacks_value').

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

mapValue(m1, 'contains_value', valueA); // true
mapValue(m2, 'lacks_value', valueB); // true
```

##### Remarks

Supported Operators:
- **contains_value**: map contains the value
- **lacks_value**: map does not contain the value

### num

> **num**: `object` = `PredicType.number`

#### num.comparison

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
- **equals**: source equals target
- **not_equals**: source differs from target
- **greater_than**: source is greater than target
- **greater_or_equal**: source is greater than or equal to target
- **less_than**: source is less than target
- **less_or_equal**: source is less than or equal to target

#### num.range

> **range**: (`source`, `oper`, `min`, `max`) => `boolean` = `numbers.numberRange`

Checks if a number is in or outside a range using the specified operation.

##### Parameters

###### source

`number`

The number to check.

###### oper

[`NumberRangeOper`](../../numbers/enums/type-aliases/NumberRangeOper.md)

The range operation to perform (e.g. 'between', 'strict_between').

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

numberRange(n, 'between', 1, 10); // true
numberRange(n, 'strict_between', 5, 10); // false
```

##### Remarks

Supported Operators:
- **BETWEEN**: Inclusive: min <= x <= max
- **NOT_BETWEEN**: Inclusive: x < min or x > max
- **STRICT_BETWEEN**: Exclusive: min < x < max
- **STRICT_NOT_BETWEEN**: Exclusive: x <= min or x >= max

#### num.state

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

#### obj.attributes

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

`string` \| `symbol`

The property key to check.

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

#### obj.instanceType

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

##### Example

```ts
class User {}
const classCtor = User;
const plain = { id: 1 };

objectInstanceType(classCtor, 'instance_of_class'); // true
objectInstanceType(classCtor, 'instance_of_function'); // true
objectInstanceType(plain, 'instance_of_object'); // true
```

##### Remarks

Supported Operators:
- **instance_of_class**: value is a class constructor
- **instance_of_constructor**: value is a constructor/function
- **instance_of_function**: value is a function
- **instance_of_object**: value is a non-null object

#### obj.instanceRelation

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

##### Example

```ts
class User {}
const sourceA = new User();
const targetA = User;
const proto = { kind: 'base' };
const child = Object.create(proto);

objectInstanceRelation(sourceA, 'instance_of', targetA); // true
objectInstanceRelation(proto, 'prototype_of', child); // true
```

##### Remarks

Supported Operators:
- **instance_of**: value instanceof target
- **prototype_of**: value is prototype of target

#### obj.key

> **key**: (`source`, `oper`, `key`) => `boolean` = `objects.objectKey`

Checks if an object has or lacks a specific key (string or symbol) using the specified operation.

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectKeyOper`](../../objects/enums/type-aliases/ObjectKeyOper.md)

The key operation to perform (e.g. 'contains_key', 'lacks_key').

###### key

`string` \| `symbol`

The key to check.

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

objectKey(obj, 'contains_key', 'foo'); // true
objectKey(obj, 'lacks_key', 'bar'); // true
objectKey(obj2, 'contains_key', sym); // true
```

##### Remarks

Supported Operators:
- **CONTAINS_KEY**: Object has the key
- **LACKS_KEY**: Object does not have the key

#### obj.keyMembership

> **keyMembership**: (`source`, `oper`, `keys`) => `boolean` = `objects.objectKeyMembership`

Checks if a key is (or is not) in a list of possible keys using the specified operation.

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectKeyMembershipOper`](../../objects/enums/type-aliases/ObjectKeyMembershipOper.md)

The membership operation to perform (e.g. 'in', 'not_in').

###### keys

(`string` \| `symbol`)[]

The array of possible keys.

##### Returns

`boolean`

True if the membership check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized or keys is missing.

##### Example

```ts
const idSymbol = Symbol('id');
const source = { name: 'Ada', [idSymbol]: 1 };
const keysA = ['name', 'missing'];
const keysB = ['missing'];

objectKeyMembership(source, 'in', keysA); // true
objectKeyMembership(source, 'not_in', keysB); // true
```

##### Remarks

Supported Operators:
- **in**: at least one key from keys is present
- **not_in**: no key from keys is present

#### obj.keys

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

`string`[] \| `symbol`[]

The array of keys to check (string[] | symbol[]).

##### Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized or keys is missing.

##### Example

```ts
const source = { a: 1, b: 2, c: 3 };
const keysA = ['a', 'b'];
const keysB = ['a', 'b', 'c'];

objectKeysCompare(source, 'contains_all_keys', keysA); // true
objectKeysCompare(source, 'equals_keys', keysB); // true
objectKeysCompare(source, 'lacks_all_keys', ['z']); // true
```

##### Remarks

Supported Operators:
- **contains_all_keys**: object contains all given keys
- **contains_any_key**: object contains at least one given key
- **contains_only_keys**: object keys and given keys contain the same members
- **contains_symbol_keys**: object has at least one symbol key
- **equals_keys**: object keys equal given keys (order ignored)
- **lacks_all_keys**: object contains none of the given keys
- **only_keys**: every object key belongs to given keys
- **strict_equals_keys**: object keys equal given keys in same order

#### obj.keysState

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

##### Example

```ts
const sourceA = { userName: 'Ada', 42: 'x' };
const sourceB = { a: 1, b: 2 };

objectKeysState(sourceA, 'has_camelcase_keys'); // true
objectKeysState(sourceA, 'has_numeric_keys'); // true
objectKeysState(sourceB, 'has_homogeneous_keys'); // true
```

##### Remarks

Supported Operators:
- **has_symbol_keys**: object has at least one symbol key
- **has_numeric_keys**: object has at least one numeric key
- **has_camelcase_keys**: object has at least one camelCase key
- **has_homogeneous_keys**: all keys are of the same type

#### obj.property

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

`string` \| `symbol`

The property key to check.

##### Returns

`boolean`

True if the property check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = Object.create({ inherited: true });
source.own = 42;

objectProperty(source, 'contains_property', 'inherited'); // true
objectProperty(source, 'contains_own_property', 'own'); // true
objectProperty(source, 'lacks_own_property', 'inherited'); // true
```

##### Remarks

Supported Operators:
- **contains_property**: object has the property (own or inherited)
- **lacks_property**: object lacks the property (own or inherited)
- **contains_own_property**: object has the property as own property
- **lacks_own_property**: object lacks the property as own property

#### obj.prototypeRelation

> **prototypeRelation**: (`source`, `oper`, `proto`) => `boolean` = `objects.objectPrototypeRelation`

Checks prototype relation between objects (contains_prototype, is_prototype_of).

##### Parameters

###### source

`object`

The object to check.

###### oper

[`ObjectPrototypeRelationOper`](../../objects/enums/type-aliases/ObjectPrototypeRelationOper.md)

The prototype relation operation to perform (e.g. 'contains_prototype', 'is_prototype_of').

###### proto

`any`

The prototype to compare against.

##### Returns

`boolean`

True if the relation check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const proto = { kind: 'base' };
const source = Object.create(proto);
const target = Object.create(source);

objectPrototypeRelation(source, 'contains_prototype', proto); // true
objectPrototypeRelation(source, 'is_prototype_of', target); // true
```

##### Remarks

Supported Operators:
- **contains_prototype**: object prototype is the given prototype
- **is_prototype_of**: object is prototype of the given value

#### obj.prototypeState

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

##### Example

```ts
const sourceA = Object.create(null);
const sourceB = { id: 1 };

objectPrototypeState(sourceA, 'prototype_is_null'); // true
objectPrototypeState(sourceB, 'prototype_is_null'); // false
```

##### Remarks

Supported Operators:
- **prototype_is_null**: Object prototype is null

#### obj.state

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
const empty = {};
const frozen = Object.freeze({ a: 1 });

objectState(empty, 'is_empty'); // true
objectState(frozen, 'is_frozen'); // true
```

##### Remarks

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

### prom

> **prom**: `object` = `PredicType.promise`

#### prom.state

> **state**: \<`T`\>(`wrapper`, `oper`) => `boolean` = `promises.promiseState`

Checks the state of a wrapped Promise using the specified operation.

##### Type Parameters

###### T

`T`

Type resolved by the Promise.
Note: This predicate requires a wrapper or custom Promise implementation that exposes state.
Standard JS Promises do not expose their state synchronously.

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

#### prom.type

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

### query

> **query**: `object` = `PredicType.query`

#### query.entry

> **entry**: (`source`, `oper`, `entry`) => `boolean` = `queries.queryEntry`

Checks whether query parameters contain or lack a specific [key, value] entry.

##### Parameters

###### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

###### oper

[`QueryEntryOper`](../../queries/enums/type-aliases/QueryEntryOper.md)

The entry operation to perform ('contains_entry' or 'lacks_entry').

###### entry

\[`string`, `string`\]

The [key, value] pair to check.

##### Returns

`boolean`

True if the entry check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URLSearchParams('tag=ts&tag=ai&sort=desc');
const entryA: [string, string] = ['tag', 'ai'];
const entryB: [string, string] = ['tag', 'rust'];

queryEntry(source, 'contains_entry', entryA); // true
queryEntry(source, 'lacks_entry', entryB); // true
```

##### Remarks

Supported Operators:
- **contains_entry**
- **lacks_entry**

#### query.key

> **key**: (`source`, `oper`, `key`) => `boolean` = `queries.queryKey`

Checks whether query parameters contain or lack a key.

##### Parameters

###### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

###### oper

[`QueryKeyOper`](../../queries/enums/type-aliases/QueryKeyOper.md)

The key operation to perform ('contains_key' or 'lacks_key').

###### key

`string`

The key to check.

##### Returns

`boolean`

True if the key check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URLSearchParams('q=predicates&page=2');
const keyA = 'q';
const keyB = 'lang';

queryKey(source, 'contains_key', keyA); // true
queryKey(source, 'lacks_key', keyB); // true
```

##### Remarks

Supported Operators:
- **contains_key**
- **lacks_key**

#### query.size

> **size**: (`source`, `oper`, `size`) => `boolean` = `queries.querySize`

Checks the number of query entries against a numeric threshold.

##### Parameters

###### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

###### oper

[`QuerySizeOper`](../../queries/enums/type-aliases/QuerySizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

###### size

`number`

The numeric threshold to compare against.

##### Returns

`boolean`

True if the size comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URLSearchParams('tag=ts&tag=ai&sort=desc');
const sizeA = 3;
const sizeB = 2;

querySize(source, 'size_equals', sizeA); // true
querySize(source, 'size_greater_than', sizeB); // true
```

##### Remarks

Supported Operators:
- **size_equals**
- **size_greater_than**
- **size_greater_than_or_equals**
- **size_less_than**
- **size_less_than_or_equals**

#### query.state

> **state**: (`source`, `oper`) => `boolean` = `queries.queryState`

Checks whether query parameters are empty or not empty.

##### Parameters

###### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

###### oper

[`QueryStateOper`](../../queries/enums/type-aliases/QueryStateOper.md)

The state operation to perform ('is_empty' or 'is_not_empty').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const sourceA = new URLSearchParams('q=predicate');
const sourceB = new URLSearchParams('');

queryState(sourceA, 'is_not_empty'); // true
queryState(sourceB, 'is_empty'); // true
```

##### Remarks

Supported Operators:
- **is_empty**
- **is_not_empty**

#### query.value

> **value**: (`source`, `oper`, `value`) => `boolean` = `queries.queryValue`

Checks whether query parameters contain or lack a value.

##### Parameters

###### source

`URL` \| `URLSearchParams`

The query source to inspect (URL or URLSearchParams).

###### oper

[`QueryValueOper`](../../queries/enums/type-aliases/QueryValueOper.md)

The value operation to perform ('contains_value' or 'lacks_value').

###### value

`string`

The value to check.

##### Returns

`boolean`

True if the value check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URLSearchParams('status=active&role=admin&role=editor');
const valueA = 'editor';
const valueB = 'guest';

queryValue(source, 'contains_value', valueA); // true
queryValue(source, 'lacks_value', valueB); // true
```

##### Remarks

Supported Operators:
- **contains_value**
- **lacks_value**

### reg

> **reg**: `object` = `PredicType.regexp`

#### reg.pattern

> **pattern**: (`pattern`, `oper`, `target`) => `boolean` = `regexps.regexpPattern`

Checks the pattern string of a RegExp using the specified operation.

##### Parameters

###### pattern

`RegExp`

The RegExp pattern to check.

###### oper

[`RegExpPatternOper`](../../regexps/enums/type-aliases/RegExpPatternOper.md)

The pattern operation to perform (e.g. 'equals', 'includes').

###### target

`string`

The string to compare against the RegExp pattern source.

##### Returns

`boolean`

True if the pattern check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const pattern = /^user_[a-z]+$/;
const targetA = '^user_';
const targetB = 'admin';

regexpPattern(pattern, 'starts_with', targetA); // true
regexpPattern(pattern, 'excludes', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### reg.result

> **result**: (`pattern`, `oper`, `target`) => `boolean` = `regexps.regexpResult`

Evaluates a RegExp against a target string and validates the result using the specified operation.

##### Parameters

###### pattern

`RegExp`

The RegExp pattern to apply.

###### oper

[`RegExpResultOper`](../../regexps/enums/type-aliases/RegExpResultOper.md)

The result operation to perform (e.g. 'tests', 'matches').

###### target

`string`

The candidate string to validate.

##### Returns

`boolean`

True if the result operation is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const pattern = /cat/i;
const targetA = 'My Cat is sleeping';
const targetB = 'dog only';

regexpResult(pattern, 'tests', targetA); // true
regexpResult(pattern, 'not_matches', targetB); // true
```

##### Remarks

Supported Operators:
- **tests**
- **not_tests**
- **matches**
- **not_matches**

#### reg.resultRange

> **resultRange**: (`pattern`, `oper`, `target`, `min`, `max`) => `boolean` = `regexps.regexpResultRange`

Counts RegExp matches on a target string and validates whether the count is within a range.

##### Parameters

###### pattern

`RegExp`

The RegExp pattern to apply.

###### oper

[`RegExpResultRangeOper`](../../regexps/enums/type-aliases/RegExpResultRangeOper.md)

The range operation to perform (e.g. 'between', 'strict_between').

###### target

`string`

The candidate string to validate.

###### min

`number`

The lower bound of the range.

###### max

`number`

The upper bound of the range.

##### Returns

`boolean`

True if the range comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const pattern = /item/g;
const target = 'item,item,item';
const minA = 2;
const maxA = 4;
const minB = 3;
const maxB = 5;

regexpResultRange(pattern, 'between', target, minA, maxA); // true
regexpResultRange(pattern, 'strict_between', target, minB, maxB); // false
```

##### Remarks

Supported Operators:
- **between**
- **not_between**
- **strict_between**
- **strict_not_between**

#### reg.resultSize

> **resultSize**: (`pattern`, `oper`, `target`, `count`) => `boolean` = `regexps.regexpResultSize`

Counts RegExp matches on a target string and compares the count against a threshold.

##### Parameters

###### pattern

`RegExp`

The RegExp pattern to apply.

###### oper

[`RegExpResultSizeOper`](../../regexps/enums/type-aliases/RegExpResultSizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

###### target

`string`

The candidate string to validate.

###### count

`number`

The numeric threshold to compare against.

##### Returns

`boolean`

True if the count comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const pattern = /foo/g;
const target = 'foo-bar-foo';
const countA = 2;
const countB = 1;

regexpResultSize(pattern, 'size_equals', target, countA); // true
regexpResultSize(pattern, 'size_greater_than', target, countB); // true
```

##### Remarks

Supported Operators:
- **size_equals**
- **size_greater_than**
- **size_greater_than_or_equals**
- **size_less_than**
- **size_less_than_or_equals**

#### reg.state

> **state**: (`source`, `oper`) => `boolean` = `regexps.regexpState`

Checks the state of a RegExp (flags and pattern shape) using the specified operation.

##### Parameters

###### source

`RegExp`

The RegExp to check.

###### oper

[`RegExpStateOper`](../../regexps/enums/type-aliases/RegExpStateOper.md)

The state operation to perform (e.g. 'is_global', 'has_indices').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const sourceA = /foo/gi;
const sourceB = new RegExp('');

regexpState(sourceA, 'is_global'); // true
regexpState(sourceA, 'is_ignore_case'); // true
regexpState(sourceB, 'is_empty_pattern'); // true
```

##### Remarks

Supported Operators:
- **is_global**
- **is_ignore_case**
- **is_multiline**
- **is_dot_all**
- **is_unicode**
- **is_sticky**
- **has_indices**
- **is_empty_pattern**

### set

> **set**: `object` = `PredicType.set`

#### set.arrayMembership

> **arrayMembership**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setArrayMembership`

Checks membership conditions for multiple elements in a set using the specified operation.

##### Type Parameters

###### T

`T`

Type of the Set elements.

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

#### set.comparison

> **comparison**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setComparison`

Compares two sets for equality or inequality using the specified operation.

##### Type Parameters

###### T

`T`

Type of the Set elements.

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

#### set.intersection

> **intersection**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setIntersection`

Checks intersection properties between two sets using the specified operation.

##### Type Parameters

###### T

`T`

Type of the Set elements.

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

#### set.membership

> **membership**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setMembership`

Checks membership conditions for elements in a set using the specified operation.

##### Type Parameters

###### T

`T`

Type of the Set elements.

##### Parameters

###### source

`Set`\<`T`\>

The set to check.

###### oper

[`SetMembershipOper`](../../sets/enums/type-aliases/SetMembershipOper.md)

The membership operation to perform (e.g. 'includes', 'excludes').

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

setMembership(s, 'includes', 2); // true
setMembership(s, 'excludes', 4); // true
```

##### Remarks

Supported Operators:
- **INCLUDES**: Set contains the value
- **EXCLUDES**: Set does not contain the value

#### set.relation

> **relation**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setRelation`

Checks the relation between two sets (disjoint, intersects, subset, superset) using the specified operation.

##### Type Parameters

###### T

`T`

Type of the Set elements.

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

#### set.size

> **size**: \<`T`\>(`source`, `oper`, `target`) => `boolean` = `sets.setSize`

Checks the size of a set using the specified operation.

##### Type Parameters

###### T

`T`

Type of the Set elements.

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

#### set.state

> **state**: \<`T`\>(`source`, `oper`) => `boolean` = `sets.setState`

Checks the state of a set using the specified operation.

##### Type Parameters

###### T

`T`

Type of the Set elements.

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

#### str.comparison

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
- **equals**: source equals target
- **not_equals**: source differs from target
- **greater_than**: source is greater than target
- **less_than**: source is less than target

#### str.membership

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

#### str.pattern

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

#### str.size

> **size**: (`source`, `oper`, `target`) => `boolean` = `strings.stringSize`

Checks the size (length) of a string using the specified operation.

##### Parameters

###### source

`string`

The string to check.

###### oper

[`StringSizeOper`](../../strings/enums/type-aliases/StringSizeOper.md)

The size operation to perform (e.g. 'size_equals', 'size_greater_than').

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

stringSize(str, 'size_equals', len1); // true
stringSize(str, 'size_greater_than', len2); // true
```

##### Remarks

Supported Operators:
- **SIZE_EQUALS**: String length equals the given value
- **SIZE_GREATER_THAN**: String length is greater than value
- **SIZE_GREATER_THAN_OR_EQUALS**: String length is greater or equal
- **SIZE_LESS_THAN**: String length is less than value
- **SIZE_LESS_THAN_OR_EQUALS**: String length is less or equal

#### str.state

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
- **is_empty**: string length is 0
- **is_not_empty**: string length is greater than 0
- **is_blank**: string contains only whitespace
- **is_not_blank**: string contains at least one non-whitespace character

#### str.substring

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

### url

> **url**: `object` = `PredicType.url`

#### url.hash

> **hash**: (`source`, `oper`, `target`) => `boolean` = `urls.urlHash`

Checks the hash component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlHashOper`](../../urls/enums/type-aliases/UrlHashOper.md)

The hash operation to perform (e.g. 'equals', 'starts_with').

###### target

`string`

The string to compare against source.hash.

##### Returns

`boolean`

True if the hash comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://example.com/docs#install');
const targetA = '#install';
const targetB = '#guide';

urlHash(source, 'equals', targetA); // true
urlHash(source, 'not_equals', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### url.host

> **host**: (`source`, `oper`, `target`) => `boolean` = `urls.urlHost`

Checks the host component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlHostOper`](../../urls/enums/type-aliases/UrlHostOper.md)

The host operation to perform (e.g. 'equals', 'ends_with').

###### target

`string`

The string to compare against source.host.

##### Returns

`boolean`

True if the host comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://portal.example.com:8080/dashboard');
const targetA = 'portal.example.com:8080';
const targetB = ':8080';

urlHost(source, 'equals', targetA); // true
urlHost(source, 'ends_with', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### url.href

> **href**: (`source`, `oper`, `target`) => `boolean` = `urls.urlHref`

Checks the href component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlHrefOper`](../../urls/enums/type-aliases/UrlHrefOper.md)

The href operation to perform (e.g. 'equals', 'includes').

###### target

`string`

The string to compare against source.href.

##### Returns

`boolean`

True if the href comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://docs.example.com:443/path?q=1#intro');
const targetA = 'https://docs.example.com/path?q=1#intro';
const targetB = 'docs.example.com';

urlHref(source, 'equals', targetA); // true
urlHref(source, 'includes', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**: href is exactly target
- **not_equals**: href differs from target
- **starts_with**: href starts with target
- **ends_with**: href ends with target
- **includes**: href contains target
- **excludes**: href does not contain target

#### url.hostname

> **hostname**: (`source`, `oper`, `target`) => `boolean` = `urls.urlHostname`

Checks the hostname component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlHostnameOper`](../../urls/enums/type-aliases/UrlHostnameOper.md)

The hostname operation to perform (e.g. 'equals', 'excludes').

###### target

`string`

The string to compare against source.hostname.

##### Returns

`boolean`

True if the hostname comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://blog.example.com/posts');
const targetA = 'blog.example.com';
const targetB = 'internal';

urlHostname(source, 'equals', targetA); // true
urlHostname(source, 'excludes', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### url.origin

> **origin**: (`source`, `oper`, `target`) => `boolean` = `urls.urlOrigin`

Checks the origin component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlOriginOper`](../../urls/enums/type-aliases/UrlOriginOper.md)

The origin operation to perform (e.g. 'equals', 'starts_with').

###### target

`string`

The string to compare against source.origin.

##### Returns

`boolean`

True if the origin comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://api.example.com:8443/v1/users');
const targetA = 'https://api.example.com:8443';
const targetB = 'https://api.';

urlOrigin(source, 'equals', targetA); // true
urlOrigin(source, 'starts_with', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### url.pathname

> **pathname**: (`source`, `oper`, `target`) => `boolean` = `urls.urlPathname`

Checks the pathname component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlPathnameOper`](../../urls/enums/type-aliases/UrlPathnameOper.md)

The pathname operation to perform (e.g. 'starts_with', 'includes').

###### target

`string`

The string to compare against source.pathname.

##### Returns

`boolean`

True if the pathname comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://example.com/products/books/42');
const targetA = '/products';
const targetB = '/42';

urlPathname(source, 'starts_with', targetA); // true
urlPathname(source, 'ends_with', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### url.port

> **port**: (`source`, `oper`, `target`) => `boolean` = `urls.urlPort`

Checks the port component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlPortOper`](../../urls/enums/type-aliases/UrlPortOper.md)

The port operation to perform (e.g. 'equals', 'not_equals').

###### target

`string`

The string to compare against source.port.

##### Returns

`boolean`

True if the port comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://localhost:3000/health');
const targetA = '3000';
const targetB = '8080';

urlPort(source, 'equals', targetA); // true
urlPort(source, 'not_equals', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### url.protocol

> **protocol**: (`source`, `oper`, `target`) => `boolean` = `urls.urlProtocol`

Checks the protocol component of a URL against a string operation.

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlProtocolOper`](../../urls/enums/type-aliases/UrlProtocolOper.md)

The protocol operation to perform (e.g. 'equals', 'includes').

###### target

`string`

The string to compare against source.protocol.

##### Returns

`boolean`

True if the protocol comparison is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://example.com/docs');
const targetA = 'https:';
const targetB = 'http';

urlProtocol(source, 'equals', targetA); // true
urlProtocol(source, 'includes', targetB); // true
```

##### Remarks

Supported Operators:
- **equals**
- **not_equals**
- **starts_with**
- **ends_with**
- **includes**
- **excludes**

#### url.state

> **state**: (`source`, `oper`) => `boolean` = `urls.urlState`

Checks state flags of a URL (presence and protocol checks).

##### Parameters

###### source

`URL`

The URL to inspect.

###### oper

[`UrlStateOper`](../../urls/enums/type-aliases/UrlStateOper.md)

The state operation to perform (e.g. 'has_hash', 'is_https').

##### Returns

`boolean`

True if the state check is valid according to the operator, otherwise false.

##### Throws

If the operation is not recognized.

##### Example

```ts
const source = new URL('https://user:pass@example.com:8443/docs?q=1#intro');

urlState(source, 'has_hash'); // true
urlState(source, 'has_search'); // true
urlState(source, 'has_port'); // true
urlState(source, 'is_https'); // true
```

##### Remarks

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

### sym

> **sym**: `object` = `PredicType.symbol`

#### sym.comparison

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

#### sym.state

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
