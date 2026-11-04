/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        '**/index.ts', // Index files
        '**/*.config.ts', // Configuration files
        '**/*.d.ts', // Type definitions
        'dist/**', // Distribution files
        'sample/**', // Sample files
        'src/enums/**', // Enumerations
        'src/interfaces/**', // Interfaces
        'src/types/**', // Types
      ],
    },
  },
});
