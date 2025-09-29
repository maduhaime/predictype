# Changelog

All notable changes to this project will be documented in this file.

# [0.7.6] - 2025-09-29

### Added

- **Code quality tools**: Added ESLint and Prettier to the project for consistent code formatting and linting.
  - ESLint configuration with TypeScript support and recommended rules
  - Prettier configuration for automated code formatting
  - Integration scripts for linting and formatting in package.json
  - Pre-commit hooks setup to ensure code quality standards

### Changed

- **Code formatting**: Applied Prettier formatting across the entire codebase for consistent style and readability.

### Internal

- **Development workflow**: Enhanced development experience with automated code quality checks and formatting.

# [0.7.5] - 2025-09-23

### Fixed

- **Dependency**: PredicType incorrectly listed itself as a dependency.

# [0.7.4] - 2025-09-23

### Fixed

- **Documentation rendering**: Replaced all markdown tables in JSDoc `@remarks` blocks with bullet lists for all predicate files (arrays, bigints, booleans, dates, functions, maps, numbers, objects, promises, sets, strings, symbols). This ensures correct rendering in generated documentation and improves compatibility with TypeDoc and other tools.

# [0.7.3] - 2025-09-17

### Fixed

- **NaN and numeric edge cases**: Improved handling of `NaN`, `Infinity`, and `-Infinity` in all number predicates (`numberRange`, `numberComparison`, `numberState`). Added comprehensive tests to ensure correct and predictable behavior for these special values and edge cases.

# [0.7.2] - 2025-09-17

### Fixed

- **Predicate.function.namePattern**: Fixed a bug in the function name pattern predicate.

# [0.7.1] - 2025-09-16

### Changed

- **Documentation**: Major improvements to English, typo fixes, clarification of phrasing, and harmonization of section titles in the README. Parameter and enum naming conventions are now illustrated with real examples from the codebase.
- **Changelog**: Detailed recent changes and clarified enum standards.

### Fixed

- **Parameter naming consistency**: All predicate functions now strictly use the parameter names `source`, `oper`, `target` (or specialized names like `index`, `key`, `min`, `max`, `pattern`, etc.), as documented.
- **Object predicates**: Systematic correction of parameter names and references in all object predicate files (`objectAttributes`, `objectKey`, `objectKeyMembership`, `objectKeysCompare`, etc.), with updated JSDoc.

### Internal

- **Refactor**: Complete review and refactor of all predicate files to ensure compliance with naming conventions, improving maintainability and API predictability.

# [0.7.0] - 2025-09-15

### Added

- **Parameter naming convention**: Introduced and documented a strict convention for all predicate function parameters and enums. A dedicated section in the README explains the logic and rules.

- **Predicate specialization**: Several predicate functions were split into more specific variants to eliminate optional parameters and union types (e.g., `target: string | string[]`). Each predicate now targets a single, well-defined signature (no more "one or many" or optional arguments), improving type safety and clarity.

### Changed

- **Documentation**: Added the new naming convention to the README, with detailed explanations and examples. Reference tables improved for clarity and accuracy.
- **Tests**: Updated and expanded test suites to reflect the new parameter names and ensure full coverage of all predicate families and categories.

### Fixed

- **Bug fixes**: Fixed reference bugs and inconsistencies in object predicate files, especially in `objectKeysCompare` and related functions.

### Internal

- **Code review**: Systematic, file-by-file review of all predicate families (arrays, bigints, booleans, dates, functions, maps, numbers, objects, promises, sets, strings, symbols) to enforce the new conventions and document all changes.

### Enum Standards

- **Enum naming conventions**: Predicate operation enums are at the core of the PredicType API. The following standards are strictly enforced:
  - Enum keys are in SCREAMING_SNAKE_CASE, values in snake_case.
  - Enums are named by operation category: e.g., `ArraySizeEnum` with keys like `SIZE_EQUALS`, `SIZE_GREATER_THAN`, etc.
  - Prefixes are unified for similar operations across families (`SIZE_`, `AT_INDEX_`, `STATE_`, etc.).
  - Enums and their usage are documented in the README with concrete examples.
  - Real examples: `ArraySizeEnum.SIZE_EQUALS`, `SetRelationEnum.SUBSET_OF`, `StringMembershipEnum.IN`, `ObjectKeyMembershipEnum.NOT_IN`.

