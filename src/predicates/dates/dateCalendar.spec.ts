import { describe, it, expect } from 'vitest';
import { dateCalendar } from './dateCalendar.js';

describe('dateCalendar', () => {
  const ref = new Date(Date.UTC(2025, 0, 15)); // 2025-01-15

  it('should return true for is_today', () => {
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 15)), 'is_today', ref)).toBe(true);
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 14)), 'is_today', ref)).toBe(false);
  });

  it('should return true for is_yesterday', () => {
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 14)), 'is_yesterday', ref)).toBe(true);
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 13)), 'is_yesterday', ref)).toBe(false);
  });

  it('should return true for is_tomorrow', () => {
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 16)), 'is_tomorrow', ref)).toBe(true);
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 17)), 'is_tomorrow', ref)).toBe(false);
  });

  it('should return true for is_weekend', () => {
    // Saturday
    const saturday = new Date('2025-01-04');
    expect(dateCalendar(saturday, 'is_weekend', ref)).toBe(true);
  });

  it('should return true for is_weekday', () => {
    // Monday
    const monday = new Date('2025-01-06');
    expect(dateCalendar(monday, 'is_weekday', ref)).toBe(true);
  });

  it('should return true for is_past', () => {
    const past = new Date('2000-01-01');
    expect(dateCalendar(past, 'is_past', ref)).toBe(true);
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 15)), 'is_past', ref)).toBe(false);
  });

  it('should return true for is_future', () => {
    const future = new Date('2100-01-01');
    expect(dateCalendar(future, 'is_future', ref)).toBe(true);
    expect(dateCalendar(new Date(Date.UTC(2025, 0, 15)), 'is_future', ref)).toBe(false);
  });

  it('should return true for is_first_day_of_month', () => {
    const janFirst = new Date('2025-01-01');
    expect(dateCalendar(janFirst, 'is_first_day_of_month', ref)).toBe(true);
  });

  it('should return true for is_last_day_of_month', () => {
    const lastJan = new Date('2025-01-31');
    expect(dateCalendar(lastJan, 'is_last_day_of_month', ref)).toBe(true);
  });

  it('should throw for unknown operator', () => {
    const d = new Date();
    // @ts-expect-error
    expect(() => dateCalendar(d, 'invalid_operator', ref)).toThrow('Unknown DateCalendar operation: invalid_operator');
  });
});
