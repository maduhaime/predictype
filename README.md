# Predictype: TypeScript Predicates for Productivity

Predictype is a modern, type-safe predicate library for TypeScript. It provides a comprehensive set of reusable predicate functions for validating values, building expressive filters, and composing complex logic for arrays and objects.

Its goal: make working with predicates and validation as productive and reliable as possible, with full type safety and a clean, extensible API.

---

## Features

- **Rich predicate collection**: Includes predicates for arrays, numbers, strings, dates, booleans, objects, and more.
- **Type-safe and composable**: All predicates are fully typed and can be composed to build complex validation or filtering logic.
- **Reusable**: Use predicates for validation, filtering arrays, or as building blocks in your own libraries.
- **Consistent API**: Unified naming and signatures for all predicates.
- **Ready for functional programming**: All predicates are pure functions and can be used with array methods like `filter`, `every`, `some`, etc.

---

## Installation

```bash
npm install predictype
```

---

## Usage

Import the predicate you need and use it directly for validation or filtering:

```typescript
import { isString, isNumber, isNotEmpty, arrayContains } from 'predictype';

// Validate a value
type User = { name: string; age: number };
const user: unknown = { name: 'Alice', age: 30 };

if (isString((user as User).name) && isNumber((user as User).age)) {
  // Safe to use user
}

// Filter an array
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((n) => n % 2 === 0);
const nonEmptyStrings = ['a', '', 'b'].filter(isNotEmpty);

// Use with custom logic
const hasAdmin = users.some((u) => isString(u.role) && u.role === 'admin');
```

---

## Predicate Families and Operations

Below is a comprehensive overview of all predicate families provided by Predictype, their associated operation enums, and usage examples. This section is designed to help you quickly identify the right predicate and operation for your use case.

### arrayPredicate

**Operations (`ArrayOperEnum`):**

- `INCLUDES`, `EXCLUDES`
- `SOME_EQUALS`, `EVERY_EQUALS`
- `EQUALS`, `SET_EQUALS`
- `IS_SUBSET_OF`, `IS_SUPERSET_OF`
- `STARTS_WITH`, `ENDS_WITH`
- `CONTAINS_SUBSEQUENCE`
- `INTERSECTS`, `DISJOINT`

**Example:**

```typescript
import { arrayPredicate } from 'predictype';
import { ArrayOperEnum } from 'predictype/enums/arrayOperation';

arrayPredicate(['a', 'b', 'c'], ArrayOperEnum.INCLUDES, 'b'); // true
arrayPredicate(['a', 'b'], ArrayOperEnum.EQUALS, ['a', 'b']); // true
arrayPredicate(['a', 'b'], ArrayOperEnum.IS_SUBSET_OF, ['a', 'b', 'c']); // true
```

---

### arrayIndexPredicate

**Operations (`ArrayIndexOperEnum`):**

- `VALUE_AT_INDEX_EQUALS` — value at index equals target
- `VALUE_AT_INDEX_NOT_EQUALS` — value at index not equals target
- `VALUE_AT_INDEX_IN` — value at index is in array
- `VALUE_AT_INDEX_NOT_IN` — value at index is not in array
- `VALUE_AT_INDEX_GREATER_THAN` — value at index > target
- `VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS` — value at index >= target
- `VALUE_AT_INDEX_LESS_THAN` — value at index < target
- `VALUE_AT_INDEX_LESS_THAN_OR_EQUALS` — value at index <= target

**Example:**

```typescript
import { arrayIndexPredicate } from 'predictype';
import { ArrayIndexOperEnum } from 'predictype/enums/arrayOperation';

const arr = ['A', 'B', 'C'];
arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 1, 'B'); // true
arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, 0, 'B'); // true
arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, 2, ['A', 'C']); // true
arrayIndexPredicate(arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, 1, ['X', 'Y']); // true

const nums = [10, 20, 30];
arrayIndexPredicate(nums, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, 2, 20); // true
arrayIndexPredicate(nums, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, 0, 10); // true
```

