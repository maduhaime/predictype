import { describe, it, expect } from 'vitest';
import { dateCalendar } from './dateCalendar';

describe('dateCalendar', () => {
  it('should return true for is_today', () => {
    const today = new Date();
    expect(dateCalendar(today, 'is_today')).toBe(true);
  });

  it('should return true for is_yesterday', () => {
    const now = new Date();
    const yesterday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1));
    expect(dateCalendar(yesterday, 'is_yesterday')).toBe(true);
  });

  it('should return true for is_tomorrow', () => {
    const now = new Date();
    const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
    expect(dateCalendar(tomorrow, 'is_tomorrow')).toBe(true);
  });

  it('should return true for is_weekend', () => {
    // Saturday
    const saturday = new Date('2025-01-04');
    expect(dateCalendar(saturday, 'is_weekend')).toBe(true);
  });

  it('should return true for is_weekday', () => {
    // Monday
    const monday = new Date('2025-01-06');
    expect(dateCalendar(monday, 'is_weekday')).toBe(true);
  });

  it('should return true for is_past', () => {
    const past = new Date('2000-01-01');
    expect(dateCalendar(past, 'is_past')).toBe(true);
  });

  it('should return true for is_future', () => {
    const future = new Date('2100-01-01');
    expect(dateCalendar(future, 'is_future')).toBe(true);
  });

  it('should return true for is_first_day_of_month', () => {
    const janFirst = new Date('2025-01-01');
    expect(dateCalendar(janFirst, 'is_first_day_of_month')).toBe(true);
  });

  it('should return true for is_last_day_of_month', () => {
    const lastJan = new Date('2025-01-31');
    expect(dateCalendar(lastJan, 'is_last_day_of_month')).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const d = new Date();
    // @ts-expect-error
    expect(() => dateCalendar(d, 'invalid_operator')).toThrow('Unknown DateCalendar operation: invalid_operator');
  });
});
