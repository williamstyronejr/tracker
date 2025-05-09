/**
 * Takes in a dates and returns the number of days in the current month
 * @param date The date to get the number of days in the month for
 */
export function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