---

### arraySizePredicate

**Operations (`ArraySizeOperEnum`):**

- `LENGTH_EQUALS` — array length equals target
- `LENGTH_GREATER_THAN` — array length > target
- `LENGTH_GREATER_THAN_OR_EQUALS` — array length >= target
- `LENGTH_LESS_THAN` — array length < target
- `LENGTH_LESS_THAN_OR_EQUALS` — array length <= target

**Example:**

```typescript
import { arraySizePredicate } from 'predictype';
import { ArraySizeOperEnum } from 'predictype/enums/arrayOperation';

const arr = [1, 2, 3];
arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_EQUALS, 3); // true
arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, 2); // true
arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, 3); // true
arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN, 4); // true
arraySizePredicate(arr, ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, 3); // true
```

---

### arrayStatePredicate

**Operations (`ArrayStateOperEnum`):**

- `IS_EMPTY` — array is empty
- `IS_NOT_EMPTY` — array is not empty

**Example:**

```typescript
import { arrayStatePredicate } from 'predictype';
import { ArrayStateOperEnum } from 'predictype/enums/arrayOperation';

arrayStatePredicate([], ArrayStateOperEnum.IS_EMPTY); // true
arrayStatePredicate([1, 2, 3], ArrayStateOperEnum.IS_NOT_EMPTY); // true
```

---

### booleanPredicate

**Operations (`BooleanOperEnum`):**

- `EQUALS` — strict equality
- `NOT_EQUALS` — strict inequality

**Example:**

```typescript
import { booleanPredicate } from 'predictype';
import { BooleanOperEnum } from 'predictype/enums/booleanOperation';

booleanPredicate(true, BooleanOperEnum.EQUALS, true); // true
booleanPredicate(false, BooleanOperEnum.NOT_EQUALS, true); // true
```

---

### datePredicate

**Operations (`DateOperEnum`):**

- `EQUALS` — dates are equal
- `NOT_EQUALS` — dates are not equal
- `OCCURS_AFTER` — date occurs after target
- `OCCURS_ON_OR_AFTER` — date occurs on or after target
- `OCCURS_BEFORE` — date occurs before target
- `OCCURS_ON_OR_BEFORE` — date occurs on or before target
- `SAME_DAY` — dates are on the same day
- `SAME_MONTH` — dates are in the same month
- `SAME_YEAR` — dates are in the same year

**Example:**

```typescript
import { datePredicate } from 'predictype';
import { DateOperEnum } from 'predictype/enums/dateOperation';

const d1 = new Date('2020-01-01');
const d2 = new Date('2021-01-01');
const d3 = new Date('2021-01-15');
const d4 = new Date('2021-02-01');

datePredicate(d1, DateOperEnum.NOT_EQUALS, d2); // true
datePredicate(d3, DateOperEnum.OCCURS_AFTER, d2); // true
datePredicate(d2, DateOperEnum.OCCURS_ON_OR_AFTER, d2); // true
datePredicate(d2, DateOperEnum.OCCURS_BEFORE, d3); // true
datePredicate(d2, DateOperEnum.OCCURS_ON_OR_BEFORE, d2); // true
datePredicate(d2, DateOperEnum.SAME_DAY, new Date('2021-01-01')); // true
datePredicate(d2, DateOperEnum.SAME_MONTH, d3); // true
datePredicate(d2, DateOperEnum.SAME_YEAR, d4); // true
```

---

### dateCalendarPredicate

**Operations (`DateCalendarOperEnum`):**

- `IS_AFTER_TODAY` — date is after today
- `IS_BEFORE_TODAY` — date is before today
- `IS_FUTURE` — date is in the future
- `IS_PAST` — date is in the past
- `IS_TODAY` — date is today
- `IS_WEEKDAY` — date is a weekday
- `IS_WEEKEND` — date is a weekend
- `IS_YESTERDAY` — date is yesterday

**Example:**

