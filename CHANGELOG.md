# Changelog

All notable changes to this project will be documented in this file.

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
