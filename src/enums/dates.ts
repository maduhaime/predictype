/**
 * Enums and types for date predicate operations.
 *
 * @module dates/enums
 */
export enum DateCalendarEnum {
  IS_FIRST_DAY_OF_MONTH = 'is_first_day_of_month',
  IS_FUTURE = 'is_future',
  IS_LAST_DAY_OF_MONTH = 'is_last_day_of_month',
  IS_PAST = 'is_past',
  IS_TODAY = 'is_today',
  IS_TOMORROW = 'is_tomorrow',
  IS_WEEKDAY = 'is_weekday',
  IS_WEEKEND = 'is_weekend',
  IS_YESTERDAY = 'is_yesterday',
}

export type DateCalendarOper = DateCalendarEnum | `${DateCalendarEnum}`;

export enum DateComparisonEnum {
  AFTER = 'after',
  AFTER_OR_EQUAL = 'after_or_equal',
  BEFORE = 'before',
  BEFORE_OR_EQUAL = 'before_or_equal',
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  SAME_DAY = 'same_day',
  SAME_MONTH = 'same_month',
  SAME_YEAR = 'same_year',
}

export type DateComparisonOper = DateComparisonEnum | `${DateComparisonEnum}`;

export enum DateRangeEnum {
  BETWEEN = 'between', // inclusif : min <= x <= max
  NOT_BETWEEN = 'not_between', // inclusif : x < min || x > max
  STRICT_BETWEEN = 'strict_between', // exclusif : min < x < max
  STRICT_NOT_BETWEEN = 'strict_not_between', // exclusif : x <= min || x >= max
}

export type DateRangeOper = DateRangeEnum | `${DateRangeEnum}`;

export enum DateStateEnum {
  IS_INVALID = 'is_invalid',
  IS_VALID = 'is_valid',
}

export type DateStateOper = DateStateEnum | `${DateStateEnum}`;