```typescript
import { dateCalendarPredicate } from 'predictype';
import { DateCalendarOperEnum } from 'predictype/enums/dateOperation';

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

dateCalendarPredicate(today, DateCalendarOperEnum.IS_TODAY); // true
dateCalendarPredicate(yesterday, DateCalendarOperEnum.IS_YESTERDAY); // true
dateCalendarPredicate(today, DateCalendarOperEnum.IS_WEEKDAY); // true or false depending on the day
dateCalendarPredicate(today, DateCalendarOperEnum.IS_WEEKEND); // true or false depending on the day
```

---

### dateRangePredicate

**Operations (`RangeOperEnum`):**

- `IN_RANGE` — value is in range (inclusive)
- `OUT_RANGE` — value is out of range (inclusive)
- `STRICT_IN_RANGE` — value is strictly in range (exclusive)
- `STRICT_OUT_RANGE` — value is strictly out of range (exclusive)

**Example:**

```typescript
import { dateRangePredicate } from 'predictype';
import { RangeOperEnum } from 'predictype/enums/rangeOperation';

const min = new Date('2023-01-01');
const max = new Date('2023-01-31');
const inside = new Date('2023-01-15');
const outsideLow = new Date('2022-12-31');
const outsideHigh = new Date('2023-02-01');

dateRangePredicate(inside, RangeOperEnum.IN_RANGE, min, max); // true
dateRangePredicate(outsideLow, RangeOperEnum.IN_RANGE, min, max); // false
dateRangePredicate(outsideHigh, RangeOperEnum.OUT_RANGE, min, max); // true
dateRangePredicate(inside, RangeOperEnum.STRICT_IN_RANGE, min, max); // true
dateRangePredicate(min, RangeOperEnum.STRICT_IN_RANGE, min, max); // false
dateRangePredicate(max, RangeOperEnum.STRICT_OUT_RANGE, min, max); // true
```

---

### numberPredicate

**Operations (`NumberOperEnum`):**

- `EQUALS` — numbers are equal
- `NOT_EQUALS` — numbers are not equal
- `LESS_THAN` — number is less than target
- `LESS_THAN_OR_EQUALS` — number is less than or equal to target
- `GREATER_THAN` — number is greater than target
- `GREATER_THAN_OR_EQUALS` — number is greater than or equal to target

**Example:**

```typescript
import { numberPredicate } from 'predictype';
import { NumberOperEnum } from 'predictype/enums/numberOperation';

numberPredicate(5, NumberOperEnum.EQUALS, 5); // true
numberPredicate(5, NumberOperEnum.NOT_EQUALS, 3); // true
numberPredicate(3, NumberOperEnum.LESS_THAN, 10); // true
numberPredicate(3, NumberOperEnum.LESS_THAN_OR_EQUALS, 3); // true
numberPredicate(10, NumberOperEnum.GREATER_THAN, 5); // true
numberPredicate(10, NumberOperEnum.GREATER_THAN_OR_EQUALS, 10); // true
```

---

### numberRangePredicate

**Operations (`RangeOperEnum`):**

- `IN_RANGE` — value is in range (inclusive)
- `OUT_RANGE` — value is out of range (inclusive)
- `STRICT_IN_RANGE` — value is strictly in range (exclusive)
- `STRICT_OUT_RANGE` — value is strictly out of range (exclusive)

**Example:**

```typescript
import { numberRangePredicate } from 'predictype';
import { RangeOperEnum } from 'predictype/enums/rangeOperation';

numberRangePredicate(5, RangeOperEnum.IN_RANGE, 1, 10); // true
numberRangePredicate(0, RangeOperEnum.IN_RANGE, 1, 10); // false
numberRangePredicate(0, RangeOperEnum.OUT_RANGE, 1, 10); // true
numberRangePredicate(5, RangeOperEnum.STRICT_IN_RANGE, 1, 10); // true
numberRangePredicate(1, RangeOperEnum.STRICT_IN_RANGE, 1, 10); // false
numberRangePredicate(10, RangeOperEnum.STRICT_OUT_RANGE, 1, 10); // true
```

