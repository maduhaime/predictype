import { describe, it, expect } from 'vitest';
import { bigintRange } from './bigintRange';

describe('bigintRange', () => {
  it('should return true for between', () => {
    const value = 5n;
    const min = 1n;
    const max = 10n;
    expect(bigintRange(value, 'between', min, max)).toBe(true);
  });

  it('should return true for not_between', () => {
    const value = 15n;
    const min = 1n;
    const max = 10n;
    expect(bigintRange(value, 'not_between', min, max)).toBe(true);
  });
});
