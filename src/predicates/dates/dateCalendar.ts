import { DateCalendarEnum, DateCalendarOper } from '../../enums/dates';

/**
 * Normalize a date to UTC (removes time, keeps only Y/M/D in UTC).
 *
 * @param date The date to normalize.
 * @returns The normalized UTC date (Y/M/D only).
 */
function toUTCDate(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

/**
 * Checks calendar-based properties of a date (UTC) using the specified operation.
 *
 * @param value The date to check.
 * @param oper The calendar operation to perform (e.g. 'is_today', 'is_weekend', 'is_past').
 * @returns True if the calendar check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const today = new Date();
 * const janFirst = new Date('2025-01-01');
 *
 * dateCalendar(today, 'is_today'); // true (if run today)
 * dateCalendar(janFirst, 'is_first_day_of_month'); // true
 */
export function dateCalendar(value: Date, oper: DateCalendarOper): boolean {
  const d = toUTCDate(value);
  const now = toUTCDate(new Date());

  const isWeekend = (date: Date) => {
    const day = date.getUTCDay();
    return day === 0 || day === 6;
  };
  const isWeekday = (date: Date) => !isWeekend(date);

  const operators: Record<DateCalendarEnum, (d: Date) => boolean> = {
    [DateCalendarEnum.IS_TODAY]: (d) => d.getTime() === now.getTime(),
    [DateCalendarEnum.IS_YESTERDAY]: (d) => d.getTime() === toUTCDate(new Date(now.getTime() - 86400000)).getTime(),
    [DateCalendarEnum.IS_TOMORROW]: (d) => d.getTime() === toUTCDate(new Date(now.getTime() + 86400000)).getTime(),
    [DateCalendarEnum.IS_WEEKEND]: isWeekend,
    [DateCalendarEnum.IS_WEEKDAY]: isWeekday,
    [DateCalendarEnum.IS_PAST]: (d) => d.getTime() < now.getTime(),
    [DateCalendarEnum.IS_FUTURE]: (d) => d.getTime() > now.getTime(),
    [DateCalendarEnum.IS_FIRST_DAY_OF_MONTH]: (d) => d.getUTCDate() === 1,
    [DateCalendarEnum.IS_LAST_DAY_OF_MONTH]: (d) => {
      const next = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0));
      return d.getUTCDate() === next.getUTCDate();
    },
  };

  const operEnum = typeof oper === 'string' ? (oper as DateCalendarEnum) : oper;
  const fn = operators[operEnum];

  if (!fn) throw new Error(`Unknown DateCalendar operation: ${oper}`);
  return fn(d);
}
