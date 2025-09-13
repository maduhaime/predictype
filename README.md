# PredicType: TypeScript Predicates for Productivity

PredicType is a modern, type-safe predicate library for TypeScript. It provides a comprehensive set of reusable predicate functions for validating values, building expressive filters, and composing complex logic for arrays and objects.

Its goal: make working with predicates and validation as productive and reliable as possible, with full type safety and a clean, extensible API.

---

## Documentation

- [Project Home](https://maduhaime.github.io/predictype/) on github.io.
- [API Reference](https://maduhaime.github.io/predictype/modules) on github.io.
- [Changelog](https://github.com/maduhaime/predictype/blob/main/CHANGELOG.md) github.com

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

| Category     | Enum                  | Operators                                                                                                                                                                                                                    |
| ------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| membership   | ArrayMembershipEnum   | INCLUDES, EXCLUDES, SOME_EQUALS, EVERY_EQUALS                                                                                                                                                                                |
| comparison   | ArrayComparisonEnum   | EQUALS, NOT_EQUALS                                                                                                                                                                                                           |
| relation     | ArrayRelationEnum     | IS_SUBSET_OF, IS_SUPERSET_OF                                                                                                                                                                                                 |
| sequence     | ArraySequenceEnum     | STARTS_WITH, ENDS_WITH, CONTAINS_SUBSEQUENCE                                                                                                                                                                                 |
| intersection | ArrayIntersectionEnum | INTERSECTS, DISJOINT                                                                                                                                                                                                         |
| size         | ArraySizeEnum         | LENGTH_EQUALS, LENGTH_GREATER_THAN, LENGTH_GREATER_THAN_OR_EQUALS, LENGTH_LESS_THAN, LENGTH_LESS_THAN_OR_EQUALS                                                                                                              |
| state        | ArrayStateEnum        | IS_EMPTY, IS_NOT_EMPTY                                                                                                                                                                                                       |
| index        | ArrayIndexEnum        | VALUE_AT_INDEX_EQUALS, VALUE_AT_INDEX_NOT_EQUALS, VALUE_AT_INDEX_IN, VALUE_AT_INDEX_NOT_IN, VALUE_AT_INDEX_GREATER_THAN, VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, VALUE_AT_INDEX_LESS_THAN, VALUE_AT_INDEX_LESS_THAN_OR_EQUALS |

#### BigInt

| Category   | Enum                 | Operators                                                                                |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------- |
| comparison | BigIntComparisonEnum | EQUALS, NOT_EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS |
| membership | BigIntMembershipEnum | IS_ONE_OF, IS_NOT_ONE_OF                                                                 |
| range      | BigIntRangeEnum      | BETWEEN, NOT_BETWEEN                                                                     |
| state      | BigIntStateEnum      | IS_ZERO, IS_POSITIVE, IS_NEGATIVE, IS_EVEN, IS_ODD                                       |

#### Boolean

| Category   | Enum                  | Operators          |
| ---------- | --------------------- | ------------------ |
| comparison | BooleanComparisonEnum | EQUALS, NOT_EQUALS |
| state      | BooleanStateEnum      | IS_TRUE, IS_FALSE  |

#### Date

| Category | Enum             | Operators                                                                                                                    |
| -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| calendar | DateCalendarEnum | IS_TODAY, IS_YESTERDAY, IS_TOMORROW, IS_WEEKEND, IS_WEEKDAY, IS_PAST, IS_FUTURE, IS_FIRST_DAY_OF_MONTH, IS_LAST_DAY_OF_MONTH |
| range    | DateRangeEnum    | IN_RANGE, OUT_RANGE, STRICT_IN_RANGE, STRICT_OUT_RANGE                                                                       |
| state    | DateStateEnum    | IS_VALID, IS_INVALID, IS_BEFORE_NOW, IS_AFTER_NOW, IS_SAME_DAY, IS_SAME_MONTH, IS_SAME_YEAR                                  |

#### Function

| Category | Enum                | Operators                                                                    |
| -------- | ------------------- | ---------------------------------------------------------------------------- |
| arity    | FunctionArityEnum   | EQUALS, NOT_EQUALS, GREATER_THAN, GREATER_OR_EQUAL, LESS_THAN, LESS_OR_EQUAL |
| name     | FunctionNameEnum    | EQUALS, STARTS_WITH, ENDS_WITH, INCLUDES, EXCLUDES                           |
| pattern  | FunctionPatternEnum | NAME_MATCHES, NAME_NOT_MATCHES                                               |
| state    | FunctionStateEnum   | HAS_NAME, IS_ASYNC, IS_GENERATOR, IS_CONSTRUCTOR, IS_ARROW, IS_ANONYMOUS     |

#### Map

| Category | Enum         | Operators                                                                    |
| -------- | ------------ | ---------------------------------------------------------------------------- |
| entry    | MapEntryEnum | HAS_ENTRY, LACKS_ENTRY                                                       |
| key      | MapKeyEnum   | HAS_KEY, LACKS_KEY                                                           |
| size     | MapSizeEnum  | EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS |
| state    | MapStateEnum | IS_EMPTY, IS_NOT_EMPTY                                                       |
| value    | MapValueEnum | HAS_VALUE, LACKS_VALUE                                                       |

#### Number

| Category   | Enum                 | Operators                                                                                |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------- |
| comparison | NumberComparisonEnum | EQUALS, NOT_EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS |
| range      | NumberRangeEnum      | BETWEEN, NOT_BETWEEN                                                                     |
| state      | NumberStateEnum      | IS_ZERO, IS_POSITIVE, IS_NEGATIVE, IS_INTEGER, IS_FINITE, IS_NAN                         |

#### Object

| Category   | Enum                 | Operators                                                                                                                         |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| attributes | ObjectAttributesEnum | IS_ACCESSOR, IS_CONFIGURABLE, IS_DATA_PROPERTY, IS_ENUMERABLE, IS_WRITABLE                                                        |
| instance   | ObjectInstanceEnum   | IS_CLASS, IS_CONSTRUCTOR, IS_FUNCTION_INSTANCE, IS_INSTANCE_OF, IS_OBJECT_INSTANCE                                                |
| key        | ObjectKeyEnum        | HAS_KEY, LACKS_KEY                                                                                                                |
| keys       | ObjectKeysEnum       | HAS_ALL_KEYS, HAS_ANY_KEY, HAS_ANY_PROPERTY, HAS_EXACT_KEYS, HAS_NO_KEYS, HAS_ONLY_KEYS, HAS_SYMBOL_KEYS, MATCHES_KEYS, ONLY_KEYS |

#### Promise

| Category | Enum             | Operators                             |
| -------- | ---------------- | ------------------------------------- |
| state    | PromiseStateEnum | IS_PENDING, IS_FULFILLED, IS_REJECTED |
| type     | PromiseTypeEnum  | IS_PROMISE, IS_NOT_PROMISE            |

#### Set

| Category   | Enum              | Operators                                                                    |
| ---------- | ----------------- | ---------------------------------------------------------------------------- |
| comparison | SetComparisonEnum | EQUALS, NOT_EQUALS                                                           |
| relation   | SetRelationEnum   | DISJOINT, INTERSECTS, IS_SUBSET_OF, IS_SUPERSET_OF                           |
| size       | SetSizeEnum       | EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS |
| state      | SetStateEnum      | IS_EMPTY, IS_NOT_EMPTY                                                       |

#### String

| Category   | Enum                 | Operators                                                                    |
| ---------- | -------------------- | ---------------------------------------------------------------------------- |
| comparison | StringComparisonEnum | EQUALS, NOT_EQUALS, GREATER_THAN, LESS_THAN                                  |
| membership | StringMembershipEnum | IS_ONE_OF, IS_NOT_ONE_OF                                                     |
| pattern    | StringPatternEnum    | MATCHES, NOT_MATCHES                                                         |
| size       | StringSizeEnum       | EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS |
| state      | StringStateEnum      | IS_EMPTY, IS_NOT_EMPTY, IS_BLANK, IS_NOT_BLANK                               |

#### Symbol

| Category   | Enum                 | Operators                |
| ---------- | -------------------- | ------------------------ |
| comparison | SymbolComparisonEnum | EQUALS, NOT_EQUALS       |
| state      | SymbolStateEnum      | IS_GLOBAL, IS_NOT_GLOBAL |

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
