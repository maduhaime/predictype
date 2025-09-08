import { describe, it, expect } from 'vitest';
import { dateCalendar } from './dateCalendar';

describe('dateCalendar', () => {
  it('should return true for is_today', () => {
    const today = new Date();
    expect(dateCalendar(today, 'is_today')).toBe(true);
  });

  it('should return true for is_first_day_of_month', () => {
    const janFirst = new Date('2025-01-01');
    expect(dateCalendar(janFirst, 'is_first_day_of_month')).toBe(true);
  });

  it('should return true for is_weekend', () => {
    // Find a Saturday
    const saturday = new Date('2025-01-04');
    expect(dateCalendar(saturday, 'is_weekend')).toBe(true);
  });

  it('should return false for is_weekday on a weekend', () => {
    const sunday = new Date('2025-01-05');
    expect(dateCalendar(sunday, 'is_weekday')).toBe(false);
  });
});