# [0.6.2] - 2025-09-14

### Fixed

- **Date comparison exposure**: The `dateComparison` predicate was not exposed in the main API (`PredicType.date.comparison`). It is now properly exported and available through both the main and alias APIs.

# [0.6.1] - 2025-09-14

### Added

- **Object instance**: Added `IS_PROTOTYPE_OF` to `ObjectInstanceEnum` and implemented its logic, allowing prototype chain checks via `objectInstance(proto, 'is_prototype_of', obj)`.
- **Date comparison**: Recreated the `dateComparison` predicate for all operators in `DateComparisonEnum`, with a full test suite.

### Changed

- **Documentation**: Updated the README reference tables and features to reflect the total of distinct predicate operations and documented the new object instance operator.

### Fixed

- **TypeScript compatibility**: Fixed type errors in `objectInstance` and its tests, allowing correct usage with both class instances and functions as arguments. asdcfvbn ,

# [0.6.0] - 2025-09-13

### Added

- **Array comparison**: Added `strict_subset` and `strict_superset` operators for arrays, enabling strict set inclusion/exclusion checks.
- **Date calendar**: All calendar-related functions now accept an optional date parameter, allowing flexible reference date handling.
- **String**:
  - Exported the missing `substring` predicate in the main API.
  - Implemented all missing `string state` functionalities, ensuring full enum and API coverage.
- **Object state integration tests**: Added comprehensive integration tests for all `PredicType.object.state` operators, covering every value of `ObjectStateEnum` via the main API and its alias, in strict enum order.
- **Documentation**: The README reference tables have been fully audited, corrected, and expanded. They now exhaustively list all 224 distinct predicates available in PredicType, organized by family, category, and enum, with the exact count for each operator.

### Fixed

- **Test suite cleanup**: Removed a stray/duplicate assertion in the array intersection test, fixed test file structure and block closures, and ensured all tests pass cleanly.

### Internal

- Ensured all object state tests are present, ordered, and compliant with project conventions. Improved test maintainability and reliability for future changes.

## [0.5.0] - 2025-09-13

### Added

- **Array comparison enhancements**: Added three new operators for arrays: `same_members` (multiset equality), `set_equals` (set equality), `set_not_equals` (set inequality).
- **Enriched documentation**:
  - Usage examples for all new operators in the README.
  - Added a "Count" column to all reference tables to indicate the number of operators per category.
- **Comprehensive estimation**: Counted and validated the number of distinct operations supported by the API (detailed table by family and category).

### Changed

- Harmonized and clarified documentation (README, JSDoc, examples).
- Improved wording and added clarifications about the API and usage.

### Fixed

- Fixed minor omissions or inaccuracies in the documentation following recent changes.

## [0.4.2] - 2025-09-12

### Fixed

- Fixed a typo in documentation: the 'T' in 'PredicType' was incorrectly lowercase in some places.

## [0.4.1] - 2025-09-12

### Fixed

- Improved BigInts compatibility: replaced all BigInt literals (e.g. `1n`, `0n`) with `BigInt(...)` constructor calls throughout the codebase and tests for broader tool and environment support.

## [0.4.0] - 2025-09-12

### Major transformation: ESM & CJS dual support