---

### numberStatePredicate

isPositive(10); // true
**Operations (`NumberStateOperEnum`):**

- `IS_INTEGER` — number is an integer
- `IS_FLOAT` — number is a float
- `IS_POSITIVE` — number is positive
- `IS_NEGATIVE` — number is negative
- `IS_ZERO` — number is zero
- `IS_NOT_ZERO` — number is not zero

**Example:**

```typescript
import { numberStatePredicate } from 'predictype';
import { NumberStateOperEnum } from 'predictype/enums/numberOperation';

numberStatePredicate(10, NumberStateOperEnum.IS_INTEGER); // true
numberStatePredicate(3.14, NumberStateOperEnum.IS_FLOAT); // true
numberStatePredicate(5, NumberStateOperEnum.IS_POSITIVE); // true
numberStatePredicate(-2, NumberStateOperEnum.IS_NEGATIVE); // true
numberStatePredicate(0, NumberStateOperEnum.IS_ZERO); // true
numberStatePredicate(7, NumberStateOperEnum.IS_NOT_ZERO); // true
```

---

### objectAttributesPredicate

**Operations (`ObjectAttributesEnum`):**

- `IS_WRITABLE` — property is writable
- `IS_ENUMERABLE` — property is enumerable
- `IS_CONFIGURABLE` — property is configurable

**Example:**

```typescript
import { objectAttributesPredicate } from 'predictype';
import { ObjectAttributesEnum } from 'predictype/enums/objectOperation';

const obj = {};
Object.defineProperty(obj, 'foo', { value: 42, writable: true, enumerable: false, configurable: true });

objectAttributesPredicate(obj, ObjectAttributesEnum.IS_WRITABLE, 'foo'); // true
objectAttributesPredicate(obj, ObjectAttributesEnum.IS_ENUMERABLE, 'foo'); // false
objectAttributesPredicate(obj, ObjectAttributesEnum.IS_CONFIGURABLE, 'foo'); // true
```

---

### objectInstancePredicate

**Operations (`ObjectInstanceEnum`):**

- `IS_INSTANCE_OF` — object is an instance of a given constructor
- `IS_CONSTRUCTOR` — object is a constructor function

**Example:**

```typescript
import { objectInstancePredicate } from 'predictype';
import { ObjectInstanceEnum } from 'predictype/enums/objectOperation';

class Dummy {}
const dummy = new Dummy();

objectInstancePredicate(dummy, ObjectInstanceEnum.IS_INSTANCE_OF, Dummy); // true
objectInstancePredicate(Dummy, ObjectInstanceEnum.IS_CONSTRUCTOR, Dummy); // true
objectInstancePredicate({}, ObjectInstanceEnum.IS_INSTANCE_OF, Dummy); // false
```

---

### objectKeysPredicate

**Operations (`ObjectKeysEnum`):**

- `HAS_ANY_PROPERTY` — object has any property
- `HAS_KEY` — object has a specific key
- `HAS_ALL_KEYS` — object has all specified keys
- `HAS_ANY_KEY` — object has at least one of the specified keys
- `HAS_EXACT_KEYS` — object has exactly the specified keys
- `HAS_NO_KEYS` — object has no keys

**Example:**

```typescript
import { objectKeysPredicate } from 'predictype';
import { ObjectKeysEnum } from 'predictype/enums/objectOperation';

const obj = { a: 1, b: 2, c: 3 };
objectKeysPredicate(obj, ObjectKeysEnum.HAS_ANY_PROPERTY); // true
objectKeysPredicate(obj, ObjectKeysEnum.HAS_KEY, 'a'); // true
objectKeysPredicate(obj, ObjectKeysEnum.HAS_ALL_KEYS, ['a', 'b']); // true
objectKeysPredicate(obj, ObjectKeysEnum.HAS_ANY_KEY, ['x', 'b']); // true
objectKeysPredicate(obj, ObjectKeysEnum.HAS_EXACT_KEYS, ['a', 'b', 'c']); // true
objectKeysPredicate({}, ObjectKeysEnum.HAS_NO_KEYS); // true
```

