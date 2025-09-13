# PredicType: TypeScript Predicates for Productivity

PredicType is a modern, type-safe predicate library for TypeScript. It provides a comprehensive set of reusable predicate functions for validating values, building expressive filters, and composing complex logic for arrays and objects.
PredicType is a modern, type-safe predicate library for TypeScript. It provides a comprehensive set of reusable predicate functions for validating values, building expressive filters, and composing complex logic for arrays and objects.

Its goal: make working with predicates and validation as productive and reliable as possible, with full type safety and a clean, extensible API.

---

## Documentation

- [Project Home](https://maduhaime.github.io/predictype/) on github.io.
- [API Reference](https://maduhaime.github.io/predictype/modules) on github.io.
- [Changelog](https://github.com/maduhaime/predictype/blob/main/CHANGELOG.md) github.com

---

## Features

- **175 distinct predicate operations**: One of the most complete predicate libraries for TypeScript, covering all major types and use cases.
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

> **Note:** PredicType is the predicate engine powering [Collectype](https://maduhaime.github.io/predictype/), a modern TypeScript Collection library. If you want advanced, type-safe collections with built-in predicate support, check out Collectype!

---

## Usage

### Families and Predicate Categories

`PredicType` organizes its predicates into **families**, each corresponding to a major TypeScript data type: array, bigint, boolean, date, function, map, number, object, promise, set, string, symbol.

Each family exposes several **predicate categories** (also called "methods" or "operators"). Each category targets a specific aspect of the type (for example: size, membership, comparison, state, etc.).

#### General Example

```ts
import { PredicType } from 'predictype';

// Family: array, Category: comparison
PredicType.array.comparison([1, 2], 'equals', [1, 2]); // true

// New: SAME_MEMBERS (multiset equality, ignores order)
PredicType.array.comparison([1, 2, 2], 'same_members', [2, 1, 2]); // true
PredicType.array.comparison([1, 2, 2], 'same_members', [2, 1]); // false

// New: SET_EQUALS (set equality, ignores order and duplicates)
PredicType.array.comparison([1, 2, 2], 'set_equals', [2, 1]); // true
PredicType.array.comparison([1, 2, 2], 'set_equals', [2, 1, 3]); // false

// New: SET_NOT_EQUALS (set inequality)
PredicType.array.comparison([1, 2, 2], 'set_not_equals', [2, 1, 3]); // true
PredicType.array.comparison([1, 2, 2], 'set_not_equals', [2, 1]); // false

// Family: string, Category: state
PredicType.string.state('foo', 'is_not_empty'); // true

// Family: number, Category: range
PredicType.number.range(5, 'between', 1, 10); // true
```

### The `P` Alias

For convenience, PredicType also exports a short alias `P` that mirrors the full API. This allows for more concise code, especially in validation chains or functional programming contexts.

#### Example

```ts
import { P } from 'predictype';

P.arr.comparison([1, 2], 'equals', [1, 2]); // true
P.str.state('foo', 'is_not_empty'); // true
P.num.range(5, 'between', 1, 10); // true
```

The alias maps as follows:

| Full API            | Alias  |
| ------------------- | ------ |
| PredicType.array    | P.arr  |
| PredicType.bigint   | P.big  |
| PredicType.boolean  | P.bool |
| PredicType.date     | P.date |
| PredicType.function | P.func |
| PredicType.map      | P.map  |
| PredicType.number   | P.num  |
| PredicType.object   | P.obj  |
| PredicType.promise  | P.prom |
| PredicType.set      | P.set  |
| PredicType.string   | P.str  |
| PredicType.symbol   | P.sym  |

All predicate categories and operators are available through both the full API and the alias.

### Full Predicate Reference Table

Below is a comprehensive table of all predicate families, their categories, enums, available operators, function signatures, and usage examples.

#### Array

| Category     | Enum                  | Operators                                                                                                                                                                                                                    | Count |
| ------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| membership   | ArrayMembershipEnum   | INCLUDES, EXCLUDES, SOME_EQUALS, EVERY_EQUALS                                                                                                                                                                                | 4     |
| comparison   | ArrayComparisonEnum   | EQUALS, NOT_EQUALS, SAME_MEMBERS, SET_EQUALS, SET_NOT_EQUALS                                                                                                                                                                 | 5     |
| relation     | ArrayRelationEnum     | IS_SUBSET_OF, IS_SUPERSET_OF                                                                                                                                                                                                 | 2     |
| sequence     | ArraySequenceEnum     | STARTS_WITH, ENDS_WITH, CONTAINS_SUBSEQUENCE                                                                                                                                                                                 | 3     |
| intersection | ArrayIntersectionEnum | INTERSECTS, DISJOINT                                                                                                                                                                                                         | 2     |
| size         | ArraySizeEnum         | LENGTH_EQUALS, LENGTH_GREATER_THAN, LENGTH_GREATER_THAN_OR_EQUALS, LENGTH_LESS_THAN, LENGTH_LESS_THAN_OR_EQUALS                                                                                                              | 5     |
| state        | ArrayStateEnum        | IS_EMPTY, IS_NOT_EMPTY                                                                                                                                                                                                       | 2     |
| index        | ArrayIndexEnum        | VALUE_AT_INDEX_EQUALS, VALUE_AT_INDEX_NOT_EQUALS, VALUE_AT_INDEX_IN, VALUE_AT_INDEX_NOT_IN, VALUE_AT_INDEX_GREATER_THAN, VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, VALUE_AT_INDEX_LESS_THAN, VALUE_AT_INDEX_LESS_THAN_OR_EQUALS | 8     |

#### BigInt

| Category   | Enum                 | Operators                                                                                | Count |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------- | ----- |
| comparison | BigIntComparisonEnum | EQUALS, NOT_EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS | 6     |
| membership | BigIntMembershipEnum | IS_ONE_OF, IS_NOT_ONE_OF                                                                 | 2     |
| range      | BigIntRangeEnum      | BETWEEN, NOT_BETWEEN                                                                     | 2     |
| state      | BigIntStateEnum      | IS_ZERO, IS_POSITIVE, IS_NEGATIVE, IS_EVEN, IS_ODD                                       | 5     |

#### Boolean

| Category   | Enum                  | Operators          | Count |
| ---------- | --------------------- | ------------------ | ----- |
| comparison | BooleanComparisonEnum | EQUALS, NOT_EQUALS | 2     |
| state      | BooleanStateEnum      | IS_TRUE, IS_FALSE  | 2     |

#### Date

| Category | Enum             | Operators                                                                                                                    | Count |
| -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----- |
| calendar | DateCalendarEnum | IS_TODAY, IS_YESTERDAY, IS_TOMORROW, IS_WEEKEND, IS_WEEKDAY, IS_PAST, IS_FUTURE, IS_FIRST_DAY_OF_MONTH, IS_LAST_DAY_OF_MONTH | 9     |
| range    | DateRangeEnum    | IN_RANGE, OUT_RANGE, STRICT_IN_RANGE, STRICT_OUT_RANGE                                                                       | 4     |
| state    | DateStateEnum    | IS_VALID, IS_INVALID, IS_BEFORE_NOW, IS_AFTER_NOW, IS_SAME_DAY, IS_SAME_MONTH, IS_SAME_YEAR                                  | 7     |

#### Function

| Category | Enum                | Operators                                                                    | Count |
| -------- | ------------------- | ---------------------------------------------------------------------------- | ----- |
| arity    | FunctionArityEnum   | EQUALS, NOT_EQUALS, GREATER_THAN, GREATER_OR_EQUAL, LESS_THAN, LESS_OR_EQUAL | 6     |
| name     | FunctionNameEnum    | EQUALS, STARTS_WITH, ENDS_WITH, INCLUDES, EXCLUDES                           | 5     |
| pattern  | FunctionPatternEnum | NAME_MATCHES, NAME_NOT_MATCHES                                               | 2     |
| state    | FunctionStateEnum   | HAS_NAME, IS_ASYNC, IS_GENERATOR, IS_CONSTRUCTOR, IS_ARROW, IS_ANONYMOUS     | 6     |

#### Map

| Category | Enum         | Operators                                                                    | Count |
| -------- | ------------ | ---------------------------------------------------------------------------- | ----- |
| entry    | MapEntryEnum | HAS_ENTRY, LACKS_ENTRY                                                       | 2     |
| key      | MapKeyEnum   | HAS_KEY, LACKS_KEY                                                           | 2     |
| size     | MapSizeEnum  | EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS | 5     |
| state    | MapStateEnum | IS_EMPTY, IS_NOT_EMPTY                                                       | 2     |
| value    | MapValueEnum | HAS_VALUE, LACKS_VALUE                                                       | 2     |

#### Number

| Category   | Enum                 | Operators                                                                                | Count |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------- | ----- |
| comparison | NumberComparisonEnum | EQUALS, NOT_EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS | 6     |
| range      | NumberRangeEnum      | BETWEEN, NOT_BETWEEN                                                                     | 2     |
| state      | NumberStateEnum      | IS_ZERO, IS_POSITIVE, IS_NEGATIVE, IS_INTEGER, IS_FINITE, IS_NAN                         | 6     |

#### Object

| Category   | Enum                 | Operators                                                                                                                         | Count |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----- |
| attributes | ObjectAttributesEnum | IS_ACCESSOR, IS_CONFIGURABLE, IS_DATA_PROPERTY, IS_ENUMERABLE, IS_WRITABLE                                                        | 5     |
| instance   | ObjectInstanceEnum   | IS_CLASS, IS_CONSTRUCTOR, IS_FUNCTION_INSTANCE, IS_INSTANCE_OF, IS_OBJECT_INSTANCE                                                | 5     |
| key        | ObjectKeyEnum        | HAS_KEY, LACKS_KEY                                                                                                                | 2     |
| keys       | ObjectKeysEnum       | HAS_ALL_KEYS, HAS_ANY_KEY, HAS_ANY_PROPERTY, HAS_EXACT_KEYS, HAS_NO_KEYS, HAS_ONLY_KEYS, HAS_SYMBOL_KEYS, MATCHES_KEYS, ONLY_KEYS | 8     |

#### Promise

| Category | Enum             | Operators                             | Count |
| -------- | ---------------- | ------------------------------------- | ----- |
| state    | PromiseStateEnum | IS_PENDING, IS_FULFILLED, IS_REJECTED | 3     |
| type     | PromiseTypeEnum  | IS_PROMISE, IS_NOT_PROMISE            | 2     |

#### Set

| Category   | Enum              | Operators                                                                    | Count |
| ---------- | ----------------- | ---------------------------------------------------------------------------- | ----- |
| comparison | SetComparisonEnum | EQUALS, NOT_EQUALS                                                           | 2     |
| relation   | SetRelationEnum   | DISJOINT, INTERSECTS, IS_SUBSET_OF, IS_SUPERSET_OF                           | 4     |
| size       | SetSizeEnum       | EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS | 5     |
| state      | SetStateEnum      | IS_EMPTY, IS_NOT_EMPTY                                                       | 2     |

#### String

| Category   | Enum                 | Operators                                                                    | Count |
| ---------- | -------------------- | ---------------------------------------------------------------------------- | ----- |
| comparison | StringComparisonEnum | EQUALS, NOT_EQUALS, GREATER_THAN, LESS_THAN                                  | 4     |
| membership | StringMembershipEnum | IS_ONE_OF, IS_NOT_ONE_OF                                                     | 2     |
| pattern    | StringPatternEnum    | MATCHES, NOT_MATCHES                                                         | 2     |
| size       | StringSizeEnum       | EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS | 5     |
| state      | StringStateEnum      | IS_EMPTY, IS_NOT_EMPTY, IS_BLANK, IS_NOT_BLANK                               | 4     |

#### Symbol

| Category   | Enum                 | Operators                | Count |
| ---------- | -------------------- | ------------------------ | ----- |
| comparison | SymbolComparisonEnum | EQUALS, NOT_EQUALS       | 2     |
| state      | SymbolStateEnum      | IS_GLOBAL, IS_NOT_GLOBAL | 2     |

### Why Use Enums?

PredicType provides enums for all predicate operators. Using enums instead of raw strings offers several advantages:

- **Type safety**: Prevents typos and ensures only valid operators are used.
- **Autocompletion**: Modern editors suggest available operators, making development faster and less error-prone.
- **Refactoring**: Changing an operator name in the enum updates all usages automatically.
- **Documentation**: Enums serve as a living list of all available operators for each category.

#### Example: Using Enums vs. Strings

```ts
import { PredicType, ArrayMembershipEnum } from 'predictype';

// Using a string (works, but error-prone):
PredicType.array.membership([1, 2, 3], 'includes', 2); // true

// Using the enum (type-safe, autocompletion):
PredicType.array.membership([1, 2, 3], ArrayMembershipEnum.INCLUDES, 2); // true

// If you make a typo with a string, TypeScript may not catch it:
PredicType.array.membership([1, 2, 3], 'incldes', 2); // Error only at runtime!

// With enums, typos are caught at compile time:
PredicType.array.membership([1, 2, 3], ArrayMembershipEnum.INCLDES, 2); // TypeScript error
```

You can use either strings or enums with PredicType, but enums are recommended for maximum safety and developer experience.

## Contributing

At the moment, this project is maintained by a single developer. Contributions are welcome and appreciated.
You can find PredicType on GitHub; feel free to open an issue or create a pull request:
[https://github.com/maduhaime/predictype](https://github.com/maduhaime/predictype)
