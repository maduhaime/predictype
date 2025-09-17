# PredicType: TypeScript Predicates for Productivity

PredicType is a modern, type-safe predicate library for TypeScript. It provides a comprehensive set of reusable predicate functions for validating values, building expressive filters, and composing complex logic for arrays and objects.

Its goal is to make working with predicates and validation as productive and reliable as possible, with full type safety and a clean, extensible API.

---

## Documentation

- [Project Home](https://maduhaime.github.io/predictype/) on github.io.
- [API Reference](https://maduhaime.github.io/predictype/modules) on github.io.
- [Changelog](https://github.com/maduhaime/predictype/blob/main/CHANGELOG.md) github.com

---

## Features

- **199 distinct predicate operations**: One of the most complete predicate libraries for TypeScript, covering all major types and use cases.
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

PredicType organizes its predicates into **families**, each corresponding to a major TypeScript data type: array, bigint, boolean, date, function, map, number, object, promise, set, string, or symbol.

Each family exposes several **predicate categories** (also called "methods" or "operators"). Each category targets a specific aspect of the type (for example: size, membership, comparison, state, etc.).

#### General Example

```ts
import { PredicType } from 'predictype';

PredicType.array.comparison([1, 2], 'equals', [1, 2]); // true
PredicType.array.comparison([1, 2, 2], 'same_members', [2, 1, 2]); // true
PredicType.array.comparison([1, 2, 2], 'set_equals', [2, 1]); // true

PredicType.string.state('foo', 'is_not_empty'); // true

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

The alias mapping is as follows:

| Full API            | Alias  | Categories                                                                                              |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| PredicType.array    | P.arr  | comparison, indexComparison, indexMembership, intersection, membership, relation, sequence, size, state |
| PredicType.bigint   | P.big  | comparison, membership, range, state                                                                    |
| PredicType.boolean  | P.bool | comparison, state                                                                                       |
| PredicType.date     | P.date | calendar, comparison, range, state                                                                      |
| PredicType.function | P.func | arity, name, pattern, state                                                                             |
| PredicType.map      | P.map  | entry, key, size, state, value                                                                          |
| PredicType.number   | P.num  | comparison, range, state                                                                                |
| PredicType.object   | P.obj  | attributes, instance, key, keyMembership, keys, keysState, property, prototype, prototypeState, state   |
| PredicType.promise  | P.prom | state, type                                                                                             |
| PredicType.set      | P.set  | comparison, relation, size, state                                                                       |
| PredicType.string   | P.str  | comparison, membership, pattern, size, state, substring,                                                |
| PredicType.symbol   | P.sym  | comparison, state                                                                                       |

All predicate categories and operators are available via both the full API and the alias.

---

## Full Predicate Reference Table

Below is a comprehensive table of all predicate families, their categories, enums, available operators, function signatures, and usage examples.

#### Array (33)

| Category        | Enum                     | Operators                                                                                                                                      | Count |
| --------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| comparison      | ArrayComparisonEnum      | EQUALS, NOT_EQUALS, SAME_MEMBERS, SET_EQUALS, SET_NOT_EQUALS                                                                                   | 5     |
| indexComparison | ArrayIndexComparisonEnum | AT_INDEX_EQUALS, AT_INDEX_NOT_EQUALS, AT_INDEX_GREATER_THAN, AT_INDEX_GREATER_THAN_OR_EQUALS, AT_INDEX_LESS_THAN, AT_INDEX_LESS_THAN_OR_EQUALS | 6     |
| indexMembership | ArrayIndexMembershipEnum | AT_INDEX_IN, AT_INDEX_NOT_IN                                                                                                                   | 2     |
| intersection    | ArrayIntersectionEnum    | DISJOINT, INTERSECTS                                                                                                                           | 2     |
| membership      | ArrayMembershipEnum      | EVERY_EQUALS, EXCLUDES, INCLUDES, SOME_EQUALS                                                                                                  | 4     |
| relation        | ArrayRelationEnum        | SUBSET_OF, SUPERSET_OF, STRICT_SUBSET_OF, STRICT_SUPERSET_OF                                                                                   | 4     |
| sequence        | ArraySequenceEnum        | CONTAINS_SUBSEQUENCE, ENDS_WITH, STARTS_WITH                                                                                                   | 3     |
| size            | ArraySizeEnum            | SIZE_EQUALS, SIZE_GREATER_THAN, SIZE_GREATER_THAN_OR_EQUALS, SIZE_LESS_THAN, SIZE_LESS_THAN_OR_EQUALS                                          | 5     |
| state           | ArrayStateEnum           | IS_EMPTY, IS_NOT_EMPTY                                                                                                                         | 2     |

#### BigInt (17)

| Category   | Enum                 | Operators                                                                                | Count |
| ---------- | -------------------- | ---------------------------------------------------------------------------------------- | ----- |
| comparison | BigIntComparisonEnum | EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS, NOT_EQUALS | 6     |
| membership | BigIntMembershipEnum | IN, NOT_IN                                                                               | 2     |
| range      | BigIntRangeEnum      | BETWEEN, NOT_BETWEEN, STRICT_BETWEEN, STRICT_NOT_BETWEEN                                 | 4     |
| state      | BigIntStateEnum      | IS_EVEN, IS_NEGATIVE, IS_ODD, IS_POSITIVE, IS_ZERO                                       | 5     |

#### Boolean (4)

| Category   | Enum                  | Operators          | Count |
| ---------- | --------------------- | ------------------ | ----- |
| comparison | BooleanComparisonEnum | EQUALS, NOT_EQUALS | 2     |
| state      | BooleanStateEnum      | IS_TRUE, IS_FALSE  | 2     |

#### Date (24)

| Category   | Enum               | Operators                                                                                                                    | Count |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ----- |
| calendar   | DateCalendarEnum   | IS_FIRST_DAY_OF_MONTH, IS_FUTURE, IS_LAST_DAY_OF_MONTH, IS_PAST, IS_TODAY, IS_TOMORROW, IS_WEEKDAY, IS_WEEKEND, IS_YESTERDAY | 9     |
| comparison | DateComparisonEnum | AFTER, AFTER_OR_EQUAL, BEFORE, BEFORE_OR_EQUAL, EQUALS, NOT_EQUALS, SAME_DAY, SAME_MONTH, SAME_YEAR                          | 9     |
| range      | DateRangeEnum      | BETWEEN, NOT_BETWEEN, STRICT_BETWEEN, STRICT_NOT_BETWEEN                                                                     | 4     |
| state      | DateStateEnum      | IS_INVALID, IS_VALID                                                                                                         | 2     |

#### Function (19)

| Category | Enum                    | Operators                                                                    | Count |
| -------- | ----------------------- | ---------------------------------------------------------------------------- | ----- |
| arity    | FunctionArityEnum       | EQUALS, GREATER_OR_EQUAL, GREATER_THAN, LESS_OR_EQUAL, LESS_THAN, NOT_EQUALS | 6     |
| name     | FunctionNameEnum        | EQUALS, STARTS_WITH, ENDS_WITH, INCLUDES, EXCLUDES                           | 5     |
| pattern  | FunctionNamePatternEnum | MATCHES, NOT_MATCHES                                                         | 2     |
| state    | FunctionStateEnum       | HAS_NAME, IS_ANONYMOUS, IS_ARROW, IS_ASYNC, IS_CONSTRUCTOR, IS_GENERATOR     | 6     |

#### Map (13)

| Category | Enum         | Operators                                                                                             | Count |
| -------- | ------------ | ----------------------------------------------------------------------------------------------------- | ----- |
| entry    | MapEntryEnum | CONTAINS_ENTRY, LACKS_ENTRY                                                                           | 2     |
| key      | MapKeyEnum   | CONTAINS_KEY, LACKS_KEY                                                                               | 2     |
| size     | MapSizeEnum  | SIZE_EQUALS, SIZE_GREATER_THAN, SIZE_GREATER_THAN_OR_EQUALS, SIZE_LESS_THAN, SIZE_LESS_THAN_OR_EQUALS | 5     |
| state    | MapStateEnum | IS_EMPTY, IS_NOT_EMPTY                                                                                | 2     |
| value    | MapValueEnum | CONTAINS_VALUE, LACKS_VALUE                                                                           | 2     |

#### Number (16)

| Category   | Enum                 | Operators                                                                    | Count |
| ---------- | -------------------- | ---------------------------------------------------------------------------- | ----- |
| comparison | NumberComparisonEnum | EQUALS, GREATER_OR_EQUAL, GREATER_THAN, LESS_OR_EQUAL, LESS_THAN, NOT_EQUALS | 6     |
| range      | NumberRangeEnum      | BETWEEN, NOT_BETWEEN, STRICT_BETWEEN, STRICT_NOT_BETWEEN                     | 4     |
| state      | NumberStateEnum      | IS_FINITE, IS_FLOAT, IS_INTEGER, IS_NEGATIVE, IS_POSITIVE, IS_ZERO           | 6     |

#### Object (46)

| Category       | Enum                        | Operators                                                                                                                                                                                              | Count |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| attributes     | ObjectAttributesEnum        | ATTR_IS_ACCESSOR, ATTR_IS_CONFIGURABLE, ATTR_IS_DATA_PROPERTY, ATTR_IS_ENUMERABLE, ATTR_IS_WRITABLE                                                                                                    | 5     |
| instance       | ObjectInstanceRelationEnum  | INSTANCE_OF, PROTOTYPE_OF                                                                                                                                                                              | 2     |
| instance       | ObjectInstanceTypeEnum      | INSTANCE_OF_CLASS, INSTANCE_OF_CONSTRUCTOR, INSTANCE_OF_FUNCTION, INSTANCE_OF_OBJECT                                                                                                                   | 4     |
| key            | ObjectKeyEnum               | CONTAINS_KEY, LACKS_KEY                                                                                                                                                                                | 2     |
| keyMembership  | ObjectKeyMembershipEnum     | IN, NOT_IN                                                                                                                                                                                             | 2     |
| keys           | ObjectKeysEnum              | CONTAINS_ALL_KEYS, CONTAINS_ANY_KEY, CONTAINS_ONLY_KEYS, CONTAINS_SYMBOL_KEYS, EQUALS_KEYS, LACKS_ALL_KEYS, ONLY_KEYS, STRICT_EQUALS_KEYS                                                              | 8     |
| keysState      | ObjectKeysStateEnum         | HAS_CAMELCASE_KEYS, HAS_HOMOGENEOUS_KEYS, HAS_NUMERIC_KEYS, HAS_SYMBOL_KEYS                                                                                                                            | 4     |
| property       | ObjectPropertyEnum          | CONTAINS_OWN_PROPERTY, CONTAINS_PROPERTY, LACKS_OWN_PROPERTY, LACKS_PROPERTY                                                                                                                           | 4     |
| prototype      | ObjectPrototypeRelationEnum | CONTAINS_PROTOTYPE, IS_PROTOTYPE_OF                                                                                                                                                                    | 2     |
| prototypeState | ObjectPrototypeStateEnum    | PROTOTYPE_IS_NULL                                                                                                                                                                                      | 1     |
| state          | ObjectStateEnum             | HAS_ARRAY_PROP, HAS_CAMELCASE_KEYS, HAS_FUNCTION_PROP, HAS_NESTED_OBJECT, HAS_NO_KEYS, HAS_NO_UNDEFINED, HAS_NULL_PROTO, HAS_NUMERIC_KEYS, HAS_SYMBOL_KEYS, HAS_SYMBOLS, INHERITS_OBJECT, IS_CLONEABLE | 12    |

#### Promise (5)

| Category | Enum             | Operators                             | Count |
| -------- | ---------------- | ------------------------------------- | ----- |
| state    | PromiseStateEnum | IS_PENDING, IS_FULFILLED, IS_REJECTED | 3     |
| type     | PromiseTypeEnum  | IS_PROMISE, IS_ASYNC_FUNCTION         | 2     |

#### Set (13)

| Category   | Enum              | Operators                                                                                             | Count |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------------------- | ----- |
| comparison | SetComparisonEnum | EQUALS, NOT_EQUALS                                                                                    | 2     |
| relation   | SetRelationEnum   | DISJOINT, INTERSECTS, SUBSET_OF, SUPERSET_OF                                                          | 4     |
| size       | SetSizeEnum       | SIZE_EQUALS, SIZE_GREATER_THAN, SIZE_GREATER_THAN_OR_EQUALS, SIZE_LESS_THAN, SIZE_LESS_THAN_OR_EQUALS | 5     |
| state      | SetStateEnum      | IS_EMPTY, IS_NOT_EMPTY                                                                                | 2     |

#### String (21)

| Category   | Enum                 | Operators                                                                                             | Count |
| ---------- | -------------------- | ----------------------------------------------------------------------------------------------------- | ----- |
| comparison | StringComparisonEnum | EQUALS, NOT_EQUALS, GREATER_THAN, LESS_THAN                                                           | 4     |
| membership | StringMembershipEnum | IN, NOT_IN                                                                                            | 2     |
| pattern    | StringPatternEnum    | MATCHES, NOT_MATCHES                                                                                  | 2     |
| size       | StringSizeEnum       | SIZE_EQUALS, SIZE_GREATER_THAN, SIZE_GREATER_THAN_OR_EQUALS, SIZE_LESS_THAN, SIZE_LESS_THAN_OR_EQUALS | 5     |
| substring  | StringSubstringEnum  | INCLUDES, EXCLUDES, STARTS_WITH, ENDS_WITH                                                            | 4     |
| state      | StringStateEnum      | IS_BLANK, IS_EMPTY, IS_NOT_BLANK, IS_NOT_EMPTY                                                        | 4     |

#### Symbol (4)

| Category   | Enum                 | Operators           | Count |
| ---------- | -------------------- | ------------------- | ----- |
| comparison | SymbolComparisonEnum | EQUALS, NOT_EQUALS  | 2     |
| state      | SymbolStateEnum      | IS_GLOBAL, IS_LOCAL | 2     |

### Why Use Enums?

PredicType provides enums for all predicate operators. You can use either enums or string literal values for operators. Both approaches provide autocompletion and type checking in TypeScript.

**Advantages of using enums:**

- **Refactoring**: Changing an operator name in the enum updates all usages automatically.
- **Documentation**: Enums serve as a living list of all available operators for each category.
- **Consistency**: Enums help standardize operator usage across your codebase.

**Advantages of using string literals:**

- **Conciseness**: You can use the operator directly as a string, which can be more concise in some cases.
- **No import needed**: You don't need to import the enum, just use the string value.

**Type safety and auto-completion:**

Both enums and string literal values provide type safety and auto-completion in modern editors, as long as the function signature is properly typed (e.g., as a string union or enum type).

#### Example: Using Enums vs. Strings

```ts
import { PredicType, ArrayMembershipEnum } from 'predictype';

// Using a string (type-safe, autocompletion):
PredicType.array.membership([1, 2, 3], 'includes', 2); // true

// Using the enum (type-safe, autocompletion):
PredicType.array.membership([1, 2, 3], ArrayMembershipEnum.INCLUDES, 2); // true

// If you make a typo, TypeScript will catch it (with proper typings):
PredicType.array.membership([1, 2, 3], 'incldes', 2); // TypeScript error
PredicType.array.membership([1, 2, 3], ArrayMembershipEnum.INCLDES, 2); // TypeScript error
```

You can use either strings or enums with PredicType. Enums are recommended for large codebases, refactoring, and discoverability, while string literals are convenient for quick usage.

---

## Predicate Parameter Naming Convention

PredicType uses strict, explicit naming conventions for all predicate functions, enums and operators to ensure clarity, consistency, and type safety. The following choices have been made throughout the library:

### Enums Names

1. **IS\_ and HAS\_ Prefixes**

   - The `IS_` prefix is used for state or boolean property checks (e.g., `IS_EMPTY`, `IS_VALID`, `IS_TRUE`).
   - The `HAS_` prefix is used for presence or attribute checks (e.g., `HAS_KEY`, `HAS_SYMBOL_KEYS`).
   - These forms are chosen when the predicate does not require a target value for comparison, or for calendar-like/date state operations (e.g., `IS_TODAY`).

2. **CONTAINS\_ and LACKS\_ Prefixes**

- The `CONTAINS_` prefix is used for membership or inclusion (e.g., `CONTAINS_SUBSEQUENCE`).
- The `LACKS_` prefix is used for explicit absence (e.g., `LACKS_ENTRY`).

3. **STRICT\_ Prefix**

   - The `STRICT_` prefix indicates a strict version of a relation or range.
   - For relations, `STRICT_` means the relation is true only if the two sets are not equal (e.g., `STRICT_SUBSET_OF` means "is a subset of, but not equal to").
   - For ranges, `STRICT_` means strict inequality (e.g., `STRICT_IN_RANGE` means strictly between, i.e., `<` and `>`, not `<=` or `>=`).
   - Examples: `STRICT_SUBSET_OF`, `STRICT_SUPERSET_OF`, `STRICT_IN_RANGE`, `STRICT_OUT_RANGE`.

4. **\_OF Suffix for Relations**

   - The `_OF` suffix is used for all relation operators that express a relationship to another collection or value (e.g., `SUBSET_OF`, `SUPERSET_OF`, `STRICT_SUBSET_OF`, `STRICT_SUPERSET_OF`).
   - This clarifies the directionality and target of the relation, and harmonizes with common mathematical and programming conventions.
   - Examples: `SUBSET_OF` means "is a subset of", `SUPERSET_OF` means "is a superset of".

5. **MATCHES keyword reserved for RegExp**

   - The `MATCHES` and `NOT_MATCHES` keywords are reserved for RegExp or pattern matching (e.g., `NAME_MATCHES`, `MATCHES`).

6. **Collection verbs**

   - Verbs like `IN`, `NOT_IN`, `CONTAINS_ANY`, `CONTAINS_ALL` are used for membership and collection operations.
   - Example: `IN` for "is one of", `NOT_IN` for "is not one of".

7. **\_KEY and \_VALUE Suffixes**

   - The `_KEY` and `_VALUE` suffixes clarify the target of the predicate (e.g., `HAS_KEY`, `HAS_VALUE`).

8. **NOT\_ and \_NOT\_**

   - The `NOT_` prefix or `_NOT_` infix is used to indicate negation (e.g., `NOT_EQUALS`, `IS_NOT_EMPTY`, `VALUE_AT_INDEX_NOT_IN`).

9. **BETWEEN and NOT_BETWEEN for Range Operations**

   - The `BETWEEN` and `NOT_BETWEEN` keywords are used for range checks (e.g., `BETWEEN`, `NOT_BETWEEN`).

10. **SIZE\_ Prefix for Dimension Measurement**

- The `SIZE_` prefix is used for all enums and operators that measure the dimension or length of a value, regardless of the underlying structure (array, string, set, map, etc.).
- Even though JavaScript/TypeScript uses `length` for arrays and strings, PredicType always uses `size` for consistency across all collection types.
- This ensures a unified API and avoids ambiguity when writing predicates for different types.

11. **AT\_ Prefix for Indexed or Keyed Value Access**

- The `AT_` prefix is a concise alternative to `VALUE_AT`. It is used for enums and operators that target the value located at a specific index (for arrays) or key (for objects, maps, etc.).
- This prefix indicates that the predicate operates on the value found "at" a given position or key, rather than on the collection as a whole.
- Typical use cases include checking if the value at a certain index or key matches a condition.

**Additional rules:**

- Enum keys are written in SCREAMING_SNAKE_CASE; enum values are lowercased snake_case.
- Operator names are kept as short as possible but unambiguous (e.g., `IN`, not `IS_ONE_OF`).
- Abbreviations are avoided unless they are standard and unambiguous.
- The positive form is preferred by default; a negative/negated form is provided if it is a common use case.

### Predicate Function Argument Names

PredicType enforces strict conventions for predicate function signatures to ensure clarity, type safety, and API predictability.

1. **Standard Parameter Names**

   - `source`: The primary value or collection being tested (always the first parameter).
   - `oper`: The operation or enum/operator to apply (always the second parameter).
   - `target`: The value, collection, or set to compare against (typically the third parameter).

2. **Specialized Parameter Names**

   - `index`: Used when the predicate targets a specific position in a collection (e.g., arrays).
   - `key`, `keys`: Used when the predicate targets a specific key(s) in an object, map, or similar structure.
   - `min`, `max`: Used for range predicates to indicate lower and upper bounds.
   - `pattern`: Used for pattern-matching predicates.
   - `entry`: Used for map entry predicates ([key, value] tuples).
   - `arity`: Used for function signature.

3. **No Union Types in Parameters**

   - Avoid signatures like `(value: string | number)` or `(target: string | string[])`.
   - Each predicate must target a specific type and arity.
   - Example: prefer two distinct functions for `isString` and `isNumber` rather than a single one with a union parameter.

4. **No Parameters Accepting Both Singular and Plural**

   - Avoid signatures like `(target: string | string[])`.
   - A predicate should always expect a unique type for each parameter (never "one or many").
   - Example: for membership tests, use `IN` (for "is in the array") and not a function that would accept both a value and an array of values.

5. **Strict and Explicit Signature**

   - Each predicate must have a clear signature, without optional or overloaded parameters except in very justified cases.
   - Parameters must be typed as precisely as possible.

6. **No Over-Generalization**

   - A predicate should not cover multiple concepts at once (e.g., do not mix "is empty" and "has size greater than N" in the same function).

7. **Always returns a boolean**

   - All predicates must return `true` or `false`.

### Predicate Category Naming Convention

| Category        | Description                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| Comparison      | Compares two values or collections for equality, inequality, or membership equivalence (strict, set, multiset). |
| IndexComparison | Compares the value at a specific index in a collection to a target value using comparison operators.            |
| IndexMembership | Checks if the value at a specific index in a collection is (or is not) a member of a set of values.             |
| Intersection    | Checks whether two collections share any elements (intersect) or are completely disjoint.                       |
| Membership      | Checks if all, some, or none of the elements in a collection match a target value or are included/excluded.     |
| Pattern         | Matches values against patterns, such as regular expressions or string patterns.                                |
| Range           | Checks if a value falls within a specified range (inclusive or exclusive).                                      |
| Relation        | Determines set relationships between collections (subset, superset, strict subset, strict superset, etc.).      |
| Sequence        | Checks for the presence, position, or order of a subsequence within a collection.                               |
| Size            | Compares the size (length, count) of a collection to a target value using relational operators.                 |
| State           | Checks for simple state properties of a value or collection (e.g., is empty, is not empty, is valid).           |
| Substring       | Checks for the presence or position of substrings within strings.                                               |
| Type            | Checks the type or constructor of a value.                                                                      |

### Enum Conventions

1. **Case style:**
   - Enum keys must be SCREAMING_SNAKE_CASE.
   - Each enum value must be snake_case version of the key (lowercase)

---

## Contributing

At the moment, this project is maintained by a single developer. Contributions are welcome and appreciated.
You can find PredicType on GitHub; feel free to open an issue or create a pull request:
[https://github.com/maduhaime/predictype](https://github.com/maduhaime/predictype)
