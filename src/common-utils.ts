/**
 * Check if value is undefined
 */
export function isUndefined(value: unknown): boolean {
  return typeof value === 'undefined';
}

/**
 * Check if value is null
 */
export function isNull(value: unknown): boolean {
  return value === null;
}

/**
 * Check if value is null or undefined
 */
export function isNullOrUndefined(value: unknown): boolean {
  return value === null || typeof value === 'undefined';
}

/**
 * Check if value has data (string, array, object, number)
 */
export function hasData(value: unknown): boolean {
  if (isNullOrUndefined(value)) return false;

  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number') return !isNaN(value);
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value as object).length > 0;

  return true;
}

/**
 * Format full date-time string with options
 */
export function formatDateTime(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  },
  locale: string = 'en-US'
): string {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) throw new Error('Invalid date provided');
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format date only (e.g., 2025-07-15)
 */
export function formatDateOnly(
  date: Date | string | number,
  locale: string = 'en-US'
): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return formatDateTime(date, options, locale);
}

/**
 * Format time only (e.g., 10:30 AM)
 */
export function formatTimeOnly(
  date: Date | string | number,
  locale: string = 'en-US'
): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return formatDateTime(date, options, locale);
}