---

### objectPrototypePredicate

**Description:**
Checks if an object's prototype matches a given prototype (constructor's prototype). This predicate does not use an enum; instead, you provide the prototype to check against (e.g., `Object.prototype`, `Array.prototype`, `Date.prototype`, etc.).

**Example:**

```typescript
import { objectPrototypePredicate } from 'predictype';

// Check if an object is a plain object
objectPrototypePredicate({}, Object.prototype); // true
objectPrototypePredicate([], Object.prototype); // false

// Check if an array is an Array instance
objectPrototypePredicate([], Array.prototype); // true
objectPrototypePredicate({}, Array.prototype); // false

// Check for Date instance
objectPrototypePredicate(new Date(), Date.prototype); // true
objectPrototypePredicate({}, Date.prototype); // false

// Works with custom classes
class MyClass {}
const instance = new MyClass();
objectPrototypePredicate(instance, MyClass.prototype); // true
objectPrototypePredicate({}, MyClass.prototype); // false
```

---

### objectStatePredicate

**Description:**
Predicates for object state, such as checking if an object is empty, non-empty, frozen, or sealed.

**Example:**

```typescript
import { isEmptyObject, isNonEmptyObject } from 'predictype';

- **TypeScript-first**: All predicates are fully typed for maximum safety and autocompletion.
isNonEmptyObject({ a: 1 }); // true
```

---

### stringPredicate

**Operations (`StringOperEnum`):**

- `EQUALS` — strict equality
- `NOT_EQUALS` — strict inequality
- `INCLUDES` — substring inclusion
- `EXCLUDES` — substring exclusion
- `STARTS_WITH` — starts with substring
- `ENDS_WITH` — ends with substring
- `MATCHES` — matches RegExp

**Example:**

```typescript
import { stringPredicate } from 'predictype';
import { StringOperEnum } from 'predictype/enums/stringOperation';

stringPredicate('hello', StringOperEnum.EQUALS, 'hello'); // true
stringPredicate('hello world', StringOperEnum.INCLUDES, 'world'); // true
stringPredicate('hello', StringOperEnum.MATCHES, /^h/); // true
```

---

### stringMembershipPredicate

**Operations (`StringMembershipOperEnum`):**

- `IS_ONE_OF` — value is in array
- `IS_NOT_ONE_OF` — value is not in array

**Example:**

```typescript
import { stringMembershipPredicate } from 'predictype';
import { StringMembershipOperEnum } from 'predictype/enums/stringOperation';

stringMembershipPredicate('foo', StringMembershipOperEnum.IS_ONE_OF, ['foo', 'bar']); // true
stringMembershipPredicate('baz', StringMembershipOperEnum.IS_NOT_ONE_OF, ['foo', 'bar']); // true
```

---

### stringSizePredicate

**Operations (`StringSizeOperEnum`):**

- `LENGTH_EQUALS`
- `LENGTH_GREATER_THAN`
- `LENGTH_GREATER_THAN_OR_EQUALS`
- `LENGTH_LESS_THAN`
- `LENGTH_LESS_THAN_OR_EQUALS`

**Example:**

```typescript
import { stringSizePredicate } from 'predictype';
import { StringSizeOperEnum } from 'predictype/enums/stringOperation';

stringSizePredicate('abc', StringSizeOperEnum.LENGTH_EQUALS, 3); // true
stringSizePredicate('hello', StringSizeOperEnum.LENGTH_GREATER_THAN, 3); // true
```

---

### stringStatePredicate

**Description:**
Predicates for string state, such as checking if a string is empty, non-empty, blank, or contains only whitespace.

**Example:**

```typescript
import { isEmptyString, isNonEmptyString, isBlankString } from 'predictype';

isNonEmptyString('foo'); // true
isBlankString('   '); // true
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on GitHub.

---

## License

MIT
