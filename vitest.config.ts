/// <reference types="vitest" />
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
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