- **TypeScript configuration**: Added two separate configs (`tsconfig.esm.json` and `tsconfig.cjs.json`) to generate ESM and CJS builds, with appropriate `target` and `module` settings for each environment.
- **Exports & Entrypoints**: Refactored the `exports` field in `package.json` to explicitly expose ESM (`import`) and CJS (`require`) entrypoints, with correct type definitions for each format. Updated `main`, `module`, and `types` fields to point to the correct generated files.
- **.js extensions & index usage**: Systematically added the `.js` extension to all local imports/exports in the source code, and used explicit `index.js` files to ensure ESM/CJS compatibility and avoid module resolution errors.
- **.npmignore**: Adjusted `.npmignore` to only publish necessary files (builds, enums, predicates, types), excluding sources, configs, and tests.
- **Build scripts**: Updated npm scripts to generate both builds (`dist/esm` and `dist/cjs`) and ensure type and entrypoint consistency.
- **Tests & CI**: Adapted unit tests and project structure to ensure tests pass in both environments.
- **BigInt literals removed**: All BigInt literals (e.g. `1n`, `0n`) in tests and code were replaced with `BigInt(...)` constructor calls to improve compatibility with certain tools and environments that do not fully support BigInt literals.

### Fixed

- Resolved CJS import and type resolution issues in Node.js and bundler environments.
- Fixed errors encountered during unit testing as a dependency (Error: Cannot find module... imported from... ).

### Internal

- Major refactor of project structure for ESM/CJS compatibility.
- Cleanup and harmonization of imports, exports, and index files.

## [0.3.5] - 2025-09-11

### Fixed

- Fixed packaging issue: the `dist` directory was not included in npm releases due to .gitignore fallback.
- Added a `.npmignore` file to ensure only built files are published and all dev/config files are excluded.

## [0.3.4] - 2025-09-11

## [0.3.3] - 2025-09-11

## [0.3.2] - 2025-09-11

### Fixed

- Fixed a documentation error in the README.

## [0.3.1] - 2025-09-11

### Added

- Documentation : rewrite and improved clarity
- Documentation : Detailed tables for all predicate families, categories, enums, and operators
- Documentation : Section on the P alias and enum usage

### Fixed

- Minor bugfixes and improved test coverage

## [0.3.0] - 2025-09-10

### Added

- Major API stabilization: all predicate families and categories now exposed in a unified, consistent way
- Full enum support for all operators, with type safety and autocompletion
- Comprehensive test coverage for all predicate families and error branches
- Initial documentation and usage examples
- PredicType alias `P` introduced for concise usage

### Breaking Change

- The main API export was renamed from `Predicate` to `Predictype`. Update all imports and usages accordingly.

## [0.2.2] - 2025-09-08

### Fixed

- Missing compiled JavaScript files in npm package due to publishing without build step
- Package now includes proper dist/ folder with compiled TypeScript outputs

## [0.2.1] - 2025-09-08

### Fixed

- Export of P constant from main package entry point, allowing import { P } from 'predictype'

## [0.2.0] - 2025-09-08

### Added

- Short aliases for predicate families in the central API (e.g., `P.str` for `P.string`, `P.arr` for `P.array`)
- Comprehensive unit tests for all predicate families using Vitest
- Central `Predicate` object integrating all families with both full and abbreviated names
- JSDoc documentation for all predicates, enums, and index files
- Support for both string and RegExp patterns in pattern-based predicates

### Changed

- **BREAKING**: Harmonized predicate category names (e.g., `compare` → `comparison`)
- **BREAKING**: Standardized folder names for predicate families (all pluralized: `arrays`, `strings`, `numbers`, etc.)
- Updated all imports/exports to follow new folder naming conventions
- Harmonized JSDoc documentation across all predicates with TypeScript examples using `const` declarations
- Improved error handling with explicit throws for unknown operations
- Enhanced function anonymity detection for cross-platform compatibility

### Fixed

- Type errors and import issues in central integration and enums
- Function anonymity detection issues in test environments
- Compilation errors due to duplicate type definitions

## [0.1.0] - 2025-09-08

### Added

- Initial project structure
- Basic predicate framework for TypeScript
- Core predicate families: arrays, strings, numbers, booleans, dates, functions, maps, objects, promises, sets, symbols, bigints
- Enum-based operation definitions for type safety
- Base implementation of predicate functions
