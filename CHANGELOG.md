# Changelog

All notable changes to this project will be documented in this file.

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
