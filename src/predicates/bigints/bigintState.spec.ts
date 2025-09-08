import { describe, it, expect } from 'vitest';
import { bigintState } from './bigintState';

describe('bigintState', () => {
  it('should return true for is_zero', () => {
    const value = 0n;
    expect(bigintState(value, 'is_zero')).toBe(true);
  });

  it('should return true for is_positive', () => {
    const value = 10n;
    expect(bigintState(value, 'is_positive')).toBe(true);
  });

  it('should return true for is_negative', () => {
    const value = -5n;
    expect(bigintState(value, 'is_negative')).toBe(true);
  });

  it('should return true for is_even', () => {
    const value = 8n;
    expect(bigintState(value, 'is_even')).toBe(true);
  });

  it('should return true for is_odd', () => {
    const value = 7n;
    expect(bigintState(value, 'is_odd')).toBe(true);
  });
});
